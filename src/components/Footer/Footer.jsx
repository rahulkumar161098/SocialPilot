import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #1E2147, #151733)",
        color: "text.primary",
        pt: 6,
        pb: 3,
        mt: 8,
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight={700} mb={2}>
              SocialPilot Pro
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              lineHeight={1.7}
            >
              Manage, schedule, and analyze your social media content with
              powerful automation tools.
            </Typography>

            {/* Social Icons */}
            <Stack direction="row" spacing={1.5} mt={2}>
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="subtitle1" fontWeight={600} mb={2}>
              Product
            </Typography>

            <Stack spacing={1}>
              <Link href="#" underline="none" color="text.secondary">
                Features
              </Link>
              <Link href="#" underline="none" color="text.secondary">
                Pricing
              </Link>
              <Link href="#" underline="none" color="text.secondary">
                Integrations
              </Link>
              <Link href="#" underline="none" color="text.secondary">
                Updates
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="subtitle1" fontWeight={600} mb={2}>
              Company
            </Typography>

            <Stack spacing={1}>
              <Link href="#" underline="none" color="text.secondary">
                About Us
              </Link>
              <Link href="#" underline="none" color="text.secondary">
                Careers
              </Link>
              <Link href="#" underline="none" color="text.secondary">
                Blog
              </Link>
              <Link href="#" underline="none" color="text.secondary">
                Contact
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="subtitle1" fontWeight={600} mb={2}>
              Support
            </Typography>

            <Stack spacing={1}>
              <Link href="#" underline="none" color="text.secondary">
                Help Center
              </Link>
              <Link href="#" underline="none" color="text.secondary">
                Documentation
              </Link>
              <Link href="#" underline="none" color="text.secondary">
                API Status
              </Link>
              <Link href="#" underline="none" color="text.secondary">
                Community
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="subtitle1" fontWeight={600} mb={2}>
              Legal
            </Typography>

            <Stack spacing={1}>
              <Link href="#" underline="none" color="text.secondary">
                Privacy Policy
              </Link>
              <Link href="#" underline="none" color="text.secondary">
                Terms of Service
              </Link>
              <Link href="#" underline="none" color="text.secondary">
                Cookie Policy
              </Link>
              <Link href="#" underline="none" color="text.secondary">
                Security
              </Link>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Divider
          sx={{
            my: 4,
            borderColor: "rgba(255,255,255,0.1)",
          }}
        />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} SocialPilot Pro. All rights reserved.
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Made with ❤️ in India
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
