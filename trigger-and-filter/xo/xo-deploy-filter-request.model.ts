import { XoRuntimeContext } from '@fman/runtime-contexts/xo/xo-runtime-context.model';
import { XoObjectClass, XoArrayClass, XoProperty, XoObject, XoArray } from '@zeta/api';


@XoObjectClass(null, 'xmcp.factorymanager.filtermanager', 'DeployFilterRequest')
export class XoDeployFilterRequest extends XoObject {


    @XoProperty()
    filterName: string;


    @XoProperty()
    filterInstanceName: string;


    @XoProperty()
    triggerInstanceName: string;


    @XoProperty()
    documentation: string;


    @XoProperty(XoRuntimeContext)
    runtimeContext: XoRuntimeContext = new XoRuntimeContext();


    @XoProperty()
    configurationParameter: string;


    @XoProperty()
    optional: boolean;


}

@XoArrayClass(XoDeployFilterRequest)
export class XoDeployFilterRequestArray extends XoArray<XoDeployFilterRequest> {
}
