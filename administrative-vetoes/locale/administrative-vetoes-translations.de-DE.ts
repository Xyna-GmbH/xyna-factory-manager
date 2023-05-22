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


export const administrativeVetoes_translations_de_DE: I18nTranslation[] = [
    // AdministrativeVetoesComponent
    // html
    {
        key: 'fman.administrative-vetoes.header',
        value: 'Administrative Vetos'
    },
    {
        key: 'fman.administrative-vetoes.icon-refresh',
        value: 'Aktualisieren'
    },
    {
        key: 'fman.administrative-vetoes.icon-add',
        value: 'Administratives Veto erstellen'
    },
    {
        key: 'fman.administrative-vetoes.details-header',
        value: 'Administrative Vetos Details'
    },
    {
        key: 'fman.administrative-vetoes.input-name',
        value: 'Name'
    },
    {
        key: 'fman.administrative-vetoes.textarea-documentation',
        value: 'Dokumentation'
    },
    {
        key: 'fman.administrative-vetoes.button-cancel',
        value: 'Abbrechen'
    },
    {
        key: 'fman.administrative-vetoes.button-save',
        value: 'Speichern'
    },

    // typescript
    {
        key: 'fman.administrative-vetoes.delete',
        value: 'Löschen'
    },
    {
        key: 'fman.administrative-vetoes.duplicate',
        value: 'Duplizieren'
    },
    {
        key: 'fman.administrative-vetoes.confirm-delete',
        value: '\'$0\' löschen?'
    },

    // RestorableAdministrativeVetoComponent

    {
        key: 'fman.restorable-administrative-vetoes.unspecified-details-error',
        value: 'Die Details des ausgewählten Vetos können nicht angefordert werden'
    },
    {
        key: 'fman.restorable-administrative-vetoes.unspecified-add-error',
        value: 'Veto kann nicht hinzugefügt werden'
    },
    {
        key: 'fman.restorable-administrative-vetoes.unspecified-save-error',
        value: 'Ausgewähltes Veto kann nicht gespeichert werden'
    },
    {
        key: 'fman.restorable-administrative-vetoes.name-must-be-unique-error',
        value: 'Der Name muss eindeutig sein'
    },

    // RestorableRouteComponent
    {
        key: 'fman.restorable-route.warning',
        value: 'Warnung'
    }
];
