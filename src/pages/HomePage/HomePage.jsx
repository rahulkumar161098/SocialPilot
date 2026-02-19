import React from "react";
import Banner from "../../components/Banner/Banner";
import { Box } from "@mui/material";
import FeatureCard from "../../cards/FeatureCard/FeatureCard";
import { useTheme } from '@mui/material/styles';
import { Divider } from "@mui/material";
import Heading from "../../components/Heading/Heading";
import StepCards from "../../cards/StepCard/StepCard";
import PriceCard from "../../cards/PriceCard/PriceCard";
import { RegisterPage } from "../RegisterPage/RegisterPage";


const HomePage = (props) => {
  const theme = useTheme();
  return (
    <>
      <Banner height={'620px'} source="/images/banner/banner2.png"></Banner>
      <Box sx={{ px: { xs: 2, md: 4 } }}>
        <Box sx={{ px: { xs: 2, md: 4 }, py: 8, }}>
          <FeatureCard />
        </Box>
        <Divider />

        <Box sx={{ py: 3 }}>
          <Heading heading="How It Works" />
          <StepCards />
        </Box>

      </Box>
      <Box sx={{my: 8, py: 8, px: { xs: 2, md: 8}, backgroundColor: theme.palette.background.paper }}>
          <PriceCard />
        </Box>

    </>
  );
}

export default HomePage;