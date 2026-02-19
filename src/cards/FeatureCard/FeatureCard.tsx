// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import CardActionArea from '@mui/material/CardActionArea';
// import { Box } from '@mui/material';
// import {useTheme} from '@mui/material';

// const FeatureCard = () => {
//   const theme = useTheme();
  
//   return (
//     <Card sx={{ maxWidth: 300, p: 1, boxShadow: 3, bgcolor: theme.palette.primary.main }}>
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 2 }}>
//       <CardMedia
//       sx={{height: 80, width: 80}}
//         component="img"
//         image="https://picsum.photos/100/140"
//         alt="green iguana"
//       />
//       </Box>
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Auto Scheduling
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

// export default FeatureCard;


//     // box-shadow: #6d5df6 0px 1px 2px, #6d5df6 0px 2px 4px, #6d5df6 0px 4px 8px, rgba(35, 33, 75, 0.5) 0px 8px 16px, rgba(35, 33, 75, 0.5) 0px 16px 32px, rgba(35, 33, 75, 0.5) 0px 32px 64px;

// FeatureCards.tsx

import React from "react";
import { Box, Card, CardContent, Typography, Stack } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ShareIcon from "@mui/icons-material/Share";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const features = [
  {
    title: "Auto Scheduling",
    icon: <CalendarMonthIcon />,
  },
  {
    title: "Multi-Platform Posting",
    icon: <ShareIcon />,
  },
  {
    title: "Smart Analytics",
    icon: <AnalyticsIcon />,
  },
];

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, icon }: FeatureCardProps) => {
  return (
    <Card
      sx={{
        flex: 1,
        background: "linear-gradient(135deg, #2E3375, #1E2147)",
        borderRadius: 3,
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 20px 25px rgba(0,0,0,0.3)",
        transition: "all 0.3s ease",

        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
        {/* Icon */}
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            bgcolor: "rgba(109,93,246,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
            color: "#8A7CFF",
          }}
        >
          {icon}
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          fontWeight={600}
          color="text.primary"
          mb={2}
        >
          {title}
        </Typography>

        {/* Divider */}
        <Box>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          </Box>
      </CardContent>
    </Card>
  );
};

const FeatureCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        width="100%"
      >
        {features.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </Stack>
    </Box>
  );
};

export default FeatureCards;


