"use client";

import { ReactLenis, useLenis } from "lenis/react";

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useLenis(() => {
    // Optional: Add logic for scroll events
  });

  return <ReactLenis root>{children}</ReactLenis>;
}
