import { XoRuntimeContext } from '@fman/runtime-contexts/xo/xo-runtime-context.model';
import { XoObjectClass, XoArrayClass, XoProperty, XoObject, XoArray, XoTransient } from '@zeta/api';
import { XcComponentTemplate, XcTemplate } from '@zeta/xc';
import { TriggerFilterStateIconComponent } from '../state-templates/trigger-filter-state-icon.component';


@XoObjectClass(null, 'xmcp.factorymanager.filtermanager', 'FilterDetails')
export class XoFilterDetails extends XoObject {


    @XoProperty()
    name: string;


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

}

@XoArrayClass(XoFilterDetails)
export class XoFilterDetailsArray extends XoArray<XoFilterDetails> {
}
