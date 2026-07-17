import type { ReactNode } from "react";

import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CircleCheck,
  Clock3,
  Code2,
  Download,
  Ellipsis,
  ExternalLink,
  Eye,
  EyeOff,
  Filter,
  FolderSearch,
  GitBranch,
  GraduationCap,
  HelpCircle,
  Inbox,
  Layers3,
  LockKeyhole,
  LogOut,
  Mail,
  MoreHorizontal,
  Pencil,
  Plus,
  Rocket,
  Search,
  Settings,
  Settings2,
  ShieldCheck,
  Sparkles,
  Trash2,
  User,
  UserCircle,
  UserRoundCog,
} from "lucide-react";

import { Accordion } from "@/components/ui/accordion";
import { Alert } from "@/components/ui/alert";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Divider } from "@/components/ui/divider";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { EmptyState } from "@/components/ui/empty-state";
import { FormField } from "@/components/ui/form-field";
import { IconContainer } from "@/components/ui/icon-container";
import { Input } from "@/components/ui/input";
import { LinkButton } from "@/components/ui/link-button";
import { ModalDemo } from "@/components/ui/modal-demo";
import { PaginationDemo } from "@/components/ui/pagination-demo";
import { Progress } from "@/components/ui/progress";
import { RadioGroup } from "@/components/ui/radio-group";
import { SectionHeading } from "@/components/ui/section-heading";
import { Select } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { StatCard } from "@/components/ui/stat-card";
import { Switch } from "@/components/ui/switch";
import { Table } from "@/components/ui/table";
import { Tabs } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ToastDemo } from "@/components/ui/toast-demo";
import { Tooltip } from "@/components/ui/tooltip";

const sectionNavigation = [
  { href: "#overview", label: "Overview", count: "01" },
  { href: "#foundations", label: "Foundations", count: "02" },
  { href: "#forms", label: "Forms", count: "03" },
  { href: "#navigation", label: "Navigation", count: "04" },
  { href: "#feedback", label: "Feedback", count: "05" },
  { href: "#data", label: "Data", count: "06" },
  { href: "#release", label: "Release", count: "07" },
];

const capabilityCards = [
  {
    title: "Public portfolio",
    description:
      "Audience-adaptive pages for recruiters, hiring managers, admissions teams, and general visitors.",
    icon: <BriefcaseBusiness size={23} />,
    variant: "primary" as const,
  },
  {
    title: "Private administration",
    description:
      "Protected content editing, analytics, resume versions, project management, and platform settings.",
    icon: <ShieldCheck size={23} />,
    variant: "success" as const,
  },
  {
    title: "AI career intelligence",
    description:
      "Approved portfolio Q&A, project analysis, resume guidance, and career-mode personalization.",
    icon: <Bot size={23} />,
    variant: "info" as const,
  },
];

type ProjectRow = {
  id: string;
  name: string;
  category: string;
  status: "In Development" | "Active" | "Completed";
  updated: string;
};

const projectRows: ProjectRow[] = [
  {
    id: "syedos",
    name: "SyedOS",
    category: "Intelligent career platform",
    status: "In Development",
    updated: "17 July 2026",
  },
  {
    id: "syedai",
    name: "SyedAI Assistant",
    category: "Artificial intelligence",
    status: "Active",
    updated: "13 July 2026",
  },
  {
    id: "campushire",
    name: "CampusHire",
    category: "Full-stack web application",
    status: "Completed",
    updated: "8 July 2026",
  },
];

type ActivityRow = {
  id: string;
  action: string;
  item: string;
  status: "Completed" | "Ready" | "Planned";
};

const activityRows: ActivityRow[] = [
  {
    id: "activity-1",
    action: "Advanced UI foundation",
    item: "Reusable component library",
    status: "Completed",
  },
  {
    id: "activity-2",
    action: "Portfolio structure",
    item: "Public and protected routes",
    status: "Ready",
  },
  {
    id: "activity-3",
    action: "CMS integration",
    item: "Payload CMS and PostgreSQL",
    status: "Planned",
  },
];

type ShowcaseSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

function ShowcaseSection({
  id,
  eyebrow,
  title,
  description,
  children,
}: ShowcaseSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-slate-800/90 bg-slate-950/[0.55] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7 lg:p-9"
    >
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="mt-8">{children}</div>
    </section>
  );
}

