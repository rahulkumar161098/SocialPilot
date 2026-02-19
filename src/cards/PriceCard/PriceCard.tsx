import React from "react";
import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  Button,
} from "@mui/material";

const plans = [
  {
    name: "Basic",
    price: 199,
    color: "#A78BFA",
  },
  {
    name: "Pro",
    price: 399,
    color: "#38BDF8",
  },
  {
    name: "Agency",
    price: 999,
    color: "#A78BFA",
  },
];

interface PriceCardProps {
  name: string;
  price: number;
  color: string;
}

const PriceCard = ({ name, price, color }: PriceCardProps) => {
  return (
    <Card
      sx={{
        flex: 1,
        background: "linear-gradient(135deg, #2E3375, #1E2147)",
        borderRadius: 3,
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 20px 30px rgba(0,0,0,0.3)",
        // transition: "all 0.3s ease",

        // "&:hover": {
        //   transform: "translateY(-8px)",
        // },
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        {/* Plan Name */}
        <Typography
          variant="h5"
          fontWeight={600}
          color="text.primary"
          mb={2}
        >
          {name}
        </Typography>

        {/* Divider */}
        <Box
          sx={{
            width: "60%",
            height: 2,
            bgcolor: "rgba(255,255,255,0.25)",
            mx: "auto",
            mb: 3,
          }}
        />

        {/* Price */}
        <Typography
          variant="h3"
          fontWeight={700}
          color="text.primary"
          mb={1}
        >
          ₹{price}
          <Typography
            component="span"
            variant="h6"
            color="text.secondary"
          >
            /mo
          </Typography>
        </Typography>

        {/* CTA Bar */}
        <Button
          fullWidth
          sx={{
            mt: 3,
            py: 1.5,
            borderRadius: 2,
            background: color,
            color: "#0F172A",
            fontWeight: 600,

            "&:hover": {
              background: color,
              opacity: 0.85,
            },
          }}
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
};

const PricingCard = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        mx="auto"
      >
        {plans.map((plan, index) => (
          <PriceCard key={index} {...plan} />
        ))}
      </Stack>
    </Box>
  );
};

export default PricingCard;
