import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingTemplate from "../templates/LandingTemplate";
import DashboardTemplate from "../templates/DashboardTemplate";

const Router = () =>{
 return(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingTemplate/>}/>
                <Route path="/dashboard" element={<DashboardTemplate/>}/>
            </Routes>
        </BrowserRouter>
    </>
 );
}
export default Router