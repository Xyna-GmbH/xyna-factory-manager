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
export const ORDER_TYPES = {
    CLEAR_WORKSPACE: 'xmcp.factorymanager.rtcmanager.ClearWorkspace',
    CREATE_APPLICATION_DEFINITION: 'xmcp.factorymanager.rtcmanager.CreateApplicationDefinition',
    CREATE_RUNTIME_APPLICATION: 'xmcp.factorymanager.rtcmanager.CreateRTA',
    CREATE_WORKSPACE: 'xmcp.factorymanager.rtcmanager.CreateWorkspace',
    DELETE_APPLICATION_DEFINITION: 'xmcp.factorymanager.rtcmanager.DeleteApplicationDefinition',
    DELETE_RUNTIME_APPLICATION: 'xmcp.factorymanager.rtcmanager.DeleteRTA',
    DELETE_WORKSPACE: 'xmcp.factorymanager.rtcmanager.DeleteWorkspace',
    EXPORT_RUNTIME_APPLICATION: 'xmcp.factorymanager.rtcmanager.ExportRTA',
    GET_APPLICATION_CONTENT: 'xmcp.factorymanager.rtcmanager.GetApplicationContent',
    GET_APPLICATION_DEFINITION_DETAILS: 'xmcp.factorymanager.rtcmanager.GetADDetails',
    GET_DEPENDENT_RTCS: 'xmcp.factorymanager.rtcmanager.GetDependentRTCs',
    GET_ISSUES: 'xmcp.factorymanager.rtcmanager.GetIssues',
    GET_RUNTIME_APPLICATION_DETAILS: 'xmcp.factorymanager.rtcmanager.GetRTADetails',
    GET_RUNTIME_APPLICATIONS_TABLE: 'xmcp.factorymanager.rtcmanager.GetRuntimeApplicationsTable',
    GET_RUNTIME_APPLICATIONS: 'xmcp.factorymanager.rtcmanager.GetRuntimeApplications',
    GET_WORKSPACE_CONTENT: 'xmcp.factorymanager.rtcmanager.GetWorkspaceContent',
    GET_WORKSPACE_DETAILS: 'xmcp.factorymanager.rtcmanager.GetWorkspaceDetails',
    GET_WORKSPACES: 'xmcp.factorymanager.rtcmanager.GetWorkspaces',
    LOAD_RUNTIME_APPLICATION_INTO_WORKSPACE: 'xmcp.factorymanager.rtcmanager.LoadRTAIntoWorkspace',
    SET_AD_CONTENT: 'xmcp.factorymanager.rtcmanager.SetADContent',
    SET_APPLICATION_DEFINITION_DOCUMENTATION: 'xmcp.factorymanager.rtcmanager.SetADDocumentation',
    SET_DEPENDENT_RTCS: 'xmcp.factorymanager.rtcmanager.SetDependentRTCs',
    SET_RUNTIME_APPLICATION_ORDER_ENTRY: 'xmcp.factorymanager.rtcmanager.SetRTAOrderEntry',
    START_RUNTIME_APPLICATION: 'xmcp.factorymanager.rtcmanager.StartRuntimeApplication',
    STOP_RUNTIME_APPLICATION: 'xmcp.factorymanager.rtcmanager.StopRuntimeApplication',
    GET_FACTORY_NODES: 'xmcp.factorymanager.rtcmanager.GetFactoryNodes',
    IMPORT_RTA: 'xmcp.factorymanager.rtcmanager.ImportRTA',
    DELETE_DUPLICATES: 'xmcp.factorymanager.rtcmanager.DeleteDuplicates'
};
