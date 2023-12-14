import { XoRuntimeContext } from '@fman/runtime-contexts/xo/xo-runtime-context.model';
import { XoObjectClass, XoArrayClass, XoProperty, XoObject, XoArray } from '@zeta/api';


@XoObjectClass(null, 'xmcp.factorymanager.filtermanager', 'GetTriggerRequest')
export class XoGetTriggerRequest extends XoObject {


    @XoProperty()
    trigger: string;


    @XoProperty(XoRuntimeContext)
    runtimeContext: XoRuntimeContext = new XoRuntimeContext();


}

@XoArrayClass(XoGetTriggerRequest)
export class XoGetTriggerRequestArray extends XoArray<XoGetTriggerRequest> {
}
