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
import { Component, Injector } from '@angular/core';

import { ApiService, StartOrderOptionsBuilder } from '@zeta/api';
import { I18nService } from '@zeta/i18n';
import { XcDialogComponent, XcDialogService } from '@zeta/xc';

import { FM_RTC } from '../../../const';
import { ORDER_TYPES } from '../../order-types';
import { XoFilterInstance } from '@fman/trigger-and-filter/xo/xo-filter-instance.model';
import { XoDeployFilterRequest } from '@fman/trigger-and-filter/xo/xo-deploy-filter-request.model';
import { FactoryService } from '@pmod/navigation/factory.service';
import { XoWorkspace } from '@fman/runtime-contexts/xo/xo-workspace.model';
import { XoRuntimeApplication } from '@fman/runtime-contexts/xo/xo-runtime-application.model';
import { XoFilter } from '@fman/trigger-and-filter/xo/xo-filter.model';



@Component({
    templateUrl: './deploy-filter-dialog.component.html',
    styleUrls: ['./deploy-filter-dialog.component.scss']
})
export class DeployFilterDialogComponent extends XcDialogComponent<XoFilterInstance, XoFilter> {

    instance: string;
    triggerInstance: string;
    parameter: string;
    documentation: string;
    optional: boolean;

    constructor(injector: Injector,
        private readonly apiService: ApiService,
        private readonly dialogService: XcDialogService,
        private readonly i18n: I18nService,
        public factoryService: FactoryService) {
        super(injector);
    }

    deploy() {
        const request: XoDeployFilterRequest = new XoDeployFilterRequest();
        request.filterName = this.injectedData.name;
        request.filterInstanceName = this.instance;
        request.triggerInstanceName = this.triggerInstance;
        request.configurationParameter = this.parameter;
        request.documentation = this.documentation;
        request.optional = this.optional;
        if (this.factoryService.runtimeContext.ws) {
            const workspace: XoWorkspace =  new XoWorkspace();
            workspace.name = this.factoryService.runtimeContext.ws.workspace;
            request.runtimeContext = workspace;
        } else if (this.factoryService.runtimeContext.av) {
            const application: XoRuntimeApplication =  new XoRuntimeApplication();
            application.name = this.factoryService.runtimeContext.av.application;
            application.version = this.factoryService.runtimeContext.av.version;
            request.runtimeContext = application;
        }

        this.apiService.startOrder(FM_RTC, ORDER_TYPES.DEPLOY_FILTER, request, null, StartOrderOptionsBuilder.defaultOptionsWithErrorMessage)
            .subscribe({
                next: result => {
                    if (result && !result.errorMessage) {
                        const res: XoFilterInstance = new XoFilterInstance();
                        res.filterInstance = this.instance;
                        res.filter = this.injectedData.name;
                        this.dismiss(res);
                    } else {
                        this.dialogService.error(result.errorMessage);
                    }
                }
            });
    }
}
