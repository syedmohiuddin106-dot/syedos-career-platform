"use client";

import {
  CheckCircle2,
  Eye,
  EyeOff,
  LoaderCircle,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

import styles from "./first-user-view.module.css";

type FormState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "super-admin" | "editor";
};

const initialForm: FormState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "super-admin",
};

function getPasswordScore(password: string) {
  let score = 0;

  if (password.length >= 12) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  return score;
}

export function FirstUserForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const passwordScore = useMemo(
    () => getPasswordScore(form.password),
    [form.password],
  );

  const passwordLabel =
    passwordScore <= 2
      ? "Weak"
      : passwordScore <= 4
        ? "Good"
        : "Strong";

  function updateField<K extends keyof FormState>(
    field: K,
    value: FormState[K],
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setError("");
    setSuccess("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name.trim()) {
      setError("Enter your professional name.");
      return;
    }

    if (!form.email.trim()) {
      setError("Enter your administrator email address.");
      return;
    }

    if (form.password.length < 12) {
      setError("Use a password with at least 12 characters.");
      return;
    }

    if (passwordScore < 4) {
      setError(
        "Use uppercase, lowercase, numbers, and symbols for a stronger password.",
      );
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("The password confirmation does not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/users/first-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          password: form.password,
          role: form.role,
        }),
      });

      const data = (await response.json()) as {
        message?: string;
        errors?: Array<{ message?: string }>;
      };

      if (!response.ok) {
        const apiError =
          data.errors?.[0]?.message ??
          data.message ??
          "Unable to create the administrator account.";

        throw new Error(apiError);
      }

      setSuccess("Administrator created successfully. Redirecting…");

      window.setTimeout(() => {
        window.location.href = "/admin";
      }, 700);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Something went wrong while creating the administrator.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={styles.field}>
        <label htmlFor="name">
          Name
          <span aria-hidden="true">*</span>
        </label>

        <div className={styles.inputShell}>
          <UserRound aria-hidden="true" size={18} />
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Syed Mohiuddin"
            value={form.name}
            onChange={(event) =>
              updateField("name", event.target.value)
            }
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="email">
          Email
          <span aria-hidden="true">*</span>
        </label>

        <div className={styles.inputShell}>
          <Mail aria-hidden="true" size={18} />
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@example.com"
            value={form.email}
            onChange={(event) =>
              updateField("email", event.target.value)
            }
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="password">
          New Password
          <span aria-hidden="true">*</span>
        </label>

        <div className={styles.inputShell}>
          <LockKeyhole aria-hidden="true" size={18} />
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            placeholder="Create a strong password"
            value={form.password}
            onChange={(event) =>
              updateField("password", event.target.value)
            }
            required
          />

          <button
            className={styles.visibilityButton}
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            aria-label={
              showPassword ? "Hide password" : "Show password"
            }
          >
            {showPassword ? (
              <EyeOff aria-hidden="true" size={18} />
            ) : (
              <Eye aria-hidden="true" size={18} />
            )}
          </button>
        </div>

        <div className={styles.passwordMeter}>
          <div
            className={styles.passwordMeterTrack}
            aria-hidden="true"
          >
            <span
              style={{
                width: `${Math.max(passwordScore, 1) * 20}%`,
              }}
            />
          </div>

          <span>
            Password strength:
            <strong>{passwordLabel}</strong>
          </span>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="confirmPassword">
          Confirm Password
          <span aria-hidden="true">*</span>
        </label>

        <div className={styles.inputShell}>
          <ShieldCheck aria-hidden="true" size={18} />
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            autoComplete="new-password"
            placeholder="Re-enter your password"
            value={form.confirmPassword}
            onChange={(event) =>
              updateField("confirmPassword", event.target.value)
            }
            required
          />

          <button
            className={styles.visibilityButton}
            type="button"
            onClick={() =>
              setShowConfirmPassword((current) => !current)
            }
            aria-label={
              showConfirmPassword
                ? "Hide password confirmation"
                : "Show password confirmation"
            }
          >
            {showConfirmPassword ? (
              <EyeOff aria-hidden="true" size={18} />
            ) : (
              <Eye aria-hidden="true" size={18} />
            )}
          </button>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="role">
          Role
          <span aria-hidden="true">*</span>
        </label>

        <div className={styles.inputShell}>
          <ShieldCheck aria-hidden="true" size={18} />
          <select
            id="role"
            name="role"
            value={form.role}
            onChange={(event) =>
              updateField(
                "role",
                event.target.value as FormState["role"],
              )
            }
          >
            <option value="super-admin">
              Super Administrator
            </option>
            <option value="editor">
              Content Editor
            </option>
          </select>
        </div>

        <p className={styles.helpText}>
          The first account should remain Super Administrator.
        </p>
      </div>

      {error ? (
        <div className={styles.errorMessage} role="alert">
          {error}
        </div>
      ) : null}

      {success ? (
        <div className={styles.successMessage} role="status">
          <CheckCircle2 aria-hidden="true" size={18} />
          {success}
        </div>
      ) : null}

      <button
        className={styles.submitButton}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <LoaderCircle
              className={styles.spinner}
              aria-hidden="true"
              size={19}
            />
            Creating secure account…
          </>
        ) : (
          <>
            <ShieldCheck aria-hidden="true" size={19} />
            Create Administrator
          </>
        )}
      </button>
    </form>
  );
}