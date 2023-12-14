import { XoRuntimeContext } from '@fman/runtime-contexts/xo/xo-runtime-context.model';
import { XoObjectClass, XoArrayClass, XoProperty, XoObject, XoArray } from '@zeta/api';


@XoObjectClass(null, 'xmcp.factorymanager.filtermanager', 'DeployTriggerRequest')
export class XoDeployTriggerRequest extends XoObject {


    @XoProperty()
    triggerName: string;


    @XoProperty()
    triggerInstanceName: string;


    @XoProperty()
    documentation: string;


    @XoProperty(XoRuntimeContext)
    runtimeContext: XoRuntimeContext = new XoRuntimeContext();


    @XoProperty()
    startParameter: string;


}

@XoArrayClass(XoDeployTriggerRequest)
export class XoDeployTriggerRequestArray extends XoArray<XoDeployTriggerRequest> {
}
