import * as React from 'react';
// import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
// import Typography from '@mui/material/Typography';
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    Paper,
} from "@mui/material";
import { Link } from 'react-router-dom';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


function SignInDialog({open, onClose}: any) {
    console.log("SignInDialog props:", {open, onClose});
    const [localOpen, setLocalOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleClose = () => {
        onClose();
    };

    const handleLogin = () => {
        // Implement login logic here
        console.log("Login button clicked");
        // For demonstration, we'll just navigate to the dashboard
        navigate("/dashboard");
        onClose();

    }

    return (
        <Dialog
            // onClose={handleClose}s
            aria-labelledby="customized-dialog-title"
            open={open}
            onClose={onClose}
            maxWidth={false}
        //   PaperProps={{
        //     sx: {
        //       width: 900,
        //       borderRadius: 3,
        //       overflow: "hidden",
        //     },
        //   }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #1e1e2f, #23214B)",
                    // p: 2,
                }}
            >
                <Grid container>
                    {/* Left Section */}
                    <Grid
                        sx={{
                            background: "linear-gradient(135deg, #23214B, #2E2A72)",
                            color: "#fff",
                            p: 5,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Welcome Back!
                        </Typography>

                        <Typography variant="body1" sx={{ opacity: 0.8, mb: 4 }}>
                            Manage Your Social Media with Ease
                        </Typography>

                        {/* Illustration Placeholder */}
                        <Box
                            component="img"
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            alt="Illustration"
                            sx={{
                                width: "70%",
                                maxWidth: 250,
                            }}
                        />
                    </Grid>

                    {/* Right Section */}
                    <Grid
                        sx={{
                            p: 5,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <Typography variant="h5" fontWeight="bold" mb={3}>
                            Login
                        </Typography>

                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />

                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />

                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                mt: 3,
                                py: 1.3,
                                fontWeight: "bold",
                                borderRadius: 2,
                                background: "linear-gradient(90deg, #60A5FA, #6D5DF6)",
                                textTransform: "none",
                                "&:hover": {
                                    background: "linear-gradient(90deg, #5B4FE1, #1E40AF)",
                                },
                            }}
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                        {/* Extra Actions */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: 2,
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{ cursor: "pointer", color: "primary.main" }}
                            >
                                Forgot Password?
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{ cursor: "pointer", color: "primary.main" }}
                                
                            >
                                <Link to="/register" onClick={handleClose} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Create account
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Dialog>
    );
}

export default SignInDialog;