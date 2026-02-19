import React from "react";
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from "@mui/material";
import { Bloodtype } from "@mui/icons-material";


const Banner = (Props) => {
    console.log("Banner Component Rendered", Props);
    const { height, source } = Props;
    const theme = useTheme();
    return (

        //     <Box sx={{ position: 'relative', height }}>
        //   <img
        //     src={source}
        //     alt="Banner"
        //     style={{
        //       width: '100%',
        //       height: height,
        //       objectFit: 'cover',
        //     }}
        //   />

        //   <Box
        //     sx={{
        //       position: 'absolute',
        //       top: '50%',
        //       left: { xs: '5%', md: '8%' },
        //       transform: 'translateY(-50%)',
        //       color: theme.palette.text.primary,
        //       maxWidth: { xs: '90%', md: '45%' },
        //     }}
        //   >
        //     <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: { xs: '2.5rem', md: '4rem' } }}>
        //       Schedule Your Posts.
        //       <br />
        //       Grow Automatically
        //     </Typography>

        //     <Typography variant="h4" sx={{ mt: 2 }}>
        //       Typography
        //     </Typography>
        //   </Box>
        // </Box>

        <Box sx={{ position: 'relative', height }}>
            {/* Image */}
            <img
                src={source}
                alt="Banner"
                style={{
                    width: '100%',
                    height: "100%",
                    objectFit: 'cover',
                }}
            />

            {/* Gradient Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.55) 0%,
        rgba(0, 0, 0, 0.15) 60%,
        rgba(0, 0, 0, 0.05) 100%
      )`,
                    zIndex: 1,
                }}
            />

            {/* Text Content */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: { xs: '5%', md: '8%' },
                    transform: 'translateY(-50%)',
                    color: '#fff',
                    maxWidth: { xs: '90%', md: '45%' },
                    zIndex: 2,
                }}
            >
                <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: { xs: '2.5rem', md: '4rem' } }}>
                    Schedule Your Posts.
                    <br />
                    Grow Automatically
                </Typography>

                <Typography variant="h4" sx={{ mt: 2 }}>
                    Typography
                </Typography>
            </Box>
        </Box>


    );
}

export default Banner;