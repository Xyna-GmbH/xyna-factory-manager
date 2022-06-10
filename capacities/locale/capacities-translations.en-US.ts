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


export const capacities_translations_en_US: I18nTranslation[] = [
    // CapacitiesComponent
    // html
    {
        key: 'fman.capacities.header',
        value: 'Capacities'
    },
    {
        key: 'fman.capacities.icon-refresh',
        value: 'Refresh'
    },
    {
        key: 'fman.capacities.icon-add',
        value: 'Add Capacity'
    },
    {
        key: 'fman.capacities.details-header',
        value: 'Capacity Details'
    },
    {
        key: 'fman.capacities.input-capacity',
        value: 'Capacity Name'
    },
    {
        key: 'fman.capacities.input-cardinality',
        value: 'Cardinality'
    },
    {
        key: 'fman.capacities.checkbox-isactive',
        value: 'Is Active'
    },
    {
        key: 'fman.capacities.button-cancel',
        value: 'Cancel'
    },
    {
        key: 'fman.capacities.button-save',
        value: 'Save'
    },
    // typescript
    {
        key: 'fman.capacities.delete',
        value: 'Delete'
    },
    {
        key: 'fman.capacities.duplicate',
        value: 'Duplicate'
    },

    // RestorableCapacitiesComponent
    {
        key: 'fman.restorable-capacities.unspecified-details-error',
        value: 'Can\'t request the details of selected Capacity'
    },
    {
        key: 'fman.restorable-capacities.unspecified-add-error',
        value: 'Can\'t create Capacity'
    },
    {
        key: 'fman.restorable-capacities.unspecified-save-error',
        value: 'Can\'t save selected Capacity'
    },
    {
        key: 'fman.restorable-capacities.confirm-delete',
        value: 'Would you like to delete \'$0\'?'
    },

    // RestorableRouteComponent
    {
        key: 'fman.restorable-route.warning',
        value: 'Warning'
    },

    // CapacityUsageTemplateComponent
    {
        key: 'fman.capacities-usage-template.tooltip',
        value: 'Concurrency control: Selection of how many of the specified cardinalities(%value0%) the order %value1% uses for each call.'
    }
];
