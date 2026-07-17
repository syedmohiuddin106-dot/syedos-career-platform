"use client";

import { useState } from "react";

import { Card } from "@/components/ui/card";
import { Pagination } from "@/components/ui/pagination";

export function PaginationDemo() {
  const [projectPage, setProjectPage] =
    useState(4);

  const [activityPage, setActivityPage] =
    useState(1);

  return (
    <div className="grid gap-6">
      <Card>
        <h3 className="text-xl">
          Project pagination
        </h3>

        <p className="mt-2">
          Use the page controls to move through project records.
        </p>

        <div className="mt-8">
          <Pagination
            currentPage={projectPage}
            totalPages={12}
            onPageChange={setProjectPage}
          />
        </div>
      </Card>

      <Card variant="glass">
        <h3 className="text-xl">
          Compact activity pagination
        </h3>

        <p className="mt-2">
          Previous and next buttons are disabled automatically at
          the first and final pages.
        </p>

        <div className="mt-8">
          <Pagination
            currentPage={activityPage}
            totalPages={5}
            siblingCount={0}
            onPageChange={setActivityPage}
          />
        </div>
      </Card>
    </div>
  );
}