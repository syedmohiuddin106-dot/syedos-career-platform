"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function RouteProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const previousRouteRef = useRef<string | null>(null);

  useEffect(() => {
    const currentRoute = `${pathname}?${searchParams.toString()}`;

    if (previousRouteRef.current === null) {
      previousRouteRef.current = currentRoute;
      return;
    }

    if (previousRouteRef.current === currentRoute) {
      return;
    }

    previousRouteRef.current = currentRoute;

    const startTimer = window.setTimeout(() => {
      setIsVisible(true);
      setProgress(18);
    }, 0);

    const middleTimer = window.setTimeout(() => {
      setProgress(68);
    }, 90);

    const completeTimer = window.setTimeout(() => {
      setProgress(100);
    }, 240);

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, 430);

    const resetTimer = window.setTimeout(() => {
      setProgress(0);
    }, 650);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(middleTimer);
      window.clearTimeout(completeTimer);
      window.clearTimeout(hideTimer);
      window.clearTimeout(resetTimer);
    };
  }, [pathname, searchParams]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-x-0 top-0 z-[100] h-0.5 transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 shadow-[0_0_18px_rgba(34,211,238,0.8)] transition-[width] duration-300 ease-out"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}