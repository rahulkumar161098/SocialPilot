import * as React from "react";
import { NavLink, Outlet, useLocation, useMatch } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardRounded from "@mui/icons-material/DashboardRounded";
import CalendarMonthOutlined from "@mui/icons-material/CalendarMonthOutlined";
import AnalyticsOutlined from "@mui/icons-material/AnalyticsOutlined";
import HubOutlined from "@mui/icons-material/HubOutlined";
import PeopleOutline from "@mui/icons-material/PeopleOutline";
import RocketLaunchOutlined from "@mui/icons-material/RocketLaunchOutlined";
import HelpOutlineOutlined from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlined from "@mui/icons-material/LogoutOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import AddOutlined from "@mui/icons-material/AddOutlined";
import {
  BORDER_SUBTLE,
  CARD_BG,
  PAGE_BG,
  PRIMARY,
  PRIMARY_ACTION,
  PRIMARY_HOVER,
  SIDEBAR_BG,
  SIDEBAR_WIDTH,
  TEXT_BODY,
  TEXT_TITLE,
} from "../pages/Dashboard/dashboardTokens";

/** Active item: light blue pill per Architect Analytics reference */
const navButtonSx = (active: boolean) => ({
  justifyContent: "flex-start",
  borderRadius: "12px",
  py: 1.25,
  px: 1.5,
  fontWeight: 600,
  textTransform: "none" as const,
  color: active ? PRIMARY : TEXT_BODY,
  bgcolor: active ? "rgba(59, 76, 184, 0.14)" : "transparent",
  boxShadow: "none",
  "& .MuiButton-startIcon": { color: active ? PRIMARY : TEXT_BODY },
  "&:hover": {
    bgcolor: active ? "rgba(59, 76, 184, 0.18)" : "rgba(17, 24, 39, 0.04)",
  },
});

interface DashboardAppShellProps {
  window?: () => Window;
}

export default function DashboardAppShell({ window }: DashboardAppShellProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const dashboardActive = useMatch({ path: "/dashboard", end: true });
  const calendarActive = useMatch("/dashboard/calendar");
  const analyticsActive = useMatch("/dashboard/analytics");
  const searchPlaceholder = location.pathname.includes("/calendar")
    ? "Search scheduled posts..."
    : "Search insights...";

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        px: 2.5,
        py: 3,
        bgcolor: SIDEBAR_BG,
      }}
    >
      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 4 }}>
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: "12px",
            bgcolor: PRIMARY,
            color: "#fff",
            display: "grid",
            placeItems: "center",
            fontWeight: 800,
            fontSize: "1.1rem",
            fontFamily: "Inter, sans-serif",
          }}
        >
          A
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 800, fontSize: "1rem", lineHeight: 1.2, color: TEXT_TITLE }}>
            Schedlify
          </Typography>
          <Typography
            sx={{
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: TEXT_BODY,
            }}
          >
            AUTOMATION SUITE
          </Typography>
        </Box>
      </Stack>

      <Stack spacing={0.5} sx={{ flex: 1 }}>
        <Button
          component={NavLink}
          to="/dashboard"
          end
          fullWidth
          startIcon={<DashboardRounded fontSize="small" />}
          onClick={() => setMobileOpen(false)}
          sx={navButtonSx(!!dashboardActive)}
        >
          Dashboard
        </Button>
        <Button
          component={NavLink}
          to="/dashboard/calendar"
          fullWidth
          startIcon={<CalendarMonthOutlined fontSize="small" />}
          onClick={() => setMobileOpen(false)}
          sx={navButtonSx(!!calendarActive)}
        >
          Content Calendar
        </Button>
        <Button
          component={NavLink}
          to="/dashboard/analytics"
          fullWidth
          startIcon={<AnalyticsOutlined fontSize="small" />}
          onClick={() => setMobileOpen(false)}
          sx={navButtonSx(!!analyticsActive)}
        >
          Analytics
        </Button>
        <Button fullWidth startIcon={<HubOutlined fontSize="small" />} sx={navButtonSx(false)}>
          Automation
        </Button>
        <Button fullWidth startIcon={<PeopleOutline fontSize="small" />} sx={navButtonSx(false)}>
          Accounts
        </Button>
      </Stack>

      <Stack spacing={1.5} sx={{ mt: 3 }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<RocketLaunchOutlined />}
          sx={{
            bgcolor: PRIMARY,
            borderRadius: "12px",
            py: 1.25,
            textTransform: "none",
            fontWeight: 700,
            boxShadow: "none",
            "&:hover": { bgcolor: PRIMARY_HOVER, boxShadow: "none" },
          }}
        >
          Upgrade Plan
        </Button>
        <Button
          fullWidth
          startIcon={<HelpOutlineOutlined />}
          sx={{
            justifyContent: "flex-start",
            color: TEXT_BODY,
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "8px",
          }}
        >
          Help Center
        </Button>
        <Button
          fullWidth
          startIcon={<LogoutOutlined />}
          sx={{
            justifyContent: "flex-start",
            color: TEXT_BODY,
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "8px",
          }}
        >
          Log Out
        </Button>
      </Stack>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", bgcolor: PAGE_BG }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: SIDEBAR_WIDTH }, flexShrink: { sm: 0 } }}
        aria-label="Dashboard navigation"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: SIDEBAR_WIDTH,
              bgcolor: SIDEBAR_BG,
              borderRight: `1px solid ${BORDER_SUBTLE}`,
            },
          }}
          slotProps={{ root: { keepMounted: true } }}
        >
          {drawerContent}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: SIDEBAR_WIDTH,
              bgcolor: SIDEBAR_BG,
              borderRight: `1px solid ${BORDER_SUBTLE}`,
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flex: 1,
          minWidth: 0,
          bgcolor: PAGE_BG,
          minHeight: "100vh",
        }}
      >
        <Stack
          direction="row"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{
            px: { xs: 2, sm: 3 },
            py: 2,
            bgcolor: CARD_BG,
            borderBottom: `1px solid ${BORDER_SUBTLE}`,

          }}
        >
          <IconButton
            onClick={() => setMobileOpen(true)}
            sx={{ display: { sm: "none" } }}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
          <TextField
            placeholder={searchPlaceholder}
            size="small"
            fullWidth
            sx={{
              maxWidth: { sm: 520 },
              mx: { sm: "auto" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                bgcolor: PAGE_BG,
                "& fieldset": { borderColor: BORDER_SUBTLE },
              },
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlined sx={{ color: TEXT_BODY, opacity: 0.7 }} />
                  </InputAdornment>
                ),
              },
            }}
          />
          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ flexShrink: 0 }}>
            <IconButton aria-label="Notifications" size="small" sx={{ color: TEXT_TITLE }}>
              <NotificationsNoneOutlined />
            </IconButton>
            <IconButton aria-label="Settings" size="small" sx={{ color: TEXT_TITLE }}>
              <SettingsOutlined />
            </IconButton>
            <Button
              variant="contained"
              startIcon={<AddOutlined />}
              sx={{
                ml: 1,
                bgcolor: PRIMARY_ACTION,
                textTransform: "none",
                fontWeight: 700,
                borderRadius: "12px",
                px: 2,
                boxShadow: "none",
                display: { xs: "none", md: "inline-flex" },
                "&:hover": { bgcolor: "#1f2b7a", boxShadow: "none" },
              }}
            >
              Create Post
            </Button>
            <Avatar
              alt="User"
              src="/images/pexels-adempercem-35576326.jpg"
              sx={{ width: 40, height: 40, ml: 1 }}
            />
          </Stack>
        </Stack>

        <Outlet />
      </Box>
    </Box>
  );
}
