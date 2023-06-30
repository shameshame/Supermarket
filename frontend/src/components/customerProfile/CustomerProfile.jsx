import {customerPanelMenu} from "./customerMenu.js";
import PanelTemplate from "../panelTemplate/PanelTemplate.jsx"

function CustomerProfile(props) {
    return (<PanelTemplate features={customerPanelMenu} role="Customer"/>
    );
}

export default CustomerProfile;