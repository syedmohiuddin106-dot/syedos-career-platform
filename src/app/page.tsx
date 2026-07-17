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
  GitBranch,
  GraduationCap,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trash2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { IconContainer } from "@/components/ui/icon-container";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCard } from "@/components/ui/stat-card";

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

      </section>
    </main>
  );
}