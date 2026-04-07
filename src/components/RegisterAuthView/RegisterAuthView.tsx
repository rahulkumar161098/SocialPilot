import * as React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Link,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Avatar,
  Paper,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const NAVY = "#1E2B6E";
const NAVY_DEEP = "#162456";
const PANEL_ACCENT = "rgba(46, 139, 255, 0.35)";

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

function AppleIcon() {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      sx={{ width: 18, height: 18, mr: 1 }}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
      />
    </Box>
  );
}

export interface RegisterAuthViewProps {
  /** Tighter padding for use inside a dialog */
  compact?: boolean;
  /** When false (e.g. dialog closed), form fields reset */
  open?: boolean;
  /** When set, "Sign In" triggers this (e.g. open login dialog) instead of navigating */
  onRequestSignIn?: () => void;
  /**
   * After a valid registration submit (e.g. from the signup dialog), parent runs first-time
   * verification (OTP). When omitted, navigates to the dashboard instead.
   */
  onRegistrationComplete?: (email: string) => void;
}

export function RegisterAuthView({
  compact = false,
  open = true,
  onRequestSignIn,
  onRegistrationComplete,
}: RegisterAuthViewProps) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [agreed, setAgreed] = React.useState(false);
  const [toastOpen, setToastOpen] = React.useState(true);
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    if (!open) {
      setFullName("");
      setEmail("");
      setPassword("");
      setAgreed(false);
      setShowPassword(false);
    }
  }, [open]);

  const pad = compact ? { xs: 3, sm: 4 } : { xs: 4, md: 6 };
  const gapStack = compact ? 2.5 : 3;

  const canCreateAccount =
    agreed && Boolean(email.trim()) && Boolean(password) && Boolean(fullName.trim());

  const handleCreateAccount = () => {
    if (!canCreateAccount) return;
    const trimmedEmail = email.trim();
    if (onRegistrationComplete) {
      onRegistrationComplete(trimmedEmail);
      return;
    }
    navigate("/dashboard");
  };

  const signInEl = onRequestSignIn ? (
    <Link
      component="button"
      type="button"
      onClick={onRequestSignIn}
      underline="hover"
      sx={{
        cursor: "pointer",
        fontWeight: 600,
        border: "none",
        background: "none",
        p: 0,
        font: "inherit",
        color: "primary.main",
      }}
    >
      Sign In
    </Link>
  ) : (
    <Link component={RouterLink} to="/" underline="hover" fontWeight={600}>
      Sign In
    </Link>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: compact ? "auto" : { xs: "100vh", md: "100vh" },
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Left — marketing */}
      <Box
        sx={{
          flex: { md: "0 0 44%", lg: "0 0 42%" },
          minHeight: { xs: 280, md: "auto" },
          bgcolor: NAVY,
          color: "#fff",
          px: pad,
          py: compact ? 3 : { xs: 4, md: 6 },
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Box
          component={RouterLink}
          to="/"
          sx={{
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

        <Paper
          elevation={0}
          sx={{
            alignSelf: "flex-start",
            px: 1.75,
            py: 0.75,
            borderRadius: 999,
            bgcolor: "rgba(255,255,255,0.08)",
            border: "1px solid",
            borderColor: PANEL_ACCENT,
            display: "flex",
            alignItems: "center",
            gap: 0.75,
            mb: 3,
          }}
        >
          <CheckCircleOutlineIcon sx={{ fontSize: 18, color: "#7EB6FF" }} />
          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: "#9EC5FF",
              fontSize: "0.68rem",
            }}
          >
            TRUSTED BY 2,000+ STUDIOS
          </Typography>
        </Paper>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            lineHeight: 1.15,
            fontSize: compact ? "clamp(1.5rem, 4vw, 2rem)" : "clamp(1.75rem, 4vw, 2.75rem)",
            mb: "auto",
            maxWidth: 420,
          }}
        >
          Elevate your agency&apos;s creative output.
        </Typography>

        <Paper
          elevation={0}
          sx={{
            mt: { xs: 4, md: 6 },
            p: 2.5,
            borderRadius: 2,
            bgcolor: "rgba(0,0,0,0.2)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(8px)",
          }}
        >
          <Typography
            sx={{
              fontStyle: "italic",
              color: "rgba(255,255,255,0.92)",
              fontSize: "0.95rem",
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            &ldquo;Schedlify has completely transformed how we handle client social workflows.
            It&apos;s the first tool that feels built for designers, not just data
            analysts.&rdquo;
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Avatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop"
              alt=""
              sx={{ width: 40, height: 40 }}
            />
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: "0.9rem" }}>Julian Vance</Typography>
              <Typography sx={{ opacity: 0.75, fontSize: "0.8rem" }}>
                Creative Director, NeoStudio
              </Typography>
            </Box>
          </Box>
        </Paper>

        <Box
          sx={{
            mt: 4,
            pt: 2,
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            alignItems: "center",
            typography: "caption",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          <Typography component="span">© {new Date().getFullYear()} Schedlify</Typography>
          <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.7 }}>
            Privacy Policy
          </Link>
          <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.7 }}>
            Terms of Service
          </Link>
        </Box>
      </Box>

      {/* Right — form */}
      <Box
        sx={{
          flex: 1,
          bgcolor: "#F4F5F7",
          px: pad,
          py: compact ? 3 : { xs: 4, md: 7 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {toastOpen && (
          <Paper
            elevation={4}
            sx={{
              position: "fixed",
              bottom: 24,
              right: 24,
              zIndex: 10,
              maxWidth: 320,
              p: 1.5,
              pr: 4,
              borderRadius: 2,
              display: { xs: "none", sm: "flex" },
              gap: 1.5,
              alignItems: "flex-start",
              border: "1px solid",
              borderColor: "rgba(0,0,0,0.06)",
            }}
          >
            <IconButton
              size="small"
              onClick={() => setToastOpen(false)}
              sx={{ position: "absolute", top: 4, right: 4, color: "text.secondary" }}
              aria-label="Dismiss notification"
            >
              <CloseIcon fontSize="small" />
            </IconButton>
            <Avatar
              variant="rounded"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop"
              alt=""
              sx={{ width: 44, height: 44, borderRadius: 1.5 }}
            />
            <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.85rem", pt: 0.25 }}>
              <strong style={{ color: "#111" }}>Just joined:</strong> Sarah from MetaDesign just
              started their trial.
            </Typography>
          </Paper>
        )}

        <Box sx={{ maxWidth: 400, width: "100%", mx: "auto" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, color: "text.primary", mb: 1, letterSpacing: "-0.02em" }}
          >
            Create your workspace
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: gapStack }}>
            Start your 14-day free trial. No credit card required.
          </Typography>

          <Box sx={{ display: "flex", gap: 1.5, mb: 2.5 }}>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                py: 1.25,
                bgcolor: "#fff",
                borderColor: "rgba(0,0,0,0.08)",
                color: "text.primary",
                boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
                "&:hover": { borderColor: "rgba(0,0,0,0.12)", bgcolor: "#fff" },
              }}
            >
              <GoogleIcon />
              Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                py: 1.25,
                bgcolor: "#fff",
                borderColor: "rgba(0,0,0,0.08)",
                color: "text.primary",
                boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
                "&:hover": { borderColor: "rgba(0,0,0,0.12)", bgcolor: "#fff" },
              }}
            >
              <AppleIcon />
              Apple
            </Button>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2.5 }}>
            <Box sx={{ flex: 1, height: 1, bgcolor: "rgba(0,0,0,0.08)" }} />
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", fontWeight: 600, letterSpacing: "0.08em" }}
            >
              OR WITH EMAIL
            </Typography>
            <Box sx={{ flex: 1, height: 1, bgcolor: "rgba(0,0,0,0.08)" }} />
          </Box>

          <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ letterSpacing: "0.06em" }}>
            FULL NAME
          </Typography>
          <TextField
            fullWidth
            placeholder="Johnathan Doe"
            margin="dense"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="name"
            sx={{ mb: 2, "& .MuiOutlinedInput-root": { bgcolor: "#fff", borderRadius: 2 } }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineOutlinedIcon sx={{ color: "text.disabled" }} />
                  </InputAdornment>
                ),
              },
            }}
          />

          <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ letterSpacing: "0.06em" }}>
            WORK EMAIL
          </Typography>
          <TextField
            fullWidth
            type="email"
            placeholder="john@studio.com"
            margin="dense"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            sx={{ mb: 2, "& .MuiOutlinedInput-root": { bgcolor: "#fff", borderRadius: 2 } }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineOutlinedIcon sx={{ color: "text.disabled" }} />
                  </InputAdornment>
                ),
              },
            }}
          />

          <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ letterSpacing: "0.06em" }}>
            PASSWORD
          </Typography>
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            margin="dense"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            sx={{ mb: 1.5, "& .MuiOutlinedInput-root": { bgcolor: "#fff", borderRadius: 2 } }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon sx={{ color: "text.disabled" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <VisibilityOffOutlinedIcon sx={{ color: "text.disabled" }} />
                      ) : (
                        <VisibilityOutlinedIcon sx={{ color: "text.disabled" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={agreed}
                onChange={(_, c) => setAgreed(c)}
                sx={{
                  color: "text.disabled",
                  "&.Mui-checked": { color: "primary.main" },
                }}
              />
            }
            label={
              <Typography variant="body2" color="text.secondary">
                I agree to the{" "}
                <Link href="#" underline="hover" color="primary">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" underline="hover" color="primary">
                  Privacy Policy
                </Link>
                .
              </Typography>
            }
            sx={{ alignItems: "flex-start", ml: -1, mb: 2 }}
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            disabled={!canCreateAccount}
            onClick={handleCreateAccount}
            sx={{
              py: 1.35,
              borderRadius: 2,
              fontWeight: 700,
              fontSize: "1rem",
              boxShadow: "none",
              bgcolor: NAVY_DEEP,
              "&:hover": { bgcolor: NAVY, boxShadow: "none" },
            }}
          >
            Create Account
          </Button>

          <Typography variant="body2" textAlign="center" sx={{ mt: 2.5, color: "text.secondary" }}>
            Already have an account? {signInEl}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
