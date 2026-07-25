import {
  CheckCircle2,
  Database,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { FirstUserForm } from "./first-user-form";
import styles from "./first-user-view.module.css";

const securityFeatures = [
  {
    label: "Protected administrator authentication",
    icon: <LockKeyhole aria-hidden="true" size={14} />,
  },
  {
    label: "PostgreSQL-backed account storage",
    icon: <Database aria-hidden="true" size={14} />,
  },
  {
    label: "Role-based SyedOS administration",
    icon: <ShieldCheck aria-hidden="true" size={14} />,
  },
];

export default function FirstUserView() {
  return (
    <main className={styles.page}>
      <section
        className={styles.brandPanel}
        aria-label="SyedOS administration introduction"
      >
        <header className={styles.brandHeader}>
          <div className={styles.brandMark} aria-hidden="true">
            <Sparkles size={25} />
          </div>

          <div className={styles.brandIdentity}>
            <p className={styles.brandName}>SyedOS</p>
            <p className={styles.brandLabel}>
              Career Intelligence Platform
            </p>
          </div>
        </header>

        <div className={styles.brandContent}>
          <p className={styles.eyebrow}>
            Secure Administration
          </p>

          <h1 className={styles.heading}>
            Establish your
            <span className={styles.headingAccent}>
              administrator workspace.
            </span>
          </h1>

          <p className={styles.introduction}>
            Create the first protected account for managing SyedOS
            projects, professional content, credentials, analytics,
            career intelligence, and future platform capabilities.
          </p>

          <ul className={styles.featureList}>
            {securityFeatures.map((feature) => (
              <li
                key={feature.label}
                className={styles.featureItem}
              >
                <span className={styles.featureIcon}>
                  {feature.icon}
                </span>

                {feature.label}
              </li>
            ))}
          </ul>
        </div>

        <footer className={styles.brandFooter}>
          <span>SyedOS Administration · Initial Setup</span>

          <span className={styles.securityStatus}>
            <span
              className={styles.securityDot}
              aria-hidden="true"
            />
            Secure local environment
          </span>
        </footer>
      </section>

      <section
        className={styles.formPanel}
        aria-label="Create first administrator"
      >
        <div className={styles.card}>
          <header className={styles.cardHeader}>
            <span className={styles.stepBadge}>
              <CheckCircle2 aria-hidden="true" size={14} />
              Initial Account Setup
            </span>

            <h2 className={styles.cardTitle}>
              Create administrator
            </h2>

            <p className={styles.cardDescription}>
              Set up the first authorized SyedOS account. This account
              will control protected content, system configuration,
              user access, and future administrative modules.
            </p>
          </header>

          <FirstUserForm />
        </div>
      </section>
    </main>
  );
}