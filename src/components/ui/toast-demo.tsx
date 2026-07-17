"use client";

import { Button } from "@/components/ui/button";
import {
  ToastProvider,
  useToast,
} from "@/components/ui/toast";

function ToastDemoButtons() {
  const { showToast } = useToast();

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        variant="secondary"
        onClick={() =>
          showToast({
            variant: "info",
            title: "Portfolio updated",
            description:
              "The latest portfolio information has been loaded.",
          })
        }
      >
        Show Info Toast
      </Button>

      <Button
        onClick={() =>
          showToast({
            variant: "success",
            title: "Project saved",
            description:
              "Your project changes were saved successfully.",
          })
        }
      >
        Show Success Toast
      </Button>

      <Button
        variant="secondary"
        onClick={() =>
          showToast({
            variant: "warning",
            title: "Profile incomplete",
            description:
              "Add your resume and professional photograph before publishing.",
          })
        }
      >
        Show Warning Toast
      </Button>

      <Button
        variant="danger"
        onClick={() =>
          showToast({
            variant: "danger",
            title: "Deployment failed",
            description:
              "The application could not connect to the production database.",
            duration: 6000,
          })
        }
      >
        Show Error Toast
      </Button>
    </div>
  );
}

export function ToastDemo() {
  return (
    <ToastProvider>
      <ToastDemoButtons />
    </ToastProvider>
  );
}