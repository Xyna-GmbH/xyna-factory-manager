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
import { I18nTranslation } from '@zeta/i18n';


export const storable_instances_translations_en_US: I18nTranslation[] = [
    // StorableInstancesComponent
    // html
    {
        key: 'fman.storable-instances.header',
        value: 'Storable Instances'
    },
    {
        key: 'fman.storable-instances.runtime-context-placeholder',
        value: 'Select Workspace/Application...'
    },
    {
        key: 'fman.storable-instances.storable-selection-placeholder',
        value: 'Select Storable...'
    },
    {
        key: 'fman.storable-instances.no-storables-found-message',
        value: 'No Storables found'
    },
    {
        key: 'fman.storable-instances.query-storable-error',
        value: 'There have been problems while querying for Storables:\n\n$0'
    },
    {
        key: 'fman.storable-instances.icon-refresh',
        value: 'Refresh'
    },
    {
        key: 'fman.storable-instances.icon-add',
        value: 'Add Storable'
    },
    {
        key: 'fman.storable-instances.details-header',
        value: 'Storable Instances Details'
    },
    {
        key: 'fman.storable-instances.button-cancel',
        value: 'Cancel'
    },
    {
        key: 'fman.storable-instances.button-save',
        value: 'Save'
    },
    // typescript
    {
        key: 'fman.storable-instances.delete',
        value: 'Delete'
    },
    {
        key: 'fman.storable-instances.delete-confirm-message',
        value: 'Really delete selected Storable Instance?'
    },

    // StorableInstanceDetailComponent
    // typescript
    {
        key: 'fman.storable-instances.storable-instances-details.error-message',
        value: 'Couldn\'t update Storable'
    },

    // XoComplexStorableTemplateComponent
    {
        key: 'fman.storable-instances.complex-datatypes',
        value: 'Complex Datatypes ($0)'
    },
    {
        key: 'fman.storable-instances.complex-datatype',
        value: 'Complex Datatype'
    }
];
