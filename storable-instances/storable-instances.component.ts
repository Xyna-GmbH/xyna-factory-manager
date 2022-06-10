/*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Copyright 2022 GIP SmartMercial GmbH, Germany
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
import { Component, OnInit } from '@angular/core';

import { ApiService, FullQualifiedName, RuntimeContext, RuntimeContextType, StartOrderResult, XoDescriber, XoObject, XoRuntimeContext, Xo, XoStructureMethod, XoWorkspace } from '@zeta/api';
import { XoXynaProperty, XoXynaPropertyKey } from '@zeta/auth/xo/xyna-property.model';
import { Comparable, isObject } from '@zeta/base';
import { I18nService } from '@zeta/i18n';
import { XcAutocompleteDataWrapper, XcDialogService, XcLocalTableDataSource, XcOptionItem, XcSelectionModel, XcStructureTreeDataSource, XcTableColumn } from '@zeta/xc';

import { concat, Observable, of, Subject } from 'rxjs/';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';

import { FM_RTC } from '../const';
import { FactoryManagerSettingsService } from '../misc/services/factory-manager-settings.service';
import { XYNA_PROPERTY_ISWP } from '../xyna-properties/restorable-xyna-properties.component';
import { storable_instances_translations_de_DE } from './locale/storable-instances-translations.de-DE';
import { storable_instances_translations_en_US } from './locale/storable-instances-translations.en-US';
import { StorableInstanceCreationComponent } from './modal/storable-instance-creation/storable-instance-creation.component';
import { XoComplexStorable } from './xo/xo-complex-storable.model';
import { XoDeleteParameter } from './xo/xo-deleteparameter.model';
import { XoFilterCondition } from './xo/xo-filtercondition.model';
import { XoQueryParameter } from './xo/xo-queryparamterer.model';
import { XoSelectionMask } from './xo/xo-selectionmask.model';
import { XoStorable } from './xo/xo-storable.model';
import { XoStoreParameter } from './xo/xo-storeparameter.model';


@Component({
    selector: 'storable-instances',
    templateUrl: './storable-instances.component.html',
    styleUrls: ['./storable-instances.component.scss']
})
export class StorableInstancesComponent implements OnInit {
    rtcDataWrapper: XcAutocompleteDataWrapper<XoRuntimeContext>;
    fqnDataWrapper: XcAutocompleteDataWrapper<FullQualifiedName>;

    selectedRTC: XoRuntimeContext;
    selectedFQN: FullQualifiedName;
    selectedRow: XoObject;
    selectedStorable: XoObject;

    localTableSource: XcLocalTableDataSource = new XcLocalTableDataSource<any>();
    structureTreeDataSource: XcStructureTreeDataSource;
    editSubject: Subject<void> = new Subject<void>();
    loadedStorables: XoObject[] = [];

    detailOpen = false;
    isLoadingFQNs = false;

    readonly NO_STORABLE_FOUND = 'No storable found...';
    readonly SELECT_STORABLE = 'Select a storable...';

    constructor(
        private readonly apiService: ApiService,
        private readonly i18nService: I18nService,
        private readonly dialogService: XcDialogService,
        private readonly settings: FactoryManagerSettingsService
    ) {
        this.i18nService.setTranslations(I18nService.DE_DE, storable_instances_translations_de_DE);
        this.i18nService.setTranslations(I18nService.EN_US, storable_instances_translations_en_US);

        this.localTableSource.selectionModel.selectionChange.subscribe((model: XcSelectionModel<Comparable>) => {
            this.selectedRow = this.canEditTable() ? (model.selection[0] as XoObject) : null;
            this.selectedStorable = this.loadedStorables[this.localTableSource.localTableData.rows.findIndex(row => row === this.selectedRow)];
            if (this.selectedRow) {
                this.detailOpen = true;
            }
        });

        this.rtcDataWrapper = new XcAutocompleteDataWrapper(
            () => this.selectedRTC,
            (value: XoRuntimeContext) => {
                this.selectedRTC = value;
                this.rtcDataWrapper.update();
                this.fqnDataWrapper.values = [];
                this.fqnDataWrapper.update();
                if (value) {
                    this.updateFQNDataWrapper();
                }
            },
            []
        );

        this.fqnDataWrapper = new XcAutocompleteDataWrapper(
            () => this.selectedFQN,
            (value: FullQualifiedName) => {
                this.selectedFQN = value;
                this.fqnDataWrapper.update();
                if (value) {
                    this.buildLocalTableSource();
                }
            },
            []
        );

        this.localTableSource.actionElements = [
            {
                class: 'delete-action-element',
                iconName: 'delete',
                tooltip: this.i18nService.translate('fman.storable-instances.delete'),
                onAction: this.deleteStorable.bind(this)
            }
        ];

        this.localTableSource.refreshOnFilterChange = this.settings.tableRefreshOnFilterChange;
        this.localTableSource.localTableData = {rows: [], columns: []};
    }

    ngOnInit() {
        this.apiService.getRuntimeContexts().subscribe(contexts => {
            this.rtcDataWrapper.values = [
                { name: '', value: null },
                ...contexts.map(context =>
                    (<XcOptionItem>{
                        name: context.toString(),
                        value: context
                    })
                )
            ];
            this.setDefaultRTC();
        });
    }

    /**
     * @description Sets the selected modeller rtc as rtc, fallback is the default rtc
     */
    private setDefaultRTC() {
        // Because you can only choose workspaces this can be used to find the XoRuntimeContext in the datawrapper
        const uniqueKey = `${RuntimeContextType.Workspace},${
            this.apiService.runtimeContext && this.apiService.runtimeContext.ws && this.apiService.runtimeContext.ws.workspace
                ? this.apiService.runtimeContext.ws.workspace
                : XoRuntimeContext.fromType('Workspace', RuntimeContext.defaultWorkspace.ws.workspace, -1).uniqueKey
        }`;
        this.selectedRTC = this.rtcDataWrapper.values.filter(r => !!r?.value).find(rtc => rtc?.value.uniqueKey === uniqueKey)?.value ?? XoWorkspace.fromName(RuntimeContext.defaultWorkspace.ws.workspace);
        this.rtcDataWrapper.update();
        this.fqnDataWrapper.values = [];
        this.fqnDataWrapper.update();
        this.updateFQNDataWrapper();
    }

    /**
     * @description Finds all storables and stores them in the fqnDataWrapper
     */
    private updateFQNDataWrapper() {
        this.isLoadingFQNs = true;
        this.apiService.getSubtypes(this.selectedRTC.toRuntimeContext(), [XoStorable]).get(XoStorable)
            .subscribe(structures => {
                this.fqnDataWrapper.values = structures
                    .filter(structure => !structure.typeAbstract)
                    .map(structure => <XcOptionItem<FullQualifiedName>>{
                        name: `${structure.typeFqn.path}.${structure.typeFqn.name}`,
                        value: structure.typeFqn
                    });
                this.isLoadingFQNs = false;
                this.fqnDataWrapper.update();
            });
    }

    /**
     * @description Builds table columns from the current rtc and fqn via the getStructure() function on the apiService
     *              and returns an observable of the table columns
     */
    private queryStorableColumns(): Observable<XcTableColumn[]> {
        const describer: XoDescriber = { rtc: this.selectedRTC.toRuntimeContext(), fqn: this.selectedFQN };
        return this.apiService
            .getStructure(this.selectedRTC.toRuntimeContext(), [describer]).get(describer)
            .pipe(
                map(structure =>
                    structure.children
                        // eliminate methods
                        .filter(child => !(child instanceof XoStructureMethod))
                        // checks, if the child has a complex type or a list of primitives
                        .map(c => ({
                            ...c,
                            complex: !!c.typeFqn.path || !!(c as any)._children
                        }))
                ),
                map(children =>
                    children.map(child => ({
                        name: child.label,
                        complex: child.complex,
                        path: child.complex ? `complexTemplate_${child.name}` : child.name
                    }))
                ),
                tap(columns =>
                    this.localTableSource.localTableData.columns = columns
                )
            );
    }

    /**
     * @description Returns the observable querying the rows for the localTableSource
     */
    private queryStorableRows(): Observable<StartOrderResult> {
        return this.apiService
            .startOrder(
                FM_RTC,
                XYNA_PROPERTY_ISWP.Details,
                XoXynaPropertyKey.withKey('zeta.table.limit')
            ).pipe(
                map(result => result.output[0] as XoXynaProperty),
                filter(xynaProperty => !!xynaProperty),
                switchMap(xynaProperty =>
                    this.apiService.startOrder(
                        this.selectedRTC.toRuntimeContext(),
                        'xnwh.persistence.Query',
                        [
                            new XoSelectionMask(undefined, `${this.selectedFQN.path}.${this.selectedFQN.name}`),
                            new XoFilterCondition(),
                            new XoQueryParameter(undefined, +(xynaProperty.value || xynaProperty.defaultValue))
                        ]
                    ).pipe(catchError(() =>
                        of(<StartOrderResult<Xo>>{orderId: 'error'})
                    ))
                ),
                tap(result => {
                    this.loadedStorables = result.output?.[0]?.data ?? [];
                    this.localTableSource.localTableData.rows = this.getTableRows();
                    this.localTableSource.refresh();
                })
            );
    }

    /**
     * @description Querys the database and builds the localTableSource
     */
    private buildLocalTableSource() {
        concat(
            this.queryStorableColumns(),
            this.queryStorableRows()
        ).subscribe();
    }

    /**
     * @description Builds rows from a XoArray. Mapps complex type columns to a XoComplexStorableTemplate.
     */
    private getTableRows(): any[] {
        const tableRows: any = [];
        this.loadedStorables.forEach((obj: XoObject) => {
            // Looks for complex types and maps its path to a template path (path => `complexTemplate_${path}`)
            for (const key of Object.keys(obj.data)) {
                if (isObject(obj.data[key]) || Array.isArray(obj.data[key])) {
                    (obj.data as XoComplexStorable)[`complexTemplate_${key}`] = XoComplexStorable.setTemplateData(obj.data[key]);
                }
            }
            tableRows.push(obj.data);
        });
        return tableRows;
    }

    /**
     * @description Deletes a storable and decycles its children if it contains some complex types
     */
    private deleteStorable(storableRow: any): void {
        const storable: XoObject = this.loadedStorables[this.localTableSource.localTableData.rows.findIndex(row => row === storableRow)];

        const tableHasComplexTypes = this.localTableSource.localTableData.columns.some((col: any) => col.complex);

        this.dialogService
            .confirm(this.i18nService.translate('fman.storable-instances.delete'), this.i18nService.translate('fman.storable-instances.delete-confirm-message'))
            .afterDismiss()
            .subscribe((isConfirmed: boolean) => {
                if (isConfirmed) {
                    if (tableHasComplexTypes) {
                        // Decycles the object so the apiService can build a JSON string
                        for (const key of Object.keys(storable.data)) {
                            if (typeof storable.data[key] === 'object') {
                                storable.data[key] = null;
                            }
                        }
                        this.apiService
                            .startOrder(this.selectedRTC.toRuntimeContext(), 'xnwh.persistence.Delete', [storable.proxy(), new XoDeleteParameter()])
                            .subscribe({
                                error: error => {
                                    console.error(error);
                                    this.dialogService.error(error);
                                },
                                complete: () => {
                                    this.refreshRows();
                                }
                            });
                    } else {
                        this.apiService
                            .startOrder(this.selectedRTC.toRuntimeContext(), 'xnwh.persistence.Delete', [storable, new XoDeleteParameter()])
                            .subscribe({
                                error: error => {
                                    console.error(error);
                                    this.dialogService.error(error);
                                },
                                complete: () => {
                                    this.refreshRows();
                                }
                            });
                    }
                }
            });
    }

    /**
     * @description Creates a storable based on the user input in a custom dialog
     */
    createStorable(): void {
        const structureTreeDataSource = new XcStructureTreeDataSource(this.apiService, this.i18nService, this.selectedRTC.toRuntimeContext(), [
            <XoDescriber>{ rtc: this.selectedRTC.toRuntimeContext(), fqn: this.selectedFQN }
        ]);
        structureTreeDataSource.refresh();
        this.dialogService
            .custom(StorableInstanceCreationComponent, {
                structureTreeDataSource,
                apiService: this.apiService,
                rtc: this.selectedRTC.toRuntimeContext(),
                storeParameter: new XoStoreParameter(),
                i18nService: this.i18nService
            })
            .afterDismiss()
            .subscribe((newInstance: boolean) => {
                if (newInstance) {
                    this.refreshRows();
                }
            });
    }

    canChooseFQN(): boolean {
        return this.selectedRTC && this.fqnDataWrapper.values.length > 0;
    }

    getFQNPlaceholder(): string {
        if (!this.fqnDataWrapper.values.length && this.selectedRTC && !this.isLoadingFQNs) {
            return this.NO_STORABLE_FOUND;
        }
        return this.SELECT_STORABLE;
    }

    /**
     * @description Refreshs rows of the local table
     */
    refreshRows(): void {
        this.queryStorableRows().subscribe(() => {
            this.selectedRow = null;
            this.detailOpen = false;
        });
        this.updateFQNDataWrapper();
    }

    canEditTable(): boolean {
        if (this.localTableSource) {
            return this.localTableSource.localTableData ? this.localTableSource.localTableData.columns.length > 0 : false;
        }
        return false;
    }

    getDescriber(): XoDescriber {
        if (this.selectedRTC && this.selectedFQN) {
            return <XoDescriber>{ rtc: this.selectedRTC.toRuntimeContext(), fqn: this.selectedFQN };
        }
        return null;
    }

    onDetailClose(): void {
        this.detailOpen = false;
    }
}
