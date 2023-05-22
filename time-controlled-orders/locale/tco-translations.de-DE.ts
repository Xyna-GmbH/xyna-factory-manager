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


export const tco_translations_de_DE: I18nTranslation[] = [
    // StorableInstancesComponent
    // html
    {
        key: 'fman.tco.header',
        value: 'Time-Controlled Orders'
    },
    {
        key: 'fman.tco.label-show-archived-tcos',
        value: 'Archivierte TCOs anzeigen'
    },
    {
        key: 'fman.tco.tooltip-refresh',
        value: 'Aktualisieren'
    },
    {
        key: 'fman.tco.tooltip-add',
        value: 'Time-Controlled Order erstellen'
    },
    {
        key: 'fman.tco.header-details',
        value: 'Time-Controlled Order Details'
    },
    {
        key: 'fman.tco.button-cancel',
        value: 'Abbrechen'
    },
    {
        key: 'fman.tco.button-cannot-change-archived-order',
        value: 'Archivierte Aufträge können nicht geändert werden'
    },
    {
        key: 'fman.tco.button-save',
        value: 'Speichern'
    },

    // typescript
    {
        key: 'fman.tco.planning',
        value: 'Planung'
    },
    {
        key: 'fman.tco.waiting',
        value: 'Warten'
    },
    {
        key: 'fman.tco.running',
        value: 'Am laufen'
    },
    {
        key: 'fman.tco.disabled',
        value: 'Deaktiviert'
    },
    {
        key: 'fman.tco.cancelled',
        value: 'Abgebrochen'
    },
    {
        key: 'fman.tco.failed',
        value: 'Gescheitert'
    },
    {
        key: 'fman.tco.finished',
        value: 'Fertig'
    },
    {
        key: 'fman.tco.kill',
        value: 'Delete'
    },
    {
        key: 'fman.tco.duplicate-tco',
        value: 'Duplizieren'
    },
    {
        key: 'fman.tco.warning',
        value: 'Warnung'
    },
    {
        key: 'fman.tco.confirm-delete',
        value: '\'$0\' löschen?'
    },

    // TimeControlledOrderTableEntryTemplateComponent
    {
        key: 'fman.tco.tooltip-archived',
        value: 'Archiviert'
    },

    // TcoDetailSectionComponent
    // html
    {
        key: 'fman.tco.detail-section.label-name',
        value: 'Name'
    },
    {
        key: 'fman.tco.detail-section.label-is-active',
        value: 'Ist aktiv'
    },
    {
        key: 'fman.tco.detail-section.header-query-storable-for-input',
        value: 'Abfrage für Eingabe speicherbar'
    },
    {
        key: 'fman.tco.detail-section.input-query-filter',
        value: 'Abfragefilter'
    },
    {
        key: 'fman.tco.detail-section.input-sorting',
        value: 'Sortierung'
    },
    {
        key: 'fman.tco.detail-section.planning-horizon',
        value: 'Planungshorizont'
    },

    // OrderTypeFormComponent
    // html
    {
        key: 'fman.tco.detail-section.order-type-form.header',
        value: 'Auftragstyp'
    },
    {
        key: 'fman.tco.detail-section.order-type-form.placeholder-select',
        value: 'Auswählen...'
    },
    {
        key: 'fman.tco.detail-section.order-type-form.label-workspace-application',
        value: 'Arbeitsumgebung/Anwendung'
    },
    {
        key: 'fman.tco.detail-section.order-type-form.master-workflow-info-text',
        value: 'Der Master Workflow muss aus der ausgewälten Arbeitsumgebung/Anwendung erreichbar sein.'
    },

    // StorableInputParameterComponent
    // html
    {
        key: 'fman.tco.detail-section.storable-input-parameter.header',
        value: 'Eingabeparameter'
    },
    {
        key: 'fman.tco.detail-section.storable-input-parameter.no-input-parameters',
        value: 'Keine Eingabeparameter'
    },
    {
        key: 'fman.tco.detail-section.storable-input-parameter.label-query',
        value: 'Abfrage'
    },

    // ExecutionTimeComponent
    // html
    {
        key: 'fman.tco.detail-section.execution-time.header',
        value: 'Ausführungszeit'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-time-zone',
        value: 'Zeitzone'
    },
    {
        key: 'fman.tco.detail-section.execution-time.placeholder-select',
        value: 'Auswählen...'
    },
    {
        key: 'fman.tco.detail-section.execution-time.start-time',
        value: 'Startzeit'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-year',
        value: 'Jahr'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-month',
        value: 'Monat'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-day',
        value: 'Tag'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-hour',
        value: 'Stunde'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-minutes',
        value: 'Minute'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-seconds',
        value: 'Sekunde'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-milliseconds',
        value: 'Millisekunde'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-execution-type',
        value: 'Ausführungsart'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-interval',
        value: 'Intervall'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-every-x-milliseconds',
        value: 'Alle X Millisekunden'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-every-x-seconds',
        value: 'Alle X Sekunden'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-every-x-minutes',
        value: 'Alle X Minuten'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-every-x-hours',
        value: 'Alle X Stunden'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-every-x-days',
        value: 'Alle X Tage'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-every-x-months',
        value: 'Alle X Monate'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-every-x-years',
        value: 'Alle X Jahre'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-on',
        value: 'Am'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-by',
        value: 'Bei'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-at',
        value: 'Am'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-at-day-x-of-the-month',
        value: 'Am Tag X des Monats'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-position-in-month',
        value: 'Position im Monat'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-at-which-weekday',
        value: 'An welchem Wochentag'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-position-of-the-weekday',
        value: 'Position des Wochentags'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-weekday',
        value: 'Wochentag'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-month',
        value: 'Monate'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-window-length',
        value: 'Fensterlänge'
    },
    {
        key: 'fman.tco.detail-section.execution-time.end-time',
        value: 'Endzeit'
    },
    {
        key: 'fman.tco.detail-section.execution-time.label-no-end-time',
        value: 'Keine Endzeit'
    },


    // DateSelectorComponent
    // html
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.label-time-zone',
        value: 'Zeitzone'
    },
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.label-start-time',
        value: 'Startzeit'
    },
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.placeholder-select',
        value: 'Auswählen...'
    },
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.label-year',
        value: 'Jahre'
    },
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.label-month',
        value: 'Monate'
    },
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.label-day',
        value: 'Tage'
    },
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.label-hour',
        value: 'Stunden'
    },
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.label-minutes',
        value: 'Minuten'
    },
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.label-seconds',
        value: 'Sekunden'
    },
    {
        key: 'fman.tco.detail-section.execution-time.date-selector.label-milliseconds',
        value: 'Millisekunden'
    },

    // typescript
    {
        key: 'fman.date-selector.error-timezone',
        value: 'Zeitzonen können nicht abgerufen werden!'
    },

    // TcoExecutionRestrictionComponent
    // html
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.header',
        value: 'Ausführungsbeschränkung'
    },
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.label-maximum-xecutions',
        value: 'Maximale Ausführungen'
    },
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.label-execution-interval',
        value: 'Ausführungsintervall'
    },
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.label-scheduling-timeout',
        value: 'Planungszeitlimit'
    },
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.label-execution-timeout',
        value: 'Ausführungszeitlimit'
    },
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.label-treat-timeouts-as-error',
        value: 'Zeitüberschreitungen als Fehler behandeln'
    },
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.label-behavior-on-error',
        value: 'Verhalten bei Fehler'
    },
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.placeholder-select',
        value: 'Auswählen...'
    },
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.not-supported',
        value: '"Noch nicht von Xyna unterstützt."'
    },

    // typescript
    {
        key: 'fman.tco.detail-section.tco-execution-restriction.tooltip-timeout',
        value: 'Es kann vorkommen, dass dieser Wert während der Erstellung festgelegt wurde, aber momentan nicht angezeigt werden kann.'
    },

    // CustomInformationFormComponent
    // html
    {
        key: 'fman.tco.detail-section.custom-information-form.header',
        value: 'Benutzerdefinierte Informationen'
    },
    {
        key: 'fman.tco.detail-section.custom-information-form.label-custom-field-1',
        value: 'Benutzerdefiniertes Feld 1'
    },
    {
        key: 'fman.tco.detail-section.custom-information-form.label-custom-field-2',
        value: 'Benutzerdefiniertes Feld 2'
    },
    {
        key: 'fman.tco.detail-section.custom-information-form.label-custom-field-3',
        value: 'Benutzerdefiniertes Feld 3'
    },
    {
        key: 'fman.tco.detail-section.custom-information-form.label-custom-field-4',
        value: 'Benutzerdefiniertes Feld 4'
    }
];
