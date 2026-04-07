import * as React from "react";
import Dialog from "@mui/material/Dialog";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const NAVY = "#1E2B6E";

function GoogleIcon() {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      sx={{ width: 20, height: 20, mr: 1 }}
      aria-hidden
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </Box>
  );
}

function XIcon() {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      sx={{ width: 18, height: 18, mr: 1, color: "text.primary" }}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </Box>
  );
}

export interface SignInDialogProps {
  open: boolean;
  onClose: () => void;
  onSwitchToRegister?: () => void;
}

function SignInDialog({
  open,
  onClose,
  onSwitchToRegister,
}: SignInDialogProps) {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(true);

  React.useEffect(() => {
    if (!open) {
      setEmail("");
      setPassword("");
      setRemember(true);
    }
  }, [open]);

  const handleClose = () => {
    onClose();
  };

  const canSubmit = Boolean(email.trim() && password);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !password) return;

    navigate("/dashboard");
    onClose();
  };

  const socialButtonSx = {
    flex: 1,
    py: 1.25,
    px: 2,
    borderRadius: 2,
    border: "1px solid",
    borderColor: "rgba(0,0,0,0.12)",
    bgcolor: "#fff",
    color: "text.primary",
    fontWeight: 600,
    textTransform: "none" as const,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": { bgcolor: "#F9FAFB", borderColor: "rgba(0,0,0,0.18)" },
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={false}
      fullWidth
      slotProps={{
        paper: {
          sx: {
            m: { xs: 1, sm: 2 },
            maxWidth: 960,
            width: "100%",
            borderRadius: 3,
            overflow: "hidden",
            maxHeight: "calc(100vh - 24px)",
          },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          minHeight: { xs: "auto", md: 520 },
          width: "100%",
        }}
      >
        <Box
          sx={{
            flex: { md: "0 0 44%" },
            minHeight: { xs: 220, md: "auto" },
            background: `linear-gradient(135deg, ${NAVY} 0%, #162456 100%)`,
            color: "#fff",
            px: { xs: 3, md: 5 },
            py: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              opacity: 0.15,
              backgroundImage:
                "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(135deg, ${NAVY}e6 0%, rgba(22,36,86,0.92) 100%)`,
            }}
          />
          <Box
            component={RouterLink}
            to="/"
            onClick={handleClose}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              color: "inherit",
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ScheduleIcon sx={{ fontSize: 26, color: "#fff" }} />
            </Box>
            <Typography sx={{ fontWeight: 800, fontSize: "1.35rem", letterSpacing: "-0.02em" }}>
              Schedlify
            </Typography>
          </Box>
          <Typography
            variant="h3"
            sx={{
              position: "relative",
              fontWeight: 800,
              lineHeight: 1.15,
              fontSize: { xs: "1.65rem", md: "2.1rem" },
              mb: 2,
            }}
          >
            The Future of Social Precision
          </Typography>
          <Typography
            sx={{
              position: "relative",
              opacity: 0.9,
              fontSize: "0.95rem",
              lineHeight: 1.6,
              maxWidth: 360,
              mb: "auto",
            }}
          >
            Plan, publish, and measure every channel from one calm workspace built for creative
            teams.
          </Typography>
          <Typography
            sx={{
              position: "relative",
              mt: { xs: 4, md: 0 },
              pt: { xs: 2, md: 3 },
              typography: "body2",
              fontWeight: 600,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Trusted by 10,000+ social teams
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSignIn}
          sx={{
            flex: 1,
            bgcolor: "#fff",
            px: { xs: 3, md: 5 },
            py: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.75, fontSize: "1.65rem" }}>
            Welcome back
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 3, fontSize: "0.95rem" }}>
            Log in to your workspace to manage your content.
          </Typography>

          <Box sx={{ display: "flex", gap: 1.5, mb: 2 }}>
            <Button type="button" sx={socialButtonSx} onClick={() => {}}>
              <GoogleIcon />
              Google
            </Button>
            <Button type="button" sx={socialButtonSx} onClick={() => {}}>
              <XIcon />
              X
            </Button>
          </Box>

          <Divider sx={{ my: 2 }}>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", fontWeight: 700, letterSpacing: "0.08em", px: 1 }}
            >
              OR WITH EMAIL
            </Typography>
          </Divider>

          <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>
            Email address
          </Typography>
          <TextField
            fullWidth
            placeholder="name@company.com"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineOutlinedIcon sx={{ color: "text.secondary" }} />
                  </InputAdornment>
                ),
              },
            }}
          />

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 0.5 }}>
            <Typography variant="body2" fontWeight={600}>
              Password
            </Typography>
            <Link href="#" underline="hover" variant="body2" fontWeight={600} onClick={(e) => e.preventDefault()}>
              Forgot Password?
            </Link>
          </Box>
          <TextField
            fullWidth
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 1.5 }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon sx={{ color: "text.secondary" }} />
                  </InputAdornment>
                ),
              },
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                size="small"
                sx={{ borderRadius: "50%" }}
              />
            }
            label={<Typography color="text.secondary">Remember me for 30 days</Typography>}
            sx={{ mb: 2, ml: -0.5 }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={!canSubmit}
            endIcon={<ArrowForwardIcon />}
            sx={{ py: 1.25, fontWeight: 700, borderRadius: 2, textTransform: "none", fontSize: "1rem" }}
          >
            Sign In
          </Button>

          <Typography sx={{ mt: 2.5, textAlign: "center", color: "text.secondary", fontSize: "0.9rem" }}>
            Don&apos;t have an account?{" "}
            {onSwitchToRegister ? (
              <Link
                component="button"
                type="button"
                underline="hover"
                onClick={() => {
                  handleClose();
                  onSwitchToRegister();
                }}
                sx={{ fontWeight: 700, cursor: "pointer", border: "none", background: "none", p: 0, font: "inherit" }}
              >
                Create an account
              </Link>
            ) : (
              <Link
                component={RouterLink}
                to="?signup=1"
                onClick={handleClose}
                fontWeight={700}
              >
                Create an account
              </Link>
            )}
          </Typography>

          <Typography
            variant="caption"
            sx={{ mt: 3, textAlign: "center", color: "text.secondary", lineHeight: 1.5, display: "block" }}
          >
            By logging in, you agree to Schedlify&apos;s{" "}
            <Link href="#" underline="hover">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" underline="hover">
              Privacy Policy
            </Link>
            .
          </Typography>
        </Box>
      </Box>
    </Dialog>
  );
}

export default SignInDialog;
