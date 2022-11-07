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
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '@zeta/api';
import { XcDefinitionStackMasterComponent } from '@zeta/xc';
import { filter, take } from 'rxjs';


@Component({
    templateUrl: './plugin.component.html',
    styleUrls: ['./plugin.component.scss']
})
export class PluginComponent extends XcDefinitionStackMasterComponent {

    constructor(
        api: ApiService,
        cdr: ChangeDetectorRef,
        route: ActivatedRoute
    ) {
        super(api, cdr, route);

        route.data.pipe(
            take(1),
            filter(data => data.title)
        ).subscribe(data => {
            api.startOrder(
                environment.zeta.xo.runtimeContext,
                data.fqn,
                data.input,
                null,
                StartOrderOptionsBuilder.defaultOptionsWithErrorMessage
            ).subscribe(response => {
                const formDefinition = response.output[0] as XoFormDefinition;
                const detailData = response.output.slice(1);

                // create stack item
                const item = new XcStackItem();
                item.setTemplate(new XcComponentTemplate(
                    XcDefinitionStackItemComponent,
                    <DefinitionStackItemComponentData>{ stackItem: item, definition: formDefinition, data: detailData }
                ));
                this.stackDataSource.add(item);
            });
        });
    }
}
