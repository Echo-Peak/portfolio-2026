# Goal

The generated timeline should help a recruiter or client answer these questions
in under 10 seconds:

- who the person worked for
- what role they had
- when they worked there
- what impact they made
- what technologies they used
- whether the experience is relevant to the viewer’s current need

That means the component is not just a chronological list. It is a **credibility
surface**. The generator should prioritize **scanability first**, **detail on
demand second**.

## 2. UX principles the AI generator must follow

### A. Progressive disclosure

The default state should be easy to scan. Each entry should expose only the
highest-value information up front:

- role
- company
- date range
- 1 short summary
- 2–4 high-signal achievements or tags

More detail should be hidden behind an expansion pattern such as:

- accordion row
- “view details” drawer/sheet
- inline expandable section

The generator should avoid dumping full bullet lists by default.

### B. Relevance over completeness

The generator should highlight:

- measurable outcomes
- seniority progression
- long tenure
- notable brands or products
- role complexity
- stack relevance to the rest of the portfolio

It should de-emphasize low-signal content such as long task lists with no
outcomes.

### C. Strong visual hierarchy

For each item, the weight order should be:

1. role title
2. company
3. date range
4. impact summary
5. stack / tags
6. supporting bullets / links

The generator should never style company and role as visually equal. In a
portfolio, **role** is the main story.

### D. Timeline as orientation, not decoration

The vertical line, markers, and date chips should help the user understand
sequence and overlap. They should not dominate the design. The timeline
ornamentation should stay subtle.

### E. Detail should feel “earned”

Expanded content should reveal things the collapsed state does not:

- responsibilities
- achievements
- metrics
- projects
- stack breakdown
- links to case studies, repo, product, certificate, or company site

If expansion only repeats visible data, the interaction is wasted.

## 3. Information architecture for each employment item

Each timeline entry should support four layers of information.

### Layer 1: headline

Always visible.

- role
- company
- date range
- current/past indicator
- location or work mode
- optional company logo

### Layer 2: value summary

Visible in collapsed state.

- one sentence summary
- 2–4 highlight pills or bullets
- optional “featured” badge

### Layer 3: expanded detail

Visible only on interaction.

- fuller role description
- responsibilities
- achievements
- measurable metrics
- related projects
- stack grouped by category
- external links

### Layer 4: credibility attachments

Optional.

- company URL
- project link
- case study link
- media mention
- certificate
- downloadable resume anchor

## 4. Layout criteria the generator should follow

### Desktop

Preferred pattern:

- **single-column vertical timeline** for clarity, or
- **alternating timeline** only if there are few entries and the design can
  support it

For portfolio use, a single-column layout is usually better because it reads
more predictably and adapts better to variable content length.

Desktop collapsed item structure:

- left rail: marker + line + year/date chip
- right panel: card-like content container

### Tablet

Keep the vertical timeline, but reduce decorative spacing and move all metadata
into one content column.

### Mobile

The generator should collapse into a strict single-column list:

- marker and line can be smaller
- dates can move above or beside the title
- long tag rows should wrap cleanly
- expansion should feel tap-friendly

Tailwind’s responsive utilities are well suited to this breakpoint-driven
restructuring. ([Tailwind CSS][2]) generator should enforce

### Date rules

- support `Present`
- support partial dates like month/year
- support overlapping roles
- support adjacent promotions inside the same company
- support grouped positions under one employer

### Summary rules

Each entry summary should be:

- 1–2 lines in collapsed state
- written as outcome or scope
- free of filler adjectives

Bad: “Worked on many important projects.”

Good: “Built internal distribution tooling and Windows-native integration layers
for a security product used across enterprise deployments.”

### Achievement rules

The AI generator should prefer bullets that are:

- quantified
- scoped
- relevant
- distinct from the summary

Examples:

- Reduced installer complexity across multiple deployment channels
- Built native bridge between Node.js and Windows APIs
- Designed scalable criteria engine for endpoint security checks

### Stack rules

The generator should avoid dumping 20 tags in one row. It should:

