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


export const deleteDuplicates_translations_de_DE: I18nTranslation[] = [
    {
        key: 'fman.delete-duplicates.delete-duplicates-title',
        value: 'Duplikate aus Arbeitsumgebung \'$0\' löschen?'
    },
    {
        key: 'fman.delete-duplicates.delete-duplicates-warning-message',
        value: 'Sollen alle Elemente aus dem Workspace \'$0\' gelöscht werden, die bereits in Abhängigkeiten enthalten sind?'
    },
    {
        key: 'fman.delete-duplicates.delete-duplicates-cancel',
        value: 'Abbrechen'
    },
    {
        key: 'fman.delete-duplicates.delete-duplicates-delete',
        value: 'Löschen'
    },
    {
        key: 'fman.delete-duplicates.delete-deletition-incomplete-title',
        value: 'Löschung Unvollständig'
    },
    {
        key: 'fman.delete-duplicates.delete-deletition-incomplete-message',
        value: 'Folgende Elemente konnten nicht gelöscht werden'
    }
];
