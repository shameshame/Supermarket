import adminMenu from "./adminMenu.js"
import PanelTemplate from "../panelTemplate/PanelTemplate.jsx"

function AdminProfile(props) {
    return (
        <PanelTemplate features={adminMenu} role="Admin"/>
    );
}

export default AdminProfile;