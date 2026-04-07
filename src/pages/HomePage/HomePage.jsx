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
  AvatarGroup,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BarChartIcon from "@mui/icons-material/BarChart";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import GroupsIcon from "@mui/icons-material/Groups";
import { Link as RouterLink } from "react-router-dom";
import PricingPlansGrid from "../../components/Pricing/PricingPlansGrid";
import LinearProgress from '@mui/material/LinearProgress';

const serifAccent = {
  fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
  fontStyle: "italic",
  fontWeight: 600,
};


const HomePage = () => {
  return (
    <Box sx={{ bgcolor: "background.default", overflow: "hidden" }}>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          pt: { xs: 4, md: 6 },
          pb: { xs: 8, md: 12 },
          px: { xs: 2, md: 3 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Chip
                label="Introducing Schedlify"
                size="small"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  bgcolor: "rgba(45, 62, 153, 0.06)",
                  color: "primary.main",
                  border: "1px solid",
                  borderColor: "rgba(45, 62, 153, 0.12)",
                }}
              />
              <Typography
                variant="h1"
                component="h1"
                sx={{ color: "text.primary", mb: 2 }}
              >
                Social Media,{" "}
                <Box component="span" sx={serifAccent} color="primary.main">
                  Scheduled
                </Box>
                .
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3, maxWidth: 480, lineHeight: 1.75, fontSize: "1.05rem" }}
              >
                Transition from cluttered dashboards to a curated editorial
                workspace. Plan, publish, and refine your brand story with tools
                built for clarity and creative control.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ xs: "stretch", sm: "center" }}>
                <Button
                  component={RouterLink}
                  to="?signup=1"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Start Designing Now
                </Button>
                <Button
                  color="inherit"
                  startIcon={<PlayArrowIcon />}
                  sx={{ color: "text.secondary", fontWeight: 600 }}
                >
                  View Showcase
                </Button>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "20px",
                  boxShadow: "0 24px 60px rgba(45, 62, 153, 0.15)",
                  border: "10px solid white",
                  transform: "rotate(3deg)",
                  // transformOrigin: "center center",
                  "&:hover": {
                    transform: "rotate(0deg)",
                    animation: "slideIn 2s ease-in"
                  },
                  
                }}
              >
                <Box
                  component="img"
                  src={`${process.env.PUBLIC_URL}/images/pexels-adempercem-35576326.jpg`}
                  alt="Minimal structure in nature"
                  sx={{
                    width: "100%",
                    display: "block",
                    aspectRatio: "4 / 3",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: "-40px",
                    bottom: "-30px",
                    bgcolor: "background.paper",
                    borderRadius: 1,
                    p: 1,
                    maxWidth: { xs: 260, sm: 280 },
                    boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                    transform: "rotate(0deg)",
                    // transformOrigin: "center center",
                    animation: "float 2s ease-in-out infinite alternate",
                    "@keyframes float": {
                      "0%": {
                        transform: "translateY(0px)",
                      },
                      "100%": {
                        transform: "translateY(-20px)",
                      },
                    },
                    
                  }}
                >
                  <Stack direction="row"  spacing={1.5} alignItems="center" mb={1.5} >
                    <Avatar sx={{ width: 40, height: 40, bgcolor: "primary.main" }}>
                      AT
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" color="text.primary" fontWeight={700}>
                        Alex Thompson
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Creative Director
                      </Typography>
                      <LinearProgress variant="determinate" value={50} />
                      <Typography variant="caption" color="text.secondary">
                        Best engagement predicted at <span style={{ fontWeight: 600, color: "#2D3E99" }}> 10:00 AM </span> 
                        </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features — bento */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          px: { xs: 2, md: 3 },
          bgcolor: "background.paper",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            textAlign="center"
            color="text.primary"
            sx={{ mb: 1 }}
          >
            Engineered for Excellence
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ mb: 5, maxWidth: 560, mx: "auto" }}
          >
            Everything you need to orchestrate content, measure impact, and
            collaborate without the noise.
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box
                sx={{
                  height: "100%",
                  bgcolor: "background.paper",
                  borderRadius: 3,
                  p: 3,
                  border: "1px solid",
                  borderColor: "rgba(45, 62, 153, 0.08)",
                  boxShadow: "0 8px 32px rgba(45, 62, 153, 0.06)",
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      bgcolor: "rgba(45, 62, 153, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "primary.main",
                    }}
                  >
                    <CalendarMonthIcon />
                  </Box>
                  <Typography variant="h5" component="h3">
                    Master Scheduling
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Drag editorial calendars that mirror how your team actually
                  works—seasons, campaigns, and quiet moments in one view.
                </Typography>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80"
                  alt="Planner preview"
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    maxHeight: 220,
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  height: "100%",
                  minHeight: { md: 360 },
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                  borderRadius: 3,
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 16px 48px rgba(45, 62, 153, 0.25)",
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      bgcolor: "rgba(255,255,255,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <BarChartIcon />
                  </Box>
                  <Typography variant="h5" component="h3" color="inherit">
                    Deep Analytics
                  </Typography>
                </Stack>
                <Typography variant="body2" sx={{ opacity: 0.9, mb: 4 }}>
                  Attribution that respects the craft—see which narratives land,
                  not just vanity counts.
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 800, mt: "auto", lineHeight: 1.1 }}
                >
                  +142%
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.85, mt: 1 }}>
                  with increased reach
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  height: "100%",
                  bgcolor: "rgba(45, 62, 153, 0.04)",
                  borderRadius: 3,
                  p: 3,
                  border: "1px solid",
                  borderColor: "rgba(45, 62, 153, 0.06)",
                }}
              >
                <HelpOutlineIcon sx={{ color: "primary.main", fontSize: 36, mb: 2 }} />
                <Typography variant="h6" component="h3" mb={1} color="text.primary">
                  Smart Suggestions
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Context-aware prompts when you need them—not another noisy
                  feed.
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  <Chip label="Content Optimization" size="small" />
                  <Chip label="Insightful Analytics" size="small" variant="outlined" />
                </Stack>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Box
                sx={{
                  height: "100%",
                  bgcolor: "background.paper",
                  borderRadius: 3,
                  p: 3,
                  border: "1px solid",
                  borderColor: "rgba(45, 62, 153, 0.08)",
                  boxShadow: "0 8px 32px rgba(45, 62, 153, 0.06)",
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      bgcolor: "rgba(45, 62, 153, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "primary.main",
                    }}
                  >
                    <GroupsIcon />
                  </Box>
                  <Typography variant="h5" component="h3">
                    Studio Collaboration
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Approvals, annotations, and version history that keep senior
                  creatives in flow.
                </Typography>
                <AvatarGroup max={3} sx={{ justifyContent: "flex-start" }}>
                  <Avatar alt="" src="https://i.pravatar.cc/150?img=12" />
                  <Avatar alt="" src="https://i.pravatar.cc/150?img=32" />
                  <Avatar alt="" src="https://i.pravatar.cc/150?img=45" />
                  <Avatar alt="" src="https://i.pravatar.cc/150?img=68" />
                  <Avatar alt="" src="https://i.pravatar.cc/150?img=5" />
                  <Avatar alt="" src="https://i.pravatar.cc/150?img=9" />
                  <Avatar alt="" src="https://i.pravatar.cc/150?img=11" />
                </AvatarGroup>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Pricing preview */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          px: { xs: 2, md: 3 },
          bgcolor: "background.default",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{
              display: "block",
              textAlign: "center",
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: "0.18em",
              mb: 2,
            }}
          >
            Plans &amp; pricing
          </Typography>
          <Typography variant="h2" color="text.primary" component="h2" textAlign="center" sx={{ mb: 1 }}>
            Precision pricing for your stack
          </Typography>
          <Typography
            variant="body1"
            color="black"
            textAlign="center"
            sx={{ mb: 4, maxWidth: 560, mx: "auto", lineHeight: 1.75 }}
          >
            Pick a tier that matches your scope. Switch billing anytime—or explore the
            full comparison on our pricing page.
          </Typography>
          <PricingPlansGrid />
          <Stack alignItems="center" sx={{ mt: 4 }}>
            <Button
              component={RouterLink}
              to="/pricing"
              variant="outlined"
              color="primary"
              size="large"
            >
              View full comparison &amp; FAQs
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Testimonial */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          px: 2,
          bgcolor: "rgba(45, 62, 153, 0.04)",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="blockquote"
            textAlign="center"
            sx={{
              color: "text.primary",
              fontWeight: 700,
              lineHeight: 1.45,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
            }}
          >
            &ldquo;Schedlify has completely shifted our workflow. It doesn&apos;t
            just automate; it elevates our entire brand aesthetic through its
            intentional design.&rdquo;
          </Typography>
          <Box
            sx={{
              width: 48,
              height: 3,
              bgcolor: "primary.main",
              borderRadius: 1,
              mx: "auto",
              mt: 3,
              mb: 2,
            }}
          />
          <Typography
            variant="caption"
            display="block"
            textAlign="center"
            letterSpacing="0.2em"
            fontWeight={700}
            color="text.secondary"
          >
            ELARA DESIGN STUDIO
          </Typography>
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" sx={{ py: { xs: 8, md: 10 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              borderRadius: 4,
              py: { xs: 6, md: 8 },
              px: { xs: 3, md: 8 },
              backgroundColor: "#2D3E99",
              backgroundImage: `
                repeating-linear-gradient(
                  -12deg,
                  transparent,
                  transparent 12px,
                  rgba(255,255,255,0.03) 12px,
                  rgba(255,255,255,0.03) 13px
                )
              `,
              color: "#fff",
              textAlign: "center",
            }}
          >
            <Typography variant="h2" sx={{ color: "#fff", mb: 2, fontSize: { xs: "1.75rem", md: "2.25rem" } }}>
              Ready to build your digital legacy?
            </Typography>
            <Typography
              sx={{
                opacity: 0.88,
                maxWidth: 520,
                mx: "auto",
                mb: 4,
                lineHeight: 1.7,
              }}
            >
              Join 2,000+ high-end agencies and creators who treat social as
              editorial—not an afterthought.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                component={RouterLink}
                to="?signup=1"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#fff",
                  color: "primary.main",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.92)" },
                }}
              >
                Get Started Free
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "rgba(255,255,255,0.6)",
                  color: "#fff",
                  "&:hover": {
                    borderColor: "#fff",
                    bgcolor: "rgba(255,255,255,0.06)",
                  },
                }}
              >
                Book a Demo
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
