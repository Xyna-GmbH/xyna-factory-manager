/*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Copyright 2023 Xyna GmbH, Germany
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 */
import { ChangeDetectorRef, Component, InjectionToken, Injector } from '@angular/core';
import { FM_RTC } from '@fman/const';
import { ORDER_TYPES } from '@fman/trigger-and-filter/order-types';
import { XoFilterInstance } from '@fman/trigger-and-filter/xo/xo-filter-instance.model';
import { XoTriggerInstanceDetail } from '@fman/trigger-and-filter/xo/xo-trigger-instance-detail.model';
import { XoTriggerInstance } from '@fman/trigger-and-filter/xo/xo-trigger-instance.model';
import { ApiService, StartOrderOptionsBuilder } from '@zeta/api';

import { I18nService } from '@zeta/i18n';
import { XC_COMPONENT_DATA, XDSIconName, XcDialogService, XcDynamicComponent, XcLocalTableDataSource } from '@zeta/xc';
import { filter } from 'rxjs';

export interface TriggerInstanceDetailsData{
    triggerinstance: XoTriggerInstance;
    refresh: () => void;
}

@Component({
    templateUrl: './trigger-instance-detail.component.html',
    styleUrls: ['./trigger-instance-detail.component.scss']
})
export class TriggerInstanceDetailComponent extends XcDynamicComponent<TriggerInstanceDetailsData> {

    readonly XDSIconName = XDSIconName;

    protected getToken(): InjectionToken<string> {
        return XC_COMPONENT_DATA;
    }

    detail: XoTriggerInstanceDetail = new XoTriggerInstanceDetail();
    datasource: XcLocalTableDataSource<XoFilterInstance> = new XcLocalTableDataSource<XoFilterInstance>(this.i18nService);
    busy = false;

    constructor(injector: Injector, private readonly apiService: ApiService, private readonly i18nService: I18nService, private readonly dialogService: XcDialogService, private readonly cdr: ChangeDetectorRef) {
        super(injector);
        this.refresh();
    }

    private refresh() {
        this.busy = true;
        this.apiService.startOrder(FM_RTC, ORDER_TYPES.TRIGGER_INSTANCE_DETAIL, this.injectedData.triggerinstance, XoTriggerInstanceDetail, StartOrderOptionsBuilder.defaultOptionsWithErrorMessage)
            .subscribe({
                next: result => {
                    if (result && !result.errorMessage) {
                        this.detail = result.output[0] as XoTriggerInstanceDetail;
                        this.fillDatasource(this.detail.filterInstance.data);
                    } else {
                        this.dialogService.error(result.errorMessage);
                    }
                },
                complete: () => {
                    this.busy = false;
                    this.cdr.markForCheck();
                }
            });
    }

    enable() {
        this.busy = true;
        this.apiService.startOrder(FM_RTC, ORDER_TYPES.ENABLE_TRIGGER, this.injectedData.triggerinstance, null, StartOrderOptionsBuilder.defaultOptionsWithErrorMessage)
            .subscribe({
                next: result => {
                    if (result && !result.errorMessage) {
                        this.injectedData.refresh();
                    } else {
                        this.dialogService.error(result.errorMessage);
                    }
                },
                complete: () => this.busy = false
            });
    }

    disable() {
        this.busy = true;
        this.apiService.startOrder(FM_RTC, ORDER_TYPES.DISABLE_TRIGGER, this.injectedData.triggerinstance, null, StartOrderOptionsBuilder.defaultOptionsWithErrorMessage)
            .subscribe({
                next: result => {
                    if (result && !result.errorMessage) {
                        this.injectedData.refresh();
                    } else {
                        this.dialogService.error(result.errorMessage);
                    }
                },
                complete: () => this.busy = false
            });
    }

    undeploy() {
        this.dialogService.confirm('Undeploy', 'Do you really want to undeploy trigger.').afterDismiss()
            .pipe(filter(res => !!res)).subscribe({
                next: () => {
                    this.busy = true;
                    this.apiService.startOrder(FM_RTC, ORDER_TYPES.UNDEPLOY_TRIGGER, this.injectedData.triggerinstance, null, StartOrderOptionsBuilder.defaultOptionsWithErrorMessage)
                        .subscribe({
                            next: result => {
                                if (result && !result.errorMessage) {
                                    this.injectedData.refresh();
                                } else {
                                    this.dialogService.error(result.errorMessage);
                                }
                            },
                            complete: () => this.busy = false
                        });
                }
            });
    }

    private fillDatasource(data: XoFilterInstance[]) {
        this.datasource.localTableData = {
            columns: [
                {path : 'filter', name : 'Filter'},
                {path : 'instance', name : 'Instance'},
                {path : 'runtimeContext.label', name : 'RuntimeContext'}
            ],
            rows: data
        };
        this.datasource.refresh();
    }

    get triggerName(): string {
        return this.detail.trigger;
    }

    get triggerInstanceName(): string {
        return this.detail.triggerInstance;
    }

    get triggerDescription(): string {
        return this.detail.description;
    }

    get triggerRuntimeContext(): string {
        return this.detail.runtimeContext.label;
    }

    get triggerStartParameter(): string {
        return this.detail.startParameter;
    }
}
