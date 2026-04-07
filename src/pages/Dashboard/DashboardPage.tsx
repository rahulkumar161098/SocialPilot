import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import AutoAwesomeOutlined from "@mui/icons-material/AutoAwesomeOutlined";
import AccountTreeOutlined from "@mui/icons-material/AccountTreeOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  BORDER_SUBTLE,
  CARD_BG,
  MUTED_BG,
  PRIMARY,
  PRIMARY_DEEP,
  SUCCESS,
  ERROR,
  TEXT_TITLE,
  TEXT_BODY,
  TOOLTIP_BG,
  cardShell,
} from "./dashboardTokens";

const engagementData = [
  { t: "0", v: 1820 },
  { t: "2", v: 2100 },
  { t: "4", v: 1980 },
  { t: "6", v: 2340 },
  { t: "8", v: 2680 },
  { t: "10", v: 2510 },
  { t: "12", v: 2840 },
  { t: "14", v: 2620 },
  { t: "16", v: 2390 },
  { t: "18", v: 2560 },
  { t: "20", v: 2710 },
  { t: "22", v: 2480 },
];

function EngagementTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ value?: number }>;
}) {
  if (!active || !payload?.length) return null;
  const v = payload[0].value;
  return (
    <Box
      sx={{
        bgcolor: TOOLTIP_BG,
        color: "#fff",
        px: 1.75,
        py: 1.25,
        borderRadius: "10px",
        fontSize: 13,
        fontWeight: 600,
        boxShadow: "0 8px 24px rgba(17, 24, 39, 0.2)",
      }}
    >
      {v != null ? `${v.toLocaleString()} interactions` : ""}
    </Box>
  );
}

const topContent = [
  {
    platform: "LinkedIn",
    title: "Designing for scalability in distributed teams",
    snippet:
      "How we structure design systems and handoffs so product velocity stays high as teams grow.",
    likes: "1.2k",
    views: "12k",
    growth: "+14%",
    image: "/images/medium-shot-man-holding-smartphone.jpg",
  },
  {
    platform: "Instagram",
    title: "Launch week: behind the scenes",
    snippet:
      "A visual diary of campaign prep, content drops, and the metrics we watched hour by hour.",
    likes: "2.4k",
    views: "28k",
    growth: "+22%",
    image: "/images/social-media-concept-with-device.jpg",
  },
  {
    platform: "Twitter",
    title: "Thread: our shipping cadence in 2025",
    snippet:
      "Balancing quality, stakeholder updates, and sustainable pace—what worked and what we cut.",
    likes: "890",
    views: "9.1k",
    growth: "+9%",
    image: "/images/hand-drawn-illustrations-social-media.jpg",
  },
];

