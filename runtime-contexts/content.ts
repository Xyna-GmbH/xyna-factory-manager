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
import { XoObjectClassInterface } from '@zeta/api';
import { XoSplicingTableInfoClass, XoTableInfo } from '@zeta/xc';

import { XoApplicationElement } from './xo/xo-application-element.model';


class ContentTableInfo extends XoTableInfo {
    // protected afterDecode() {
    //     this.columns.data.forEach(column => {
    //         if (column.path === XoDependency.getAccessorMap().runtimeContext.state) {
    //             column.shrink = true;
    //         }
    //         if (column.path === XoDependency.getAccessorMap().runtimeContext.name) {
    //             column.pre = true;
    //         }
    //     });
    // }
}


export function createContentTableInfoClass(selectable: boolean): XoObjectClassInterface<XoTableInfo> {
    // const remappingTableInfoClass = XoRemappingTableInfoClass(
    //     ContentTableInfo,
    //     XoDependency,
    //     { src: t => t.runtimeContext.state, dst: t => t.runtimeContext.stateTemplates },
    //     { src: t => t.runtimeContext.name,  dst: t => t.nameTemplates }
    // );
    return (selectable)
        ? XoSplicingTableInfoClass(
            ContentTableInfo,
            XoApplicationElement,
            { src: t => t.typeTemplates, items: {disableFilter: true, disableSort: true, idx: 0, shrink: true} }
        )
        : ContentTableInfo;
}
