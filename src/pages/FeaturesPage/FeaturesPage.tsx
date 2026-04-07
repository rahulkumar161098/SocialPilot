import React from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import HubIcon from "@mui/icons-material/Hub";
import ScheduleIcon from "@mui/icons-material/Schedule";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Link as RouterLink } from "react-router-dom";

/** Schedlify-style marketing palette (aligned with publicTheme). */
const NAVY = "#2D3E99";
const ACCENT = "#2E8BFF";
const PAGE_BG = "#F9F9F9";
const MUTED_SECTION = "rgba(45, 62, 153, 0.06)";

const infrastructure = [
  {
    title: "Editorial calendar",
    description:
      "Campaign lanes, quiet weeks, and launch moments in one calm timeline—built for how editors actually plan.",
    icon: <ScheduleIcon sx={{ fontSize: 26 }} />,
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80",
  },
  {
    title: "Performance signals",
    description:
      "Narrative-level analytics: which stories resonate, where to double down, and what to retire.",
    icon: <AnalyticsIcon sx={{ fontSize: 26 }} />,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    title: "Smart suggestions",
    description:
      "Context-aware prompts at the right moment—tone, timing, and format without another noisy feed.",
    icon: <AutoAwesomeIcon sx={{ fontSize: 26 }} />,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
  },
  {
    title: "Multi-channel sync",
    description:
      "One source of truth across networks. Publish, adapt, and keep brand voice consistent everywhere.",
    icon: <HubIcon sx={{ fontSize: 26 }} />,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
];

const bullet = (text: string) => (
  <ListItem key={text} disableGutters sx={{ py: 0.5, alignItems: "flex-start" }}>
    <ListItemIcon sx={{ minWidth: 36, mt: 0.25 }}>
      <CheckCircleOutlineIcon sx={{ color: ACCENT, fontSize: 22 }} />
    </ListItemIcon>
    <ListItemText
      primary={text}
      primaryTypographyProps={{
        variant: "body2",
        color: "text.secondary",
        sx: { lineHeight: 1.7 },
      }}
    />
  </ListItem>
);

function FeaturesPage() {
  return (
    <Box sx={{ bgcolor: PAGE_BG, overflow: "hidden" }}>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          pt: { xs: 3, md: 5 },
          pb: { xs: 8, md: 11 },
          px: { xs: 2, md: 3 },
          bgcolor: "#FFFFFF",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Chip
                label="THE EDITORIAL STANDARD"
                size="small"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  fontSize: "0.65rem",
                  height: 28,
                  bgcolor: MUTED_SECTION,
                  color: NAVY,
                  border: "1px solid",
                  borderColor: "rgba(45, 62, 153, 0.14)",
                }}
              />
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  color: "#111111",
                  mb: 2,
                  fontWeight: 800,
                }}
              >
                Precision in{" "}
                <Box component="span" sx={{ color: NAVY }}>
                  Every
                </Box>{" "}
                Post.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#555555",
                  mb: 3,
                  maxWidth: 500,
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                }}
              >
                Schedlify gives you infrastructure-grade control over social:
                plan, polish, and publish with the same rigor you bring to print
                and product.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  component={RouterLink}
                  to="?signup=1"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: NAVY,
                    "&:hover": { bgcolor: "#243680" },
                    boxShadow: "0 12px 32px rgba(45, 62, 153, 0.35)",
                  }}
                >
                  Explore the Engine
                </Button>
                <Button
                  component={RouterLink}
                  to="/pricing"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: NAVY,
                    color: NAVY,
                    bgcolor: "#FFFFFF",
                    "&:hover": {
                      borderColor: NAVY,
                      bgcolor: "rgba(45, 62, 153, 0.04)",
                    },
                  }}
                >
                  View Use Cases
                </Button>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 28px 70px rgba(45, 62, 153, 0.18)",
                  border: "1px solid rgba(45, 62, 153, 0.08)",
                }}
              >
                <Box
                  component="img"
                  src={`${process.env.PUBLIC_URL}/images/hero-schedlify.png`}
                  alt="Schedlify dashboard preview"
                  sx={{
                    width: "100%",
                    display: "block",
                    aspectRatio: "4 / 3",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Core infrastructure */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          px: { xs: 2, md: 3 },
          bgcolor: PAGE_BG,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 1 }}>
            <Typography
              variant="overline"
              sx={{
                color: NAVY,
                fontWeight: 800,
                letterSpacing: "0.2em",
                display: "block",
                mb: 1.5,
              }}
            >
              Platform
            </Typography>
            <Box
              sx={{
                width: 48,
                height: 3,
                borderRadius: 2,
                bgcolor: ACCENT,
                mx: "auto",
                mb: 2,
              }}
            />
            <Typography
              variant="h2"
              component="h2"
              sx={{ color: "#111111", fontWeight: 800, mb: 1 }}
            >
              The Core Infrastructure
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#555555",
                maxWidth: 560,
                mx: "auto",
                lineHeight: 1.75,
              }}
            >
              Four pillars that keep your team in flow—from first draft to
              multi-channel launch.
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ mt: { xs: 1, md: 2 } }}>
            {infrastructure.map((item) => (
              <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  sx={{
                    height: "100%",
                    bgcolor: "#FFFFFF",
                    borderRadius: 2.5,
                    p: 2.5,
                    border: "1px solid rgba(45, 62, 153, 0.08)",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      bgcolor: "rgba(46, 139, 255, 0.12)",
                      color: ACCENT,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "#111111" }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#555555", lineHeight: 1.7, flex: 1, mb: 2 }}
                  >
                    {item.description}
                  </Typography>
                  <Box
                    component="img"
                    src={item.image}
                    alt=""
                    sx={{
                      width: "100%",
                      height: 120,
                      objectFit: "cover",
                      borderRadius: 2,
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Scheduling precision — feature 1 */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          px: { xs: 2, md: 3 },
          bgcolor: "#FFFFFF",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
              <Typography
                variant="overline"
                sx={{ color: ACCENT, fontWeight: 700, letterSpacing: "0.14em" }}
              >
                Scheduling precision
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mt: 1, mb: 2, color: "#111111" }}>
                The Smart Suggestion AI Engine
              </Typography>
              <Typography variant="body1" sx={{ color: "#555555", mb: 2, lineHeight: 1.75 }}>
                Models trained on editorial context—not generic captions—so
                recommendations feel like a senior strategist in the room.
              </Typography>
              <List dense disablePadding>
                {[
                  "Tone and audience-aware rewrites in one click",
                  "Optimal send windows per channel without spreadsheet math",
                  "Guardrails that keep brand voice consistent across teams",
                ].map(bullet)}
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80"
                  alt="Neural network visualization"
                  sx={{
                    width: "100%",
                    aspectRatio: "4 / 3",
                    objectFit: "cover",
                    display: "block",
                    filter: "brightness(0.85) contrast(1.05)",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Feature 2 — reversed */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          px: { xs: 2, md: 3 },
          bgcolor: PAGE_BG,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=80"
                  alt="Multi-monitor operations"
                  sx={{
                    width: "100%",
                    aspectRatio: "4 / 3",
                    objectFit: "cover",
                    display: "block",
                    filter: "brightness(0.9)",
                  }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="overline"
                sx={{ color: ACCENT, fontWeight: 700, letterSpacing: "0.14em" }}
              >
                Orchestration
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mt: 1, mb: 2, color: "#111111" }}>
                Multi-Channel Orchestration
              </Typography>
              <Typography variant="body1" sx={{ color: "#555555", mb: 2, lineHeight: 1.75 }}>
                One blueprint, many surfaces. Push variants per network while
                preserving a single campaign narrative.
              </Typography>
              <List dense disablePadding>
                {[
                  "Network-specific formatting and previews",
                  "Approval flows that scale from solo creators to agencies",
                  "Audit trail for every edit, schedule change, and publish",
                ].map(bullet)}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonial */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          px: { xs: 2, md: 3 },
          bgcolor: MUTED_SECTION,
        }}
      >
        <Container maxWidth="md">
          <FormatQuoteIcon
            sx={{
              fontSize: 56,
              color: ACCENT,
              opacity: 0.85,
              display: "block",
              mx: "auto",
              mb: 2,
            }}
          />
          <Typography
            component="blockquote"
            textAlign="center"
            sx={{
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: { xs: "1.2rem", md: "1.45rem" },
              lineHeight: 1.5,
              color: "#111111",
              mb: 3,
            }}
          >
            &ldquo;We finally treat social with the same discipline as our annual
            report. Schedlify is the first tool that respects editorial
            process.&rdquo;
          </Typography>
          <Stack alignItems="center" spacing={1.5}>
            <Avatar
              alt="Morgan Ellis"
              src="https://i.pravatar.cc/160?img=47"
              sx={{ width: 56, height: 56, border: `2px solid ${NAVY}` }}
            />
            <Box textAlign="center">
              <Typography variant="subtitle1" fontWeight={700} color="#111111">
                Morgan Ellis
              </Typography>
              <Typography variant="body2" sx={{ color: "#555555" }}>
                VP Brand, Northwind Collective
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 3 },
          bgcolor: PAGE_BG,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              borderRadius: 3,
              py: { xs: 6, md: 8 },
              px: { xs: 3, md: 6 },
              bgcolor: NAVY,
              color: "#FFFFFF",
              textAlign: "center",
              boxShadow: "0 24px 60px rgba(45, 62, 153, 0.35)",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#FFFFFF",
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "1.65rem", md: "2.25rem" },
              }}
            >
              Start Building Your Legacy.
            </Typography>
            <Typography
              sx={{
                opacity: 0.9,
                maxWidth: 480,
                mx: "auto",
                mb: 4,
                lineHeight: 1.75,
              }}
            >
              Launch your workspace or walk through a private demo with our
              team.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                component={RouterLink}
                to="/dashboard"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#FFFFFF",
                  color: NAVY,
                  "&:hover": { bgcolor: "rgba(255,255,255,0.92)" },
                }}
              >
                Launch Your Dashboard
              </Button>
              <Button
                component={RouterLink}
                to="?signup=1"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "rgba(255,255,255,0.75)",
                  color: "#FFFFFF",
                  "&:hover": {
                    borderColor: "#FFFFFF",
                    bgcolor: "rgba(255,255,255,0.08)",
                  },
                }}
              >
                Request Private Demo
              </Button>
            </Stack>
            <Typography
              variant="caption"
              sx={{ display: "block", mt: 4, opacity: 0.75 }}
            >
              © {new Date().getFullYear()} Schedlify · SOC2-ready infrastructure
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default FeaturesPage;
