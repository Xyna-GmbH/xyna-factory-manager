import { XoRuntimeContext } from '@fman/runtime-contexts/xo/xo-runtime-context.model';
import { XoObjectClass, XoArrayClass, XoProperty, XoObject, XoArray, XoTransient } from '@zeta/api';
import { XcComponentTemplate, XcTemplate } from '@zeta/xc';
import { TriggerFilterStateIconComponent } from '../state-templates/trigger-filter-state-icon.component';


@XoObjectClass(null, 'xmcp.factorymanager.filtermanager', 'TriggerInstance')
export class XoTriggerInstance extends XoObject {


    @XoProperty()
    triggerInstance: string;


    @XoProperty()
    trigger: string;


    @XoProperty()
    status: string;


    @XoProperty()
    @XoTransient()
    stateTemplate: XcTemplate;


    afterDecode() {
        this.stateTemplate = new XcComponentTemplate(TriggerFilterStateIconComponent, {state: this.status});
    }


    @XoProperty(XoRuntimeContext)
    runtimeContext: XoRuntimeContext = new XoRuntimeContext();


}

@XoArrayClass(XoTriggerInstance)
export class XoTriggerInstanceArray extends XoArray<XoTriggerInstance> {
}
