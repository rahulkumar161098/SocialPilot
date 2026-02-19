
import React from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  Link,
} from "@mui/material";

export const RegisterPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #23214B 0%, #2E2A72 40%, #3C5BA9 100%)",
        p: 2,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          maxWidth: 1000,
          width: "100%",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <Grid container>
          {/* Left Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
              p: 6,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Join Us 🚀
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8 }}>
              Create your account and start managing your social media
              scheduling smarter and faster.
            </Typography>

            <Box
              component="img"
              src="/signup-illustration.png"
              alt="signup"
              sx={{ mt: 4, width: "100%", maxWidth: 350 }}
            />
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6} sx={{ p: 6 }}>
            <Typography variant="h5" fontWeight={600} mb={3}>
              Create Account
            </Typography>

            <TextField
              fullWidth
              label="Full Name"
              margin="normal"
            />

            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
            />

            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              margin="normal"
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                py: 1.5,
                borderRadius: 3,
                textTransform: "none",
                fontSize: "1rem",
                background:
                  "linear-gradient(90deg, #60A5FA 0%, #8A7CFF 100%)",
              }}
            >
              Create Account
            </Button>

            <Typography variant="body2" textAlign="center" mt={3}>
              Already have an account?{" "}
              <Link href="#" underline="hover">
                Login
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