- surface top 4–6 key technologies in collapsed state
- move the rest into expanded detail
- optionally group by category: frontend, backend, cloud, tooling

## 6. Interaction criteria

### Expand/collapse

Every entry should support one clear primary interaction:

- click card
- click chevron
- click “details”

The entire card can be interactive, but the generator should preserve obvious
affordance.

### Filters

For a portfolio timeline, filters are valuable if the user has varied
experience. Good filters:

- role type
- technology
- domain
- year range
- featured only

Bad filters:

- trivial metadata no recruiter cares about

### Sort

Default sort should be reverse chronological.

Optional alternative sorts:

- featured first
- relevance to current page context
- grouped by company

### Deep linking

Each entry should have a stable `id` so it can be linked directly from elsewhere
in the portfolio.

### Related content

Expanded items should optionally surface:

- case study cards
- “used in project X”
- “see code sample”
- “read architecture notes”

This turns the timeline into navigation, not just biography.

## 7. Visual design criteria

### Tone

The component should feel:

- professional
- restrained
- high signal
- slightly premium

### Styling guidance

Use a card-on-background pattern with subtle separation:

- soft border
- low-contrast surface elevation
- restrained timeline line
- slightly stronger marker for current role

### Current role treatment

The “current” or “present” role should stand out with one or two signals only:

- accent marker
- badge
- slightly emphasized border or ring

Do not use multiple loud treatments together.

### Company logo handling

If logos are shown:

- keep them small
- use consistent sizing
- avoid letting one brand dominate the row
- provide a fallback monogram/avatar

### Density modes

The generator should support at least:

- `comfortable`
- `compact`

Portfolio homepages may want comfortable spacing. Resume pages may want compact
density.

## 8. Accessibility criteria

The generated component should be keyboard navigable and screen-reader sensible.

Requirements:

- semantic section heading for the timeline
- semantic list structure for entries
- each entry should expose a clear label combining role, company, and dates
- expand/collapse controls must expose state
- visible focus states
- not rely on color alone for current vs past roles
- support reduced motion
- icon-only actions need labels

React supports ARIA attributes directly, and `useId` is useful for wiring
repeated labels/descriptions in generated component instances. ([React][3])ture
would be:

- `section`
- heading
- `ol`
- `li`
- `article`
- `time`

## 9. Motion criteria

Animation should be subtle and informative:

- chevron rotation
- detail panel height/fade
- hover lift only on pointer devices
- no decorative timeline motion loops

Respect reduced-motion preferences.

## 10. State criteria

The AI generator should always produce all major states.

### Required states

- populated
- empty
- filtered empty
- loading / skeleton
- truncated mobile layout
- current role present
- no logo fallback
- no metrics fallback
- no links fallback

### Empty state copy

Should be neutral and professional: “No timeline items available.”

### Filtered empty state

Should help recovery: “No roles match these filters.”

## 11. Portfolio-specific criteria

Because this is for a portfolio site, the generator should do more than recreate
LinkedIn.

### It should support:

- featured entries
- case-study linkage
- technology emphasis
- outcomes emphasis
- founder/freelance/agency roles
- grouped promotions within one company
- optional recruiter-friendly summary view

### It should avoid:

- heavy enterprise HR styling
- dense resume-only formatting
- giant paragraphs
- badge spam
- too many decorative icons

## 12. shadcn + Tailwind implementation guidance

Recommended composition:

- `Card` or card-like wrapper for each entry
- `Badge` for status, employment type, stack highlights
- `Accordion` for detail disclosure
- `Separator` for subtle structure
- `Button` for “view case study” / “open company”
- `Tooltip` only for overflow or metadata clarification
- `Skeleton` for loading state
- `ScrollArea` only if the detail body can become long

Because shadcn/ui is intended as a foundation you customize, the AI generator
should generate code that is easy to restyle via tokens and Tailwind utilities
rather than baking in rigid one-off classes. CSS variable theming also fits well
for timeline accents, current-role markers, and dark-mode adaptations. ([Shadcn
UI][1])eptance criteria

