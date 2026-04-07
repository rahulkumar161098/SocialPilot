import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import LightbulbOutlined from "@mui/icons-material/LightbulbOutlined";
import EditOutlined from "@mui/icons-material/EditOutlined";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import AutoAwesome from "@mui/icons-material/AutoAwesome";
import {
  BORDER_SUBTLE,
  CARD_BG,
  MUTED_BG,
  PRIMARY,
  SUCCESS,
  TEXT_BODY,
  TEXT_TITLE,
  cardShell,
} from "./dashboardTokens";
import { DateCalendar, LocalizationProvider, PickersDay } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import dayjs, { type Dayjs } from "dayjs";

type PlatformFilter = "all" | "instagram" | "twitter" | "linkedin";

function tagVisible(
  tag: { label: string },
  filter: PlatformFilter,
): boolean {
  if (filter === "all") return true;
  const L = tag.label.toLowerCase();
  if (filter === "instagram") return L.includes("insta");
  if (filter === "linkedin") return L.includes("linkedin");
  if (filter === "twitter") return L.includes("x post") || L.includes("twitter");
  return true;
}

const TAGS_BY_DAY: Record<number, { label: string; tone: "blue" | "gray" }[]> = {
  3: [
    { label: "Insta Reel", tone: "blue" },
    { label: "LinkedIn", tone: "gray" },
  ],
  6: [{ label: "X Post", tone: "blue" }],
};

function TaggedDay(props: PickersDayProps & { filter: PlatformFilter }) {
  const { filter, day, outsideCurrentMonth, selected, ...pickersDayProps } = props;
  const dayNum = dayjs(day).date();
  const tags = outsideCurrentMonth
    ? []
    : (TAGS_BY_DAY[dayNum] ?? []).filter((tag) => tagVisible(tag, filter));

  return (
    <PickersDay
      day={day}
      outsideCurrentMonth={outsideCurrentMonth}
      selected={selected}
      {...pickersDayProps}
      sx={{
        width: "100%",
        maxWidth: "none",
        minHeight: { xs: 72, sm: 88 },
        height: "auto",
        border: `1px solid ${outsideCurrentMonth ? "transparent" : BORDER_SUBTLE}`,
        borderRadius: "10px",
        bgcolor: outsideCurrentMonth ? "transparent" : CARD_BG,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "flex-start",
        p: 0.75,
        m: "3px",
        fontSize: "0.75rem",
        "&.Mui-selected": {
          bgcolor: `${PRIMARY} !important`,
          color: "#fff",
          borderColor: PRIMARY,
          "&:hover, &:focus": {
            bgcolor: `${PRIMARY} !important`,
          },
        },
        "&:not(.Mui-selected)": {
          color: TEXT_TITLE,
        },
      }}
    >
      <Typography
        component="span"
        variant="caption"
        sx={{ fontWeight: 700, color: "inherit", alignSelf: "flex-end", lineHeight: 1.2 }}
      >
        {dayNum}
      </Typography>
      {!outsideCurrentMonth && tags.length > 0 ? (
        <Stack spacing={0.35} sx={{ mt: "auto", width: "100%" }}>
          {tags.map((tag) => (
            <Box
              key={tag.label}
              sx={{
                fontSize: "0.65rem",
                fontWeight: 700,
                px: 0.75,
                py: 0.35,
                borderRadius: "6px",
                lineHeight: 1.2,
                textAlign: "center",
                bgcolor: selected
                  ? tag.tone === "blue"
                    ? "rgba(255,255,255,0.2)"
                    : "rgba(255,255,255,0.12)"
                  : tag.tone === "blue"
                    ? "rgba(59, 76, 184, 0.12)"
                    : MUTED_BG,
                color: selected
                  ? tag.tone === "blue"
                    ? "#e8eaff"
                    : "rgba(255,255,255,0.92)"
                  : tag.tone === "blue"
                    ? PRIMARY
                    : TEXT_BODY,
                border: tag.tone === "gray" ? `1px solid ${selected ? "rgba(255,255,255,0.25)" : BORDER_SUBTLE}` : "1px solid transparent",
              }}
            >
              {tag.label}
            </Box>
          ))}
        </Stack>
      ) : null}
    </PickersDay>
  );
}

