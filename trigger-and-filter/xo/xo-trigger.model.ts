import { XoObjectClass, XoArrayClass, XoProperty, XoObject, XoArray, XoTransient } from '@zeta/api';
import { XoTriggerInstanceArray } from './xo-trigger-instance.model';
import { XoRuntimeContext } from '@fman/runtime-contexts/xo/xo-runtime-context.model';
import { TriggerFilterStateIconComponent } from '../state-templates/trigger-filter-state-icon.component';
import { XcComponentTemplate, XcTemplate } from '@zeta/xc';


@XoObjectClass(null, 'xmcp.factorymanager.filtermanager', 'Trigger')
export class XoTrigger extends XoObject {


    @XoProperty()
    name: string;


    @XoProperty()
    state: string;


    @XoProperty()
    @XoTransient()
    stateTemplate: XcTemplate;


    afterDecode() {
        this.stateTemplate = new XcComponentTemplate(TriggerFilterStateIconComponent, {state: this.state});
    }


    @XoProperty(XoTriggerInstanceArray)
    triggerInstance: XoTriggerInstanceArray = new XoTriggerInstanceArray();


    @XoProperty(XoRuntimeContext)
    runtimeContext: XoRuntimeContext = new XoRuntimeContext();


}

@XoArrayClass(XoTrigger)
export class XoTriggerArray extends XoArray<XoTrigger> {
}
