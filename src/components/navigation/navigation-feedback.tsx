"use client";

import { Suspense } from "react";

import { RouteProgress } from "@/components/navigation/route-progress";

export function NavigationFeedback() {
  return (
    <Suspense fallback={null}>
      <RouteProgress />
    </Suspense>
  );
}