function PanelLabel({ children }: { children: ReactNode }) {
  return (
    <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="absolute -left-52 -top-52 h-[38rem] w-[38rem] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-[-14rem] top-[12rem] h-[34rem] w-[34rem] rounded-full bg-cyan-500/[0.12] blur-3xl" />
        <div className="absolute bottom-[-18rem] left-[28%] h-[40rem] w-[40rem] rounded-full bg-violet-600/[0.12] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.2)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="syedos-container relative py-4 sm:py-7 lg:py-9">
        <header className="sticky top-4 z-40 rounded-2xl border border-slate-800/90 bg-slate-950/[0.82] px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-5">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#overview"
              className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-300 transition group-hover:border-cyan-400/50 group-hover:text-cyan-300">
                <Sparkles size={19} />
              </span>

              <span>
                <span className="block text-sm font-semibold text-white">
                  SyedOS Interface Lab
                </span>
                <span className="block text-xs text-slate-500">
                  Advanced production foundation
                </span>
              </span>
            </a>

            <nav
              aria-label="Primary showcase navigation"
              className="hidden items-center gap-1 xl:flex"
            >
              {sectionNavigation.slice(0, 6).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Badge variant="success" dot>
                UI v1 complete
              </Badge>

              <Tooltip content="Open component documentation">
                <button
                  type="button"
                  aria-label="Open component documentation"
                  className="hidden rounded-xl border border-slate-700 bg-slate-900 p-2.5 text-slate-400 transition hover:border-blue-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:inline-flex"
                >
                  <BookOpen size={18} />
                </button>
              </Tooltip>
            </div>
          </div>
        </header>

        <section
          id="overview"
          className="relative mt-6 overflow-hidden rounded-[2.35rem] border border-slate-800 bg-slate-950/[0.68] px-6 py-9 shadow-2xl shadow-black/35 backdrop-blur-xl sm:px-9 lg:px-12 lg:py-14"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.12),transparent_40%)]"
          />

          <div className="relative grid items-center gap-10 xl:grid-cols-[1.12fr_0.88fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="primary" dot>
                  SyedOS Design Language
                </Badge>

                <Badge variant="outline">
                  Next.js + TypeScript
                </Badge>

                <Badge variant="info">
                  Accessible by default
                </Badge>
              </div>

              <p className="syedos-code-text mt-7 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                Intelligent Career Portfolio Platform
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl leading-[1.02] sm:text-5xl lg:text-6xl xl:text-7xl">
                A premium interface system built for a serious technical
                career.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                SyedOS combines portfolio storytelling, recruiter-focused
                presentation, private administration, structured content,
                analytics, and AI-assisted career intelligence in one
                scalable product foundation.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <LinkButton
                  href="#foundations"
                  rightIcon={<ArrowRight size={18} />}
                >
                  Explore the system
                </LinkButton>

                <LinkButton
                  href="https://github.com/syedmohiuddin106-dot"
                  variant="secondary"
                  external
                  leftIcon={<GitBranch size={18} />}
                  rightIcon={<ExternalLink size={16} />}
                  ariaLabel="Open Syed Mohiuddin's GitHub profile"
                >
                  View GitHub
                </LinkButton>

                <LinkButton
                  href="/resume/syed-mohiuddin-resume.pdf"
                  variant="ghost"
                  download
                  leftIcon={<Download size={18} />}
                  ariaLabel="Download Syed Mohiuddin's resume"
                >
                  Resume
                </LinkButton>
              </div>

              <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/[0.55] p-4">
                  <p className="text-2xl font-bold text-white">30+</p>
                  <p className="mt-1 text-sm text-slate-500">
                    reusable UI modules
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/[0.55] p-4">
                  <p className="text-2xl font-bold text-white">7</p>
                  <p className="mt-1 text-sm text-slate-500">
                    interface domains
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/[0.55] p-4">
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p className="mt-1 text-sm text-slate-500">
                    type-safe foundation
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-blue-600/10 blur-3xl" />

              <Card variant="glass" className="relative overflow-hidden p-0">
                <div className="border-b border-slate-800 px-5 py-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <PanelLabel>System command center</PanelLabel>
                      <p className="mt-2 font-semibold text-white">
                        SyedOS build intelligence
                      </p>
                    </div>

                    <Badge variant="success" dot>
                      Operational
                    </Badge>
                  </div>
                </div>

                <div className="space-y-6 p-5">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                        Frontend
                      </p>
                      <p className="mt-2 font-semibold text-white">
                        Next.js 16
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        App Router + TypeScript
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                        Content
                      </p>
                      <p className="mt-2 font-semibold text-white">
                        Payload CMS
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Structured and editable
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <p className="font-medium text-white">
                        Platform readiness
                      </p>
                      <span className="syedos-code-text text-xs text-green-300">
                        FOUNDATION COMPLETE
                      </span>
                    </div>

                    <div className="space-y-4">
                      <Progress
                        label="UI architecture"
                        value={100}
                        variant="success"
                        size="small"
                      />
                      <Progress
                        label="Public portfolio"
                        value={35}
                        variant="primary"
                        size="small"
                      />
                      <Progress
                        label="CMS and database"
                        value={10}
                        variant="info"
                        size="small"
                      />
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                    <div className="flex items-center gap-3">
                      <Spinner
                        size="small"
                        variant="success"
                        label="System ready"
                      />

                      <div>
                        <p className="text-sm font-medium text-white">
                          Production build verified
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          TypeScript, static generation, and UI checks passed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Core Projects"
            value="3"
            description="SyedOS, SyedAI, CampusHire"
            icon={<Code2 size={21} />}
            trend={{
              value: "Portfolio ready",
              direction: "up",
            }}
          />

          <StatCard
            label="Career Modes"
            value="13"
            description="Audience-adaptive presentation"
            icon={<BriefcaseBusiness size={21} />}
          />

          <StatCard
            label="AI Capabilities"
            value="17"
            description="Agent and assistant modes"
            icon={<Bot size={21} />}
            trend={{
              value: "Expandable",
              direction: "neutral",
            }}
          />

          <StatCard
            label="System Status"
            value="Ready"
            description="UI foundation completed"
            icon={<BarChart3 size={21} />}
            trend={{
              value: "Build verified",
              direction: "up",
            }}
          />
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[15.5rem_minmax(0,1fr)]">
          <aside className="hidden xl:block">
            <div className="sticky top-28 space-y-4">
              <Card variant="glass" className="p-4">
                <PanelLabel>Component directory</PanelLabel>

                <nav
                  aria-label="Section directory"
                  className="mt-4 space-y-1"
                >
                  {sectionNavigation.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <span>{item.label}</span>
                      <span className="syedos-code-text text-xs text-slate-600 group-hover:text-cyan-400">
                        {item.count}
                      </span>
                    </a>
                  ))}
                </nav>
              </Card>

              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <IconContainer
                    variant="success"
                    size="small"
                    label="Release verified"
                  >
                    <Check size={16} />
                  </IconContainer>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      UI foundation complete
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      Ready to begin the public portfolio and protected
                      administration layers.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </aside>

          <div className="space-y-6">
            <ShowcaseSection
              id="foundations"
              eyebrow="Foundation Layer"
              title="Visual language, identity, and reusable surfaces"
              description="The core visual primitives establish consistency across public pages, protected administration, project case studies, and AI-powered experiences."
            >
              <div className="grid gap-5 md:grid-cols-3">
                {capabilityCards.map((capability) => (
                  <Card key={capability.title} variant="elevated" interactive>
                    <IconContainer
                      variant={capability.variant}
                      size="large"
                      label={capability.title}
                    >
                      {capability.icon}
                    </IconContainer>

                    <h3 className="mt-5 text-xl">{capability.title}</h3>
                    <p className="mt-2">{capability.description}</p>
                  </Card>
                ))}
              </div>

              <Divider label="Actions and navigation" className="my-9" />

              <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <PanelLabel>Action system</PanelLabel>
                  <h3 className="mt-3 text-xl">
                    Clear actions with semantic variants
                  </h3>
                  <p className="mt-2">
                    Primary, secondary, ghost, destructive, disabled, and
                    loading states are ready for production workflows.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button rightIcon={<ArrowRight size={17} />}>
                      Continue
                    </Button>

                    <Button
                      variant="secondary"
                      leftIcon={<Download size={17} />}
                    >
                      Download
                    </Button>

                    <Button variant="ghost">Preview</Button>

                    <Button
                      variant="danger"
                      leftIcon={<Trash2 size={17} />}
                    >
                      Delete
                    </Button>

                    <Button loading>Processing</Button>
                  </div>
                </Card>

                <Card variant="glass">
                  <PanelLabel>Link actions</PanelLabel>
                  <h3 className="mt-3 text-xl">
                    Internal, external, and downloadable destinations
                  </h3>
                  <p className="mt-2">
                    Navigation remains visually consistent while preserving
                    the correct semantic link behavior.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <LinkButton
                      href="/projects"
                      rightIcon={<ArrowRight size={17} />}
                    >
                      Projects
                    </LinkButton>

                    <LinkButton
                      href="https://github.com/syedmohiuddin106-dot"
                      variant="secondary"
                      external
                      leftIcon={<GitBranch size={17} />}
                      rightIcon={<ExternalLink size={15} />}
                      ariaLabel="Open Syed Mohiuddin's GitHub profile"
                    >
                      GitHub
                    </LinkButton>

                    <LinkButton
                      href="/resume/syed-mohiuddin-resume.pdf"
                      variant="ghost"
                      download
                      leftIcon={<Download size={17} />}
                      ariaLabel="Download Syed Mohiuddin's resume"
                    >
                      Resume
                    </LinkButton>
                  </div>
                </Card>
              </div>

              <div className="mt-6 grid gap-6 2xl:grid-cols-[1.1fr_0.9fr]">
                <Card variant="editorial">
                  <PanelLabel>Identity and status</PanelLabel>

                  <div className="mt-5 flex items-start gap-4">
                    <Avatar
                      alt="Syed Mohiuddin"
                      initials="SM"
                      size="extraLarge"
                      status="online"
                    />

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-2xl">Syed Mohiuddin</h3>
                        <Badge variant="success" dot>
                          Available
                        </Badge>
                      </div>

                      <p className="mt-2">
                        Information Technology student building full-stack,
                        AI-assisted, and career-focused software products.
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="primary">Next.js</Badge>
                        <Badge variant="info">AI Integration</Badge>
                        <Badge variant="outline">PHP</Badge>
                        <Badge variant="outline">MySQL</Badge>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <PanelLabel>Tooltip and icon surfaces</PanelLabel>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Tooltip content="Platform configuration">
                      <button
                        type="button"
                        aria-label="Platform configuration"
                        className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-300 transition hover:border-blue-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        <Settings size={20} />
                      </button>
                    </Tooltip>

                    <Tooltip
                      content="Security architecture"
                      position="bottom"
                    >
                      <button
                        type="button"
                        aria-label="Security architecture"
                        className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-300 transition hover:border-green-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                      >
                        <ShieldCheck size={20} />
                      </button>
                    </Tooltip>

                    <Tooltip content="Project documentation" position="right">
                      <button
                        type="button"
                        aria-label="Project documentation"
                        className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-300 transition hover:border-cyan-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                      >
                        <HelpCircle size={20} />
                      </button>
                    </Tooltip>

                    <IconContainer
                      variant="primary"
                      size="large"
                      rounded="full"
                      label="Launch"
                    >
                      <Rocket size={23} />
                    </IconContainer>

                    <IconContainer
                      variant="warning"
                      size="large"
                      label="Education"
                    >
                      <GraduationCap size={23} />
                    </IconContainer>
                  </div>
                </Card>
              </div>
            </ShowcaseSection>

            <ShowcaseSection
              id="forms"
              eyebrow="Form Architecture"
              title="Professional controls for content, settings, and authentication"
              description="Every form control supports accessible labels, descriptions, validation feedback, disabled states, and consistent focus behavior."
            >
              <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <PanelLabel>Identity and discovery</PanelLabel>
                  <div className="mt-6 space-y-6">
                    <Input
                      label="Full name"
                      name="fullName"
                      placeholder="Enter your full name"
                      leftIcon={<User size={18} />}
                      required
                    />

                    <Input
                      label="Professional email"
                      name="professionalEmail"
                      type="email"
                      placeholder="name@example.com"
                      description="Used for approved professional enquiries."
                      leftIcon={<Mail size={18} />}
                    />

                    <Input
                      label="Search projects"
                      name="projectSearch"
                      type="search"
                      placeholder="Search by technology or project"
                      leftIcon={<Search size={18} />}
                    />

                    <Select
                      label="Technology filter"
                      name="technologyFilter"
                      leftIcon={<Filter size={18} />}
                      defaultValue="nextjs"
                      options={[
                        { label: "All technologies", value: "all" },
                        { label: "Next.js", value: "nextjs" },
                        { label: "TypeScript", value: "typescript" },
                        { label: "PHP", value: "php" },
                        { label: "MySQL", value: "mysql" },
                      ]}
                    />
                  </div>
                </Card>

                <Card variant="glass">
                  <PanelLabel>Authentication and validation</PanelLabel>
                  <div className="mt-6 space-y-6">
                    <Input
                      label="Administrator email"
                      name="adminEmail"
                      type="email"
                      value="invalid-email"
                      readOnly
                      leftIcon={<Mail size={18} />}
                      error="Enter a valid administrator email."
                    />

                    <Input
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      leftIcon={<LockKeyhole size={18} />}
                      rightElement={
                        <button
                          type="button"
                          aria-label="Show password"
                          className="rounded-md p-1 text-slate-500 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                          <Eye size={18} />
                        </button>
                      }
                    />

                    <Input
                      label="Confirmed password"
                      name="confirmedPassword"
                      type="password"
                      value="password"
                      readOnly
                      leftIcon={<LockKeyhole size={18} />}
                      rightElement={
                        <span
                          aria-label="Password hidden"
                          className="text-slate-500"
                        >
                          <EyeOff size={18} />
                        </span>
                      }
                    />

                    <Select
                      label="Audience mode"
                      name="audienceMode"
                      leftIcon={<UserRoundCog size={18} />}
                      defaultValue="recruiter"
                      options={[
                        { label: "Recruiter", value: "recruiter" },
                        {
                          label: "Hiring Manager",
                          value: "hiring-manager",
                        },
                        {
                          label: "Master's Admissions",
                          value: "masters-admissions",
                        },
                        {
                          label: "General Visitor",
                          value: "general-visitor",
                        },
                      ]}
                    />
                  </div>
                </Card>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <Card>
                  <PanelLabel>Long-form content</PanelLabel>
                  <div className="mt-6 space-y-6">
                    <Textarea
                      label="Professional biography"
                      name="professionalBiography"
                      defaultValue="Information Technology student focused on full-stack development, artificial intelligence, and practical software products."
                      maxLength={300}
                      showCharacterCount
                    />

                    <Textarea
                      label="AI-assisted project review"
                      name="aiPrompt"
                      defaultValue="Review this project description and suggest improvements for recruiters, technical interviews, and public portfolio presentation."
                      maxLength={20000}
                      showCharacterCount
                      className="min-h-40"
                    />
                  </div>
                </Card>

                <Card variant="editorial">
                  <PanelLabel>Custom field composition</PanelLabel>
                  <div className="mt-6 space-y-7">
                    <FormField
                      label="Portfolio URL"
                      htmlFor="portfolio-url"
                      description="The final production domain for SyedOS."
                      required
                      actions={
                        <button
                          type="button"
                          className="text-xs font-medium text-cyan-400 transition hover:text-cyan-300"
                        >
                          Generate slug
                        </button>
                      }
                    >
                      <input
                        id="portfolio-url"
                        name="portfolioUrl"
                        type="url"
                        placeholder="https://your-domain.com"
                        className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3.5 text-sm text-slate-100 placeholder:text-slate-600 transition hover:border-slate-600 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/25"
                      />
                    </FormField>

                    <FormField
                      label="Featured technology"
                      htmlFor="featured-technology"
                      description="Emphasized in the public hero and recruiter mode."
                    >
                      <select
                        id="featured-technology"
                        name="featuredTechnology"
                        defaultValue="nextjs"
                        className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3.5 text-sm text-slate-100 transition hover:border-slate-600 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/25"
                      >
                        <option value="nextjs">Next.js</option>
                        <option value="typescript">TypeScript</option>
                        <option value="php">PHP</option>
                        <option value="mysql">MySQL</option>
                      </select>
                    </FormField>
                  </div>
                </Card>
              </div>

              <Divider label="Preferences and publishing" className="my-9" />

              <div className="grid gap-6 lg:grid-cols-3">
                <Card>
                  <PanelLabel>Checkboxes</PanelLabel>
                  <div className="mt-6 space-y-6">
                    <Checkbox
                      label="Show public profile"
                      name="publicProfile"
                      description="Allow recruiters and visitors to view the published portfolio."
                      defaultChecked
                    />

                    <Checkbox
                      label="Receive recruiter notifications"
                      name="recruiterNotifications"
                      description="Notify the administrator about verified recruiter activity."
                    />

                    <Checkbox
                      label="Accept privacy policy"
                      name="privacyConsent"
                      description="Required before submitting personal information."
                      required
                    />
                  </div>
                </Card>

                <Card variant="glass">
                  <PanelLabel>Radio groups</PanelLabel>
                  <div className="mt-6">
                    <RadioGroup
                      label="Primary career mode"
                      name="primaryCareerMode"
                      defaultValue="full-stack"
                      required
                      options={[
                        {
                          label: "Full-Stack Developer",
                          value: "full-stack",
                        },
                        {
                          label: "AI and ML Engineer",
                          value: "ai-ml",
                        },
                        {
                          label: "Cloud and DevOps Engineer",
                          value: "cloud-devops",
                        },
                      ]}
                    />
                  </div>
                </Card>

                <Card variant="editorial">
                  <PanelLabel>Switch controls</PanelLabel>
                  <div className="mt-6 space-y-7">
                    <Switch
                      label="Public portfolio"
                      name="publicPortfolio"
                      description="Allow visitors to view published content."
                      defaultChecked
                    />

                    <Switch
                      label="AI portfolio assistant"
                      name="aiPortfolioAssistant"
                      description="Allow approved portfolio questions."
                    />

                    <Switch
                      label="Database backups"
                      name="databaseBackups"
                      description="Managed automatically by the platform."
                      checked
                      readOnly
                      disabled
                    />
                  </div>
                </Card>
              </div>

              <div className="mt-6">
                <Alert
                  variant="warning"
                  title="Production deployment requires configuration"
                  description="Complete database, authentication, environment-variable, and hosting configuration before enabling the production switch."
                  action={
                    <Button variant="ghost" size="small">
                      Review deployment plan
                    </Button>
                  }
                />
              </div>
            </ShowcaseSection>

            <ShowcaseSection
              id="navigation"
              eyebrow="Interaction Architecture"
              title="Navigation, overlays, and contextual disclosure"
              description="Complex information remains easy to scan through hierarchical navigation, tabs, accordions, menus, pagination, and modal workflows."
            >
              <Card variant="glass">
                <PanelLabel>Hierarchy</PanelLabel>
                <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/50 p-5">
                  <Breadcrumb
                    items={[
                      { label: "Dashboard", href: "/admin" },
                      { label: "Projects", href: "/admin/projects" },
                      { label: "SyedOS", href: "/admin/projects/syedos" },
                      { label: "Interface Lab" },
                    ]}
                  />
                </div>
              </Card>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <Card>
                  <PanelLabel>Project intelligence</PanelLabel>
                  <div className="mt-6">
                    <Tabs
                      defaultValue="overview"
                      items={[
                        {
                          value: "overview",
                          label: "Overview",
                          content: (
                            <div>
                              <h4 className="font-semibold text-white">
                                Intelligent career platform
                              </h4>
                              <p className="mt-2 text-sm text-slate-400">
                                SyedOS presents projects, skills, education,
                                evidence, and AI-assisted career information
                                through audience-aware experiences.
                              </p>
                              <div className="mt-4 flex flex-wrap gap-2">
                                <Badge variant="primary">Next.js</Badge>
                                <Badge variant="info">TypeScript</Badge>
                                <Badge variant="outline">Payload CMS</Badge>
                              </div>
                            </div>
                          ),
                        },
                        {
                          value: "architecture",
                          label: "Architecture",
                          content: (
                            <p className="text-sm leading-relaxed text-slate-400">
                              The architecture separates presentation,
                              structured content, authentication, analytics,
                              AI services, and future integrations into
                              maintainable modules.
                            </p>
                          ),
                        },
                        {
                          value: "security",
                          label: "Security",
                          content: (
                            <p className="text-sm leading-relaxed text-slate-400">
                              Protected routes, secure sessions, role checks,
                              environment isolation, validation, and restricted
                              data access form the security foundation.
                            </p>
                          ),
                        },
                      ]}
                    />
                  </div>
                </Card>

                <Card variant="editorial">
                  <PanelLabel>Frequently asked questions</PanelLabel>
                  <div className="mt-6">
                    <Accordion
                      allowMultiple
                      defaultOpen={["editing"]}
                      items={[
                        {
                          value: "editing",
                          title: "Who can edit the portfolio?",
                          content: (
                            <p>
                              Only Syed Mohiuddin can edit protected portfolio
                              content after secure administrator authentication.
                            </p>
                          ),
                        },
                        {
                          value: "visitors",
                          title: "What can public visitors access?",
                          content: (
                            <p>
                              Visitors can view approved public projects,
                              skills, education, certificates, resume links,
                              and professional contact options.
                            </p>
                          ),
                        },
                        {
                          value: "cms",
                          title: "Can content be changed without code?",
                          content: (
                            <p>
                              Yes. Payload CMS will manage structured profile,
                              project, certificate, education, and resume
                              content from a protected dashboard.
                            </p>
                          ),
                        },
                      ]}
                    />
                  </div>
                </Card>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <Card>
                  <PanelLabel>Contextual actions</PanelLabel>

                  <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/35 p-4">
                    <div>
                      <p className="font-medium text-white">
                        SyedOS Career Platform
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Advanced portfolio project
                      </p>
                    </div>

                    <DropdownMenu
                      align="right"
                      trigger={
                        <span className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-300 transition hover:border-blue-500/50 hover:text-white">
                          <Ellipsis size={20} />
                        </span>
                      }
                      items={[
                        {
                          label: "Edit project",
                          icon: <Pencil size={17} />,
                        },
                        {
                          label: "Project settings",
                          icon: <Settings2 size={17} />,
                        },
                        {
                          label: "Duplicate project…",
                          icon: <Plus size={17} />,
                        },
                        {
                          label: "Delete project",
                          icon: <Trash2 size={17} />,
                          danger: true,
                        },
                      ]}
                    />
                  </div>

                  <div className="mt-5 flex justify-end">
                    <DropdownMenu
                      align="right"
                      width="large"
                      trigger={
                        <span className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-left transition hover:border-blue-500/50">
                          <Avatar
                            alt="Syed Mohiuddin"
                            initials="SM"
                            size="small"
                            status="online"
                          />

                          <span>
                            <span className="block text-sm font-medium text-white">
                              Syed Mohiuddin
                            </span>
                            <span className="block text-xs text-slate-500">
                              Administrator
                            </span>
                          </span>
                        </span>
                      }
                      items={[
                        {
                          label: "View profile",
                          icon: <UserCircle size={17} />,
                          shortcut: "P",
                        },
                        {
                          label: "Account settings",
                          icon: <Settings size={17} />,
                          shortcut: "S",
                        },
                        {
                          label: "Dark theme",
                          selected: true,
                        },
                        {
                          label: "Sign out",
                          icon: <LogOut size={17} />,
                          danger: true,
                        },
                      ]}
                    />
                  </div>
                </Card>

                <Card variant="glass">
                  <PanelLabel>Modal workflows</PanelLabel>
                  <p className="mt-3">
                    Project forms and destructive confirmations are isolated in
                    accessible overlay workflows.
                  </p>
                  <div className="mt-6">
                    <ModalDemo />
                  </div>
                </Card>
              </div>

              <div className="mt-6">
                <PaginationDemo />
              </div>
            </ShowcaseSection>

            <ShowcaseSection
              id="feedback"
              eyebrow="Feedback and System States"
              title="Clear communication for every platform condition"
              description="Users receive immediate, semantic, and accessible feedback for success, warnings, errors, loading, empty data, and background operations."
            >
              <div className="space-y-4">
                <Alert
                  variant="info"
                  title="Platform foundation ready"
                  description="The reusable component system is available for building public portfolio pages and protected administrator experiences."
                />

                <Alert
                  variant="success"
                  title="Production build verified"
                  description="TypeScript checks, static generation, and the optimized Next.js build completed successfully."
                  action={
                    <Button variant="secondary" size="small">
                      View build report
                    </Button>
                  }
                />

                <Alert
                  variant="warning"
                  title="Profile evidence still required"
                  description="Add final project screenshots, certificates, resume assets, and verified outcomes before public deployment."
                />

                <Alert
                  variant="danger"
                  title="Example deployment failure"
                  description="Database connectivity, environment variables, and hosting configuration must be validated before release."
                  action={
                    <Button variant="secondary" size="small">
                      Open logs
                    </Button>
                  }
                />
              </div>

              <Divider label="Temporary notifications" className="my-9" />

              <Card>
                <PanelLabel>Toast notification center</PanelLabel>
                <p className="mt-3">
                  Trigger temporary messages for saving, validation,
                  authentication, publishing, and deployment workflows.
                </p>
                <div className="mt-6">
                  <ToastDemo />
                </div>
              </Card>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <EmptyState
                  icon={<FolderSearch size={25} />}
                  title="No projects match the active filters"
                  description="Change the category, technology, career mode, or audience settings to discover additional projects."
                  action={
                    <Button leftIcon={<Plus size={17} />}>
                      Add project
                    </Button>
                  }
                  secondaryAction={
                    <Button variant="secondary">Clear filters</Button>
                  }
                />

                <EmptyState
                  icon={<Inbox size={25} />}
                  title="No recruiter notifications"
                  description="Verified recruiter activity, administrator alerts, and professional enquiries will appear here."
                  action={
                    <Button variant="secondary">Refresh activity</Button>
                  }
                />
              </div>

              <Divider label="Loading architecture" className="my-9" />

              <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <PanelLabel>Profile skeleton</PanelLabel>
                  <div className="mt-6 flex items-start gap-4">
                    <Skeleton
                      variant="circle"
                      width="64px"
                      height="64px"
                      className="shrink-0"
                    />

                    <div className="flex-1 space-y-3">
                      <Skeleton variant="text" width="42%" />
                      <Skeleton variant="text" width="72%" />
                      <Skeleton variant="text" width="58%" />

                      <div className="flex gap-2 pt-2">
                        <Skeleton
                          width="72px"
                          height="26px"
                          className="rounded-full"
                        />
                        <Skeleton
                          width="88px"
                          height="26px"
                          className="rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </Card>

                <Card variant="glass">
                  <PanelLabel>Asynchronous operations</PanelLabel>

                  <div className="mt-6 space-y-5">
                    <div className="flex items-center gap-4 rounded-xl border border-slate-800 p-4">
                      <Spinner
                        size="medium"
                        label="Generating AI response"
                      />
                      <div>
                        <p className="font-medium text-white">
                          Generating AI response
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          SyedAI is processing approved portfolio context.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-xl border border-slate-800 p-4">
                      <Spinner
                        size="medium"
                        variant="success"
                        label="Saving project"
                      />
                      <div>
                        <p className="font-medium text-white">
                          Saving project changes
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          Updating structured content and public visibility.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button
                        disabled
                        leftIcon={
                          <Spinner
                            size="small"
                            variant="light"
                            label="Submitting"
                          />
                        }
                      >
                        Submitting
                      </Button>

                      <Button
                        variant="secondary"
                        disabled
                        leftIcon={
                          <Spinner
                            size="small"
                            label="Loading projects"
                          />
                        }
                      >
                        Loading projects
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </ShowcaseSection>

            <ShowcaseSection
              id="data"
              eyebrow="Data and Operational Intelligence"
              title="Metrics, progress, records, and administrator visibility"
              description="Structured data components support project management, recruiter activity, analytics, progress reporting, and future CMS-backed operations."
            >
              <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <PanelLabel>Technical capability profile</PanelLabel>
                  <div className="mt-6 space-y-6">
                    <Progress
                      label="Full-Stack Web Development"
                      value={82}
                      variant="primary"
                    />
                    <Progress
                      label="PHP and MySQL"
                      value={78}
                      variant="success"
                    />
                    <Progress
                      label="Artificial Intelligence"
                      value={64}
                      variant="info"
                    />
                    <Progress
                      label="Cloud and DevOps"
                      value={35}
                      variant="warning"
                    />
                  </div>
                </Card>

                <Card variant="glass">
                  <PanelLabel>Platform delivery progress</PanelLabel>
                  <div className="mt-6 space-y-6">
                    <Progress
                      label="Design system foundation"
                      value={100}
                      variant="success"
                      size="large"
                    />
                    <Progress
                      label="Public portfolio"
                      value={35}
                      variant="primary"
                      size="large"
                    />
                    <Progress
                      label="CMS integration"
                      value={10}
                      variant="info"
                      size="large"
                    />
                    <Progress
                      label="Production deployment"
                      value={0}
                      variant="danger"
                      size="large"
                    />
                  </div>
                </Card>
              </div>

              <div className="mt-6">
                <Card>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <PanelLabel>Project records</PanelLabel>
                      <h3 className="mt-3 text-xl">
                        Portfolio project management
                      </h3>
                      <p className="mt-2">
                        Responsive structured data for project status,
                        categories, updates, and contextual actions.
                      </p>
                    </div>

                    <Button
                      size="small"
                      leftIcon={<Plus size={16} />}
                    >
                      Add project
                    </Button>
                  </div>

                  <div className="mt-8">
                    <Table
                      caption="SyedOS project management records"
                      data={projectRows}
                      getRowKey={(project) => project.id}
                      columns={[
                        {
                          key: "project",
                          header: "Project",
                          cell: (project) => (
                            <div>
                              <p className="font-medium text-white">
                                {project.name}
                              </p>
                              <p className="mt-1 text-xs text-slate-500">
                                {project.category}
                              </p>
                            </div>
                          ),
                        },
                        {
                          key: "status",
                          header: "Status",
                          cell: (project) => {
                            const variant:
                              | "success"
                              | "primary"
                              | "warning" =
                              project.status === "Completed"
                                ? "success"
                                : project.status === "Active"
                                  ? "primary"
                                  : "warning";

                            return (
                              <Badge variant={variant} dot>
                                {project.status}
                              </Badge>
                            );
                          },
                        },
                        {
                          key: "updated",
                          header: "Last updated",
                          cell: (project) => (
                            <div className="flex items-center gap-2 text-slate-400">
                              <CalendarDays size={16} />
                              <span>{project.updated}</span>
                            </div>
                          ),
                        },
                        {
                          key: "actions",
                          header: "Actions",
                          className: "text-right",
                          cell: () => (
                            <button
                              type="button"
                              aria-label="Open project actions"
                              className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                            >
                              <MoreHorizontal size={18} />
                            </button>
                          ),
                        },
                      ]}
                    />
                  </div>
                </Card>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <Card
                  variant="glass"
                  className="min-w-0 overflow-hidden"
                >
                  <PanelLabel>Administrator activity</PanelLabel>
                  <div className="mt-6">
                    <Table
                      caption="Recent SyedOS administrator activity"
                      data={activityRows}
                      getRowKey={(activity) => activity.id}
                      columns={[
                        {
                          key: "activity",
                          header: "Activity",
                          cell: (activity) => (
                            <div>
                              <p className="font-medium text-white">
                                {activity.action}
                              </p>
                              <p className="mt-1 text-xs text-slate-500">
                                {activity.item}
                              </p>
                            </div>
                          ),
                        },
                        {
                          key: "state",
                          header: "State",
                          cell: (activity) => (
                            <div className="flex items-center gap-2">
                              {activity.status === "Completed" ? (
                                <CircleCheck
                                  size={17}
                                  className="text-green-400"
                                />
                              ) : (
                                <Clock3
                                  size={17}
                                  className="text-amber-400"
                                />
                              )}

                              <span>{activity.status}</span>
                            </div>
                          ),
                        },
                      ]}
                    />
                  </div>
                </Card>

                <Card
                  variant="editorial"
                  className="min-w-0 overflow-hidden"
                >
                  <PanelLabel>Analytics state</PanelLabel>
                  <div className="mt-6">
                    <EmptyState
                      compact
                      icon={<BarChart3 size={21} />}
                      title="Analytics begin after deployment"
                      description="Privacy-friendly visitor, recruiter, and content-performance data will appear after the public portfolio is released."
                      action={
                        <Button variant="ghost" size="small">
                          Review analytics plan
                        </Button>
                      }
                    />
                  </div>
                </Card>
              </div>
            </ShowcaseSection>

            <ShowcaseSection
              id="release"
              eyebrow="Release Readiness"
              title="The reusable SyedOS interface foundation is complete"
              description="The next phase converts this component laboratory into the public portfolio, private administrator dashboard, CMS-backed content platform, AI services, and production deployment."
            >
              <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
                <Card variant="glass">
                  <PanelLabel>Verified foundation</PanelLabel>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {[
                      "Responsive interface system",
                      "Accessible interactive controls",
                      "Semantic feedback states",
                      "Typed data presentation",
                      "Public and admin patterns",
                      "Reusable content architecture",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/45 p-4"
                      >
                        <IconContainer
                          variant="success"
                          size="small"
                          rounded="full"
                          label="Verified"
                        >
                          <Check size={15} />
                        </IconContainer>

                        <p className="text-sm font-medium text-slate-300">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card variant="elevated">
                  <PanelLabel>Next production layer</PanelLabel>

                  <div className="mt-6 space-y-4">
                    <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                      <div className="flex items-center gap-3">
                        <IconContainer
                          variant="primary"
                          size="small"
                          label="Public portfolio"
                        >
                          <Rocket size={16} />
                        </IconContainer>
                        <div>
                          <p className="font-medium text-white">
                            Public portfolio shell
                          </p>
                          <p className="mt-1 text-sm text-slate-500">
                            Navbar, footer, hero, projects, skills, education,
                            certificates, and contact.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                      <div className="flex items-center gap-3">
                        <IconContainer
                          variant="success"
                          size="small"
                          label="Private administration"
                        >
                          <ShieldCheck size={16} />
                        </IconContainer>
                        <div>
                          <p className="font-medium text-white">
                            Protected administration
                          </p>
                          <p className="mt-1 text-sm text-slate-500">
                            Authentication, project editing, analytics,
                            settings, and resume management.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                      <div className="flex items-center gap-3">
                        <IconContainer
                          variant="info"
                          size="small"
                          label="Content and AI"
                        >
                          <Layers3 size={16} />
                        </IconContainer>
                        <div>
                          <p className="font-medium text-white">
                            CMS, database, and AI
                          </p>
                          <p className="mt-1 text-sm text-slate-500">
                            Payload CMS, PostgreSQL, Gemini services, testing,
                            and deployment automation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-6 rounded-2xl border border-green-500/25 bg-green-500/[0.08] p-6">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
                      Foundation milestone
                    </p>
                    <h3 className="mt-2 text-2xl">
                      SyedOS UI component files are fully completed.
                    </h3>
                    <p className="mt-2 max-w-3xl text-slate-400">
                      The design system is ready to support the complete public
                      portfolio and protected administration experience.
                    </p>
                  </div>

                  <Badge variant="success" size="medium" dot>
                    Ready for Phase 2
                  </Badge>
                </div>
              </div>
            </ShowcaseSection>
          </div>
        </div>

        <footer className="mt-6 rounded-2xl border border-slate-800/90 bg-slate-950/70 px-5 py-6 backdrop-blur-xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="font-semibold text-white">
                SyedOS — Intelligent Career Portfolio Platform
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Designed and engineered as a scalable personal career system.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span>Next.js</span>
              <span aria-hidden="true">•</span>
              <span>TypeScript</span>
              <span aria-hidden="true">•</span>
              <span>Tailwind CSS</span>
              <span aria-hidden="true">•</span>
              <Badge variant="success" dot>
                UI v1 complete
              </Badge>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