A generated result is good only if it satisfies all of these:

- reverse chronological by default
- handles current role cleanly
- collapsed state is readable in under 5 seconds
- expanded state adds meaningful detail
- mobile layout remains usable
- supports logos, links, tags, metrics, and optional projects
- accessible disclosure and keyboard navigation
- no fake placeholder business copy in final production mode
- all repeated items use stable ids
- content and presentation config are separated

---

# TypeScript domain model

This model separates **content data** from **UI display options**, which is
important for AI-generated UIs. The same employment data can power multiple
timeline variants.

```ts
export type EmploymentType =
  | "full-time"
  | "part-time"
  | "contract"
  | "freelance"
  | "consulting"
  | "internship"
  | "apprenticeship"
  | "founder"
  | "self-employed";

export type EmploymentStatus = "past" | "current" | "upcoming";

export type WorkMode = "on-site" | "remote" | "hybrid";

export type DatePrecision = "day" | "month" | "quarter" | "year";

export type TimelineDensity = "comfortable" | "compact";

export type TimelineLayout =
  | "single-column"
  | "alternating"
  | "grouped-by-company";

export type HighlightTone = "default" | "muted" | "accent" | "success";

export type LinkKind =
  | "company"
  | "project"
  | "case-study"
  | "repository"
  | "certificate"
  | "press"
  | "demo"
  | "external";

export type TechCategory =
  | "language"
  | "framework"
  | "library"
  | "platform"
  | "cloud"
  | "database"
  | "tooling"
  | "process"
  | "other";

export interface TimelineDateValue {
  iso?: string;
  label: string;
  precision: DatePrecision;
}

export interface TimelineDateRange {
  start: TimelineDateValue;
  end?: TimelineDateValue;
  isCurrent?: boolean;
}

export interface EmploymentMetric {
  id: string;
  label: string;
  value: string;
  context?: string;
}

export interface EmploymentLink {
  id: string;
  kind: LinkKind;
  label: string;
  href: string;
  external?: boolean;
}

export interface TechTag {
  id: string;
  label: string;
  category?: TechCategory;
}

export interface MediaAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface PromotionStep {
  id: string;
  role: string;
  range: TimelineDateRange;
  summary?: string;
  achievements?: string[];
}

export interface RelatedProjectReference {
  id: string;
  title: string;
  href?: string;
  summary?: string;
}

export interface EmploymentEntry {
  id: string;
  company: string;
  companyUrl?: string;
  companyLogo?: MediaAsset;
  role: string;
  department?: string;
  employmentType: EmploymentType;
  status: EmploymentStatus;
  workMode?: WorkMode;
  location?: string;
  range: TimelineDateRange;
  summary: string;
  responsibilities?: string[];
  achievements?: string[];
  metrics?: EmploymentMetric[];
  stack?: TechTag[];
  links?: EmploymentLink[];
  relatedProjects?: RelatedProjectReference[];
  promotionPath?: PromotionStep[];
  featured?: boolean;
  accentTone?: HighlightTone;
  sortOrder?: number;
}

export interface EmploymentGroup {
  id: string;
  company: string;
  companyUrl?: string;
  companyLogo?: MediaAsset;
  entries: EmploymentEntry[];
}

export interface EmploymentTimelineFilterState {
  search?: string;
  technologyIds?: string[];
  employmentTypes?: EmploymentType[];
  workModes?: WorkMode[];
  featuredOnly?: boolean;
  statuses?: EmploymentStatus[];
  yearRange?: {
    from?: number;
    to?: number;
  };
}

export interface EmploymentTimelineDisplayOptions {
  layout: TimelineLayout;
  density: TimelineDensity;
  showLogos: boolean;
  showMetrics: boolean;
  showStack: boolean;
  showLinks: boolean;
  showRelatedProjects: boolean;
  defaultExpandedIds?: string[];
  maxVisibleTagsCollapsed?: number;
  maxVisibleHighlightsCollapsed?: number;
  currentRoleAccent?: boolean;
}

export interface EmploymentTimelineSection {
  id: string;
  title: string;
  subtitle?: string;
  entries: EmploymentEntry[];
  filters?: EmploymentTimelineFilterState;
  display?: Partial<EmploymentTimelineDisplayOptions>;
}
```

