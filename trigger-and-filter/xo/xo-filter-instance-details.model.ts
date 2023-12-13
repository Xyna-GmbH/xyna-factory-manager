import { XoRuntimeContext } from '@fman/runtime-contexts/xo/xo-runtime-context.model';
import { XoObjectClass, XoArrayClass, XoProperty, XoObject, XoArray, XoTransient } from '@zeta/api';
import { XoTriggerInstanceDetail } from './xo-trigger-instance-detail.model';
import { XcComponentTemplate, XcTemplate } from '@zeta/xc';
import { TriggerFilterStateIconComponent } from '../state-templates/trigger-filter-state-icon.component';


@XoObjectClass(null, 'xmcp.factorymanager.filtermanager', 'FilterInstanceDetails')
export class XoFilterInstanceDetails extends XoObject {


    @XoProperty()
    instance: string;


    @XoProperty(XoTriggerInstanceDetail)
    triggerInstanceDetail: XoTriggerInstanceDetail = new XoTriggerInstanceDetail();


    @XoProperty()
    filter: string;


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


    @XoProperty()
    configurationParameter: string;


}

@XoArrayClass(XoFilterInstanceDetails)
export class XoFilterInstanceDetailsArray extends XoArray<XoFilterInstanceDetails> {
}
