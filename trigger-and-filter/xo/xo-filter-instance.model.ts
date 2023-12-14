import { XoRuntimeContext } from '@fman/runtime-contexts/xo/xo-runtime-context.model';
import { XoObjectClass, XoArrayClass, XoProperty, XoObject, XoArray, XoTransient } from '@zeta/api';
import { XcComponentTemplate, XcTemplate } from '@zeta/xc';
import { TriggerFilterStateIconComponent } from '../state-templates/trigger-filter-state-icon.component';


@XoObjectClass(null, 'xmcp.factorymanager.filtermanager', 'FilterInstance')
export class XoFilterInstance extends XoObject {


    @XoProperty()
    filterInstance: string;


    @XoProperty()
    filter: string;


    @XoProperty()
    state: string;


    @XoProperty()
    @XoTransient()
    stateTemplate: XcTemplate;


    afterDecode() {
        this.stateTemplate = new XcComponentTemplate(TriggerFilterStateIconComponent, {state: this.state});
    }


    @XoProperty(XoRuntimeContext)
    runtimeContext: XoRuntimeContext = new XoRuntimeContext();


}

@XoArrayClass(XoFilterInstance)
export class XoFilterInstanceArray extends XoArray<XoFilterInstance> {
}
