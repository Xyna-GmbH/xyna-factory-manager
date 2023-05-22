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


export const fman_translations_de_DE: I18nTranslation[] = [

    // date-selector
    {
        key: 'date-selector.label-time-zone',
        value: 'Zeitzone'
    },
    {
        key: 'date-selector.placeholder-select-time-zone',
        value: 'Auswählen...'
    },
    {
        key: 'date-selector.start-time',
        value: 'Startzeit'
    },
    {
        key: 'date-selector.label-year',
        value: 'Jahr'
    },
    {
        key: 'date-selector.label-month',
        value: 'Monat'
    },
    {
        key: 'date-selector.label-day',
        value: 'Tag'
    },
    {
        key: 'date-selector.label-hour',
        value: 'Stunden'
    },
    {
        key: 'date-selector.label-minutes',
        value: 'Minuten'
    },
    {
        key: 'date-selector.label-seconds',
        value: 'Sekunden'
    },
    {
        key: 'date-selector.label-milliseconds',
        value: 'Millisekunden'
    },

    //#region ------------------------------------------------------------- REMOTE TABLE Column
    //#region ############################## Workspaces and Applications
    {
        key: 'Workspaces and Applications',
        value: 'Arbeitsumgebungen und Anwendungen'
    },
    // **** Column Names
    // **** Column Paths
    //#endregion
    //#region ############################## Ordertypes
    {
        key: 'Order Types',
        value: 'Auftragstypen'
    },
    // **** Column Names
    {
        key: 'Name',
        value: 'Name'
    },
    {
        key: 'Application',
        value: 'Anwendung'
    },
    {
        key: 'Version',
        value: 'Version'
    },
    {
        key: 'Workspace',
        value: 'Arbeitsumgebung'
    },
    // ...
    // TODO - specification is not final
    // **** Column Paths

    {
        key: 'Execution Destination Type/Name',
        value: 'Typ/Name des Ausführungsziels'
    },
    {
        key: 'Used Capacities',
        value: 'Verwendete Kapazitäten'
    },
    // ...
    // TODO - specification is not final
    //#endregion
    //#region ############################## Cron-like Orders
    {
        key: 'Cron-like Orders',
        value: 'Cron-like Aufträge'
    },
    // **** Column Names
    {
        key: 'Start Time',
        value: 'Startzeit'
    },
    {
        key: 'Time zone',
        value: 'Zeitzone'
    },
    {
        key: 'Interval',
        value: 'Intervall'
    },
    // **** Column Paths
    //#endregion
    //#region ############################## Time-Controlled Orders
    {
        key: 'Time-Controlled Orders',
        value: 'Time Controlled Aufträge'
    },
    {
        key: 'Add new Time-Controlled Order',
        value: 'Time Controlled Auftrag hinzufügen'
    },
    {
        key: 'Create new Time-Controlled Order',
        value: 'Time Controlled Auftrag erstellen'
    },
    {
        key: 'Duplicate Time-Controlled Order',
        value: 'Time Controlled Auftrag duplizieren'
    },
    {
        key: 'Is Active',
        value: 'Aktiv'
    },
    {
        key: 'Execution type',
        value: 'Ausführungsart '
    },
    {
        key: 'Execution Restriction',
        value: 'Ausführungsbeschränkung'
    },
    {
        key: 'Maximum executions',
        value: 'Maximale Ausführungen'
    },
    {
        key: 'Execution interval',
        value: 'Ausführungsintervall'
    },
    {
        key: 'Scheduling timeout',
        value: 'Planungstimeout'
    },
    {
        key: 'Execution timeout',
        value: 'Ausführungstimeout'
    },
    {
        key: 'Behavior on error',
        value: 'Fehlerverhalten'
    },
    {
        key: 'Treat timeouts as error',
        value: 'Fehler als Timeout behandeln'
    },
    {
        key: 'Ignore',
        value: 'Ignorieren'
    },
    {
        key: 'Disable',
        value: 'Ausschalten'
    },
    {
        key: 'Drop',
        value: 'Verwerfen'
    },
    {
        key: 'Always',
        value: 'Immer'
    },
    {
        key: 'Milliseconds',
        value: 'Millisekunden'
    },
    {
        key: 'Seconds',
        value: 'Sekunden'
    },
    {
        key: 'Minutes',
        value: 'Minuten'
    },
    {
        key: 'Hours',
        value: 'Stunden'
    },
    {
        key: 'Days',
        value: 'Tage'
    },
    {
        key: 'Time Window',
        value: 'Zeitfenster'
    },
    {
        key: 'Window length',
        value: 'Zeitfenster Länge'
    },
    {
        key: 'End Time',
        value: 'Endzeit'
    },
    {
        key: '15 Minutes',
        value: '15 Minuten'
    },
    {
        key: '30 Minutes',
        value: '30 Minuten'
    },
    {
        key: '1 Hour',
        value: '1 Stunde'
    },
    {
        key: '1 Hour 30 Minutes',
        value: '1 Stunde 30 Minuten'
    },
    {
        key: '2 Hours',
        value: '2 Stunden'
    },
    {
        key: '3 Hours',
        value: '3 Stunden'
    },
    {
        key: '4 Hours',
        value: '4 Stunden'
    },
    {
        key: '6 Hours',
        value: '6 Stunden'
    },
    {
        key: 'Other',
        value: 'Andere'
    },
    {
        key: 'Planning horizon',
        value: 'Planungshorizont'
    },
    {
        key: 'Custom Information',
        value: 'Benutzerdefinierte Informationen'
    },
    {
        key: 'Custom Field 1',
        value: 'Benutzerdefiniertes Feld 1'
    },
    {
        key: 'Custom Field 2',
        value: 'Benutzerdefiniertes Feld 2'
    },
    {
        key: 'Custom Field 3',
        value: 'Benutzerdefiniertes Feld 3'
    },
    {
        key: 'Custom Field 4',
        value: 'Benutzerdefiniertes Feld 4'
    },
    {
        key: 'Query Storable for Input',
        value: 'Abfrage des Storable für die Eingabe'
    },
    {
        key: 'Query Filter',
        value: 'Abfragefilter'
    },
    {
        key: 'Sorting',
        value: 'Sortierung'
    },
    {
        key: 'No end time',
        value: 'Keine Endzeit'
    },
    {
        key: 'It might have happend that this value was set during creation but cannot be displayed at the moment.',
        value: 'Es könnte sein, dass dieses Feld beim Erstellen gesetzt wurde, jetzt aber nicht angezeigt werden kann.'
    },
    {
        key: 'Cannot change archived order',
        value: 'Archivierte Aufträge sind unveränderlich'
    },
    {
        key: 'Show archived TCOs',
        value: 'Archivierte Aufträge anzeigen'
    },
    {
        key: 'Archived',
        value: 'Archiviert'
    },
    {
        key: 'Planning',
        value: 'In Planung'
    },
    {
        key: 'Waiting',
        value: 'Am warten'
    },
    {
        key: 'Running',
        value: 'In Betrieb'
    },
    {
        key: 'Disabled',
        value: 'Deaktiviert'
    },
    {
        key: 'Canceled',
        value: 'Abgebrochen'
    },
    {
        key: 'Failed',
        value: 'Fehlgeschlagen'
    },
    {
        key: 'Finished',
        value: 'Abgeschlossen'
    },
    {
        key: 'Make sure that the master workflow is accessible in the selected runtime context.',
        value: 'Der Master Workflow muss aus der ausgewälten Arbeitsumgebung/Application erreichbar sein.'
    },

    // **** Column Names
    // **** Column Paths
    //#endregion
    //#region ############################## Order Input Sources
    {
        key: 'Order Input Sources',
        value: 'Auftragseingabequellen'
    },
    // **** Column Names
    {
        key: 'Name',
        value: 'Name'
    },
    {
        key: 'Application',
        value: 'Anwendung'
    },
    {
        key: 'Version',
        value: 'Version'
    },
    {
        key: 'Workspace',
        value: 'Arbeitsumgebung'
    },
    {
        key: 'Source Type',
        value: 'Quellart'
    },
    {
        key: 'Order Type',
        value: 'Auftragstyp'
    },
    {
        key: 'Worksteps using Sources',
        value: 'Prozessschritte mit Quellen'
    },
    {
        key: 'State',
        value: 'Status'
    },
    //#endregion
    //#region ############################## Capacities
    {
        key: 'Capacities',
        value: 'Kapazitäten'
    },
    // **** Column Names
    {
        key: 'Assigned',
        value: 'Zugewiesen'
    },
    {
        key: 'Name',
        value: 'Name'
    },
    {
        key: 'Cardinality',
        value: 'Kardinalität'
    },
    {
        key: 'Usage',
        value: 'Verwendung'
    },
    {
        key: 'State',
        value: 'Status'
    },
    // **** Column Paths
    {
        key: 'name',
        value: 'Name'
    },
    {
        key: 'cardinality',
        value: 'Kardinalität'
    },
    {
        key: 'tableInuseTemplate',
        value: 'Verwendung'
    },
    {
        key: 'state',
        value: 'Status'
    },
    {
        key: 'xfm.fman.capacities.usage.template.tooltip',
        value: 'Parallelitätskontrolle: Auswahl, wie viele der angegebenen Kardinalitäten(%value0%) die Order %value1% für jeden Aufruf verwendet'
    },
    //#endregion
    //#region ############################## Administrative Vetos
    {
        key: 'Administrative Vetoes',
        value: 'Administrative Vetos'
    },
    // **** Column Names
    // **** Column Paths
    //#endregion
    //#region ############################## Deployment Items
    {
        key: 'Deployment Items',
        value: 'Deployment-Gegenstände'
    },
    // **** Column Names
    {
        key: 'Type',
        value: 'Typ'
    },
    // **** Column Paths
    //#endregion
    //#region ############################## Storable Instances
    {
        key: 'Storable Instances',
        value: 'Storable Instanzen'
    },
    {
        key: 'Please select a runtime context...',
        value: 'Arbeitsumgebung/Anwendung auswählen... '
    },
    {
        key: 'No storable found...',
        value: 'Kein Storable gefunden...'
    },
    {
        key: 'Select a storable...',
        value: 'Storable auswählen...'
    },
    {
        key: 'Add Storable',
        value: 'Storable hinzufügen'
    },
    {
        key: 'Refresh',
        value: 'Aktualisieren'
    },
    {
        key: 'Storable Instances Details',
        value: 'Storable Instanzen Details'
    },
    {
        key: 'Cancel',
        value: 'Abbrechen'
    },
    {
        key: 'Save',
        value: 'Speichern'
    },
    {
        key: 'Complex Datatype',
        value: 'Komplexer Datentyp'
    },
    {
        key: 'Complex Datatypes',
        value: 'Komplexe Datentypen'
    },
    {
        key: 'Create Storable',
        value: 'Storable Instanz erstellen'
    },
    {
        key: 'Something went wrong while creating a new storable instance.',
        value: 'Beim Erstellen der Storable Instanz ist ein Fehler aufgetreten.'
    },
    {
        key: 'Storable is empty!',
        value: 'Die Storable Instanz ist leer!'
    },
    {
        key: 'Really delete selected Storable Instance?',
        value: 'Wirklich die ausgewählte Sotrable Instanz löschen?'
    },
    // **** Column Names
    // **** Column Paths
    //#endregion
    //#region ############################## Data Models
    {
        key: 'Data Models',
        value: 'Datenmodelle'
    },
    // **** Column Names
    // **** Column Paths
    //#endregion
    //#region ############################## Xyna Properties
    {
        key: 'Xyna Properties',
        value: 'Xyna Properties'
    },
    // **** Column Names
    {
        key: 'Key',
        value: 'Name'
    },
    {
        key: 'Value',
        value: 'Wert'
    },
    {
        key: 'Default Value',
        value: 'Standardwert'
    },
    {
        key: 'Documentation',
        value: 'Dokumentation'
    },
    // **** Column Paths
    {
        key: 'key',
        value: 'Name'
    },
    {
        key: 'value',
        value: 'Wert'
    },
    {
        key: 'documentation',
        value: 'Dokumentation'
    },
    //#endregion
    //#endregion -------------------------------------------------------------


    /* further translations */
    {
        key: 'Documentation for $0',
        value: 'Dokumentation für $0'
    },
    {
        key: 'en-US',
        value: 'Englisch'
    },
    {
        key: 'de-DE',
        value: 'Deutsch'
    },

    // RestorableDeploymentItemsComponent
    {
        key: 'Can\'t request the details of selected Deployment Item',
        value: 'Die Details des ausgewählten Deployment-Gegenstands können nicht angefordert werden'
    },
    {
        key: 'Would you like to delete the selected Deployment Items?',
        value: 'Ausgewählten Deployment Items wirklich löschen?'
    },
    {
        key: 'Can\'t deploy the selected Deployment Items',
        value: 'Die ausgewählten Deployment Items können nicht bereitgestellt werden'
    },
    {
        key: 'Can\'t undeploy the selected Deployment Items',
        value: 'Die Bereitstellung der ausgewählten Deployment Items kann nicht aufgehoben werden'
    },
    {
        key: 'Can\'t delete the selected Deployment Items',
        value: 'Die ausgewählten Deployment Items können nicht gelöscht werden'
    }
];
