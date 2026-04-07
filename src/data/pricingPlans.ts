export type BillingCycle = "monthly" | "yearly";

export type FeatureState = "yes" | "no" | "muted";

export interface PlanFeature {
  label: string;
  state: FeatureState;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  /** Whole-dollar monthly price; null for custom/enterprise */
  monthlyPrice: number | null;
  popular?: boolean;
  features: PlanFeature[];
  ctaLabel: string;
  ctaTo: string;
  ctaOutlined?: boolean;
}

/** ~20% off when billed yearly (shown as effective monthly). */
export const YEARLY_DISCOUNT = 0.2;

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for emerging creators",
    monthlyPrice: 29,
    features: [
      { label: "5 Social Profiles", state: "yes" },
      { label: "Standard Scheduling", state: "yes" },
      { label: "Basic Analytics", state: "yes" },
      { label: "AI Content Generation", state: "muted" },
    ],
    ctaLabel: "Choose Starter",
    ctaTo: "?signup=1",
    ctaOutlined: true,
  },
  {
    id: "professional",
    name: "Professional",
    description: "Scalable power for agencies",
    monthlyPrice: 79,
    popular: true,
    features: [
      { label: "25 Social Profiles", state: "yes" },
      { label: "Advanced AI Automation", state: "yes" },
      { label: "Custom Reporting Engine", state: "yes" },
      { label: "Team Collaboration (5 users)", state: "yes" },
      { label: "Priority Queueing", state: "yes" },
    ],
    ctaLabel: "Choose Professional",
    ctaTo: "?signup=1",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Full-spectrum brand control",
    monthlyPrice: null,
    features: [
      { label: "Unlimited Profiles", state: "yes" },
      { label: "White-label Analytics", state: "yes" },
      { label: "SSO & Dedicated Support", state: "yes" },
      { label: "Custom API Integration", state: "yes" },
    ],
    ctaLabel: "Contact Sales",
    ctaTo: "mailto:sales@schedlify.app",
    ctaOutlined: true,
  },
];

export interface ComparisonRow {
  feature: string;
  starter: string;
  pro: string;
  enterprise: string;
  /** When true, cells are check/dash icons instead of text */
  iconCells?: boolean;
}

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Social Accounts",
    starter: "5",
    pro: "25",
    enterprise: "Unlimited",
  },
  {
    feature: "Team Workspaces",
    starter: "1",
    pro: "5",
    enterprise: "Unlimited",
  },
  {
    feature: "AI Writing Assistant",
    starter: "—",
    pro: "yes",
    enterprise: "yes",
    iconCells: true,
  },
  {
    feature: "Data Export",
    starter: "—",
    pro: "yes",
    enterprise: "yes",
    iconCells: true,
  },
  {
    feature: "Custom Reporting",
    starter: "—",
    pro: "yes",
    enterprise: "yes",
    iconCells: true,
  },
  {
    feature: "SSO",
    starter: "—",
    pro: "—",
    enterprise: "yes",
    iconCells: true,
  },
];

export interface PricingFaq {
  q: string;
  a: string;
}

export const pricingFaqs: PricingFaq[] = [
  {
    q: "What happens after my 14-day free trial?",
    a: "When your trial ends, you can pick a paid plan or downgrade to our limited free tier. We never charge without confirmation, and you can export your data at any time.",
  },
  {
    q: "Can I switch between monthly and yearly billing?",
    a: "Yes. You can change billing cadence from your workspace settings. Yearly plans reflect the advertised savings when you commit to annual billing.",
  },
  {
    q: "Do you offer discounts for nonprofits or education?",
    a: "We do. Contact our team with your organization details and we will share eligible programs.",
  },
  {
    q: "Is there a limit on scheduled posts?",
    a: "Starter and Professional include generous fair-use limits suitable for most teams. Enterprise offers custom limits and SLAs.",
  },
];

export function effectiveMonthlyPrice(monthly: number, cycle: BillingCycle): number {
  if (cycle === "monthly") return monthly;
  return Math.round(monthly * (1 - YEARLY_DISCOUNT));
}
