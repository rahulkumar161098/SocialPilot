import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Toolbar } from "@mui/material";

const PublicLayout = () => { 
    return (
        <>
            <Header />
            {/* This spacer pushes content below AppBar */}
            <Toolbar />
            <Outlet />
            <Footer />
        </>
    );   

}
export default PublicLayout;