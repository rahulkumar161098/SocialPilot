import * as React from "react";
import {
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Link as RouterLink } from "react-router-dom";
import {
  BillingCycle,
  YEARLY_DISCOUNT,
  effectiveMonthlyPrice,
  pricingPlans,
  type PricingPlan,
} from "../../data/pricingPlans";

function FeatureRow({
  label,
  state,
}: {
  label: string;
  state: "yes" | "no" | "muted";
}) {
  const isMuted = state === "muted";
  const isNo = state === "no";
  return (
    <Stack direction="row" spacing={1.25} alignItems="flex-start" sx={{ py: 0.75 }}>
      <CheckRoundedIcon
        sx={{
          fontSize: 20,
          mt: "2px",
          flexShrink: 0,
          color: isNo ? "transparent" : "primary.main",
          opacity: isMuted ? 0.35 : isNo ? 0 : 1,
        }}
      />
      <Typography
        variant="body2"
        color={isMuted || isNo ? "text.secondary" : "text.primary"}
        sx={{ fontWeight: isMuted ? 500 : 500, opacity: isMuted ? 0.75 : 1 }}
      >
        {label}
      </Typography>
    </Stack>
  );
}

function PlanCard({
  plan,
  billing,
}: {
  plan: PricingPlan;
  billing: BillingCycle;
}) {
  const isCustom = plan.monthlyPrice === null;
  const displayPrice = !isCustom
    ? effectiveMonthlyPrice(plan.monthlyPrice!, billing)
    : null;

  const isExternal =
    plan.ctaTo.startsWith("mailto:") || plan.ctaTo.startsWith("http");

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        borderRadius: 3,
        p: { xs: 2.5, md: 3 },
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: plan.popular ? "primary.main" : "rgba(45, 62, 153, 0.1)",
        boxShadow: plan.popular
          ? "0 20px 50px rgba(45, 62, 153, 0.12)"
          : "0 8px 28px rgba(45, 62, 153, 0.06)",
        transform: plan.popular ? { md: "scale(1.02)" } : undefined,
        zIndex: plan.popular ? 1 : 0,
      }}
    >
      {plan.popular && (
        <Chip
          label="MOST POPULAR"
          size="small"
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            fontWeight: 700,
            fontSize: "0.65rem",
            letterSpacing: "0.06em",
            bgcolor: "primary.main",
            color: "primary.contrastText",
          }}
        />
      )}
      <Typography variant="h5" component="h3" fontWeight={800} gutterBottom>
        {plan.name}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 40 }}>
        {plan.description}
      </Typography>
      <Box sx={{ mb: 2 }}>
        {isCustom ? (
          <Typography variant="h3" component="p" fontWeight={800}>
            Custom
          </Typography>
        ) : (
          <>
            <Typography
              variant="h3"
              component="p"
              fontWeight={800}
              sx={{ color: plan.popular ? "primary.main" : "text.primary" }}
            >
              ${displayPrice}
              <Typography
                component="span"
                variant="h6"
                color="text.secondary"
                fontWeight={600}
                sx={{ ml: 0.5 }}
              >
                /mo
              </Typography>
            </Typography>
            {billing === "yearly" && (
              <Typography variant="caption" color="text.secondary" display="block">
                Per month, billed annually
              </Typography>
            )}
          </>
        )}
      </Box>
      <Stack spacing={0} sx={{ mb: 3 }}>
        {plan.features.map((f) => (
          <FeatureRow key={f.label} label={f.label} state={f.state} />
        ))}
      </Stack>
      {isExternal ? (
        <Button
          component="a"
          href={plan.ctaTo}
          fullWidth
          variant={plan.ctaOutlined ? "outlined" : "contained"}
          color="primary"
          size="large"
        >
          {plan.ctaLabel}
        </Button>
      ) : (
        <Button
          component={RouterLink}
          to={plan.ctaTo}
          fullWidth
          variant={plan.ctaOutlined ? "outlined" : "contained"}
          color="primary"
          size="large"
        >
          {plan.ctaLabel}
        </Button>
      )}
    </Box>
  );
}

interface PricingPlansGridProps {
  /** When true, billing state is controlled externally (e.g. pricing page hero). */
  billing?: BillingCycle;
  onBillingChange?: (cycle: BillingCycle) => void;
}

export default function PricingPlansGrid({
  billing: billingProp,
  onBillingChange,
}: PricingPlansGridProps) {
  const [internal, setInternal] = React.useState<BillingCycle>("yearly");
  const billing = billingProp ?? internal;
  const setBilling = onBillingChange ?? setInternal;

  return (
    <Box>
      <Stack alignItems="center" sx={{ mb: 4 }}>
        <ToggleButtonGroup
          value={billing}
          exclusive
          onChange={(_, v) => v && setBilling(v)}
          aria-label="billing cycle"
          sx={{
            bgcolor: "rgba(45, 62, 153, 0.06)",
            p: 0.5,
            borderRadius: 3,
            "& .MuiToggleButton-root": {
              border: "none",
              px: 2.5,
              py: 1,
              borderRadius: 2.5,
              textTransform: "none",
              fontWeight: 600,
              color: "text.secondary",
              "&.Mui-selected": {
                bgcolor: "background.paper",
                color: "primary.main",
                boxShadow: "0 4px 14px rgba(45, 62, 153, 0.12)",
              },
            },
          }}
        >
          <ToggleButton value="monthly">Monthly</ToggleButton>
          <ToggleButton value="yearly">Yearly (Save {Math.round(YEARLY_DISCOUNT * 100)}%)</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Grid container spacing={3} alignItems="stretch">
        {pricingPlans.map((plan) => (
          <Grid key={plan.id} size={{ xs: 12, md: 4 }}>
            <PlanCard plan={plan} billing={billing} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
