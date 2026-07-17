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
  Info,
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

const showcaseNavigation = [
  {
    href: "#foundations",
    label: "Foundations",
    count: "07",
  },
  {
    href: "#feedback",
    label: "Feedback",
    count: "06",
  },
  {
    href: "#forms",
    label: "Forms",
    count: "07",
  },
  {
    href: "#navigation",
    label: "Navigation",
    count: "07",
  },
  {
    href: "#data",
    label: "Data & states",
    count: "05",
  },
  {
    href: "#release",
    label: "Release readiness",
    count: "100%",
  },
] as const;

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
    action: "Design system completed",
    item: "Thirty reusable UI modules",
    status: "Completed",
  },
  {
    id: "activity-2",
    action: "Portfolio shell prepared",
    item: "Navigation and public pages",
    status: "Ready",
  },
  {
    id: "activity-3",
    action: "CMS integration queued",
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
      className="scroll-mt-28 rounded-[2rem] border border-slate-800/90 bg-slate-950/45 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-7 lg:p-9"
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

function ShowcaseLabel({ children }: { children: ReactNode }) {
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
        className="pointer-events-none fixed inset-0 opacity-70"
      >
        <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute right-[-12rem] top-[18rem] h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-15rem] left-1/3 h-[34rem] w-[34rem] rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <div className="syedos-container relative py-5 sm:py-8 lg:py-10">
        <header className="sticky top-4 z-40 rounded-2xl border border-slate-800/90 bg-slate-950/80 px-4 py-3 shadow-2xl shadow-black/25 backdrop-blur-xl sm:px-5">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#top"
              className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-300 transition group-hover:border-cyan-400/50 group-hover:text-cyan-300">
                <Sparkles size={19} />
              </span>

              <span>
                <span className="block text-sm font-semibold text-white">
                  SyedOS UI Lab
                </span>
                <span className="block text-xs text-slate-500">
                  Production-ready design system
                </span>
              </span>
            </a>

            <nav
              aria-label="Design system navigation"
              className="hidden items-center gap-1 xl:flex"
            >
              {showcaseNavigation.slice(0, 5).map((item) => (
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
                UI complete
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
          id="top"
          className="relative mt-6 overflow-hidden rounded-[2.25rem] border border-slate-800 bg-slate-950/65 px-6 py-10 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-9 lg:px-12 lg:py-14"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.1),transparent_38%)]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:36px_36px]"
          />

          <div className="relative grid items-center gap-10 xl:grid-cols-[minmax(0,1.2fr)_minmax(23rem,0.8fr)]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="primary" size="medium">
                  SyedOS Design System 1.0
                </Badge>

                <Badge variant="success" dot size="medium">
                  30 UI modules verified
                </Badge>
              </div>

              <p className="syedos-code-text mt-7 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
                Accessible · Adaptive · CMS-ready
              </p>

              <h1 className="mt-4 max-w-5xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                A production-grade interface foundation for an intelligent
                career platform.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                This advanced component laboratory validates SyedOS before the
                public portfolio, private dashboard, Payload CMS, PostgreSQL,
                analytics, and AI features are assembled.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton
                  href="#foundations"
                  rightIcon={<ArrowRight size={18} />}
                >
                  Explore components
                </LinkButton>

                <LinkButton
                  href="https://github.com/syedmohiuddin106-dot"
                  variant="secondary"
                  external
                  leftIcon={<GitBranch size={18} />}
                  rightIcon={<ExternalLink size={16} />}
                  ariaLabel="Open Syed Mohiuddin's GitHub profile"
                >
                  Open GitHub
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

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <CircleCheck size={16} className="text-green-400" />
                  Responsive layouts
                </span>

                <span className="inline-flex items-center gap-2">
                  <CircleCheck size={16} className="text-green-400" />
                  Keyboard accessible
                </span>

                <span className="inline-flex items-center gap-2">
                  <CircleCheck size={16} className="text-green-400" />
                  Dark-interface optimized
                </span>
              </div>
            </div>

            <Card variant="glass" className="relative overflow-hidden p-0">
              <div className="border-b border-slate-800 px-6 py-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <ShowcaseLabel>System overview</ShowcaseLabel>
                    <h2 className="mt-2 text-2xl">Foundation status</h2>
                  </div>

                  <IconContainer
                    variant="success"
                    size="large"
                    rounded="large"
                    label="Design system complete"
                  >
                    <Check size={24} />
                  </IconContainer>
                </div>
              </div>

              <div className="space-y-6 p-6">
                <Progress
                  label="Reusable UI foundation"
                  value={100}
                  variant="success"
                  size="large"
                />

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
                  {[
                    {
                      icon: <Code2 size={18} />,
                      label: "Frontend",
                      value: "Next.js + TypeScript",
                    },
                    {
                      icon: <ShieldCheck size={18} />,
                      label: "Accessibility",
                      value: "Semantic + keyboard",
                    },
                    {
                      icon: <Layers3 size={18} />,
                      label: "Architecture",
                      value: "Composable modules",
                    },
                    {
                      icon: <Rocket size={18} />,
                      label: "Next phase",
                      value: "Portfolio shell",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-slate-800 bg-slate-950/45 p-4"
                    >
                      <div className="text-cyan-400">{item.icon}</div>
                      <p className="mt-3 text-xs uppercase tracking-[0.16em] text-slate-600">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-200">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <Alert
                  variant="success"
                  title="Ready for application architecture"
                  description="The UI layer is stable enough to begin the real public and private SyedOS experience."
                />
              </div>
            </Card>
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Reusable Modules"
            value="30"
            description="Core UI and helper demos"
            icon={<Layers3 size={21} />}
            trend={{
              value: "Foundation complete",
              direction: "up",
            }}
          />

          <StatCard
            label="Interaction Patterns"
            value="12"
            description="Forms, overlays, and navigation"
            icon={<Sparkles size={21} />}
            trend={{
              value: "Keyboard ready",
              direction: "up",
            }}
          />

          <StatCard
            label="Career Modes"
            value="13"
            description="Planned adaptive experiences"
            icon={<BriefcaseBusiness size={21} />}
          />

          <StatCard
            label="Platform Readiness"
            value="100%"
            description="UI design-system milestone"
            icon={<BarChart3 size={21} />}
            trend={{
              value: "Next: portfolio shell",
              direction: "neutral",
            }}
          />
        </section>

        <div className="mt-10 grid gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] xl:grid-cols-[17rem_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Card variant="glass" className="p-4">
              <div className="flex items-center justify-between gap-3 px-2 py-2">
                <div>
                  <ShowcaseLabel>Directory</ShowcaseLabel>
                  <p className="mt-1 font-semibold text-white">
                    Component groups
                  </p>
                </div>

                <Badge variant="outline">v1.0</Badge>
              </div>

              <Divider className="my-3" />

              <nav aria-label="Component group directory">
                <ul className="space-y-1">
                  {showcaseNavigation.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="group flex items-center justify-between gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        <span>{item.label}</span>
                        <span className="syedos-code-text rounded-md border border-slate-800 px-2 py-0.5 text-[10px] text-slate-600 transition group-hover:border-slate-700 group-hover:text-slate-400">
                          {item.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <Divider className="my-4" />

              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
                <p className="text-sm font-medium text-blue-200">
                  Private by design
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Public visitors can view approved content. Only the
                  authenticated owner will edit SyedOS.
                </p>
              </div>
            </Card>
          </aside>

          <div className="space-y-8">
            <ShowcaseSection
              id="foundations"
              eyebrow="01 · Visual foundations"
              title="Actions, surfaces, identity, and hierarchy"
              description="The core visual language combines clear actions, structured surfaces, reusable status patterns, and professional identity components."
            >
              <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                <Card interactive>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <ShowcaseLabel>Action system</ShowcaseLabel>
                      <h3 className="mt-2 text-xl">Buttons and links</h3>
                      <p className="mt-2 max-w-xl text-sm text-slate-400">
                        Consistent actions for navigation, forms, downloads,
                        project controls, and destructive operations.
                      </p>
                    </div>

                    <IconContainer variant="primary" label="Action system">
                      <ArrowRight size={20} />
                    </IconContainer>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button rightIcon={<ArrowRight size={17} />}>
                      Primary action
                    </Button>
                    <Button
                      variant="secondary"
                      leftIcon={<Download size={17} />}
                    >
                      Download
                    </Button>
                    <Button variant="ghost">Ghost action</Button>
                    <Button variant="danger" leftIcon={<Trash2 size={17} />}>
                      Delete
                    </Button>
                    <Button loading>Processing</Button>
                  </div>

                  <Divider label="Navigation actions" className="my-7" />

                  <div className="flex flex-wrap gap-3">
                    <LinkButton
                      href="/projects"
                      rightIcon={<ArrowRight size={17} />}
                    >
                      View projects
                    </LinkButton>
                    <LinkButton
                      href="https://github.com/syedmohiuddin106-dot"
                      external
                      variant="secondary"
                      leftIcon={<GitBranch size={17} />}
                      rightIcon={<ExternalLink size={15} />}
                      ariaLabel="Open GitHub"
                    >
                      GitHub
                    </LinkButton>
                  </div>
                </Card>

                <Card variant="glass">
                  <ShowcaseLabel>Status language</ShowcaseLabel>
                  <h3 className="mt-2 text-xl">Badges and icon surfaces</h3>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    <Badge variant="primary">Featured</Badge>
                    <Badge variant="success" dot>
                      Completed
                    </Badge>
                    <Badge variant="warning" dot>
                      In development
                    </Badge>
                    <Badge variant="danger" dot>
                      Archived
                    </Badge>
                    <Badge variant="info">AI project</Badge>
                    <Badge variant="outline">Final-year student</Badge>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <IconContainer variant="default" size="small">
                      <Code2 size={17} />
                    </IconContainer>
                    <IconContainer variant="primary">
                      <Rocket size={20} />
                    </IconContainer>
                    <IconContainer variant="success">
                      <Check size={20} />
                    </IconContainer>
                    <IconContainer variant="warning">
                      <GraduationCap size={20} />
                    </IconContainer>
                    <IconContainer variant="info" size="large" rounded="full">
                      <Sparkles size={24} />
                    </IconContainer>
                  </div>
                </Card>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <Card variant="elevated" interactive>
                  <IconContainer variant="primary" size="large">
                    <Code2 size={24} />
                  </IconContainer>
                  <h3 className="mt-5 text-xl">Software engineering</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Present architecture, implementation, testing, security,
                    deployment, and measurable outcomes.
                  </p>
                </Card>

                <Card variant="glass" interactive>
                  <IconContainer variant="info" size="large">
                    <Bot size={24} />
                  </IconContainer>
                  <h3 className="mt-5 text-xl">AI applications</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Explain agent workflows, APIs, limits, validation, safety,
                    and responsible implementation.
                  </p>
                </Card>

                <Card variant="editorial">
                  <IconContainer variant="warning" size="large">
                    <GraduationCap size={24} />
                  </IconContainer>
                  <h3 className="mt-5 text-xl">Academic profile</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Organize education, research direction, academic work,
                    certificates, and master&apos;s preparation.
                  </p>
                </Card>
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
                <Card>
                  <ShowcaseLabel>Identity system</ShowcaseLabel>
                  <div className="mt-5 flex items-start gap-4">
                    <Avatar
                      alt="Syed Mohiuddin"
                      initials="SM"
                      size="extraLarge"
                      status="online"
                    />

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl">Syed Mohiuddin</h3>
                        <Badge variant="success" dot>
                          Available
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm text-slate-400">
                        Information Technology student building full-stack,
                        AI-assisted, and career-focused software products.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="primary">Next.js</Badge>
                        <Badge variant="info">AI integration</Badge>
                        <Badge variant="outline">PHP + MySQL</Badge>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card variant="glass">
                  <ShowcaseLabel>Context assistance</ShowcaseLabel>
                  <div className="mt-5 flex flex-wrap items-center gap-5">
                    <Tooltip content="Open platform settings">
                      <button
                        type="button"
                        aria-label="Settings"
                        className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-400 transition hover:border-blue-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        <Settings size={20} />
                      </button>
                    </Tooltip>

                    <Tooltip
                      content="View technical information"
                      position="bottom"
                    >
                      <button
                        type="button"
                        aria-label="Technical information"
                        className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-400 transition hover:border-cyan-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                      >
                        <Info size={20} />
                      </button>
                    </Tooltip>

                    <Tooltip
                      content="Get help with this section"
                      position="right"
                    >
                      <button
                        type="button"
                        aria-label="Help"
                        className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-400 transition hover:border-green-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                      >
                        <HelpCircle size={20} />
                      </button>
                    </Tooltip>

                    <Tooltip
                      content="This project is being actively developed"
                      position="left"
                    >
                      <span tabIndex={0}>
                        <Badge variant="warning" dot>
                          Active build
                        </Badge>
                      </span>
                    </Tooltip>
                  </div>
                </Card>
              </div>
            </ShowcaseSection>

            <ShowcaseSection
              id="feedback"
              eyebrow="02 · Feedback and loading"
              title="Clear system communication at every state"
              description="Alerts, notifications, empty states, loading indicators, and placeholders keep visitors and administrators informed without visual noise."
            >
              <div className="space-y-4">
                <Alert
                  variant="info"
                  title="Design-system documentation available"
                  description="Every reusable component is represented in this laboratory before it is used inside production pages."
                />
                <Alert
                  variant="success"
                  title="UI foundation completed"
                  description="The component milestone is verified and ready for the actual SyedOS portfolio architecture."
                  action={
                    <Button variant="secondary" size="small">
                      View roadmap
                    </Button>
                  }
                />
                <Alert
                  variant="warning"
                  title="Content integration remains"
                  description="Portfolio copy, media, CMS collections, authentication, and deployment are the next implementation phases."
                />
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                <Card>
                  <ShowcaseLabel>Temporary notifications</ShowcaseLabel>
                  <h3 className="mt-2 text-xl">Interactive toast system</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Trigger semantic notifications for saves, validation,
                    publishing, and deployment activity.
                  </p>
                  <div className="mt-6">
                    <ToastDemo />
                  </div>
                </Card>

                <Card variant="glass">
                  <ShowcaseLabel>Loading indicators</ShowcaseLabel>
                  <h3 className="mt-2 text-xl">Progress in motion</h3>
                  <div className="mt-6 flex flex-wrap items-center gap-7">
                    <Spinner size="small" label="Loading compact content" />
                    <Spinner size="medium" variant="success" label="Saving" />
                    <Spinner size="large" variant="warning" label="Checking" />
                    <div className="rounded-xl bg-blue-600 p-3">
                      <Spinner variant="light" label="Submitting" />
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
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
                      leftIcon={<Spinner size="small" label="Loading" />}
                    >
                      Loading projects
                    </Button>
                  </div>
                </Card>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <EmptyState
                  icon={<FolderSearch size={25} />}
                  title="No projects match these filters"
                  description="Change the selected career mode, technology, or project category to restore matching case studies."
                  action={
                    <Button leftIcon={<Plus size={17} />}>Add project</Button>
                  }
                  secondaryAction={
                    <Button variant="secondary">Clear filters</Button>
                  }
                />

                <EmptyState
                  icon={<Inbox size={25} />}
                  title="No recruiter activity yet"
                  description="Approved engagement events will appear after the public portfolio and privacy-friendly analytics are deployed."
                  action={<Button variant="secondary">Refresh activity</Button>}
                />
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <Card>
                  <ShowcaseLabel>Profile skeleton</ShowcaseLabel>
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
                          width="76px"
                          height="26px"
                          className="rounded-full"
                        />
                        <Skeleton
                          width="92px"
                          height="26px"
                          className="rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </Card>

                <Card variant="glass">
                  <ShowcaseLabel>Project skeleton</ShowcaseLabel>
                  <Skeleton height="130px" className="mt-6 w-full" />
                  <div className="mt-5 space-y-3">
                    <Skeleton variant="text" width="45%" height="22px" />
                    <Skeleton variant="text" width="100%" />
                    <Skeleton variant="text" width="82%" />
                  </div>
                </Card>
              </div>
            </ShowcaseSection>

            <ShowcaseSection
              id="forms"
              eyebrow="03 · Forms and controls"
              title="Accessible input architecture for public and private workflows"
              description="The form system supports contact messages, authentication, profile editing, CMS content, search, filtering, visibility, consent, and administrator settings."
            >
              <div className="grid gap-6 xl:grid-cols-2">
                <Card>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <ShowcaseLabel>Text entry</ShowcaseLabel>
                      <h3 className="mt-2 text-xl">Identity and search</h3>
                    </div>
                    <IconContainer variant="primary" label="Form inputs">
                      <User size={20} />
                    </IconContainer>
                  </div>

                  <div className="mt-7 space-y-6">
                    <Input
                      label="Full name"
                      name="advancedFullName"
                      placeholder="Enter your full name"
                      leftIcon={<User size={18} />}
                      required
                    />
                    <Input
                      label="Email address"
                      name="advancedEmail"
                      type="email"
                      placeholder="name@example.com"
                      description="Used only for professional communication."
                      leftIcon={<Mail size={18} />}
                    />
                    <Input
                      label="Search projects"
                      name="advancedProjectSearch"
                      type="search"
                      placeholder="Search technology, category, or project"
                      leftIcon={<Search size={18} />}
                    />
                  </div>
                </Card>

                <Card variant="glass">
                  <ShowcaseLabel>Authentication states</ShowcaseLabel>
                  <h3 className="mt-2 text-xl">Secure field patterns</h3>
                  <div className="mt-7 space-y-6">
                    <Input
                      label="Administrator email"
                      name="advancedAdminEmail"
                      type="email"
                      value="invalid-email"
                      readOnly
                      leftIcon={<Mail size={18} />}
                      error="Enter a valid administrator email address."
                    />
                    <Input
                      label="Password"
                      name="advancedPassword"
                      type="password"
                      placeholder="Enter your password"
                      leftIcon={<LockKeyhole size={18} />}
                      rightElement={
                        <button
                          type="button"
                          aria-label="Show password"
                          className="rounded-md p-1 text-slate-500 transition hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                          <Eye size={18} />
                        </button>
                      }
                    />
                    <Input
                      label="Confirmed password"
                      name="advancedConfirmedPassword"
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
                  </div>
                </Card>
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-2">
                <Card>
                  <ShowcaseLabel>Long-form content</ShowcaseLabel>
                  <h3 className="mt-2 text-xl">Textarea workflows</h3>
                  <div className="mt-7 space-y-6">
                    <Textarea
                      label="Professional biography"
                      name="advancedBiography"
                      defaultValue="Information Technology student focused on full-stack engineering, artificial intelligence, and practical software products."
                      maxLength={300}
                      showCharacterCount
                    />
                    <Textarea
                      label="Project description"
                      name="advancedProjectDescription"
                      placeholder="Explain the problem, architecture, implementation, security, testing, and outcomes."
                      className="min-h-40"
                      maxLength={1200}
                      showCharacterCount
                    />
                  </div>
                </Card>

                <Card variant="glass">
                  <ShowcaseLabel>Structured selection</ShowcaseLabel>
                  <h3 className="mt-2 text-xl">Filters and modes</h3>
                  <div className="mt-7 space-y-6">
                    <Select
                      label="Project category"
                      name="advancedProjectCategory"
                      placeholder="Choose a category"
                      leftIcon={<Layers3 size={18} />}
                      defaultValue=""
                      required
                      options={[
                        {
                          label: "Full-Stack Web Development",
                          value: "full-stack",
                        },
                        {
                          label: "Artificial Intelligence",
                          value: "artificial-intelligence",
                        },
                        {
                          label: "Cloud and DevOps",
                          value: "cloud-devops",
                        },
                      ]}
                    />
                    <Select
                      label="Technology filter"
                      name="advancedTechnologyFilter"
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
                    <Select
                      label="Audience mode"
                      name="advancedAudienceMode"
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

              <div className="mt-6 grid gap-6 xl:grid-cols-3">
                <Card>
                  <ShowcaseLabel>Multi-select controls</ShowcaseLabel>
                  <div className="mt-6 space-y-6">
                    <Checkbox
                      label="Show public profile"
                      name="advancedPublicProfile"
                      description="Allow approved portfolio content to be viewed publicly."
                      defaultChecked
                    />
                    <Checkbox
                      label="Recruiter notifications"
                      name="advancedRecruiterNotifications"
                      description="Receive alerts when recruiter activity is recorded."
                    />
                    <Checkbox
                      label="Accept privacy policy"
                      name="advancedPrivacyConsent"
                      description="Required before submitting personal information."
                      required
                    />
                  </div>
                </Card>

                <Card variant="glass">
                  <ShowcaseLabel>Single-choice controls</ShowcaseLabel>
                  <div className="mt-6">
                    <RadioGroup
                      label="Primary career mode"
                      name="advancedPrimaryCareerMode"
                      defaultValue="full-stack"
                      required
                      options={[
                        {
                          label: "Full-Stack Developer",
                          value: "full-stack",
                          description:
                            "Frontend, backend, database, and deployment.",
                        },
                        {
                          label: "AI and ML Engineer",
                          value: "ai-ml",
                          description:
                            "AI integrations, agents, and automation.",
                        },
                        {
                          label: "Cloud and DevOps Engineer",
                          value: "cloud-devops",
                          description:
                            "Cloud, containers, CI/CD, and operations.",
                        },
                      ]}
                    />
                  </div>
                </Card>

                <Card variant="editorial">
                  <ShowcaseLabel>Immediate settings</ShowcaseLabel>
                  <div className="mt-6 space-y-7">
                    <Switch
                      label="Public portfolio"
                      name="advancedPublicPortfolio"
                      description="Expose approved content to visitors."
                      defaultChecked
                    />
                    <Switch
                      label="Privacy-friendly analytics"
                      name="advancedPrivacyAnalytics"
                      description="Collect anonymous engagement signals."
                      defaultChecked
                    />
                    <Switch
                      label="AI portfolio assistant"
                      name="advancedAiAssistant"
                      description="Answer approved questions about public work."
                    />
                  </div>
                </Card>
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-2">
                <Card>
                  <ShowcaseLabel>Field composition</ShowcaseLabel>
                  <div className="mt-6 space-y-7">
                    <FormField
                      label="Portfolio URL"
                      htmlFor="advanced-portfolio-url"
                      description="Use the final production URL after deployment."
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
                        id="advanced-portfolio-url"
                        name="advancedPortfolioUrl"
                        type="url"
                        placeholder="https://your-domain.com"
                        className="h-11 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3.5 text-sm text-slate-100 placeholder:text-slate-600 transition hover:border-slate-600 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/25"
                      />
                    </FormField>

                    <FormField
                      label="GitHub repository"
                      htmlFor="advanced-github-repository"
                      error="Enter a valid GitHub repository URL."
                      actions={
                        <button
                          type="button"
                          className="text-xs font-medium text-cyan-400 transition hover:text-cyan-300"
                        >
                          Verify repository
                        </button>
                      }
                    >
                      <input
                        id="advanced-github-repository"
                        name="advancedGithubRepository"
                        value="invalid-repository"
                        readOnly
                        aria-invalid="true"
                        className="h-11 w-full rounded-xl border border-red-500/60 bg-slate-950/70 px-3.5 text-sm text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/25"
                      />
                    </FormField>
                  </div>
                </Card>

                <Card variant="glass">
                  <ShowcaseLabel>Completion overview</ShowcaseLabel>
                  <h3 className="mt-2 text-xl">Form-system readiness</h3>
                  <div className="mt-7 space-y-6">
                    <Progress
                      label="Public contact workflows"
                      value={100}
                      variant="success"
                    />
                    <Progress
                      label="Administrator forms"
                      value={100}
                      variant="success"
                    />
                    <Progress
                      label="CMS field patterns"
                      value={100}
                      variant="success"
                    />
                    <Progress
                      label="Database integration"
                      value={10}
                      variant="info"
                    />
                  </div>
                </Card>
              </div>
            </ShowcaseSection>

            <ShowcaseSection
              id="navigation"
              eyebrow="04 · Navigation and overlays"
              title="Structured movement through complex career content"
              description="Breadcrumbs, tabs, accordions, contextual menus, pagination, and modals organize dense portfolio and administrator experiences."
            >
              <Card>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <ShowcaseLabel>Hierarchy</ShowcaseLabel>
                    <h3 className="mt-2 text-xl">Breadcrumb navigation</h3>
                  </div>
                  <Badge variant="outline">Semantic nav</Badge>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-5">
                    <Breadcrumb
                      items={[
                        { label: "Home", href: "/" },
                        { label: "Projects", href: "/projects" },
                        { label: "SyedOS" },
                      ]}
                    />
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-5">
                    <Breadcrumb
                      items={[
                        { label: "Dashboard", href: "/admin" },
                        { label: "Projects", href: "/admin/projects" },
                        { label: "Edit SyedOS" },
                      ]}
                    />
                  </div>
                </div>
              </Card>

              <div className="mt-6 grid gap-6 xl:grid-cols-2">
                <Card variant="glass">
                  <ShowcaseLabel>Tabbed content</ShowcaseLabel>
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
                                SyedOS adapts public content for recruiters,
                                hiring managers, admissions teams, and general
                                visitors.
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
                            <p className="text-sm text-slate-400">
                              Modular Next.js frontend, Payload CMS, PostgreSQL,
                              secure authentication, analytics, and AI feature
                              services.
                            </p>
                          ),
                        },
                        {
                          value: "security",
                          label: "Security",
                          content: (
                            <p className="text-sm text-slate-400">
                              Protected routes, secure sessions, role-based
                              authorization, validated inputs, and restricted
                              data access.
                            </p>
                          ),
                        },
                        {
                          value: "testing",
                          label: "Testing",
                          disabled: true,
                          content: <p>Testing phase queued.</p>,
                        },
                      ]}
                    />
                  </div>
                </Card>

                <Card>
                  <ShowcaseLabel>Expandable content</ShowcaseLabel>
                  <div className="mt-6">
                    <Accordion
                      allowMultiple
                      defaultOpen={["editing"]}
                      items={[
                        {
                          value: "editing",
                          title: "Who can edit SyedOS?",
                          content: (
                            <p>
                              Only the authenticated owner can access the
                              private administrator and CMS workflows.
                            </p>
                          ),
                        },
                        {
                          value: "visitors",
                          title: "What can visitors access?",
                          content: (
                            <p>
                              Visitors can view approved public projects,
                              skills, education, certificates, resume links, and
                              contact options.
                            </p>
                          ),
                        },
                        {
                          value: "cms",
                          title: "Can content change without editing code?",
                          content: (
                            <p>
                              Yes. Payload CMS will manage structured content
                              from the protected dashboard.
                            </p>
                          ),
                        },
                      ]}
                    />
                  </div>
                </Card>
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-2">
                <Card>
                  <ShowcaseLabel>Contextual project actions</ShowcaseLabel>
                  <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                    <div>
                      <p className="font-medium text-white">SyedOS</p>
                      <p className="mt-1 text-sm text-slate-500">
                        Intelligent career portfolio platform
                      </p>
                    </div>
                    <DropdownMenu
                      align="right"
                      trigger={
                        <span className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-400 transition hover:border-blue-500/50 hover:text-white">
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
                </Card>

                <Card variant="glass">
                  <ShowcaseLabel>Administrator account menu</ShowcaseLabel>
                  <div className="mt-6 flex justify-end">
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
                        { label: "Dark theme", selected: true },
                        { label: "System theme", disabled: true },
                        {
                          label: "Sign out",
                          icon: <LogOut size={17} />,
                          danger: true,
                        },
                      ]}
                    />
                  </div>
                </Card>
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-2">
                <Card>
                  <ShowcaseLabel>Overlay workflows</ShowcaseLabel>
                  <h3 className="mt-2 text-xl">Modal demonstrations</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Test project creation and destructive confirmation dialogs.
                  </p>
                  <div className="mt-6">
                    <ModalDemo />
                  </div>
                </Card>

                <Card variant="glass">
                  <ShowcaseLabel>Record navigation</ShowcaseLabel>
                  <h3 className="mt-2 text-xl">Pagination demonstrations</h3>
                  <div className="mt-6">
                    <PaginationDemo />
                  </div>
                </Card>
              </div>
            </ShowcaseSection>

            <ShowcaseSection
              id="data"
              eyebrow="05 · Data and system states"
              title="Metrics, progress, tables, and operational visibility"
              description="Structured data components translate project, visitor, recruiter, CMS, and administrator activity into readable interfaces."
            >
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard
                  label="Major Projects"
                  value="3"
                  description="Portfolio case studies"
                  icon={<Code2 size={21} />}
                  trend={{ value: "Active development", direction: "up" }}
                />
                <StatCard
                  label="AI Agent Modes"
                  value="17"
                  description="SyedAI capabilities"
                  icon={<Bot size={21} />}
                  trend={{ value: "Verified", direction: "neutral" }}
                />
                <StatCard
                  label="Career Modes"
                  value="13"
                  description="Adaptive profile states"
                  icon={<BriefcaseBusiness size={21} />}
                />
                <StatCard
                  label="Analytics"
                  value="Ready"
                  description="Integration prepared"
                  icon={<BarChart3 size={21} />}
                  trend={{ value: "Privacy-first", direction: "up" }}
                />
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-2">
                <Card>
                  <ShowcaseLabel>Technical profile</ShowcaseLabel>
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
                  <ShowcaseLabel>Platform roadmap</ShowcaseLabel>
                  <div className="mt-6 space-y-6">
                    <Progress
                      label="Design-system foundation"
                      value={100}
                      variant="success"
                      size="large"
                    />
                    <Progress
                      label="Public portfolio shell"
                      value={15}
                      variant="primary"
                      size="large"
                    />
                    <Progress
                      label="Payload CMS integration"
                      value={5}
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
                      <ShowcaseLabel>Administrator data</ShowcaseLabel>
                      <h3 className="mt-2 text-xl">Project management</h3>
                      <p className="mt-2 text-sm text-slate-400">
                        Responsive records for publication state, updates, and
                        contextual actions.
                      </p>
                    </div>
                    <Button size="small" leftIcon={<Plus size={16} />}>
                      Add project
                    </Button>
                  </div>

                  <div className="mt-7">
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
                            const variant: "success" | "primary" | "warning" =
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

              <div className="mt-6 grid gap-6 xl:grid-cols-2">
                <Card variant="glass">
                  <ShowcaseLabel>Recent activity</ShowcaseLabel>
                  <div className="mt-6">
                    <Table
                      caption="Recent administrator activity"
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
                                <Clock3 size={17} className="text-amber-400" />
                              )}
                              <span>{activity.status}</span>
                            </div>
                          ),
                        },
                      ]}
                    />
                  </div>
                </Card>

                <Card variant="editorial">
                  <ShowcaseLabel>Empty records</ShowcaseLabel>
                  <div className="mt-6">
                    <Table
                      caption="Empty recruiter activity table"
                      data={[] as Array<{ id: string; recruiter: string }>}
                      getRowKey={(record) => record.id}
                      emptyMessage="No recruiter activity has been recorded yet."
                      columns={[
                        {
                          key: "recruiter",
                          header: "Recruiter",
                          cell: (record) => record.recruiter,
                        },
                        {
                          key: "activity",
                          header: "Activity",
                          cell: () => "No activity",
                        },
                      ]}
                    />
                  </div>
                </Card>
              </div>
            </ShowcaseSection>

            <ShowcaseSection
              id="release"
              eyebrow="06 · Release readiness"
              title="The UI foundation is complete and ready to become SyedOS"
              description="The next phase replaces this laboratory with the real public portfolio, private administrator shell, content architecture, data layer, authentication, AI, testing, and deployment."
            >
              <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                <Card variant="glass" className="relative overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute right-[-5rem] top-[-5rem] h-48 w-48 rounded-full bg-blue-500/15 blur-3xl"
                  />

                  <div className="relative">
                    <div className="flex flex-wrap items-start justify-between gap-5">
                      <div>
                        <Badge variant="success" dot size="medium">
                          Milestone verified
                        </Badge>
                        <h3 className="mt-5 max-w-2xl text-2xl sm:text-3xl">
                          SyedOS UI component files are fully completed.
                        </h3>
                        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                          The component layer now supports professional public
                          pages, protected administrator workflows, structured
                          content, responsive data displays, and advanced
                          interactions.
                        </p>
                      </div>

                      <IconContainer
                        variant="success"
                        size="large"
                        rounded="full"
                        label="UI complete"
                      >
                        <Check size={26} />
                      </IconContainer>
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {[
                        "Build reusable Navbar and Footer",
                        "Create the advanced public homepage",
                        "Add About, Skills, Projects, and Education",
                        "Build the private administrator shell",
                        "Integrate Payload CMS and PostgreSQL",
                        "Add authentication, analytics, AI, and deployment",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/45 p-4"
                        >
                          <CircleCheck
                            size={17}
                            className="mt-0.5 shrink-0 text-cyan-400"
                          />
                          <span className="text-sm text-slate-300">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button rightIcon={<ArrowRight size={18} />}>
                        Begin portfolio shell
                      </Button>
                      <Button
                        variant="secondary"
                        leftIcon={<BookOpen size={18} />}
                      >
                        Review architecture
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card>
                  <ShowcaseLabel>Quality gate</ShowcaseLabel>
                  <h3 className="mt-2 text-xl">Before the next phase</h3>
                  <div className="mt-6 space-y-5">
                    <Progress
                      label="Component creation"
                      value={100}
                      variant="success"
                    />
                    <Progress
                      label="Visual verification"
                      value={100}
                      variant="success"
                    />
                    <Progress
                      label="Lint verification"
                      value={100}
                      variant="success"
                    />
                    <Progress
                      label="Production build verification"
                      value={100}
                      variant="success"
                    />
                  </div>

                  <Divider label="Next command" className="my-7" />

                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <code className="syedos-code-text text-sm text-cyan-300">
                      npm.cmd run lint && npm.cmd run build
                    </code>
                  </div>
                </Card>
              </div>
            </ShowcaseSection>
          </div>
        </div>

        <footer className="mt-10 rounded-2xl border border-slate-800/90 bg-slate-950/70 px-5 py-5 backdrop-blur-xl sm:px-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <IconContainer variant="primary" size="small" label="SyedOS">
                <Sparkles size={16} />
              </IconContainer>
              <div>
                <p className="text-sm font-medium text-white">
                  SyedOS Design System
                </p>
                <p className="text-xs text-slate-500">
                  Built for an intelligent personal career platform.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span>Next.js</span>
              <span aria-hidden="true">·</span>
              <span>TypeScript</span>
              <span aria-hidden="true">·</span>
              <span>Tailwind CSS</span>
              <span aria-hidden="true">·</span>
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
