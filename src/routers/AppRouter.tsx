import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
// import { SignInPage } from "../pages/SignInPage/SignInPage";
import HomePage from "../pages/HomePage/HomePage";
// import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import PublicLayouts from "../layouts/PublicLayouts";
import DashboardLayouts from "../layouts/DashboardLayouts"; 


const AppRouter = () => {
    return (
        <Routes>
            {/* Public */}

            {/* PUBLIC ROUTES */}
            <Route element={<PublicLayouts />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>

            {/* DASHBOARD ROUTES */}
            <Route element={<DashboardLayouts />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                {/* future dashboard pages */}
                {/* <Route path="/dashboard/profile" element={<Profile />} /> */}
            </Route>
        </Routes>
    );
}
export default AppRouter;
