import {
  ArrowRight,
  Download,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="syedos-container syedos-section">
      <section className="syedos-glass-card mx-auto max-w-4xl p-8 md:p-12">
        <p className="syedos-code-text mb-3 text-sm text-cyan-400">
          SyedOS Design System
        </p>

        <h1 className="max-w-3xl">
          Professional Button Component
        </h1>

        <p className="mt-5 max-w-2xl text-lg">
          Reusable, accessible, responsive buttons for the complete
          SyedOS platform.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
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
      </section>
    </main>
  );
}