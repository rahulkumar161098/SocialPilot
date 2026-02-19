import { Outlet } from "react-router-dom";
import DashboardPage from "../pages/Dashboard/DashboardPage";

const DashboardLayout = () => {
    return (
        <> 
        < Outlet />
        </>
    );
}

export default DashboardLayout;