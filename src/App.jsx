import Header from "./components/Header";
import LandingTemplate from "./templates/LandingTemplate";
import Dashboard from "./templates/DashboardTemplate";
import AdminPackageAdd from "./templates/AdminPackageAdd";
import OrderPackage from "./templates/OrderPackage";

function App() {
    return (
        <>
            {/* <Header /> */}
            {LandingTemplate}
            {/*<Dashboard />*/}
            {/* <AdminPackageAdd /> */}
            <OrderPackage/>
        </>
    );
}

export default App;
