"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { Textarea } from "@/components/ui/textarea";

export function ModalDemo() {
  const [projectModalOpen, setProjectModalOpen] =
    useState(false);

  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState(false);

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        onClick={() => setProjectModalOpen(true)}
      >
        Open Project Modal
      </Button>

      <Button
        variant="danger"
        onClick={() => setConfirmationModalOpen(true)}
      >
        Open Confirmation Modal
      </Button>

      <Modal
        open={projectModalOpen}
        title="Add a new project"
        description="Enter the main project details. These fields will later connect to Payload CMS."
        size="large"
        onClose={() => setProjectModalOpen(false)}
        footer={
          <>
            <Button
              variant="ghost"
              onClick={() => setProjectModalOpen(false)}
            >
              Cancel
            </Button>

            <Button
              onClick={() => setProjectModalOpen(false)}
            >
              Save Project
            </Button>
          </>
        }
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="Project name"
            name="modalProjectName"
            placeholder="Enter project name"
            required
          />

          <Input
            label="Project URL"
            name="modalProjectUrl"
            type="url"
            placeholder="https://example.com"
          />

          <div className="md:col-span-2">
            <Textarea
              label="Project description"
              name="modalProjectDescription"
              placeholder="Explain the problem, solution, technologies, architecture, and outcome."
              maxLength={1000}
              showCharacterCount
              className="min-h-40"
            />
          </div>
        </div>
      </Modal>

      <Modal
        open={confirmationModalOpen}
        title="Delete this project?"
        description="This action cannot be undone after the project is permanently removed."
        size="small"
        onClose={() => setConfirmationModalOpen(false)}
        footer={
          <>
            <Button
              variant="ghost"
              onClick={() =>
                setConfirmationModalOpen(false)
              }
            >
              Cancel
            </Button>

            <Button
              variant="danger"
              onClick={() =>
                setConfirmationModalOpen(false)
              }
            >
              Delete Project
            </Button>
          </>
        }
      >
        <p className="text-sm leading-relaxed text-slate-400">
          Confirm that you want to remove this project from the
          administrator dashboard and public portfolio.
        </p>
      </Modal>
    </div>
  );
}