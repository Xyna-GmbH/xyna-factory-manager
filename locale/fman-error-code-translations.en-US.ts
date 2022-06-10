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


export const fman_error_code_translations_en_US: I18nTranslation[] = [

    // cronlikeorders
    {
        key: 'EC-xfm.fman.cronlikeorders.create',
        value: 'Could not create \'cron-like order\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.cronlikeorders.delete',
        value: 'Could not delete \'cron-like order\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.cronlikeorders.load',
        value: 'Could not load \'cron-like order\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.cronlikeorders.loads',
        value: 'Could not load \'cron-like orders\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.cronlikeorders.update',
        value: 'Could not update \'cron-like order\'. Reason: {0}'
    },

    // ordertypes
    {
        key: 'EC-xfm.fman.ordertypes.create',
        value: 'Could not create \'order type\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.ordertypes.delete',
        value: 'Could not delete \'order type\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.ordertypes.load',
        value: 'Could not load \'order type\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.ordertypes.loads',
        value: 'Could not load \'order types\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.ordertypes.update',
        value: 'Could not update \'order type\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.ordertypes.emty',
        value: 'No order types found.'
    },
    {
        key: 'EC-xfm.fman.ordertypes.unexpectedError',
        value: 'Could not load \'order types\'.'
    },

    //  administrativevetoes
    {
        key: 'EC-xfm.fman.administrativevetoes.create',
        value: 'Could not create \'administrative veto\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.administrativevetoes.delete',
        value: 'Could not delete \'administrative veto\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.administrativevetoes.load',
        value: 'Could not load \'administrative veto\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.administrativevetoes.loads',
        value: 'Could not load \'administrative vetos\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.administrativevetoes.change',
        value: 'Could not change \'administrative veto\'. Reason: {0}'
    },

    {
        key: 'EC-xfm.fman.administrativevetoes.exists',
        value: 'Can not create. Veto already exists: {0}'
    },

    //    capacities
    {
        key: 'EC-xfm.fman.capacities.delete',
        value: 'Could not delete Capacity. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.capacities.load',
        value: 'Could not load Capacity. Reason: {0}'
    },

    {
        key: 'EC-xfm.fman.capacities.update',
        value: 'Could not update Capacity. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.capacities.create',
        value: 'Could not create Capacity. Reason: {0}'
    },

    //  deploymentitems
    {
        key: 'EC-xfm.fman.deploymentitems.delete',
        value: 'Could not delete \'deployment item\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.deploymentitems.load',
        value: 'Could not load \'deployment item\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.deploymentitems.loads',
        value: 'Could not load \'deployment items\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.deploymentitems.undeploy',
        value: 'Could not undeploy \'deployment item\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.deploymentitems.deploy',
        value: 'Could not deploy \'deployment item\'. Reason: {0}'
    },

    //  orderinputsources
    {
        key: 'EC-xfm.fman.orderinputsources.delete',
        value: 'Could not delete \'order input source\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.orderinputsources.generate',
        value: 'Could not generate \'order input source\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.orderinputsources.loadgenerating',
        value: 'Could not load \'generating order types\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.orderinputsources.load',
        value: 'Could not load \'order input source\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.orderinputsources.loads',
        value: 'Could not load \'order input sources\'. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.orderinputsources.create',
        value: 'Could not create the Order input source. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.orderinputsources.notunique',
        value: 'The Order input source already exist. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.orderinputsources.update',
        value: 'Could not update the Order input source. Reason: {0}'
    },

    {
        key: 'EC-xfm.fman.orderinputsources.starttask',
        value: 'Could not start task. Reason: {0}'
    },

    //  xynaproperties
    {
        key: 'EC-xfm.fman.xynaproperties.create',
        value: 'Could not create Property. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.xynaproperties.delete',
        value: 'Could not delete Property. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.xynaproperties.load',
        value: 'Could not load property. Reason: {0}'
    },
    {
        key: 'EC-xfm.fman.xynaproperties.update',
        value: 'Could not update Property. Reason: {0}'
    }
];
