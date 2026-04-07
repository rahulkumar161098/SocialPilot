import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import PricingPlansGrid from "../../components/Pricing/PricingPlansGrid";
import {
  BillingCycle,
  comparisonRows,
  pricingFaqs,
} from "../../data/pricingPlans";

function ComparisonCell({
  value,
  asIcon,
}: {
  value: string;
  asIcon?: boolean;
}) {
  if (asIcon) {
    if (value === "yes") {
      return (
        <CheckRoundedIcon
          sx={{ color: "primary.main", fontSize: 22, display: "block", mx: "auto" }}
        />
      );
    }
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        textAlign="center"
        component="span"
        display="block"
      >
        —
      </Typography>
    );
  }
  return (
    <Typography variant="body2" textAlign="center">
      {value}
    </Typography>
  );
}

export default function PricingPage() {
  const [billing, setBilling] = React.useState<BillingCycle>("yearly");

  return (
    <Box sx={{ bgcolor: "background.default", overflow: "hidden" }}>
      <Box
        component="section"
        sx={{
          pt: { xs: 3, md: 5 },
          pb: { xs: 6, md: 8 },
          px: { xs: 2, md: 3 },
          backgroundImage: `linear-gradient(180deg, rgba(249, 249, 249, 0.30) 0%, rgba(249, 249, 249, 0.70) 45%, rgba(249, 249, 249, 0.97) 100%), url(${process.env.PUBLIC_URL}/images/pexels-adempercem-35576326.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{
              display: "block",
              textAlign: "center",
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: "0.2em",
              mb: 2,
            }}
          >
            Blueprint for growth
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            textAlign="center"
            sx={{ mb: 2, maxWidth: 800, mx: "auto" }}
          >
            Precision pricing for growing teams
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ maxWidth: 560, mx: "auto", mb: 1, lineHeight: 1.75 }}
          >
            Professional-grade automation tools designed to scale with your vision.
            Choose the blueprint that fits your project scope.
          </Typography>

          <PricingPlansGrid billing={billing} onBillingChange={setBilling} />
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          px: { xs: 2, md: 3 },
          bgcolor: "background.paper",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" textAlign="center" sx={{ mb: 1 }}>
            The technical blueprint
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ mb: 4, maxWidth: 520, mx: "auto" }}
          >
            A clear view of capabilities across every tier so your team can plan with
            confidence.
          </Typography>
          <TableContainer
            sx={{
              borderRadius: 3,
              border: "1px solid",
              borderColor: "rgba(45, 62, 153, 0.1)",
              overflow: "hidden",
            }}
          >
            <Table size="medium">
              <TableHead>
                <TableRow sx={{ bgcolor: "rgba(45, 62, 153, 0.04)" }}>
                  <TableCell sx={{ fontWeight: 700, py: 2 }}>Feature capabilities</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700 }}>
                    Starter
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700 }}>
                    Pro
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700 }}>
                    Enterprise
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comparisonRows.map((row) => (
                  <TableRow
                    key={row.feature}
                    sx={{ "&:last-child td": { border: 0 } }}
                  >
                    <TableCell sx={{ fontWeight: 600 }}>{row.feature}</TableCell>
                    <TableCell align="center">
                      <ComparisonCell value={row.starter} asIcon={row.iconCells} />
                    </TableCell>
                    <TableCell align="center">
                      <ComparisonCell value={row.pro} asIcon={row.iconCells} />
                    </TableCell>
                    <TableCell align="center">
                      <ComparisonCell value={row.enterprise} asIcon={row.iconCells} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          px: { xs: 2, md: 3 },
          bgcolor: "rgba(45, 62, 153, 0.04)",
        }}
      >
        <Container maxWidth="md">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={4}
            alignItems={{ xs: "center", sm: "flex-start" }}
          >
            <Avatar
              alt="Elena Vance"
              src="https://i.pravatar.cc/200?img=47"
              sx={{ width: 96, height: 96, flexShrink: 0 }}
            />
            <Box sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}>
              <Stack
                direction="row"
                spacing={0.25}
                sx={{ mb: 1, justifyContent: { xs: "center", sm: "flex-start" } }}
              >
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarRoundedIcon key={i} sx={{ color: "primary.main", fontSize: 22 }} />
                ))}
              </Stack>
              <Typography
                variant="h5"
                component="blockquote"
                sx={{
                  fontWeight: 600,
                  lineHeight: 1.5,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  mb: 2,
                }}
              >
                &ldquo;Schedlify didn&apos;t just automate our posts—it gave us a
                single place to shape how the brand shows up everywhere we publish.&rdquo;
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Elena Vance, Creative Director at Lumos Digital
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" color="text.primary" component="h2" textAlign="center" sx={{ mb: 4 }}>
            Frequently asked questions
          </Typography>
          <Stack spacing={1.5}>
            {pricingFaqs.map((item, index) => (
              <Accordion
                key={item.q}
                defaultExpanded={index === 0}
                disableGutters
                elevation={0}
                sx={{
                  borderRadius: "12px !important",
                  border: "1px solid",
                  borderColor: "rgba(45, 62, 153, 0.1)",
                  bgcolor: "background.paper",
                  "&:before": { display: "none" },
                  overflow: "hidden",
                }}
              >
                <AccordionSummary
                  expandIcon={<AddRoundedIcon sx={{ color: "primary.main" }} />}
                  sx={{ px: 2, py: 1 }}
                >
                  <Typography fontWeight={700}>{item.q}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 2, pb: 2, pt: 0 }}>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.75}>
                    {item.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
