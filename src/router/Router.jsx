import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingTemplate from "../templates/LandingTemplate";
import DashboardTemplate from "../templates/DashboardTemplate";
import AdminPackageAdd from "../templates/AdminPackageAdd";
import AgencyProfile from "../templates/AgencyProfile";
import OrderPackage from "../templates/OrderPackage";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingTemplate />} />
                    <Route path='/dashboard' element={<DashboardTemplate />} />
                    <Route path='/agency-profile' element={<AgencyProfile />} />
                    <Route
                        path='/admin-package-add'
                        element={<AdminPackageAdd />}
                    />
                    <Route path='/order-package/:packageId' element={<OrderPackage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default Router;
