import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { Box, Typography, Button, Link, InputBase } from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";

const NAVY = "#1E2B6E";
const NAVY_MID = "#24367F";
const OTP_LENGTH = 6;
const RESEND_SECONDS = 120;

export interface OtpVerificationDialogProps {
  open: boolean;
  onClose: () => void;
  email: string;
  onVerified: () => void;
  /** User abandons verification — e.g. return to sign-in or sign-up */
  onRequestLogout?: () => void;
  /** Copy tuned for post-registration verification (vs login). */
  registrationFlow?: boolean;
}

function formatMmSs(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function OtpVerificationDialog({
  open,
  onClose,
  email,
  onVerified,
  onRequestLogout,
  registrationFlow = false,
}: OtpVerificationDialogProps) {
  const [digits, setDigits] = React.useState<string[]>(() =>
    Array(OTP_LENGTH).fill("")
  );
  const [resendIn, setResendIn] = React.useState(0);
  const [resendNonce, setResendNonce] = React.useState(0);
  const inputsRef = React.useRef<(HTMLInputElement | null)[]>([]);

  React.useEffect(() => {
    if (!open) return;
    setDigits(Array(OTP_LENGTH).fill(""));
    const t = window.setTimeout(() => inputsRef.current[0]?.focus(), 100);
    return () => window.clearTimeout(t);
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    let remaining = RESEND_SECONDS;
    setResendIn(remaining);
    const id = window.setInterval(() => {
      remaining -= 1;
      setResendIn(Math.max(0, remaining));
      if (remaining <= 0) window.clearInterval(id);
    }, 1000);
    return () => window.clearInterval(id);
  }, [open, resendNonce]);

  const codeComplete = digits.every((d) => /^\d$/.test(d));

  const setDigitAt = (index: number, value: string) => {
    const v = value.replace(/\D/g, "").slice(-1);
    setDigits((prev) => {
      const next = [...prev];
      next[index] = v;
      return next;
    });
    if (v && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!text) return;
    const next = Array(OTP_LENGTH)
      .fill("")
      .map((_, i) => text[i] ?? "");
    setDigits(next);
    const focusIdx = Math.min(text.length, OTP_LENGTH - 1);
    inputsRef.current[focusIdx]?.focus();
  };

  const handleVerify = () => {
    if (!codeComplete) return;
    onVerified();
  };

  const handleResend = () => {
    if (resendIn > 0) return;
    setDigits(Array(OTP_LENGTH).fill(""));
    setResendNonce((n) => n + 1);
    window.setTimeout(() => inputsRef.current[0]?.focus(), 0);
  };

  const handleLogout = () => {
    onClose();
    onRequestLogout?.();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullWidth
      slotProps={{
        paper: {
          sx: {
            m: { xs: 1, sm: 2 },
            maxWidth: 920,
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
          flexDirection: { xs: "column", sm: "row" },
          minHeight: { xs: "auto", sm: 440 },
        }}
      >
        <Box
          sx={{
            flex: { sm: "0 0 40%" },
            background: `linear-gradient(165deg, ${NAVY} 0%, ${NAVY_MID} 55%, #1a245c 100%)`,
            color: "#fff",
            px: { xs: 3, sm: 4 },
            py: { xs: 4, sm: 5 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              opacity: 0.12,
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 40px,
                rgba(255,255,255,0.06) 40px,
                rgba(255,255,255,0.06) 80px
              )`,
              pointerEvents: "none",
            }}
          />
          <Box
            component={RouterLink}
            to="/"
            onClick={onClose}
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
                bgcolor: "rgba(255,255,255,0.14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ScheduleIcon sx={{ fontSize: 26, color: "#fff" }} />
            </Box>
            <Typography sx={{ fontWeight: 800, fontSize: "1.25rem", letterSpacing: "-0.02em" }}>
              Schedlify
            </Typography>
          </Box>
          <Typography
            variant="h4"
            sx={{
              position: "relative",
              fontWeight: 800,
              fontSize: { xs: "1.5rem", sm: "1.75rem" },
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Secure your digital blueprint.
          </Typography>
          <Typography
            sx={{
              position: "relative",
              opacity: 0.88,
              fontSize: "0.95rem",
              lineHeight: 1.65,
              maxWidth: 320,
            }}
          >
            Identity verification is the final step to ensure your workspace remains a private
            sanctuary for creation.
          </Typography>
          <Box
            sx={{
              position: "relative",
              mt: { xs: 4, sm: "auto" },
              pt: { xs: 2, sm: 4 },
              display: "flex",
              alignItems: "center",
              gap: 1,
              typography: "caption",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            <ShieldOutlinedIcon sx={{ fontSize: 18 }} />
            <span>End-to-end encrypted automation environment.</span>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            bgcolor: "#fff",
            px: { xs: 3, sm: 5 },
            py: { xs: 4, sm: 5 },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 800, color: "text.primary", mb: 1 }}>
            Enter verification code
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "0.95rem", mb: 3 }}>
            {registrationFlow ? (
              <>
                Welcome aboard — confirm your email to finish setting up your workspace. We sent a
                6-digit code to{" "}
                <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
                  {email || "your email"}
                </Box>
                .
              </>
            ) : (
              <>
                We&apos;ve sent a 6-digit code to{" "}
                <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
                  {email || "your email"}
                </Box>
              </>
            )}
          </Typography>

          <Box
            component="div"
            onPaste={handlePaste}
            sx={{ display: "flex", gap: 1, justifyContent: "flex-start", flexWrap: "wrap", mb: 3 }}
          >
            {digits.map((d, i) => (
              <InputBase
                key={i}
                inputRef={(el) => {
                  inputsRef.current[i] = el;
                }}
                value={d}
                onChange={(e) => setDigitAt(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                inputProps={{
                  maxLength: 1,
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  "aria-label": `Digit ${i + 1}`,
                  style: { textAlign: "center", fontSize: "1.25rem", fontWeight: 600 },
                }}
                sx={{
                  width: 48,
                  height: 52,
                  borderRadius: 2,
                  bgcolor: "#F3F4F6",
                  border: "1px solid",
                  borderColor: d ? "primary.main" : "rgba(0,0,0,0.08)",
                  px: 1,
                  transition: "border-color 0.15s",
                }}
              />
            ))}
          </Box>

          <Button
            variant="contained"
            color="primary"
            size="large"
            disabled={!codeComplete}
            onClick={handleVerify}
            endIcon={<ArrowForwardIcon />}
            sx={{
              py: 1.25,
              fontWeight: 700,
              borderRadius: 2,
              textTransform: "none",
              fontSize: "1rem",
            }}
          >
            Verify Identity
          </Button>

          <Box sx={{ mt: 3, mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Didn&apos;t receive a code?{" "}
              <Link
                component="button"
                type="button"
                onClick={handleResend}
                underline="hover"
                sx={{
                  cursor: resendIn > 0 ? "default" : "pointer",
                  fontWeight: 600,
                  border: "none",
                  background: "none",
                  p: 0,
                  font: "inherit",
                  color: resendIn > 0 ? "text.disabled" : "primary.main",
                  pointerEvents: resendIn > 0 ? "none" : "auto",
                }}
              >
                Resend code
              </Link>
            </Typography>
            <Box
              sx={{
                mt: 1.5,
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                px: 2,
                py: 0.75,
                borderRadius: 999,
                bgcolor: "rgba(45, 62, 153, 0.08)",
                typography: "caption",
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "primary.main",
              }}
            >
              <AccessTimeIcon sx={{ fontSize: 16 }} />
              {resendIn > 0 ? `RESEND IN ${formatMmSs(resendIn)}` : "YOU CAN RESEND NOW"}
            </Box>
          </Box>

          <Box sx={{ borderTop: "1px solid", borderColor: "divider", pt: 2, mt: "auto" }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                alignItems: "center",
                typography: "caption",
                color: "text.secondary",
                fontWeight: 600,
                letterSpacing: "0.04em",
              }}
            >
              <Link
                href="#"
                underline="hover"
                color="inherit"
                sx={{ display: "inline-flex", alignItems: "center", gap: 0.5 }}
              >
                <HelpOutlineIcon sx={{ fontSize: 18 }} />
                HELP CENTER
              </Link>
              <Link
                component="button"
                type="button"
                onClick={handleLogout}
                underline="hover"
                color="inherit"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  cursor: "pointer",
                  border: "none",
                  background: "none",
                  p: 0,
                  font: "inherit",
                }}
              >
                <LogoutIcon sx={{ fontSize: 18 }} />
                {registrationFlow ? "BACK TO SIGN UP" : "LOG OUT"}
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}