export default function DashboardPage() {
  const [range, setRange] = React.useState<"24h" | "7d" | "30d">("24h");

  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, pb: 5 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: "-0.02em", color: TEXT_TITLE }}>
          Workspace Overview
        </Typography>
        <Typography sx={{ mt: 0.5, color: TEXT_BODY, fontSize: "0.95rem" }}>
          Your automation is running optimally across 4 connected accounts.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", lg: "minmax(260px, 1fr) minmax(0, 2fr)" },
          mb: 2,
        }}
      >
        <Card elevation={0} sx={cardShell}>
          <CardContent sx={{ p: 2.5 }}>
            <Typography
              variant="overline"
              sx={{
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: TEXT_BODY,
                fontSize: "0.7rem",
              }}
            >
              Execution summary
            </Typography>
            <Stack spacing={2} sx={{ mt: 2 }}>
              {[
                { label: "Scheduled", value: 12, color: PRIMARY },
                { label: "Completed", value: 148, color: SUCCESS },
                { label: "Failed", value: 2, color: ERROR },
              ].map((row) => (
                <Stack
                  key={row.label}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" alignItems="center" spacing={1.25}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        bgcolor: row.color,
                      }}
                    />
                    <Typography fontWeight={600} sx={{ color: TEXT_BODY }}>
                      {row.label}:
                    </Typography>
                  </Stack>
                  <Typography fontWeight={800} fontSize="1.05rem" sx={{ color: TEXT_TITLE }}>
                    {row.value}
                  </Typography>
                </Stack>
              ))}
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mt: 3, pt: 2, borderTop: `1px solid ${BORDER_SUBTLE}` }}
            >
              <Typography sx={{ color: TEXT_BODY }} fontWeight={600}>
                System Health
              </Typography>
              <Stack direction="row" alignItems="center" spacing={0.75}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: SUCCESS,
                  }}
                />
                <Typography fontWeight={700} sx={{ color: SUCCESS }}>
                  Optimal
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Card elevation={0} sx={cardShell}>
          <CardContent sx={{ p: 2.5 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              justifyContent="space-between"
              spacing={2}
              sx={{ mb: 1 }}
            >
              <Box>
                <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap">
                  <Typography fontWeight={800} fontSize="1.15rem" sx={{ color: TEXT_TITLE }}>
                    Daily Engagement
                  </Typography>
                  <Chip
                    label="LIVE"
                    size="small"
                    sx={{
                      bgcolor: "rgba(59, 76, 184, 0.14)",
                      color: PRIMARY,
                      fontWeight: 800,
                      fontSize: "0.65rem",
                      height: 22,
                    }}
                  />
                </Stack>
                <Typography variant="body2" sx={{ mt: 0.5, color: TEXT_BODY }}>
                  Real-time interactions across connected channels.
                </Typography>
              </Box>
              <ToggleButtonGroup
                exclusive
                size="small"
                value={range}
                onChange={(_, v) => v && setRange(v)}
                sx={{
                  bgcolor: MUTED_BG,
                  borderRadius: "12px",
                  p: 0.5,
                  "& .MuiToggleButton-root": {
                    border: "none",
                    borderRadius: "10px",
                    px: 1.5,
                    textTransform: "none",
                    fontWeight: 600,
                    color: TEXT_BODY,
                  },
                  "& .Mui-selected": {
                    bgcolor: `${CARD_BG} !important`,
                    color: `${PRIMARY} !important`,
                    boxShadow: "0 1px 4px rgba(17, 24, 39, 0.08)",
                  },
                }}
              >
                <ToggleButton value="24h">24h</ToggleButton>
                <ToggleButton value="7d">7d</ToggleButton>
                <ToggleButton value="30d">30d</ToggleButton>
              </ToggleButtonGroup>
            </Stack>
            <Box sx={{ width: "100%", height: 280, mt: 1 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={engagementData} margin={{ top: 12, right: 8, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={BORDER_SUBTLE} vertical={false} />
                  <XAxis
                    dataKey="t"
                    tick={{ fill: TEXT_BODY, fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${v}h`}
                  />
                  <YAxis hide domain={["dataMin - 200", "dataMax + 200"]} />
                  <Tooltip content={<EngagementTooltip />} />
                  <Line
                    type="natural"
                    dataKey="v"
                    stroke={PRIMARY}
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 6, strokeWidth: 0, fill: PRIMARY }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          mb: 3,
        }}
      >
        <Card
          sx={{
            borderRadius: "14px",
            color: "#fff",
            border: "none",
            boxShadow: "0 12px 32px rgba(59, 76, 184, 0.32)",
            background: `linear-gradient(145deg, ${PRIMARY} 0%, ${PRIMARY_DEEP} 100%)`,
          }}
        >
          <CardContent sx={{ p: 2.75 }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
              <AutoAwesomeOutlined />
              <Typography fontWeight={800} fontSize="1.1rem">
                AI Content Generator
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ opacity: 0.92, mb: 2, maxWidth: 360 }}>
              Draft platform-native captions, hooks, and variants tuned to your brand voice.
            </Typography>
            <Link
              href="#"
              underline="hover"
              sx={{ color: "#fff", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 0.5 }}
            >
              Explore →
            </Link>
          </CardContent>
        </Card>

        <Card
          elevation={0}
          sx={{
            borderRadius: "14px",
            border: `1px solid ${BORDER_SUBTLE}`,
            bgcolor: MUTED_BG,
            boxShadow: "0 1px 2px rgba(17, 24, 39, 0.04)",
          }}
        >
          <CardContent sx={{ p: 2.75 }}>
            <Stack direction="row" spacing={1.5} alignItems="flex-start">
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  bgcolor: CARD_BG,
                  display: "grid",
                  placeItems: "center",
                  color: PRIMARY,
                  boxShadow: "0 1px 3px rgba(17, 24, 39, 0.06)",
                }}
              >
                <AccountTreeOutlined />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography fontWeight={800} fontSize="1.05rem" sx={{ color: TEXT_TITLE }}>
                  Integrate New Feed
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.5, color: TEXT_BODY }}>
                  Connect another social profile or RSS source to your workspace.
                </Typography>
                <Link
                  href="#"
                  underline="hover"
                  sx={{ fontWeight: 700, color: PRIMARY, mt: 1.5, display: "inline-block" }}
                >
                  Add Account +
                </Link>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        justifyContent="space-between"
        spacing={2}
        sx={{ mb: 2 }}
      >
        <Box>
          <Typography fontWeight={800} fontSize="1.25rem" sx={{ color: TEXT_TITLE }}>
            Top Performing Content
          </Typography>
          <Typography variant="body2" sx={{ color: TEXT_BODY }}>
            Ranked by engagement velocity in the last 7 days.
          </Typography>
        </Box>
        <Link href="#" underline="hover" sx={{ fontWeight: 700, color: PRIMARY, whiteSpace: "nowrap" }}>
          View full report →
        </Link>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
        }}
      >
        {topContent.map((post) => (
          <Card
            key={post.title}
            elevation={0}
            sx={{
              ...cardShell,
              overflow: "hidden",
            }}
          >
            <Box sx={{ position: "relative", pt: "52%", bgcolor: MUTED_BG }}>
              <Box
                component="img"
                src={post.image}
                alt=""
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Chip
                label={post.platform}
                size="small"
                sx={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  fontWeight: 700,
                  bgcolor: CARD_BG,
                  color: TEXT_TITLE,
                  border: `1px solid ${BORDER_SUBTLE}`,
                  boxShadow: "0 2px 8px rgba(17, 24, 39, 0.08)",
                }}
              />
            </Box>
            <CardContent sx={{ p: 2 }}>
              <Typography fontWeight={800} sx={{ mb: 1, lineHeight: 1.3, color: TEXT_TITLE }}>
                {post.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, minHeight: 40, color: TEXT_BODY }}>
                {post.snippet}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={2} flexWrap="wrap">
                <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: TEXT_BODY }}>
                  <FavoriteBorderOutlined sx={{ fontSize: 18 }} />
                  <Typography variant="body2" fontWeight={600}>
                    {post.likes}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: TEXT_BODY }}>
                  <VisibilityOutlined sx={{ fontSize: 18 }} />
                  <Typography variant="body2" fontWeight={600}>
                    {post.views}
                  </Typography>
                </Stack>
                <Chip
                  label={post.growth}
                  size="small"
                  sx={{
                    bgcolor: "rgba(16, 185, 129, 0.14)",
                    color: SUCCESS,
                    fontWeight: 800,
                  }}
                />
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
