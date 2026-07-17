import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  Check,
  Code2,
  Download,
  ExternalLink,
  Eye,
EyeOff,
LockKeyhole,
Mail,
Search,
User,
  FolderSearch,
  GitBranch,
  GraduationCap,
  HelpCircle,
  Info,
  Inbox,
  Plus,
  Rocket,
  Settings,
  ShieldCheck,
  Sparkles,
  Trash2,
} from "lucide-react";

import { Alert } from "@/components/ui/alert";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { EmptyState } from "@/components/ui/empty-state";
import { IconContainer } from "@/components/ui/icon-container";
import { Input } from "@/components/ui/input";
import { LinkButton } from "@/components/ui/link-button";
import { Progress } from "@/components/ui/progress";
import { SectionHeading } from "@/components/ui/section-heading";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { StatCard } from "@/components/ui/stat-card";
import { Tooltip } from "@/components/ui/tooltip";

export default function HomePage() {
  return (
    <main className="syedos-container syedos-section">
      <section className="syedos-glass-card mx-auto max-w-5xl p-8 md:p-12">
        <div className="max-w-3xl">
          <p className="syedos-code-text mb-3 text-sm text-cyan-400">
            SyedOS Design System
          </p>

          <h1>Professional Button and Link System</h1>

          <p className="mt-5 text-lg">
            Reusable, accessible, responsive action and navigation
            components for the complete SyedOS platform.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl">
            Action Buttons
          </h2>

          <p className="mt-2">
            Use these buttons for actions such as saving, deleting,
            submitting, and loading.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Button rightIcon={<ArrowRight size={18} />}>
              Explore Projects
            </Button>

            <Button
              variant="secondary"
              leftIcon={<Download size={18} />}
            >
              Download Resume
            </Button>

            <Button variant="ghost">
              View Profile
            </Button>

            <Button
              variant="danger"
              leftIcon={<Trash2 size={18} />}
            >
              Delete
            </Button>

            <Button loading>
              Loading
            </Button>

            <Button disabled>
              Disabled
            </Button>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-10">
          <h2 className="text-2xl">
            Navigation Link Buttons
          </h2>

          <p className="mt-2">
            Use these links for internal pages, external websites,
            GitHub, resume downloads, and project navigation.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <LinkButton
              href="/projects"
              rightIcon={<ArrowRight size={18} />}
            >
              View Projects
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
              Download Resume
            </LinkButton>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="syedos-card p-6">
            <h3 className="text-xl">
              Full-width Button
            </h3>

            <p className="mt-2">
              Suitable for forms, login pages, contact forms, and
              mobile layouts.
            </p>

            <div className="mt-5">
              <Button fullWidth>
                Submit Form
              </Button>
            </div>
          </div>

          <div className="syedos-card p-6">
            <h3 className="text-xl">
              Full-width Link
            </h3>

            <p className="mt-2">
              Suitable for recruiter views, project pages, and
              resume calls to action.
            </p>

            <div className="mt-5">
              <LinkButton
                href="/recruiter"
                variant="secondary"
                fullWidth
                rightIcon={<ArrowRight size={18} />}
              >
                Recruiter View
              </LinkButton>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-10">
  <h2 className="text-2xl">
    Professional Card System
  </h2>

  <p className="mt-2">
    Reusable surfaces for projects, skills, education,
    analytics, and administration.
  </p>

  <div className="mt-6 grid gap-5 md:grid-cols-2">
    <Card>
      <p className="syedos-code-text text-sm text-cyan-400">
        Solid Card
      </p>

      <h3 className="mt-3 text-xl">
        Standard Content
      </h3>

      <p className="mt-2">
        Suitable for skills, education, experience, and
        normal dashboard information.
      </p>
    </Card>

    <Card variant="glass">
      <p className="syedos-code-text text-sm text-cyan-400">
        Glass Card
      </p>

      <h3 className="mt-3 text-xl">
        Premium Interface
      </h3>

      <p className="mt-2">
        Suitable for hero content, featured projects, and
        AI-focused interface sections.
      </p>
    </Card>

    <Card variant="elevated" interactive>
      <p className="syedos-code-text text-sm text-cyan-400">
        Interactive Card
      </p>

      <h3 className="mt-3 text-xl">
        Featured Project
      </h3>

      <p className="mt-2">
        Moves subtly on hover and can later contain project
        screenshots, technology tags, and links.
      </p>
    </Card>

    <Card variant="editorial">
      <p className="syedos-code-text text-sm text-cyan-400">
        Editorial Card
      </p>

      <h3 className="mt-3 text-xl">
        Academic Content
      </h3>

      <p className="mt-2">
        Suitable for research, publications, education, and
        master’s application content.
      </p>
    </Card>
  </div>
</div>
<div className="mt-12 border-t border-slate-800 pt-10">
  <h2 className="text-2xl">
    Badge and Status System
  </h2>

  <p className="mt-2">
    Reusable labels for technologies, project states,
    verification, and career modes.
  </p>

  <div className="mt-6 flex flex-wrap gap-3">
    <Badge>
      TypeScript
    </Badge>

    <Badge variant="primary">
      Featured
    </Badge>

    <Badge variant="success" dot>
      Completed
    </Badge>

    <Badge variant="warning" dot>
      In Development
    </Badge>

    <Badge variant="danger" dot>
      Archived
    </Badge>

    <Badge variant="info">
      AI Project
    </Badge>

    <Badge variant="outline">
      Final-Year Student
    </Badge>

    <Badge
      variant="success"
      size="medium"
      dot
    >
      Verified Skill
    </Badge>
  </div>
</div>
<div className="mt-12 border-t border-slate-800 pt-10">
  <SectionHeading
    eyebrow="Reusable Typography"
    title="Professional Section Heading System"
    description="A consistent heading component for projects, skills, education, experience, research, and administration."
  />

  <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950/50 p-8">
    <SectionHeading
      eyebrow="Featured Work"
      title="Projects Built for Real-World Use"
      description="Detailed engineering case studies with architecture, security, testing, challenges, and verified outcomes."
      align="center"
    />
  </div>
</div>
<div className="mt-12 border-t border-slate-800 pt-10">
  <SectionHeading
    eyebrow="Dashboard Components"
    title="Professional Statistics System"
    description="Reusable metric cards for portfolio analytics, projects, recruiter activity, and AI features."
  />

  <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
    <StatCard
      label="Major Projects"
      value="2"
      description="Published portfolio projects"
      icon={<Code2 size={21} />}
      trend={{
        value: "Active development",
        direction: "up",
      }}
    />

    <StatCard
      label="AI Agent Modes"
      value="17"
      description="Available in SyedAI Assistant"
      icon={<Bot size={21} />}
      trend={{
        value: "Verified",
        direction: "neutral",
      }}
    />

    <StatCard
      label="Career Modes"
      value="13"
      description="Future-ready profile stages"
      icon={<BriefcaseBusiness size={21} />}
    />

    <StatCard
      label="Portfolio Analytics"
      value="Ready"
      description="Dashboard integration planned"
      icon={<BarChart3 size={21} />}
      trend={{
        value: "Foundation complete",
        direction: "up",
      }}
    />
  </div>
</div>
<div className="mt-12 border-t border-slate-800 pt-10">
  <SectionHeading
    eyebrow="Layout Components"
    title="Professional Divider System"
    description="Reusable separators for page sections, grouped content, admin panels, and project case studies."
  />

  <div className="mt-8 space-y-10">
    <div>
      <p className="mb-4 text-sm text-slate-400">
        Standard divider
      </p>

      <Divider />
    </div>

    <div>
      <p className="mb-4 text-sm text-slate-400">
        Divider with a centered label
      </p>

      <Divider label="Featured Projects" />
    </div>

    <Card variant="glass">
      <h3 className="text-xl">
        Grouped Content Example
      </h3>

      <p className="mt-2">
        Dividers help organize large pages without adding heavy
        visual elements.
      </p>

      <Divider
        label="Technical Details"
        className="my-8"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-sm text-slate-400">
            Architecture
          </p>

          <p className="mt-1 font-semibold text-white">
            Next.js and Payload CMS
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Database
          </p>

          <p className="mt-1 font-semibold text-white">
            PostgreSQL
          </p>
        </div>
      </div>
    </Card>
  </div>
</div>
<div className="mt-12 border-t border-slate-800 pt-10">
  <SectionHeading
    eyebrow="Visual Components"
    title="Professional Icon Container System"
    description="Reusable icon surfaces for skills, projects, security, education, AI features, and dashboard modules."
  />

  <div className="mt-8 flex flex-wrap items-center gap-5">
    <IconContainer
      variant="default"
      size="small"
      label="Development"
    >
      <Code2 size={17} />
    </IconContainer>

    <IconContainer
      variant="primary"
      label="Project launch"
    >
      <Rocket size={20} />
    </IconContainer>

    <IconContainer
      variant="success"
      label="Verified"
    >
      <Check size={20} />
    </IconContainer>

    <IconContainer
      variant="warning"
      label="Education"
    >
      <GraduationCap size={20} />
    </IconContainer>

    <IconContainer
      variant="danger"
      label="Security alert"
    >
      <ShieldCheck size={20} />
    </IconContainer>

    <IconContainer
      variant="info"
      size="large"
      rounded="large"
      label="AI feature"
    >
      <Sparkles size={25} />
    </IconContainer>

    <IconContainer
      variant="primary"
      size="large"
      rounded="full"
      label="Academic content"
    >
      <BookOpen size={24} />
    </IconContainer>
  </div>

  <div className="mt-10 grid gap-5 md:grid-cols-3">
    <Card interactive>
      <IconContainer
        variant="primary"
        size="large"
        label="Software projects"
      >
        <Code2 size={24} />
      </IconContainer>

      <h3 className="mt-5 text-xl">
        Software Projects
      </h3>

      <p className="mt-2">
        Present full-stack applications, technical decisions,
        architecture, security, and verified outcomes.
      </p>
    </Card>

    <Card variant="glass" interactive>
      <IconContainer
        variant="info"
        size="large"
        label="Artificial intelligence"
      >
        <Bot size={24} />
      </IconContainer>

      <h3 className="mt-5 text-xl">
        AI Applications
      </h3>

      <p className="mt-2">
        Highlight AI integrations, agent systems, prompt handling,
        validation, limits, and responsible implementation.
      </p>
    </Card>

    <Card variant="editorial">
      <IconContainer
        variant="warning"
        size="large"
        label="Academic profile"
      >
        <GraduationCap size={24} />
      </IconContainer>

      <h3 className="mt-5 text-xl">
        Academic Profile
      </h3>

      <p className="mt-2">
        Organize education, research interests, academic projects,
        publications, and master&apos;s application content.
      </p>
    </Card>
  </div>
</div>
<div className="mt-12 border-t border-slate-800 pt-10">
  <SectionHeading
    eyebrow="Data Visualization"
    title="Professional Progress System"
    description="Reusable progress indicators for skills, projects, courses, profile completion, and dashboard analytics."
  />

  <div className="mt-8 grid gap-6 lg:grid-cols-2">
    <Card>
      <h3 className="text-xl">
        Technical Skills
      </h3>

      <p className="mt-2">
        Skill levels can later be managed directly from the admin
        dashboard.
      </p>

      <div className="mt-8 space-y-6">
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
      <h3 className="text-xl">
        Career Platform Progress
      </h3>

      <p className="mt-2">
        Track development stages and portfolio completeness.
      </p>

      <div className="mt-8 space-y-6">
        <Progress
          label="Design System Foundation"
          value={90}
          variant="success"
          size="large"
        />

        <Progress
          label="Portfolio Content"
          value={45}
          variant="primary"
          size="large"
        />

        <Progress
          label="CMS Integration"
          value={10}
          variant="info"
          size="large"
        />

        <Progress
          label="Production Deployment"
          value={0}
          variant="danger"
          size="large"
        />
      </div>
    </Card>
  </div>

  <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
    <p className="mb-4 text-sm font-medium text-slate-300">
      Compact progress indicators
    </p>

    <div className="grid gap-5 md:grid-cols-3">
      <Progress
        value={25}
        variant="warning"
        size="small"
        showValue={false}
      />

      <Progress
        value={60}
        variant="info"
        size="small"
        showValue={false}
      />

      <Progress
        value={100}
        variant="success"
        size="small"
        showValue={false}
      />
    </div>
  </div>
</div>
<div className="mt-12 border-t border-slate-800 pt-10">
  <SectionHeading
    eyebrow="Identity Components"
    title="Professional Avatar System"
    description="Reusable profile images and intelligent fallback initials for portfolio users, recruiters, administrators, and testimonials."
  />

  <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
    <p className="text-sm font-medium text-slate-300">
      Avatar sizes and availability states
    </p>

    <div className="mt-6 flex flex-wrap items-end gap-7">
      <div className="text-center">
        <Avatar
          alt="Syed Mohiuddin"
          size="small"
          status="online"
        />

        <p className="mt-3 text-xs text-slate-500">
          Small
        </p>
      </div>

      <div className="text-center">
        <Avatar
          alt="Syed Mohiuddin"
          size="medium"
          status="away"
        />

        <p className="mt-3 text-xs text-slate-500">
          Medium
        </p>
      </div>

      <div className="text-center">
        <Avatar
          alt="Syed Mohiuddin"
          size="large"
          status="busy"
        />

        <p className="mt-3 text-xs text-slate-500">
          Large
        </p>
      </div>

      <div className="text-center">
        <Avatar
          alt="Syed Mohiuddin"
          initials="SM"
          size="extraLarge"
          status="online"
        />

        <p className="mt-3 text-xs text-slate-500">
          Extra large
        </p>
      </div>

      <div className="text-center">
        <Avatar
          alt="Recruiter Account"
          size="large"
          status="offline"
        />

        <p className="mt-3 text-xs text-slate-500">
          Offline
        </p>
      </div>
    </div>
  </div>

  <div className="mt-8 grid gap-5 lg:grid-cols-2">
    <Card>
      <div className="flex items-start gap-4">
        <Avatar
          alt="Syed Mohiuddin"
          initials="SM"
          size="large"
          status="online"
        />

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl">
              Syed Mohiuddin
            </h3>

            <Badge variant="success" dot>
              Available
            </Badge>
          </div>

          <p className="mt-1">
            Information Technology student and full-stack developer.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="primary">
              Next.js
            </Badge>

            <Badge variant="info">
              AI Integration
            </Badge>

            <Badge variant="outline">
              PHP
            </Badge>
          </div>
        </div>
      </div>
    </Card>

    <Card variant="glass">
      <div className="flex items-start gap-4">
        <Avatar
          alt="Portfolio Administrator"
          initials="PA"
          size="large"
          status="away"
        />

        <div>
          <h3 className="text-xl">
            Portfolio Administrator
          </h3>

          <p className="mt-1">
            Manages projects, skills, analytics, resume versions,
            and platform content.
          </p>

          <p className="mt-4 text-sm font-medium text-amber-300">
            Administrator session active
          </p>
        </div>
      </div>
    </Card>
  </div>
</div>
<div className="mt-12 border-t border-slate-800 pt-10">
  <SectionHeading
    eyebrow="Interaction Components"
    title="Accessible Tooltip System"
    description="Helpful contextual explanations for navigation, dashboard controls, project actions, and technical information."
  />

  <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/50 p-8">
    <p className="text-sm font-medium text-slate-300">
      Hover over or focus on each control
    </p>

    <div className="mt-8 flex flex-wrap items-center gap-8">
      <Tooltip content="Open platform settings">
        <button
          type="button"
          aria-label="Settings"
          className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-300 transition hover:border-blue-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <Settings size={20} />
        </button>
      </Tooltip>

      <Tooltip
        content="View more information about this feature"
        position="bottom"
      >
        <button
          type="button"
          aria-label="Feature information"
          className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-300 transition hover:border-cyan-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
        >
          <Info size={20} />
        </button>
      </Tooltip>

      <Tooltip
        content="Get help with the current section"
        position="right"
      >
        <button
          type="button"
          aria-label="Help"
          className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-300 transition hover:border-green-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
        >
          <HelpCircle size={20} />
        </button>
      </Tooltip>

      <Tooltip
        content="This project is actively being developed"
        position="left"
      >
        <span tabIndex={0}>
          <Badge variant="warning" dot>
            In Development
          </Badge>
        </span>
      </Tooltip>
    </div>
  </div>

  <div className="mt-8 grid gap-5 md:grid-cols-2">
    <Card>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl">
            Project Actions
          </h3>

          <p className="mt-2">
            Tooltips make icon-only controls easier to understand.
          </p>
        </div>

        <Tooltip content="View the full project repository">
          <button
            type="button"
            aria-label="View repository"
            className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-300 transition hover:border-blue-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <GitBranch size={20} />
          </button>
        </Tooltip>
      </div>
    </Card>

    <Card variant="glass">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl">
            Technical Explanation
          </h3>

          <p className="mt-2">
            Hover for additional information without cluttering the page.
          </p>
        </div>

        <Tooltip
          content="The frontend is built with Next.js, TypeScript, and Tailwind CSS."
          position="left"
        >
          <button
            type="button"
            aria-label="Technology information"
            className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-300 transition hover:border-cyan-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            <Code2 size={20} />
          </button>
        </Tooltip>
      </div>
    </Card>
  </div>
</div>
<div className="mt-12 border-t border-slate-800 pt-10">
  <SectionHeading
    eyebrow="Feedback Components"
    title="Professional Empty State System"
    description="Clear and helpful placeholders for missing projects, search results, analytics, notifications, and admin records."
  />

  <div className="mt-8 grid gap-6 lg:grid-cols-2">
    <EmptyState
      icon={<FolderSearch size={25} />}
      title="No projects found"
      description="No projects match the selected technologies, category, or career mode. Try changing the current filters."
      action={
        <Button leftIcon={<Plus size={17} />}>
          Add Project
        </Button>
      }
      secondaryAction={
        <Button variant="secondary">
          Clear Filters
        </Button>
      }
    />

    <EmptyState
      icon={<Inbox size={25} />}
      title="No notifications yet"
      description="Important portfolio activity, recruiter engagement, and administrator updates will appear here."
      action={
        <Button variant="secondary">
          Refresh Activity
        </Button>
      }
    />
  </div>

  <div className="mt-6">
    <EmptyState
      compact
      icon={<BarChart3 size={21} />}
      title="Analytics data is not available"
      description="Visitor and recruiter analytics will appear after the public portfolio is deployed."
      action={
        <Button
          variant="ghost"
          size="small"
        >
          View deployment plan
        </Button>
      }
    />
  </div>
</div>
<div className="mt-12 border-t border-slate-800 pt-10">
  <SectionHeading
    eyebrow="Loading Components"
    title="Professional Skeleton Loading System"
    description="Reusable loading placeholders for profile data, project cards, analytics, CMS content, and dashboard modules."
  />

  <div className="mt-8 grid gap-6 lg:grid-cols-2">
    <Card>
      <p className="text-sm font-medium text-slate-300">
        Profile loading state
      </p>

      <div className="mt-6 flex items-start gap-4">
        <Skeleton
          variant="circle"
          width="64px"
          height="64px"
          className="shrink-0"
        />

        <div className="flex-1 space-y-3">
          <Skeleton
            variant="text"
            width="45%"
          />

          <Skeleton
            variant="text"
            width="70%"
          />

          <Skeleton
            variant="text"
            width="55%"
          />

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

            <Skeleton
              width="60px"
              height="26px"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </Card>

    <Card variant="glass">
      <p className="text-sm font-medium text-slate-300">
        Project card loading state
      </p>

      <Skeleton
        height="180px"
        className="mt-6 w-full"
      />

      <div className="mt-5 space-y-3">
        <Skeleton
          variant="text"
          width="50%"
          height="22px"
        />

        <Skeleton
          variant="text"
          width="100%"
        />

        <Skeleton
          variant="text"
          width="85%"
        />

        <div className="flex gap-2 pt-2">
          <Skeleton
            width="70px"
            height="25px"
            className="rounded-full"
          />

          <Skeleton
            width="90px"
            height="25px"
            className="rounded-full"
          />
        </div>
      </div>
    </Card>
  </div>

  <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
    {Array.from({ length: 4 }).map((_, index) => (
      <Card key={index}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <Skeleton
              variant="text"
              width="55%"
            />

            <Skeleton
              variant="text"
              width="35%"
              height="28px"
              className="mt-4"
            />

            <Skeleton
              variant="text"
              width="75%"
              className="mt-4"
            />
          </div>

          <Skeleton
            width="44px"
            height="44px"
            className="shrink-0 rounded-xl"
          />
        </div>
      </Card>
    ))}
  </div>

  <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
    <p className="mb-5 text-sm font-medium text-slate-300">
      Static skeleton example
    </p>

    <Skeleton
      animated={false}
      height="12px"
      className="w-full"
    />
  </div>
</div>
<div className="mt-12 border-t border-slate-800 pt-10">
  <SectionHeading
    eyebrow="Feedback Components"
    title="Professional Alert System"
    description="Reusable notifications for success, information, warnings, errors, forms, deployments, and administrator actions."
  />

  <div className="mt-8 space-y-5">
    <Alert
      variant="info"
      title="Platform foundation is ready"
      description="The core design system and reusable UI components are now available for building the SyedOS public portfolio and admin dashboard."
    />

    <Alert
      variant="success"
      title="Project saved successfully"
      description="Your project information, technologies, status, and portfolio visibility settings were saved."
      action={
        <Button
          variant="secondary"
          size="small"
        >
          View Project
        </Button>
      }
    />

    <Alert
      variant="warning"
      title="Profile information is incomplete"
      description="Add your resume, professional photo, skills, and project evidence before publishing the public portfolio."
      action={
        <Button
          variant="ghost"
          size="small"
        >
          Complete Profile
        </Button>
      }
    />

    <Alert
      variant="danger"
      title="Deployment failed"
      description="The production build could not connect to the configured database. Check the environment variables and database service."
      action={
        <Button
          variant="secondary"
          size="small"
        >
          View Deployment Logs
        </Button>
      }
    />

    <Alert
      variant="info"
      title="Dismissible notification"
      description="The close button is ready for client-side state integration in interactive pages."
      dismissible
    />
  </div>
</div>
<div className="mt-12 border-t border-slate-800 pt-10">
  <SectionHeading
    eyebrow="Loading Components"
    title="Professional Spinner System"
    description="Reusable loading indicators for forms, buttons, AI responses, data fetching, authentication, and deployment operations."
  />

  <div className="mt-8 grid gap-6 lg:grid-cols-2">
    <Card>
      <h3 className="text-xl">
        Spinner sizes
      </h3>

      <p className="mt-2">
        Loading indicators remain clear across compact controls and
        full-page operations.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-8">
        <div className="text-center">
          <Spinner
            size="small"
            label="Loading small content"
          />

          <p className="mt-3 text-xs text-slate-500">
            Small
          </p>
        </div>

        <div className="text-center">
          <Spinner
            size="medium"
            label="Loading content"
          />

          <p className="mt-3 text-xs text-slate-500">
            Medium
          </p>
        </div>

        <div className="text-center">
          <Spinner
            size="large"
            label="Loading large content"
          />

          <p className="mt-3 text-xs text-slate-500">
            Large
          </p>
        </div>
      </div>
    </Card>

    <Card variant="glass">
      <h3 className="text-xl">
        Spinner variants
      </h3>

      <p className="mt-2">
        Semantic variants communicate the type of operation being
        processed.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-8">
        <Spinner
          variant="primary"
          label="Processing"
        />

        <Spinner
          variant="success"
          label="Saving"
        />

        <Spinner
          variant="warning"
          label="Checking"
        />

        <Spinner
          variant="danger"
          label="Retrying"
        />

        <div className="rounded-xl bg-blue-600 p-3">
          <Spinner
            variant="light"
            label="Submitting"
          />
        </div>
      </div>
    </Card>
  </div>

  <div className="mt-6 grid gap-5 md:grid-cols-2">
    <Card>
      <div className="flex items-center gap-4">
        <Spinner
          size="medium"
          label="Loading AI response"
        />

        <div>
          <p className="font-semibold text-white">
            Generating AI response
          </p>

          <p className="mt-1 text-sm text-slate-400">
            SyedAI is processing the request.
          </p>
        </div>
      </div>
    </Card>

    <Card variant="glass">
      <div className="flex items-center gap-4">
        <Spinner
          size="medium"
          variant="success"
          label="Saving project"
        />

        <div>
          <p className="font-semibold text-white">
            Saving project changes
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Updating the CMS and portfolio content.
          </p>
        </div>
      </div>
    </Card>
  </div>

  <div className="mt-6 flex flex-wrap gap-4">
    <Button
      disabled
      leftIcon={
        <Spinner
          size="small"
          variant="light"
          label="Submitting form"
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
      Loading Projects
    </Button>
  </div>
</div>
<div className="mt-12 border-t border-slate-800 pt-10">
  <SectionHeading
    eyebrow="Form Components"
    title="Professional Input System"
    description="Reusable text fields for authentication, contact forms, search, profile editing, project management, and CMS workflows."
  />

  <div className="mt-8 grid gap-6 lg:grid-cols-2">
    <Card>
      <h3 className="text-xl">
        Standard inputs
      </h3>

      <p className="mt-2">
        Accessible fields with labels, descriptions, icons, and
        validation feedback.
      </p>

      <div className="mt-8 space-y-6">
        <Input
          label="Full name"
          name="fullName"
          placeholder="Enter your full name"
          leftIcon={<User size={18} />}
          required
        />

        <Input
          label="Email address"
          name="email"
          type="email"
          placeholder="name@example.com"
          description="We will only use this email to respond to your message."
          leftIcon={<Mail size={18} />}
        />

        <Input
          label="Search projects"
          name="projectSearch"
          type="search"
          placeholder="Search by technology or project name"
          leftIcon={<Search size={18} />}
        />
      </div>
    </Card>

    <Card variant="glass">
      <h3 className="text-xl">
        Authentication and validation
      </h3>

      <p className="mt-2">
        Error states and password controls are ready for login and
        admin forms.
      </p>

      <div className="mt-8 space-y-6">
        <Input
          label="Admin email"
          name="adminEmail"
          type="email"
          value="invalid-email"
          readOnly
          leftIcon={<Mail size={18} />}
          error="Enter a valid email address."
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
              className="rounded-md p-1 text-slate-500 transition hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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

        <Input
          label="Disabled field"
          name="disabledField"
          value="Managed by the system"
          disabled
        />
      </div>
    </Card>
  </div>
</div>

      </section>
    </main>
  );
}