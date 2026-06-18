import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SignInDialog from "../../dailogs/SignInDailog/SignInDailog";
import SignUpDialog from "../../dailogs/SignUpDialog/SignUpDialog";
import OtpVerificationDialog from "../../dailogs/OtpVerificationDialog/OtpVerificationDialog";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 260;

const navLinks: { label: string; to: string }[] = [
  { label: "Features", to: "/features" },
  { label: "Pricing", to: "/pricing" },
  { label: "Dashboard", to: "/dashboard" },
];

interface HeaderProps {
  window?: () => Window;
}

export default function Header(props: HeaderProps) {
  const { window } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [signInOpen, setSignInOpen] = React.useState(false);
  const [signUpOpen, setSignUpOpen] = React.useState(false);
  const [otpOpen, setOtpOpen] = React.useState(false);
  const [otpEmail, setOtpEmail] = React.useState("");

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleCloseSignIn = () => {
    setSignInOpen(false);
  };

  const handleRegistrationComplete = (email: string) => {
    setSignUpOpen(false);
    setOtpEmail(email);
    setOtpOpen(true);
  };

  const handleOtpVerified = () => {
    setOtpOpen(false);
    setOtpEmail("");
    setSignInOpen(true);
  };

  const handleOtpAbortRegistration = () => {
    setOtpOpen(false);
    setOtpEmail("");
    setSignUpOpen(true);
  };

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("signup") !== "1") return;
    setSignUpOpen(true);
    params.delete("signup");
    const search = params.toString();
    navigate(`${location.pathname}${search ? `?${search}` : ""}`, { replace: true });
  }, [location.pathname, location.search, navigate]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", py: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 800, color: "primary.main" }}>
        Schedlify
      </Typography>
      <Divider sx={{ my: 2 }} />
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.to}
              selected={
                item.to === "/dashboard"
                  ? location.pathname.startsWith("/dashboard")
                  : location.pathname === item.to
              }
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => setSignInOpen(true)}
          >
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ justifyContent: "center", mt: 1 }}>
          <Button
            variant="contained"
            fullWidth
            sx={{ mx: 2 }}
            onClick={() => setSignUpOpen(true)}
          >
            Get Started
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <SignInDialog
        open={signInOpen}
        onClose={handleCloseSignIn}
        onSwitchToRegister={() => setSignUpOpen(true)}
      />
      {/* <OtpVerificationDialog
        open={otpOpen}
        onClose={() => {
          setOtpOpen(false);
          setOtpEmail("");
        }}
        email={otpEmail}
        // onVerified={handleOtpVerified}
        onRequestLogout={handleOtpAbortRegistration}
        registrationFlow
      /> */}
      <SignUpDialog
        open={signUpOpen}
        onClose={() => setSignUpOpen(false)}
        onRequestSignIn={() => {
          setSignUpOpen(false);
          setSignInOpen(true);
        }}
        onRegistrationComplete={handleRegistrationComplete}
      />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "background.paper",
          color: "text.primary",
          borderBottom: "1px solid",
          borderColor: "rgba(45, 62, 153, 0.08)",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 3 },
            minHeight: { xs: 64, md: 72 },
          }}
        >
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              fontWeight: 800,
              color: "primary.main",
              textDecoration: "none",
              letterSpacing: "-0.02em",
            }}
          >
            Schedlify
          </Typography>

          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 4,
            }}
          >
            {navLinks.map((item) => {
              const isActive =
                item.to === "/dashboard"
                  ? location.pathname.startsWith("/dashboard")
                  : location.pathname === item.to;
              return (
                <Button
                  key={item.label}
                  component={RouterLink}
                  to={item.to}
                  color="inherit"
                  sx={{
                    color: isActive ? "primary.main" : "text.secondary",
                    fontWeight: isActive ? 700 : 500,
                    borderBottom: isActive ? "2px solid" : "2px solid transparent",
                    borderColor: isActive ? "primary.main" : "transparent",
                    borderRadius: 0,
                    pb: 0.5,
                    "&:hover": { color: "primary.main", bgcolor: "transparent" },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <Button
              color="inherit"
              onClick={() => setSignInOpen(true)}
              sx={{ color: "text.secondary", fontWeight: 500 }}
            >
              Login
            </Button>
            <Button variant="contained" color="primary" onClick={() => setSignUpOpen(true)}>
              Get Started
            </Button>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml: "auto", display: { md: "none" }, color: "primary.main" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
