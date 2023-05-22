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
import { I18nTranslation } from '@zeta/i18n';


export const administrativeVetoes_translations_en_US: I18nTranslation[] = [
    // AdministrativeVetoesComponent
    // html
    {
        key: 'fman.administrative-vetoes.header',
        value: 'Administrative Vetoes'
    },
    {
        key: 'fman.administrative-vetoes.icon-refresh',
        value: 'Refresh'
    },
    {
        key: 'fman.administrative-vetoes.icon-add',
        value: 'Create Administrative Veto'
    },
    {
        key: 'fman.administrative-vetoes.details-header',
        value: 'Administrative Vetoes Details'
    },
    {
        key: 'fman.administrative-vetoes.input-name',
        value: 'Name'
    },
    {
        key: 'fman.administrative-vetoes.textarea-documentation',
        value: 'Documentation'
    },
    {
        key: 'fman.administrative-vetoes.button-cancel',
        value: 'Cancel'
    },
    {
        key: 'fman.administrative-vetoes.button-save',
        value: 'Save'
    },

    // typescript
    {
        key: 'fman.administrative-vetoes.delete',
        value: 'Delete'
    },
    {
        key: 'fman.administrative-vetoes.duplicate',
        value: 'Duplicate'
    },
    {
        key: 'fman.administrative-vetoes.confirm-delete',
        value: 'Would you like to delete \'$0\'?'
    },

    // RestorableAdministrativeVetoComponent

    {
        key: 'fman.restorable-administrative-vetoes.unspecified-details-error',
        value: 'Can\'t request the details of selected Veto'
    },
    {
        key: 'fman.restorable-administrative-vetoes.unspecified-add-error',
        value: 'Can\'t create Veto'
    },
    {
        key: 'fman.restorable-administrative-vetoes.unspecified-save-error',
        value: 'Can\'t save selected Veto'
    },
    {
        key: 'fman.restorable-administrative-vetoes.name-must-be-unique-error',
        value: 'Name must be unique'
    },

    // RestorableRouteComponent
    {
        key: 'fman.restorable-route.warning',
        value: 'Warning'
    }
];
