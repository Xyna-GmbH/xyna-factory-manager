import { XoObjectClass, XoArrayClass, XoProperty, XoObject, XoArray, XoTransient } from '@zeta/api';
import { XoFilterInstanceArray } from './xo-filter-instance.model';
import { XoRuntimeContext } from '@fman/runtime-contexts/xo/xo-runtime-context.model';
import { XcComponentTemplate, XcTemplate } from '@zeta/xc';
import { TriggerFilterStateIconComponent } from '../state-templates/trigger-filter-state-icon.component';


@XoObjectClass(null, 'xmcp.factorymanager.filtermanager', 'Filter')
export class XoFilter extends XoObject {


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

    @XoProperty(XoFilterInstanceArray)
    filterInstance: XoFilterInstanceArray = new XoFilterInstanceArray();


    @XoProperty(XoRuntimeContext)
    runtimeContext: XoRuntimeContext = new XoRuntimeContext();


}

@XoArrayClass(XoFilter)
export class XoFilterArray extends XoArray<XoFilter> {
}
