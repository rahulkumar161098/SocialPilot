import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PricingPage from "../pages/PricingPage/PricingPage";
import FeaturesPage from "../pages/FeaturesPage/FeaturesPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import ContentCalendarPage from "../pages/Dashboard/ContentCalendarPage";
import AnalyticsPage from "../pages/Dashboard/AnalyticsPage";
import PublicLayouts from "../layouts/PublicLayouts";
import DashboardLayouts from "../layouts/DashboardLayouts";
import DashboardAppShell from "../layouts/DashboardAppShell";

const AppRouter = () => {
    return (
        <Routes>
            {/* Public */}

            {/* PUBLIC ROUTES */}
            <Route element={<PublicLayouts />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
            </Route>

            <Route path="/register" element={<Navigate to="/?signup=1" replace />} />

            {/* DASHBOARD ROUTES */}
            <Route element={<DashboardLayouts />}>
                <Route path="/dashboard" element={<DashboardAppShell />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="calendar" element={<ContentCalendarPage />} />
                    <Route path="analytics" element={<AnalyticsPage />} />
                </Route>
            </Route>
        </Routes>
    );
}
export default AppRouter;
