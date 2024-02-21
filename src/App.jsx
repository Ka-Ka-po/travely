import Header from "./components/Header";
import LandingTemplate from "./templates/LandingTemplate";
import Dashboard from "./templates/DashboardTemplate";
import AdminPackageAdd from "./templates/AdminPackageAdd";
import AgencyProfileAdd from "./templates/AgencyProfileAdd";

function App() {
    return (
        <>
            {/* <Header /> */}
            {LandingTemplate}
            {/* <Dashboard /> */}
            {/* <AdminPackageAdd /> */}
            <AgencyProfileAdd/>
        </>
    );
}

export default App;
