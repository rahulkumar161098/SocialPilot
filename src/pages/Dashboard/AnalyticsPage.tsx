import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import Add from "@mui/icons-material/Add";
import AutoAwesomeOutlined from "@mui/icons-material/AutoAwesomeOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import TrendingUpOutlined from "@mui/icons-material/TrendingUpOutlined";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ACCENT_ORANGE,
  BORDER_SUBTLE,
  CARD_BG,
  CHART_BAR_FB,
  CHART_BAR_IN,
  CHART_BAR_LI,
  CHART_BAR_OTHER,
  MUTED_BG,
  PRIMARY,
  TEXT_BODY,
  TEXT_TITLE,
  cardShell,
} from "./dashboardTokens";

const AUDIENCE_WEEK = [
  { day: "MON", v: 42 },
  { day: "TUE", v: 58 },
  { day: "WED", v: 52 },
  { day: "THU", v: 71 },
  { day: "FRI", v: 68 },
  { day: "SAT", v: 49 },
  { day: "SUN", v: 63 },
];

const VIEWER_BREAKDOWN = [
  { label: "Instagram", pct: 42, color: CHART_BAR_IN },
  { label: "Facebook", pct: 35, color: CHART_BAR_FB },
  { label: "LinkedIn", pct: 18, color: CHART_BAR_LI },
  { label: "Other Sources", pct: 5, color: CHART_BAR_OTHER },
];

const TABLE_ROWS = [
  {
    thumb: "/images/medium-shot-man-holding-smartphone.jpg",
    title: "The Future of Sustainable Urban Mobility",
    meta: "Published 2 days ago • LinkedIn",
    status: "active" as const,
    impressions: "12,482",
    clicks: "842",
    conversions: "6.7%",
  },
  {
    thumb: "/images/social-media-concept-with-device.jpg",
    title: "Design Systems at Scale",
    meta: "Published 5 days ago • Instagram",
    status: "completed" as const,
    impressions: "28,100",
    clicks: "1,204",
    conversions: "4.2%",
  },
  {
    thumb: "/images/hand-drawn-illustrations-social-media.jpg",
    title: "Q4 Campaign Retrospective",
    meta: "Published 1 week ago • Twitter",
    status: "completed" as const,
    impressions: "9,840",
    clicks: "510",
    conversions: "3.1%",
  },
];

function GrowthChartTooltip({
  active,
  label,
  payload,
}: {
  active?: boolean;
  label?: string;
  payload?: Array<{ value?: number }>;
}) {
  if (!active || !payload?.length) return null;
  const v = payload[0].value;
  return (
    <Box
      sx={{
        bgcolor: "#1f2937",
        color: "#fff",
        px: 1.5,
        py: 1,
        borderRadius: "8px",
        fontSize: 12,
        fontWeight: 600,
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      }}
    >
      {label}: {v != null ? `${v}k reach` : ""}
    </Box>
  );
}

