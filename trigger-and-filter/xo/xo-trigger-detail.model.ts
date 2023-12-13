import { XoRuntimeContext } from '@fman/runtime-contexts/xo/xo-runtime-context.model';
import { XoObjectClass, XoArrayClass, XoProperty, XoObject, XoArray, XoTransient } from '@zeta/api';
import { XcComponentTemplate, XcTemplate } from '@zeta/xc';
import { TriggerFilterStateIconComponent } from '../state-templates/trigger-filter-state-icon.component';


@XoObjectClass(null, 'xmcp.factorymanager.filtermanager', 'TriggerDetail')
export class XoTriggerDetail extends XoObject {


    @XoProperty()
    trigger: string;


    @XoProperty()
    name: string;


    @XoProperty()
    description: string;


    @XoProperty()
    status: string;


    @XoProperty()
    @XoTransient()
    stateTemplates: Array<XcTemplate>;


    afterDecode() {
        this.stateTemplates = [new XcComponentTemplate(TriggerFilterStateIconComponent, {state: this.status})];
    }


    @XoProperty(XoRuntimeContext)
    runtimeContext: XoRuntimeContext = new XoRuntimeContext();


}

@XoArrayClass(XoTriggerDetail)
export class XoTriggerDetailArray extends XoArray<XoTriggerDetail> {
}
