import {
  ArrowRight,
  Download,
  ExternalLink,
  GitBranch,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { Card } from "@/components/ui/card";

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
      </section>
    </main>
  );
}