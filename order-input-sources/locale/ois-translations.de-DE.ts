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


export const order_input_sources_translations_de_DE: I18nTranslation[] = [
    // OrderInputSourcesComponent
    // html
    {
        key: 'fman.ois.header',
        value: 'Auftragseingabequellen'
    },
    {
        key: 'fman.ois.icon-refresh',
        value: 'Aktualisieren'
    },
    {
        key: 'fman.ois.icon-add',
        value: 'Auftragseingabequellen hinzufügen'
    },
    {
        key: 'fman.ois.details-header',
        value: 'Auftragseingabequelle Details'
    },

    // typescript
    {
        key: 'fman.ois.delete',
        value: 'Löschen'
    },
    {
        key: 'fman.ois.duplicate',
        value: 'Duplizieren'
    },
    {
        key: 'fman.ois.generating-error-message',
        value: 'Eingabe kann nicht generiert werden. Die Auftragseingabequelle ist ungültig oder es liegen nicht gespeicherte Änderungen vor.'
    },

    // OrderInputSourceDetailsComponent
    // html
    {
        key: 'fman.ois.order-input-source-details.details-header',
        value: 'Auftragseingabequelle Details'
    },
    {
        key: 'fman.ois.order-input-source-details.name-input',
        value: 'Name'
    },
    {
        key: 'fman.ois.order-input-source-details.label-workspace-application',
        value: 'Arbeitsumgebung/Anwendung'
    },
    {
        key: 'fman.ois.order-input-source-details.placeholder-select',
        value: 'Auswählen...'
    },
    {
        key: 'fman.ois.order-input-source-details.label-order-type',
        value: 'Auftragstyp'
    },
    {
        key: 'fman.ois.order-input-source-details.value-no-order-types-found',
        value: 'Keine Auftragstypen gefunden '
    },
    {
        key: 'fman.ois.order-input-source-details.label-source-type',
        value: 'Quellart'
    },
    {
        key: 'fman.ois.order-input-source-details.custom-fields',
        value: 'Benutzerdefinierte Felder'
    },
    {
        key: 'fman.ois.order-input-source-details.custom-fields1',
        value: 'Benutzerdefinierte Feld 1'
    },
    {
        key: 'fman.ois.order-input-source-details.custom-fields2',
        value: 'Benutzerdefinierte Feld 2'
    },
    {
        key: 'fman.ois.order-input-source-details.custom-fields3',
        value: 'Benutzerdefinierte Feld 3'
    },
    {
        key: 'fman.ois.order-input-source-details.custom-fields4',
        value: 'Benutzerdefinierte Feld 4'
    },
    {
        key: 'fman.ois.order-input-source-details.label-priority',
        value: 'Priorität'
    },
    {
        key: 'fman.ois.order-input-source-details.label-monitoring-level',
        value: 'Monitoring Level'
    },
    {
        key: 'fman.ois.order-input-source-details.generating-order-type',
        value: 'Quell-Auftragstyp'
    },
    {
        key: 'fman.ois.order-input-source-details.label-input-generator',
        value: 'Eingabegenerator'
    },
    {
        key: 'fman.ois.order-input-source-details.label-test-case-id',
        value: 'Testfall-ID'
    },
    {
        key: 'fman.ois.order-input-source-details.label-test-case-name',
        value: 'Name des Testfalls'
    },
    {
        key: 'fman.ois.order-input-source-details.textarea-documentation',
        value: 'Dokumentation'
    },
    {
        key: 'fman.ois.order-input-source-details.frequency-controlled-task',
        value: 'Frequenzgesteuerte Aufgabe'
    },
    {
        key: 'fman.ois.order-input-source-details.label-name',
        value: 'Name'
    },
    {
        key: 'fman.ois.order-input-source-details.label-number-of-orders',
        value: 'Anzahl der Aufträge'
    },
    {
        key: 'fman.ois.order-input-source-details.label-type',
        value: 'Typ'
    },
    {
        key: 'fman.ois.order-input-source-details.label-create-inputs-once',
        value: 'Eingabe einmalig erstellen'
    },
    {
        key: 'fman.ois.order-input-source-details.label-data-point-count',
        value: 'Datenpunktanzahl'
    },
    {
        key: 'fman.ois.order-input-source-details.label-data-point-distance',
        value: 'Datenpunktabstand'
    },
    {
        key: 'fman.ois.order-input-source-details.label-delayed-start',
        value: 'Verzögerter Start'
    },
    {
        key: 'fman.ois.order-input-source-details.button-start-task',
        value: 'Aufgabe starten'
    },
    {
        key: 'fman.ois.order-input-source-details.span-task-id',
        value: 'Aufgaben-ID'
    },
    {
        key: 'fman.ois.order-input-source-details.button-show-task',
        value: 'Aufgabe anzeigen'
    },
    {
        key: 'fman.ois.order-input-source-details.button-cancel',
        value: 'Abbrechen'
    },
    {
        key: 'fman.ois.order-input-source-details.button-save',
        value: 'Speichern'
    },

    // RestorableOrderInputSourcesComponent
    {
        key: 'fman.ois.unspecified-details-error',
        value: 'Die Details der ausgewählten Auftragseingabequelle können nicht angefordert werden'
    },
    {
        key: 'fman.ois.unspecified-add-error',
        value: 'Auftragseingabequelle kann nicht hinzugefügt werden'
    },
    {
        key: 'fman.ois.unspecified-save-error',
        value: 'Die ausgewählte Auftragseingabequelle kann nicht gespeichert werden'
    },
    {
        key: 'fman.ois.confirm-delete',
        value: '\'$0\' löschen?'
    },
    {
        key: 'fman.ois.unspecified-get-runtime-contexts-error',
        value: 'Keine Arbeitsumgebung/Anwendung gefunden'
    },
    {
        key: 'fman.ois.get-generating-order-types-error',
        value: 'Generierte Auftragstypen konnten nicht empfangen werden'
    },
    {
        key: 'fman.ois.unspecified-get-order-types-error',
        value: 'Auftragstypen konnten nicht empfangen werden'
    },
    {
        key: 'fman.ois.unspecified-start-frequency-controlled-task-error',
        value: 'Aufgabe konnte nicht gestartet werden'
    },
    {
        key: 'fman.ois.get-order-types-empty-list-error-message',
        value: 'Keine Auftragstypen in $0 gefunden'
    },
    {
        key: 'fman.ois.get-generating-order-types-empty-list-error-message',
        value: 'In $0 wurden keine generierenden Auftragstypen gefunden'
    },

    // InputParameterComponent
    {
        key: 'fman.ois.order-input-source-details.input-parameter.header',
        value: 'Eingabeparameter'
    },
    {
        key: 'fman.ois.order-input-source-details.input-parameter.no-input-parameters',
        value: 'Keine Eingabeparameter'
    },

    // GenerateInputComponent
    {
        key: 'fman.ois.order-input-source-details.generate-input.generate-input',
        value: 'Eingabe generieren'
    },
    {
        key: 'fman.ois.order-input-source-details.generate-input.no-input-parameter',
        value: 'Kein Eingabeparameter'
    },
    {
        key: 'fman.ois.order-input-source-details.generate-input.button-start-order',
        value: 'Auftrag starten'
    },
    {
        key: 'fman.ois.order-input-source-details.generate-input.button-show-order',
        value: 'Auftrag zeigen'
    },

    // RestorableRouteComponent
    {
        key: 'fman.restorable-route.warning',
        value: 'Warnung'
    }
];
