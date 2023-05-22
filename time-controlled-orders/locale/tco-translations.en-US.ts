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


export const tco_translations_en_US: I18nTranslation[] = [
    // StorableInstancesComponent
    // html
    {
        key: 'fman.tco.header',
        value: 'Time-Controlled Orders'
    },
    {
        key: 'fman.tco.label-show-archived-tcos',
        value: 'Show archived TCOs'
    },
    {
        key: 'fman.tco.tooltip-refresh',
        value: 'Refresh'
    },
    {
        key: 'fman.tco.tooltip-add',
        value: 'Create Time-Controlled Order'
    },
    {
        key: 'fman.tco.header-details',
        value: 'Time-Controlled Order Details'
    },
    {
        key: 'fman.tco.button-cancel',
        value: 'Cancel'
    },
    {
        key: 'fman.tco.button-cannot-change-archived-order',
        value: 'Cannot change archived order'
    },
    {
        key: 'fman.tco.button-save',
        value: 'Save'
    },

    // typescript
    {
        key: 'fman.tco.planning',
        value: 'Planning'
    },
    {
        key: 'fman.tco.waiting',
        value: 'Waiting'
    },
    {
        key: 'fman.tco.running',
        value: 'Running'
    },
    {
        key: 'fman.tco.disabled',
        value: 'Disabled'
    },
    {
        key: 'fman.tco.cancelled',
        value: 'Cancelled'
    },
    {
        key: 'fman.tco.failed',
        value: 'Failed'
    },
    {
        key: 'fman.tco.finished',
        value: 'Finished'
    },
    {
        key: 'fman.tco.kill',
        value: 'Löschen'
    },
    {
        key: 'fman.tco.duplicate-tco',
        value: 'Duplicate'
    },
    {
        key: 'fman.tco.warning',
        value: 'Warning'
    },
    {
        key: 'fman.tco.confirm-delete',
        value: 'Would you like to kill \'$0\'?'
    },

    // TimeControlledOrderTableEntryTemplateComponent
    {
        key: 'fman.tco.tooltip-archived',
        value: 'Archived'
    },

    // TcoDetailSectionComponent
    // html
    {
        key: 'fman.tco.detail-section.label-name',
        value: 'Name'
    },
    {
        key: 'fman.tco.detail-section.label-is-active',
        value: 'Is Active'
    },
    {
        key: 'fman.tco.detail-section.header-query-storable-for-input',
        value: 'Query Storable for Input'
    },
    {
        key: 'fman.tco.detail-section.input-query-filter',
        value: 'Query Filter'
    },
    {
        key: 'fman.tco.detail-section.input-sorting',
        value: 'Sorting'
    },
    {
        key: 'fman.tco.detail-section.planning-horizon',
        value: 'Planning Horizon'
    },

    // OrderTypeFormComponent
    // html
    {
        key: 'fman.tco.detail-section.order-type-form.header',
        value: 'Order Type'
    },
    {
        key: 'fman.tco.detail-section.order-type-form.placeholder-select',
        value: 'Select...'
    },
    {
        key: 'fman.tco.detail-section.order-type-form.label-workspace-application',
        value: 'Workspace / Application'
    },
    {
        key: 'fman.tco.detail-section.order-type-form.master-workflow-info-text',
        value: 'Make sure that the master workflow is accessible in the selected Workspace/Application.'
    },

    // StorableInputParameterComponent
    // html
    {
        key: 'fman.tco.detail-section.storable-input-parameter.header',
        value: 'Input Parameters'
    },
    {
        key: 'fman.tco.detail-section.storable-input-parameter.no-input-parameters',
        value: 'No Input Parameters'
    },
    {
        key: 'fman.tco.detail-section.storable-input-parameter.label-query',
        value: 'Query'
    },

    // ExecutionTimeComponent
    // html
    {
        key: 'fman.tco.detail-section.execution-time.header',
        value: 'Execution Time'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-time-zone',
        value: 'Time Zone'
    },
    {
        key: 'fman.tco.detail-section.execution-time.placeholder-select',
        value: 'Select...'
    },
    {
        key: 'fman.tco.detail-section.execution-time.start-time',
        value: 'Start Time'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-year',
        value: 'Year'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-month',
        value: 'Month'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-day',
        value: 'Day'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-hour',
        value: 'Hour'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-minutes',
        value: 'Minutes'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-seconds',
        value: 'Seconds'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-milliseconds',
        value: 'Milliseconds'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-execution-type',
        value: 'Execution type'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-interval',
        value: 'Interval'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-every-x-milliseconds',
        value: 'Every X milliseconds'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-every-x-seconds',
        value: 'Every X seconds'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-every-x-minutes',
        value: 'Every X minutes'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-every-x-hours',
        value: 'Every X hours'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-every-x-days',
        value: 'Every X days'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-every-x-months',
        value: 'Every X months'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-every-x-years',
        value: 'Every X years'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-on',
        value: 'On'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-by',
        value: 'By'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-at',
        value: 'At'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-at-day-x-of-the-month',
        value: 'At day X of the month'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-position-in-month',
        value: 'Position in month'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-at-which-weekday',
        value: 'At which Weekday'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-position-of-the-weekday',
        value: 'Position of the Weekday'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-weekday',
        value: 'Weekday'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-window-length',
        value: 'Window length'
    },
    {
        key: 'fman.tco.detail-section.execution-time.end-time',
        value: 'End time'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-no-end-time',
        value: 'No end time'
    },

    // DateSelectorComponent
    // html
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.label-time-zone',
        value: 'Time Zone'
    },
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.label-start-time',
        value: 'Start Time'
    },
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.placeholder-select',
        value: 'Select...'
    },
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.label-year',
        value: 'Year'
    },
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.label-month',
        value: 'Month'
    },
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.label-day',
        value: 'Day'
    },
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.label-hour',
        value: 'Hour'
    },
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.label-minutes',
        value: 'Minutes'
    },
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.label-seconds',
        value: 'Seconds'
    },
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.label-milliseconds',
        value: 'Milliseconds'
    },

    // typescript
    {
        key: 'fman.date-selector.error-timezone',
        value: 'Unable to retrieve time zones!'
    },

    // TcoExecutionRestrictionComponent
    // html
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.header',
        value: 'Execution Restriction'
    },
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.label-maximum-xecutions',
        value: 'Maximum executions'
    },
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.label-execution-interval',
        value: 'Execution interval'
    },
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.label-scheduling-timeout',
        value: 'Scheduling timeout'
    },
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.label-execution-timeout',
        value: 'Execution timeout'
    },
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.label-treat-timeouts-as-error',
        value: 'Treat timeouts as error'
    },
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.label-behavior-on-error',
        value: 'Behavior on error'
    },
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.placeholder-select',
        value: 'Select...'
    },
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.not-supported',
        value: 'Not supported by Xyna, yet.'
    },

    // typescript
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.tooltip-timeout',
        value: 'It might have happened that this value was set during creation but cannot be displayed at the moment.'
    },

    // CustomInformationFormComponent
    // html
    {
        key: 'fman.tco.detail-section.custom-information-form.header',
        value: 'Custom Information'
    },
    {
        key: 'fman.tco.detail-section.custom-information-form.label-custom-field-1',
        value: 'Custom Field 1'
    },
    {
        key: 'fman.tco.detail-section.custom-information-form.label-custom-field-2',
        value: 'Custom Field 2'
    },
    {
        key: 'fman.tco.detail-section.custom-information-form.label-custom-field-3',
        value: 'Custom Field 3'
    },
    {
        key: 'fman.tco.detail-section.custom-information-form.label-custom-field-4',
        value: 'Custom Field 4'
    }
];
