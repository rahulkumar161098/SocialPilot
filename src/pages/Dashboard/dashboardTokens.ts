/** Shared dashboard / Architect Automation Suite palette */
export const PRIMARY = "#3B4CB8";
export const PRIMARY_HOVER = "#323F9E";
export const PRIMARY_DEEP = "#2A368F";
/** Darker blue for primary actions (e.g. Create Post) per calendar reference */
export const PRIMARY_ACTION = "#283593";
export const SUCCESS = "#10B981";
export const ERROR = "#EF4444";
export const PAGE_BG = "#F4F7F9";
export const SIDEBAR_BG = "#F8F9FA";
export const CARD_BG = "#FFFFFF";
export const MUTED_BG = "#EEF1F4";
export const TEXT_TITLE = "#111827";
export const TEXT_BODY = "#6B7280";
export const BORDER_SUBTLE = "#E5E7EB";
export const TOOLTIP_BG = "#374151";
export const SIDEBAR_WIDTH = 272;
/** Sidebar / accent (orange-brown for growth metrics) */
export const ACCENT_ORANGE = "#EA580C";
export const CHART_BAR_FB = "#1E3A5F";
export const CHART_BAR_IN = "#3B4CB8";
export const CHART_BAR_LI = "#92400E";
export const CHART_BAR_OTHER = "#9CA3AF";

export const cardShell = {
  borderRadius: "14px",
  bgcolor: CARD_BG,
  border: `1px solid ${BORDER_SUBTLE}`,
  boxShadow: "0 1px 2px rgba(17, 24, 39, 0.05), 0 4px 14px rgba(17, 24, 39, 0.04)",
} as const;
