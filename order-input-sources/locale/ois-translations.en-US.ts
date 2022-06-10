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


export const order_input_sources_translations_en_US: I18nTranslation[] = [
    // OrderInputSourcesComponent
    // html
    {
        key: 'fman.ois.header',
        value: 'Order Input Sources'
    },
    {
        key: 'fman.ois.icon-refresh',
        value: 'Refresh'
    },
    {
        key: 'fman.ois.icon-add',
        value: 'Add Order Input Source'
    },
    {
        key: 'fman.ois.details-header',
        value: 'Order Input Source Details'
    },

    // typescript
    {
        key: 'fman.ois.delete',
        value: 'Delete'
    },
    {
        key: 'fman.ois.duplicate',
        value: 'Duplicate'
    },
    {
        key: 'fman.ois.generating-error-message',
        value: 'Input cannot be generated. Order Input Source is invalid or there are unsaved changes.'
    },

    // OrderInputSourceDetailsComponent
    // html
    {
        key: 'fman.ois.order-input-source-details.details-header',
        value: 'Order Input Source Details'
    },
    {
        key: 'fman.ois.order-input-source-details.name-input',
        value: 'Name'
    },
    {
        key: 'fman.ois.order-input-source-details.label-workspace-application',
        value: 'Workspace / Application'
    },
    {
        key: 'fman.ois.order-input-source-details.placeholder-select',
        value: 'Auswählen...'
    },
    {
        key: 'fman.ois.order-input-source-details.label-order-type',
        value: 'Order Type'
    },
    {
        key: 'fman.ois.order-input-source-details.value-no-order-types-found',
        value: 'No Order Types found'
    },
    {
        key: 'fman.ois.order-input-source-details.label-source-type',
        value: 'Source Type'
    },
    {
        key: 'fman.ois.order-input-source-details.custom-fields',
        value: 'Custom Fields'
    },
    {
        key: 'fman.ois.order-input-source-details.custom-fields1',
        value: 'Custom Field 1'
    },
    {
        key: 'fman.ois.order-input-source-details.custom-fields2',
        value: 'Custom Field 2'
    },
    {
        key: 'fman.ois.order-input-source-details.custom-fields3',
        value: 'Custom Field 3'
    },
    {
        key: 'fman.ois.order-input-source-details.custom-fields4',
        value: 'Custom Field 4'
    },
    {
        key: 'fman.ois.order-input-source-details.label-priority',
        value: 'Priority'
    },
    {
        key: 'fman.ois.order-input-source-details.label-monitoring-level',
        value: 'Monitoring Level'
    },
    {
        key: 'fman.ois.order-input-source-details.generating-order-type',
        value: 'Generating Order Type'
    },
    {
        key: 'fman.ois.order-input-source-details.label-input-generator',
        value: 'Input Generator'
    },
    {
        key: 'fman.ois.order-input-source-details.label-test-case-id',
        value: 'Test Case ID'
    },
    {
        key: 'fman.ois.order-input-source-details.label-test-case-name',
        value: 'Test Case Name'
    },
    {
        key: 'fman.ois.order-input-source-details.textarea-documentation',
        value: 'Documentation'
    },
    {
        key: 'fman.ois.order-input-source-details.frequency-controlled-task',
        value: 'Frequency-Controlled Task'
    },
    {
        key: 'fman.ois.order-input-source-details.label-name',
        value: 'Name'
    },
    {
        key: 'fman.ois.order-input-source-details.label-number-of-orders',
        value: 'Number of orders'
    },
    {
        key: 'fman.ois.order-input-source-details.label-type',
        value: 'Type'
    },
    {
        key: 'fman.ois.order-input-source-details.label-create-inputs-once',
        value: 'Create Inputs once'
    },
    {
        key: 'fman.ois.order-input-source-details.label-data-point-count',
        value: 'Data point count'
    },
    {
        key: 'fman.ois.order-input-source-details.label-data-point-distance',
        value: 'Data point distance'
    },
    {
        key: 'fman.ois.order-input-source-details.label-delayed-start',
        value: 'Delayed start'
    },
    {
        key: 'fman.ois.order-input-source-details.button-start-task',
        value: 'Start Task'
    },
    {
        key: 'fman.ois.order-input-source-details.span-task-id',
        value: 'Task ID'
    },
    {
        key: 'fman.ois.order-input-source-details.button-show-task',
        value: 'Show Task'
    },
    {
        key: 'fman.ois.order-input-source-details.button-cancel',
        value: 'Cancel'
    },
    {
        key: 'fman.ois.order-input-source-details.button-save',
        value: 'Save'
    },

    // RestorableOrderInputSourcesComponent
    {
        key: 'fman.ois.unspecified-details-error',
        value: 'Can\'t request the details of selected Order Input Source'
    },
    {
        key: 'fman.ois.unspecified-add-error',
        value: 'Can\'t create Order Input Source'
    },
    {
        key: 'fman.ois.unspecified-save-error',
        value: 'Can\'t save selected Order Input Source'
    },
    {
        key: 'fman.ois.confirm-delete',
        value: 'Would you like to delete \'$0\'?'
    },
    {
        key: 'fman.ois.unspecified-get-runtime-contexts-error',
        value: 'Was unable to receive Workspace/Application'
    },
    {
        key: 'fman.ois.get-generating-order-types-error',
        value: 'Was unable to receive generating order types'
    },
    {
        key: 'fman.ois.unspecified-get-order-types-error',
        value: 'Was unable to receive order types'
    },
    {
        key: 'fman.ois.unspecified-start-frequency-controlled-task-error',
        value: 'Was unable to start task'
    },
    {
        key: 'fman.ois.get-order-types-empty-list-error-message',
        value: 'No order types found in $0'
    },
    {
        key: 'fman.ois.get-generating-order-types-empty-list-error-message',
        value: 'No generating order types found in $0'
    },

    // InputParameterComponent
    {
        key: 'fman.ois.order-input-source-details.input-parameter.header',
        value: 'Input Parameters'
    },
    {
        key: 'fman.ois.order-input-source-details.input-parameter.no-input-parameters',
        value: 'No Input Parameters'
    },

    // GenerateInputComponent
    {
        key: 'fman.ois.order-input-source-details.generate-input.generate-input',
        value: 'Generate Input'
    },
    {
        key: 'fman.ois.order-input-source-details.generate-input.no-input-parameter',
        value: 'No Input Parameter'
    },
    {
        key: 'fman.ois.order-input-source-details.generate-input.button-start-order',
        value: 'Start Order'
    },
    {
        key: 'fman.ois.order-input-source-details.generate-input.button-show-order',
        value: 'Show Order'
    },

    // RestorableRouteComponent
    {
        key: 'fman.restorable-route.warning',
        value: 'Warning'
    }
];
