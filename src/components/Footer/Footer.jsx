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
import { Link as RouterLink } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import ShareIcon from "@mui/icons-material/Share";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        pt: 8,
        pb: 4,
        mt: 0,
        borderTop: "1px solid",
        borderColor: "rgba(45, 62, 153, 0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" fontWeight={800} mb={2} color="primary">
              Schedlify
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              lineHeight={1.7}
              mb={2}
            >
              1200 Design Avenue, Suite 400
              <br />
              San Francisco, CA 94102
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                size="small"
                sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
                aria-label="website"
              >
                <LanguageIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
                aria-label="share"
              >
                <ShareIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
                aria-label="favorites"
              >
                <StarBorderIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="subtitle2" fontWeight={700} mb={2}>
              Product
            </Typography>
            <Stack spacing={1.25}>
              <Link
                component={RouterLink}
                to="/features"
                underline="hover"
                color="text.secondary"
                variant="body2"
              >
                Features
              </Link>
              <Link
                component={RouterLink}
                to="/pricing"
                underline="hover"
                color="text.secondary"
                variant="body2"
              >
                Pricing
              </Link>
              <Link href="#" underline="hover" color="text.secondary" variant="body2">
                Integrations
              </Link>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="subtitle2" fontWeight={700} mb={2}>
              Company
            </Typography>
            <Stack spacing={1.25}>
              <Link href="#" underline="hover" color="text.secondary" variant="body2">
                About
              </Link>
              <Link href="#" underline="hover" color="text.secondary" variant="body2">
                Careers
              </Link>
              <Link href="#" underline="hover" color="text.secondary" variant="body2">
                Blog
              </Link>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="subtitle2" fontWeight={700} mb={2}>
              Support
            </Typography>
            <Stack spacing={1.25}>
              <Link href="#" underline="hover" color="text.secondary" variant="body2">
                Help Center
              </Link>
              <Link href="#" underline="hover" color="text.secondary" variant="body2">
                Documentation
              </Link>
              <Link href="#" underline="hover" color="text.secondary" variant="body2">
                Contact
              </Link>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(45, 62, 153, 0.08)" }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Schedlify. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href="#" underline="hover" color="text.secondary" variant="body2">
              Privacy Policy
            </Link>
            <Typography variant="body2" color="text.secondary">
              /
            </Typography>
            <Link href="#" underline="hover" color="text.secondary" variant="body2">
              Terms of Service
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
