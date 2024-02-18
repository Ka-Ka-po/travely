// import Header from "./components/Header";
import LandingTemplate from "./templates/LandingTemplate";
import Dashboard from "./templates/DashboardTemplate";
import AdminPackageAdd from "./templates/AdminPackageAdd";

function App() {
    return (
        <>
            {/* <Header /> */}
            {LandingTemplate}
            {/*<Dashboard />*/}
            <AdminPackageAdd />
        </>
    );
}

export default App;
