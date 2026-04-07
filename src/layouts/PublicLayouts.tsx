import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Toolbar } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { publicLightTheme } from "../theme/publicTheme";

const PublicLayout = () => {
  return (
    <ThemeProvider theme={publicLightTheme}>
      <Header />
      <Toolbar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default PublicLayout;
