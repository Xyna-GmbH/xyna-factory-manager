import { XoRuntimeContext } from '@fman/runtime-contexts/xo/xo-runtime-context.model';
import { XoObjectClass, XoArrayClass, XoProperty, XoObject, XoArray, XoTransient } from '@zeta/api';
import { XoFilterInstanceArray } from './xo-filter-instance.model';
import { XcComponentTemplate, XcTemplate } from '@zeta/xc';
import { TriggerFilterStateIconComponent } from '../state-templates/trigger-filter-state-icon.component';


@XoObjectClass(null, 'xmcp.factorymanager.filtermanager', 'TriggerInstanceDetail')
export class XoTriggerInstanceDetail extends XoObject {


    @XoProperty()
    triggerInstance: string;


    @XoProperty()
    trigger: string;


    @XoProperty()
    description: string;


    @XoProperty(XoRuntimeContext)
    runtimeContext: XoRuntimeContext = new XoRuntimeContext();


    @XoProperty()
    status: string;


    @XoProperty()
    @XoTransient()
    stateTemplates: Array<XcTemplate>;


    afterDecode() {
        this.stateTemplates = [new XcComponentTemplate(TriggerFilterStateIconComponent, {state: this.status})];
    }


    @XoProperty(XoFilterInstanceArray)
    filterInstance: XoFilterInstanceArray = new XoFilterInstanceArray();


    @XoProperty()
    startParameter: string;


}

@XoArrayClass(XoTriggerInstanceDetail)
export class XoTriggerInstanceDetailArray extends XoArray<XoTriggerInstanceDetail> {
}
