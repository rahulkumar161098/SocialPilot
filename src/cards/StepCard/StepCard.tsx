import React from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

const steps = [
  {
    step: "1.",
    title: "Connect Accounts",
  },
  {
    step: "2.",
    title: "Upload Content",
  },
  {
    step: "3.",
    title: "Auto-Post",
  },
];

interface StepCardProps {
  step: string;
  title: string;
}

const StepCard = ({ step, title }: StepCardProps) => {
  return (
    <Card
      sx={{
        flex: 1,
        background: "linear-gradient(135deg, #2E3375, #1E2147)",
        borderRadius: 3,
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 15px 25px rgba(0,0,0,0.3)",
        // transition: "all 0.3s ease",

        // "&:hover": {
        //   transform: "translateY(-6px)",
        // },
      }}
    >
      <CardContent>
        {/* Step + Title */}
        <Box sx={{}} style={{display: 'inline-flex', alignItems: 'center',}}>
         <Typography variant="h4" fontWeight={600} color="text.primary">{step}</Typography>
         <Typography variant="h6" fontWeight={600} color="text.primary" sx={{pl: 2}}>{title}</Typography>
        </Box>

        {/* Lines */}
        <Box>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, similique.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const StepCards = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        maxWidth={1200}
        mx="auto"
      >
        {steps.map((item, index) => (
          <StepCard key={index} {...item} />
        ))}
      </Stack>
    </Box>
  );
};

export default StepCards;
