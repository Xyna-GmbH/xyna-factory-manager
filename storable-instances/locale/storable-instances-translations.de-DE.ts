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


export const storable_instances_translations_de_DE: I18nTranslation[] = [
    // StorableInstancesComponent
    // html
    {
        key: 'fman.storable-instances.header',
        value: 'Storable Instanzen'
    },
    {
        key: 'fman.storable-instances.runtime-context-placeholder',
        value: 'Arbeitsumgebung/Anwendung auswählen...'
    },
    {
        key: 'fman.storable-instances.storable-selection-placeholder',
        value: 'Storable auswählen...'
    },
    {
        key: 'fman.storable-instances.no-storables-found-message',
        value: 'keine Storables vorhanden'
    },
    {
        key: 'fman.storable-instances.query-storable-error',
        value: 'Beim Laden der Storables sind Probleme aufgetreten:\n\n$0'
    },
    {
        key: 'fman.storable-instances.icon-refresh',
        value: 'Aktualisieren'
    },
    {
        key: 'fman.storable-instances.icon-add',
        value: 'Storable hinzufügen'
    },
    {
        key: 'fman.storable-instances.details-header',
        value: 'Storable Instances Details'
    },
    {
        key: 'fman.storable-instances.button-cancel',
        value: 'Abbrechen'
    },
    {
        key: 'fman.storable-instances.button-save',
        value: 'Speichern'
    },
    // typescript
    {
        key: 'fman.storable-instances.delete',
        value: 'Löschen'
    },
    {
        key: 'fman.storable-instances.delete-confirm-message',
        value: 'Ausgewählte speicherbare Instanz wirklich löschen?'
    },

    // StorableInstanceDetailComponent
    // typescript
    {
        key: 'fman.storable-instances.storable-instances-details.error-message',
        value: 'Storable konnte nicht aktualisiert werden'
    },

    // XoComplexStorableTemplateComponent
    {
        key: 'fman.storable-instances.complex-datatypes',
        value: 'Komplexe Datentypen ($0)'
    },
    {
        key: 'fman.storable-instances.complex-datatype',
        value: 'Komplexer Datentyp'
    }
];
