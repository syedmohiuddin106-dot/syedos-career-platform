import {
  ArrowUpRight,
  Database,
  FolderKanban,
  Gauge,
  LockKeyhole,
  Server,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import type { AdminViewServerProps } from "payload";

import styles from "./syedos-dashboard.module.css";

const platformModules = [
  {
    title: "Portfolio Content",
    description:
      "Manage projects, skills, education, certificates, and professional profile content.",
    href: "/admin",
    icon: FolderKanban,
    status: "Foundation ready",
  },
  {
    title: "Administrator Access",
    description:
      "Review protected administrator accounts, roles, access rules, and authentication.",
    href: "/admin/collections/users",
    icon: ShieldCheck,
    status: "Active",
  },
  {
    title: "PostgreSQL Database",
    description:
      "Payload content and account data are stored in the local PostgreSQL development database.",
    href: "/admin",
    icon: Database,
    status: "Connected",
  },
];

const systemChecks = [
  {
    label: "Payload CMS",
    value: "Operational",
    icon: Gauge,
  },
  {
    label: "PostgreSQL",
    value: "Connected",
    icon: Database,
  },
  {
    label: "Administrator auth",
    value: "Protected",
    icon: LockKeyhole,
  },
  {
    label: "Development server",
    value: "Local",
    icon: Server,
  },
];

export default function SyedOSDashboard({
  initPageResult,
}: AdminViewServerProps) {
  const user = initPageResult.req.user as
    | {
        name?: string | null;
        email?: string | null;
        role?: string | null;
      }
    | null
    | undefined;

  if (!user) {
    return (
      <main className={styles.unauthorized}>
        <ShieldCheck aria-hidden="true" size={30} />
        <h1>Administrator access required</h1>
        <p>Sign in to access the protected SyedOS dashboard.</p>
      </main>
    );
  }

  const displayName = user.name?.trim() || "Administrator";
  const roleLabel =
    user.role === "super-admin"
      ? "Super Administrator"
      : "Content Editor";

  return (
    <main className={styles.dashboard}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            <Sparkles aria-hidden="true" size={15} />
            SyedOS Administration
          </span>

          <h1>
            Welcome back,
            <span>{displayName}.</span>
          </h1>

          <p>
            Monitor the platform, manage protected content, and build
            the next generation of your professional career system
            from one secure workspace.
          </p>

          <div className={styles.identity}>
            <span className={styles.avatar}>
              <UserRound aria-hidden="true" size={20} />
            </span>

            <div>
              <strong>{displayName}</strong>
              <span>
                {roleLabel}
                {user.email ? ` · ${user.email}` : ""}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.orbitOuter}>
            <div className={styles.orbitMiddle}>
              <div className={styles.orbitCore}>
                <Sparkles size={30} />
              </div>
            </div>
          </div>

          <span className={styles.visualLabel}>
            Secure platform control
          </span>
        </div>
      </section>

      <section
        className={styles.healthSection}
        aria-labelledby="system-health-title"
      >
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.sectionEyebrow}>
              Live environment
            </span>
            <h2 id="system-health-title">System health</h2>
          </div>

          <span className={styles.operationalBadge}>
            <span aria-hidden="true" />
            All core services operational
          </span>
        </div>

        <div className={styles.healthGrid}>
          {systemChecks.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.label} className={styles.healthCard}>
                <span className={styles.healthIcon}>
                  <Icon aria-hidden="true" size={18} />
                </span>

                <div>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className={styles.modulesSection}
        aria-labelledby="modules-title"
      >
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.sectionEyebrow}>
              Administration modules
            </span>
            <h2 id="modules-title">Platform workspace</h2>
          </div>
        </div>

        <div className={styles.moduleGrid}>
          {platformModules.map((module) => {
            const Icon = module.icon;

            return (
              <a
                key={module.title}
                className={styles.moduleCard}
                href={module.href}
              >
                <div className={styles.moduleTop}>
                  <span className={styles.moduleIcon}>
                    <Icon aria-hidden="true" size={21} />
                  </span>

                  <ArrowUpRight
                    className={styles.moduleArrow}
                    aria-hidden="true"
                    size={18}
                  />
                </div>

                <div className={styles.moduleContent}>
                  <span className={styles.moduleStatus}>
                    <span aria-hidden="true" />
                    {module.status}
                  </span>

                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <footer className={styles.dashboardFooter}>
        <div>
          <strong>SyedOS Career Intelligence Platform</strong>
          <span>Protected administration environment</span>
        </div>

        <span className={styles.environment}>
          <span aria-hidden="true" />
          Local development
        </span>
      </footer>
    </main>
  );
}