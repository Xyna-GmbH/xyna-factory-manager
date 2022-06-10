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


export const capacities_translations_de_DE: I18nTranslation[] = [
    // CapacitiesComponent
    // html
    {
        key: 'fman.capacities.header',
        value: 'Kapazitäten'
    },
    {
        key: 'fman.capacities.icon-refresh',
        value: 'Aktualisieren'
    },
    {
        key: 'fman.capacities.icon-add',
        value: 'Kapazität hinzufügen'
    },
    {
        key: 'fman.capacities.details-header',
        value: 'Kapazität Details'
    },
    {
        key: 'fman.capacities.input-capacity',
        value: 'Kapazitätsname'
    },
    {
        key: 'fman.capacities.input-cardinality',
        value: 'Kardinalität'
    },
    {
        key: 'fman.capacities.checkbox-isactive',
        value: 'Ist aktiv'
    },
    {
        key: 'fman.capacities.button-cancel',
        value: 'Abbrechen'
    },
    {
        key: 'fman.capacities.button-save',
        value: 'Speichern'
    },
    // typescript
    {
        key: 'fman.capacities.delete',
        value: 'Löschen'
    },
    {
        key: 'fman.capacities.duplicate',
        value: 'Duplizieren'
    },

    // RestorableCapacitiesComponent
    {
        key: 'fman.restorable-capacities.unspecified-details-error',
        value: 'Die Details der ausgewählten Kapazität können nicht angefordert werden'
    },
    {
        key: 'fman.restorable-capacities.unspecified-add-error',
        value: 'Kapazität kann nicht hinzugefügt werden'
    },
    {
        key: 'fman.restorable-capacities.unspecified-save-error',
        value: 'Die ausgewählte Kapazität kann nicht gespeichert werden'
    },
    {
        key: 'fman.restorable-capacities.confirm-delete',
        value: '\'$0\' löschen?'
    },

    // RestorableRouteComponent
    {
        key: 'fman.restorable-route.warning',
        value: 'Warnung'
    },

    // CapacityUsageTemplateComponent
    {
        key: 'fman.capacities-usage-template.tooltip',
        value: 'Parallelitätskontrolle: Auswahl, wie viele der angegebenen Kardinalitäten(%value0%) die Order %value1% für jeden Aufruf verwendet'
    }
];
