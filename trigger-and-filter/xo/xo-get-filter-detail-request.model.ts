import { XoRuntimeContext } from '@fman/runtime-contexts/xo/xo-runtime-context.model';
import { XoObjectClass, XoArrayClass, XoProperty, XoObject, XoArray } from '@zeta/api';


@XoObjectClass(null, 'xmcp.factorymanager.filtermanager', 'GetFilterDetailRequest')
export class XoGetFilterDetailRequest extends XoObject {


    @XoProperty()
    filter: string;


    @XoProperty(XoRuntimeContext)
    runtimeContext: XoRuntimeContext = new XoRuntimeContext();


}

@XoArrayClass(XoGetFilterDetailRequest)
export class XoGetFilterDetailRequestArray extends XoArray<XoGetFilterDetailRequest> {
}