## React component prop interfaces

This is the layer between raw data and rendering.

```ts
export interface EmploymentTimelineProps {
  section: EmploymentTimelineSection;
  className?: string;
  activeEntryId?: string;
  onEntrySelect?: (entryId: string) => void;
  onFilterChange?: (filters: EmploymentTimelineFilterState) => void;
}

export interface EmploymentTimelineItemProps {
  entry: EmploymentEntry;
  expanded?: boolean;
  showLogo?: boolean;
  showMetrics?: boolean;
  showStack?: boolean;
  showLinks?: boolean;
  showRelatedProjects?: boolean;
  maxVisibleTagsCollapsed?: number;
  maxVisibleHighlightsCollapsed?: number;
  onToggleExpand?: (entryId: string) => void;
  onSelect?: (entryId: string) => void;
}

export interface EmploymentTimelineListProps {
  entries: EmploymentEntry[];
  display: EmploymentTimelineDisplayOptions;
  activeEntryId?: string;
  onEntrySelect?: (entryId: string) => void;
}
```

## Optional normalized UI view model

This is useful if the AI generator should transform raw CMS/resume data into a
rendering-friendly shape before passing it into the component.

```ts
export interface EmploymentTimelineItemViewModel {
  id: string;
  title: string;
  subtitle: string;
  dateLabel: string;
  statusLabel?: string;
  locationLabel?: string;
  summary: string;
  visibleHighlights: string[];
  hiddenHighlightsCount: number;
  visibleTags: TechTag[];
  hiddenTagsCount: number;
  metrics: EmploymentMetric[];
  links: EmploymentLink[];
  relatedProjects: RelatedProjectReference[];
  logo?: MediaAsset;
  isCurrent: boolean;
  isFeatured: boolean;
}

export interface EmploymentTimelineViewModel {
  sectionId: string;
  heading: string;
  subheading?: string;
  items: EmploymentTimelineItemViewModel[];
  totalCount: number;
  activeFilters?: EmploymentTimelineFilterState;
}
```

## Example data

```ts
export const employmentTimelineData: EmploymentTimelineSection = {
  id: "experience",
  title: "Work Experience",
  subtitle: "Roles, impact, and technical progression over time.",
  entries: [
    {
      id: "polyenv-v5",
      company: "PolyEnv",
      role: "Senior Software Engineer",
      employmentType: "full-time",
      status: "past",
      workMode: "remote",
      range: {
        start: { label: "May 2022", precision: "month", iso: "2022-05-01" },
        end: { label: "August 2025", precision: "month", iso: "2025-08-31" },
      },
      summary:
        "Built scalable desktop and backend capabilities for a security-focused product, with emphasis on native OS integration and deployment workflows.",
      achievements: [
        "Built a Node.js addon to bridge Node.js and Windows APIs",
        "Created distribution services for online and offline installer flows",
        "Helped define multifaceted endpoint security check criteria",
      ],
      stack: [
        { id: "ts", label: "TypeScript", category: "language" },
        { id: "react", label: "React", category: "framework" },
        { id: "node", label: "Node.js", category: "platform" },
        { id: "csharp", label: "C#", category: "language" },
      ],
      links: [
        {
          id: "case-study-polyenv",
          kind: "case-study",
          label: "View case study",
          href: "/projects/polyenv",
        },
      ],
      featured: true,
    },
  ],
  display: {
    layout: "single-column",
    density: "comfortable",
    showLogos: true,
    showMetrics: true,
    showStack: true,
    showLinks: true,
    showRelatedProjects: true,
    maxVisibleTagsCollapsed: 5,
    maxVisibleHighlightsCollapsed: 3,
    currentRoleAccent: true,
  },
};
```
