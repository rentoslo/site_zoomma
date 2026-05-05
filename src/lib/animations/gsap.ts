"use client";

import { gsap } from "gsap";

let registered = false;

export async function ensureGsapPlugins() {
  if (registered || typeof window === "undefined") return;
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap };
