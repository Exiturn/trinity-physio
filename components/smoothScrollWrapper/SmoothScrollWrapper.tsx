"use client";

import { ReactLenis, useLenis } from "lenis/react";

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useLenis(({ scroll }) => {
    // Optional: Add logic for scroll events
    console.log("Current Scroll Position:", scroll);
  });

  return <ReactLenis root>{children}</ReactLenis>;
}