export default function AnalyticsPage() {
  const [range, setRange] = React.useState<"7D" | "30D" | "90D">("7D");

  const chartData = React.useMemo(() => {
    const mult = range === "7D" ? 1 : range === "30D" ? 1.15 : 1.28;
    return AUDIENCE_WEEK.map((d) => ({ ...d, v: Math.round(d.v * mult) }));
  }, [range]);

  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, pb: 10, position: "relative" }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: "-0.02em", color: TEXT_TITLE }}>
          Analytics Overview
        </Typography>
        <Typography sx={{ mt: 0.5, color: TEXT_BODY, fontSize: "0.95rem" }}>
          Track reach, engagement, and content performance across your connected channels.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          mb: 2,
        }}
      >
        <Card elevation={0} sx={cardShell}>
          <CardContent sx={{ p: 2.5 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  bgcolor: "rgba(59, 76, 184, 0.12)",
                  color: PRIMARY,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <AutoAwesomeOutlined />
              </Box>
              <Chip
                label="+12.5%"
                size="small"
                sx={{
                  fontWeight: 800,
                  bgcolor: "rgba(59, 76, 184, 0.12)",
                  color: PRIMARY,
                }}
              />
            </Stack>
            <Typography variant="body2" sx={{ mt: 2, color: TEXT_BODY, fontWeight: 600 }}>
              Total Reach
            </Typography>
            <Typography sx={{ fontWeight: 800, fontSize: "1.85rem", color: TEXT_TITLE, lineHeight: 1.2 }}>
              842.1k
            </Typography>
          </CardContent>
        </Card>

        <Card elevation={0} sx={cardShell}>
          <CardContent sx={{ p: 2.5 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  bgcolor: "rgba(59, 76, 184, 0.12)",
                  color: PRIMARY,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <FavoriteBorderOutlined />
              </Box>
              <Chip
                label="+0.8%"
                size="small"
                sx={{
                  fontWeight: 800,
                  bgcolor: "rgba(59, 76, 184, 0.12)",
                  color: PRIMARY,
                }}
              />
            </Stack>
            <Typography variant="body2" sx={{ mt: 2, color: TEXT_BODY, fontWeight: 600 }}>
              Engagement Rate
            </Typography>
            <Typography sx={{ fontWeight: 800, fontSize: "1.85rem", color: TEXT_TITLE, lineHeight: 1.2 }}>
              6.82%
            </Typography>
          </CardContent>
        </Card>

        <Card elevation={0} sx={cardShell}>
          <CardContent sx={{ p: 2.5 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  bgcolor: "rgba(234, 88, 12, 0.12)",
                  color: ACCENT_ORANGE,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <TrendingUpOutlined />
              </Box>
              <Chip
                label="+420 today"
                size="small"
                sx={{
                  fontWeight: 800,
                  bgcolor: "rgba(234, 88, 12, 0.12)",
                  color: ACCENT_ORANGE,
                }}
              />
            </Stack>
            <Typography variant="body2" sx={{ mt: 2, color: TEXT_BODY, fontWeight: 600 }}>
              Audience Growth
            </Typography>
            <Typography sx={{ fontWeight: 800, fontSize: "1.85rem", color: TEXT_TITLE, lineHeight: 1.2 }}>
              +2.4k
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1.5fr) minmax(280px, 1fr)" },
          mb: 3,
        }}
      >
        <Card elevation={0} sx={cardShell}>
          <CardContent sx={{ p: { xs: 2, sm: 2.5 } }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              justifyContent="space-between"
              spacing={2}
              sx={{ mb: 2 }}
            >
              <Typography fontWeight={800} fontSize="1.1rem" sx={{ color: TEXT_TITLE }}>
                Audience Growth
              </Typography>
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
                    fontSize: "0.8rem",
                    color: TEXT_BODY,
                  },
                  "& .Mui-selected": {
                    bgcolor: `${CARD_BG} !important`,
                    color: `${PRIMARY} !important`,
                    boxShadow: "0 1px 4px rgba(17, 24, 39, 0.08)",
                  },
                }}
              >
                <ToggleButton value="7D">7D</ToggleButton>
                <ToggleButton value="30D">30D</ToggleButton>
                <ToggleButton value="90D">90D</ToggleButton>
              </ToggleButtonGroup>
            </Stack>
            <Box sx={{ width: "100%", height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 8, right: 8, left: -8, bottom: 0 }}>
                  <defs>
                    <linearGradient id="analyticsAudienceFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={PRIMARY} stopOpacity={0.35} />
                      <stop offset="100%" stopColor={PRIMARY} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={BORDER_SUBTLE} vertical={false} />
                  <XAxis
                    dataKey="day"
                    tick={{ fill: TEXT_BODY, fontSize: 12, fontWeight: 600 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis hide domain={["dataMin - 8", "dataMax + 12"]} />
                  <RechartsTooltip content={<GrowthChartTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="v"
                    stroke={PRIMARY}
                    strokeWidth={2.5}
                    fill="url(#analyticsAudienceFill)"
                    dot={{ r: 4, fill: CARD_BG, stroke: PRIMARY, strokeWidth: 2 }}
                    activeDot={{ r: 6, fill: PRIMARY, stroke: CARD_BG, strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>

        <Card elevation={0} sx={cardShell}>
          <CardContent sx={{ p: { xs: 2, sm: 2.5 } }}>
            <Typography fontWeight={800} fontSize="1.1rem" sx={{ color: TEXT_TITLE, mb: 2 }}>
              Viewer Engagement
            </Typography>
            <Stack spacing={2}>
              {VIEWER_BREAKDOWN.map((row, i) => {
                const bar = (
                  <Box
                    sx={{
                      height: 10,
                      borderRadius: 999,
                      bgcolor: MUTED_BG,
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        width: `${row.pct}%`,
                        height: "100%",
                        borderRadius: 999,
                        bgcolor: row.color,
                        transition: "width 0.4s ease",
                      }}
                    />
                  </Box>
                );

                return (
                  <Box key={row.label}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.75 }}>
                      <Typography variant="body2" fontWeight={600} sx={{ color: TEXT_TITLE }}>
                        {row.label}
                      </Typography>
                      <Typography variant="body2" fontWeight={700} sx={{ color: TEXT_BODY }}>
                        {row.pct}%
                      </Typography>
                    </Stack>
                    {i === 0 ? (
                      <Tooltip title="NOV 24, +342 new" placement="top" arrow>
                        <Box>{bar}</Box>
                      </Tooltip>
                    ) : (
                      bar
                    )}
                  </Box>
                );
              })}
            </Stack>
            <Box
              sx={{
                mt: 2.5,
                p: 1.75,
                borderRadius: "12px",
                bgcolor: MUTED_BG,
                border: `1px solid ${BORDER_SUBTLE}`,
              }}
            >
              <Typography variant="body2" sx={{ color: TEXT_BODY, fontWeight: 500, lineHeight: 1.5 }}>
                <Box component="span" sx={{ fontWeight: 700, color: TEXT_TITLE }}>
                  Peak activity:
                </Box>{" "}
                Your audience is most active between{" "}
                <Box component="span" sx={{ fontWeight: 700, color: TEXT_TITLE }}>
                  6 PM – 9 PM
                </Box>{" "}
                on weekdays.
              </Typography>
            </Box>
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
        <Typography fontWeight={800} fontSize="1.2rem" sx={{ color: TEXT_TITLE }}>
          Top Performing Content
        </Typography>
        <Link href="#" underline="hover" sx={{ fontWeight: 700, color: PRIMARY }}>
          View All Posts
        </Link>
      </Stack>

      <Card elevation={0} sx={{ ...cardShell, overflow: "hidden" }}>
        <TableContainer sx={{ maxWidth: "100%" }}>
          <Table size="small" sx={{ minWidth: 720 }}>
            <TableHead>
              <TableRow sx={{ bgcolor: MUTED_BG }}>
                <TableCell sx={{ fontWeight: 800, color: TEXT_BODY, fontSize: "0.7rem", letterSpacing: "0.06em" }}>
                  CONTENT DETAIL
                </TableCell>
                <TableCell sx={{ fontWeight: 800, color: TEXT_BODY, fontSize: "0.7rem", letterSpacing: "0.06em" }}>
                  STATUS
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: 800, color: TEXT_BODY, fontSize: "0.7rem", letterSpacing: "0.06em" }}
                >
                  IMPRESSIONS
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: 800, color: TEXT_BODY, fontSize: "0.7rem", letterSpacing: "0.06em" }}
                >
                  CLICKS
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: 800, color: TEXT_BODY, fontSize: "0.7rem", letterSpacing: "0.06em" }}
                >
                  CONVERSIONS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {TABLE_ROWS.map((row) => (
                <TableRow key={row.title} hover sx={{ "&:last-child td": { borderBottom: 0 } }}>
                  <TableCell sx={{ py: 2 }}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Box
                        component="img"
                        src={row.thumb}
                        alt=""
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "10px",
                          objectFit: "cover",
                          border: `1px solid ${BORDER_SUBTLE}`,
                        }}
                      />
                      <Box sx={{ minWidth: 0 }}>
                        <Typography fontWeight={700} sx={{ color: TEXT_TITLE, lineHeight: 1.35 }}>
                          {row.title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: TEXT_BODY, display: "block", mt: 0.25 }}>
                          {row.meta}
                        </Typography>
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    {row.status === "active" ? (
                      <Stack direction="row" alignItems="center" spacing={0.75}>
                        <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: PRIMARY }} />
                        <Typography variant="body2" fontWeight={600} sx={{ color: TEXT_TITLE }}>
                          Active Pulse
                        </Typography>
                      </Stack>
                    ) : (
                      <Typography variant="body2" fontWeight={600} sx={{ color: TEXT_BODY }}>
                        Completed
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <Typography fontWeight={700} sx={{ color: TEXT_TITLE }}>
                      {row.impressions}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography fontWeight={700} sx={{ color: TEXT_TITLE }}>
                      {row.clicks}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography fontWeight={700} sx={{ color: TEXT_TITLE }}>
                      {row.conversions}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Fab
        aria-label="create"
        sx={{
          position: "fixed",
          right: { xs: 24, sm: 32 },
          bottom: { xs: 24, sm: 32 },
          color: "#fff",
          bgcolor: PRIMARY,
          zIndex: (t) => t.zIndex.drawer + 1,
          boxShadow: "0 12px 28px rgba(59, 76, 184, 0.45)",
          "&:hover": { bgcolor: "#323F9E" },
        }}
      >
        <Add />
      </Fab>
    </Box>
  );
}