export default function ContentCalendarPage() {
  const [selected, setSelected] = React.useState<Dayjs | null>(() => dayjs().startOf("day"));
  const [visibleMonth, setVisibleMonth] = React.useState(() => dayjs().startOf("month"));
  const [filter, setFilter] = React.useState<PlatformFilter>("all");

  const daySlot = React.useMemo(
    () =>
      function DaySlot(p: PickersDayProps) {
        return <TaggedDay {...p} filter={filter} />;
      },
    [filter],
  );

  const filterTabs: { id: typeof filter; label: string }[] = [
    { id: "all", label: "All Posts" },
    { id: "instagram", label: "Instagram" },
    { id: "twitter", label: "Twitter" },
    { id: "linkedin", label: "LinkedIn" },
  ];

  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, pb: 5 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "flex-start" }}
        justifyContent="space-between"
        spacing={2}
        sx={{ mb: 3 }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: "-0.02em", color: TEXT_TITLE }}>
            Content Calendar
          </Typography>
          <Typography sx={{ mt: 0.5, color: TEXT_BODY, fontSize: "0.95rem" }}>
            Manage and schedule your multi-platform presence.
          </Typography>
        </Box>
        <Stack direction="row" flexWrap="wrap" spacing={0.75} useFlexGap sx={{ alignSelf: { md: "flex-end" } }}>
          {filterTabs.map((t) => {
            const active = filter === t.id;
            return (
              <Button
                key={t.id}
                onClick={() => setFilter(t.id)}
                size="small"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: "10px",
                  px: 1.75,
                  minWidth: 0,
                  color: active ? PRIMARY : TEXT_BODY,
                  bgcolor: active ? CARD_BG : "transparent",
                  boxShadow: active ? "0 1px 4px rgba(17, 24, 39, 0.1)" : "none",
                  border: active ? `1px solid ${BORDER_SUBTLE}` : "1px solid transparent",
                  "&:hover": {
                    bgcolor: active ? CARD_BG : "rgba(17, 24, 39, 0.04)",
                  },
                }}
              >
                {t.label}
              </Button>
            );
          })}
        </Stack>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1.4fr) minmax(280px, 0.75fr)" },
          alignItems: "start",
        }}
      >
        <Card elevation={0} sx={{ ...cardShell, overflow: "visible",  height: "100%" }}>
          <CardContent sx={{ p: { xs: 2, sm: 2.5 }, overflow: "visible" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={selected}
                onChange={(v) => setSelected(v)}
                referenceDate={visibleMonth}
                onMonthChange={(m) => setVisibleMonth(dayjs(m).startOf("month"))}
                onYearChange={(y) =>
                  setVisibleMonth((prev) => prev.year(dayjs(y).year()).startOf("month"))
                }
                showDaysOutsideCurrentMonth
                slots={{ day: daySlot }}
                sx={{
                  width: 1,
                  maxWidth: 1,
                  overflow: "visible",
                  /** Default day grid assumes ~36px cells; tall custom days + overflow:hidden clip the grid */
                  "& .MuiDayCalendar-root": { overflow: "visible" },
                  "& .MuiDayCalendar-monthContainer": { overflow: "visible" },
                  "& .MuiDayCalendar-slideTransition": {
                    minHeight: { xs: 440, sm: 540 },
                    overflow: "visible",
                  },
                  "& .MuiPickersSlideTransition-root": {
                    minHeight: { xs: 440, sm: 540 },
                    overflowX: "hidden",
                    overflowY: "visible",
                  },
                  /**
                   * App theme is dark (light text); this card is light. Year/month pickers use
                   * color: unset and inherit white text → invisible on white. Force readable colors.
                   */
                  "& .MuiYearCalendar-button": {
                    color: TEXT_TITLE,
                  },
                  "& .MuiYearCalendar-button.MuiYearCalendar-disabled": {
                    color: TEXT_BODY,
                    opacity: 0.55,
                  },
                  "& .MuiYearCalendar-button.MuiYearCalendar-selected": {
                    color: "#fff",
                    backgroundColor: PRIMARY,
                    "&:hover, &:focus": {
                      backgroundColor: PRIMARY,
                      opacity: 0.92,
                    },
                  },
                  "& .MuiMonthCalendar-button": {
                    color: TEXT_TITLE,
                  },
                  "& .MuiMonthCalendar-button.MuiMonthCalendar-disabled": {
                    color: TEXT_BODY,
                    opacity: 0.55,
                  },
                  "& .MuiMonthCalendar-button.MuiMonthCalendar-selected": {
                    color: "#fff",
                    backgroundColor: PRIMARY,
                    "&:hover, &:focus": {
                      backgroundColor: PRIMARY,
                      opacity: 0.92,
                    },
                  },
                  "& .MuiPickersCalendarHeader-root": {
                    pl: 0,
                    pr: 0,
                    pt: 0,
                    mb: 1.5,
                    maxHeight: "none",
                    overflow: "visible",
                  },
                  "& .MuiPickersCalendarHeader-label": {
                    color: TEXT_TITLE,
                    fontWeight: 800,
                    fontSize: "1.05rem",
                  },
                  "& .MuiPickersArrowSwitcher-root .MuiIconButton-root": {
                    color: TEXT_TITLE,
                  },
                  "& .MuiDayCalendar-weekContainer": {
                    margin: 0,
                    gap: 0,
                  },
                  "& .MuiDayCalendar-headerContainer": {
                    justifyContent: "stretch",
                    gap: 0.75,
                    mb: 0.5,
                  },
                  "& .MuiDayCalendar-weekDayLabel": {
                    width: "100%",
                    maxWidth: "none",
                    margin: 0,
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    letterSpacing: "0.06em",
                    color: TEXT_BODY,
                    py: 0.75,
                  },
                }}
              />
            </LocalizationProvider>
          </CardContent>
        </Card>
        

        <Stack spacing={2}>
          <Typography fontWeight={800} fontSize="1.1rem" sx={{ color: TEXT_TITLE }}>
            Upcoming Feed
          </Typography>

          <Card elevation={0} sx={{ ...cardShell, overflow: "hidden" }}>
            <Box
              sx={{
                height: 120,
                bgcolor: "#111",
                display: "grid",
                placeItems: "center",
                backgroundImage: "linear-gradient(135deg, #1a1a1a 0%, #333 100%)",
              }}
            >
              <LightbulbOutlined sx={{ fontSize: 48, color: "rgba(255,255,255,0.9)" }} />
            </Box>
            <CardContent sx={{ p: 2 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                <Chip
                  label="Instagram"
                  size="small"
                  sx={{ fontWeight: 700, bgcolor: MUTED_BG, color: TEXT_TITLE }}
                />
                <Stack direction="row" spacing={0.5}>
                  <IconButton size="small" aria-label="Edit">
                    <EditOutlined fontSize="small" />
                  </IconButton>
                  <IconButton size="small" aria-label="Delete">
                    <DeleteOutline fontSize="small" />
                  </IconButton>
                </Stack>
              </Stack>
              <Typography fontWeight={800} sx={{ mt: 1.25, color: TEXT_TITLE, lineHeight: 1.35 }}>
                Architectural Symmetry in Modern Workflows
              </Typography>
              <Typography variant="body2" sx={{ color: TEXT_BODY, mt: 1 }}>
                Today, 4:30 PM
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 1.5, color: TEXT_BODY, fontSize: "0.8rem" }}>
                <span>Views —</span>
                <span>Shares —</span>
                <span>Likes —</span>
              </Stack>
            </CardContent>
          </Card>

          <Card elevation={0} sx={{ ...cardShell, overflow: "hidden" }}>
            <Box
              sx={{
                height: 120,
                background:
                  "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.35), transparent 55%), radial-gradient(circle at 70% 60%, rgba(59,130,246,0.25), transparent 50%), #1e293b",
              }}
            />
            <CardContent sx={{ p: 2 }}>
              <Chip
                label="Published"
                size="small"
                sx={{ fontWeight: 800, bgcolor: "rgba(59, 76, 184, 0.14)", color: PRIMARY }}
              />
              <Typography fontWeight={800} sx={{ mt: 1.25, color: TEXT_TITLE, lineHeight: 1.35 }}>
                Leveraging AI for Content Velocity
              </Typography>
              <Typography variant="body2" sx={{ color: TEXT_BODY, mt: 0.75 }}>
                LinkedIn • Yesterday
              </Typography>
              <Typography variant="body2" sx={{ color: TEXT_BODY, mt: 1.5, fontWeight: 600 }}>
                12.4K views · 420 shares · 1.8K reactions
              </Typography>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  mt: 2,
                  textTransform: "none",
                  fontWeight: 700,
                  borderRadius: "10px",
                  borderColor: "rgba(59, 76, 184, 0.35)",
                  color: PRIMARY,
                  bgcolor: "rgba(59, 76, 184, 0.06)",
                  "&:hover": {
                    borderColor: PRIMARY,
                    bgcolor: "rgba(59, 76, 184, 0.1)",
                  },
                }}
              >
                View Full Analytics
              </Button>
            </CardContent>
          </Card>
        </Stack>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          spacing={1}
          sx={{ mb: 2 }}
        >
          <Typography fontWeight={800} fontSize="1.2rem" sx={{ color: TEXT_TITLE }}>
            Performance Pulse
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: PRIMARY }} />
            <Typography variant="body2" sx={{ color: PRIMARY, fontWeight: 700 }}>
              Live Automation Active
            </Typography>
          </Stack>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
          }}
        >
          {(
            [
              {
                title: "Total Reach",
                value: "84.2k",
                sub: "+12% from last month",
                subColor: SUCCESS,
                icon: null,
              },
              {
                title: "Engagement",
                value: "5.8%",
                sub: "+0.4% baseline",
                subColor: SUCCESS,
                icon: null,
              },
              {
                title: "Best Time",
                value: "2 PM",
                sub: "Optimal Tuesday/Thursday",
                subColor: TEXT_BODY,
                icon: null,
              },
              {
                title: "AI Insight",
                value: "",
                sub: "Video posts on Wednesday get 3x reach.",
                subColor: TEXT_BODY,
                icon: <AutoAwesome sx={{ color: "#7C3AED", fontSize: 22 }} />,
              },
            ] as const
          ).map((card) => (
            <Card key={card.title} elevation={0} sx={cardShell}>
              <CardContent sx={{ p: 2 }}>
                <Stack direction="row" alignItems="center" spacing={0.75} sx={{ mb: 1 }}>
                  {card.icon}
                  <Typography variant="body2" fontWeight={700} sx={{ color: TEXT_BODY }}>
                    {card.title}
                  </Typography>
                </Stack>
                {card.value ? (
                  <Typography fontWeight={800} fontSize="1.5rem" sx={{ color: TEXT_TITLE }}>
                    {card.value}
                  </Typography>
                ) : null}
                <Typography
                  variant="body2"
                  sx={{
                    mt: card.value ? 0.75 : 0,
                    color: card.subColor,
                    fontWeight: card.subColor === SUCCESS ? 600 : 500,
                  }}
                >
                  {card.sub}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
