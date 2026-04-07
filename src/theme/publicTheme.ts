import { createTheme } from "@mui/material/styles";

/** Light theme for public marketing pages (Schedlify landing). */
export const publicLightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2D3E99",
      dark: "#1E2B6E",
      light: "#3D52B8",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#2E8BFF",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F9F9F9",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111111",
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontSize: "clamp(2rem, 4vw, 3.25rem)",
      fontWeight: 800,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: { fontSize: "1.5rem", fontWeight: 700 },
    h4: { fontSize: "1.25rem", fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          paddingInline: 22,
          paddingBlock: 10,
        },
      },
    },
  },
});
