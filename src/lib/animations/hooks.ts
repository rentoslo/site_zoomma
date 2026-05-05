"use client";

import { useEffect, useRef } from "react";
import { ensureGsapPlugins, gsap } from "./gsap";

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Reveals all `.reveal` children inside the ref on scroll-enter.
 * Use `data-stagger="0.08"` on the root to override stagger.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current || prefersReduced()) return;
    let ctx: gsap.Context | null = null;

    (async () => {
      await ensureGsapPlugins();
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      ctx = gsap.context(() => {
        const targets = ref.current!.querySelectorAll(".reveal");
        if (!targets.length) return;
        const stagger = Number(ref.current!.dataset.stagger ?? 0.08);

        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: ref.current!,
            start: "top 80%",
            once: true,
          },
        });
        ScrollTrigger.refresh();
      }, ref.current!);
    })();

    return () => {
      ctx?.revert();
    };
  }, []);

  return ref;
}

/**
 * Splits the text content of `target` into spans `.stagger-char` and animates
 * them in with a cinematic stagger when the section enters the viewport.
 */
export function useStaggerChars<T extends HTMLElement = HTMLElement>(deps: unknown[] = []) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current || prefersReduced()) return;
    const el = ref.current;

    // Split: replace text nodes with spans (preserving <br/> elements).
    const original = el.innerHTML;
    const fragments: string[] = [];
    el.querySelectorAll("[data-split]").forEach((node) => {
      const text = node.textContent ?? "";
      const html = text
        .split("")
        .map((ch) =>
          ch === " "
            ? '<span class="stagger-char">&nbsp;</span>'
            : `<span class="stagger-char">${ch}</span>`
        )
        .join("");
      (node as HTMLElement).innerHTML = html;
      fragments.push(text);
    });

    let ctx: gsap.Context | null = null;
    (async () => {
      await ensureGsapPlugins();
      ctx = gsap.context(() => {
        const chars = el.querySelectorAll(".stagger-char");
        gsap.to(chars, {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.022,
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            once: true,
          },
        });
      }, el);
    })();

    return () => {
      ctx?.revert();
      el.innerHTML = original;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

/**
 * Pins a horizontal-scrolling track and animates X based on scroll progress.
 * Disabled below 1024px.
 */
export function useHorizontalPin<T extends HTMLElement = HTMLElement>() {
  const wrapperRef = useRef<T | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches || prefersReduced()) return;

    let ctx: gsap.Context | null = null;

    (async () => {
      await ensureGsapPlugins();
      ctx = gsap.context(() => {
        const distance = track.scrollWidth - wrapper.clientWidth;
        if (distance <= 0) return;

        gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: () => `+=${distance + window.innerHeight * 0.3}`,
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }, wrapper);
    })();

    return () => {
      ctx?.revert();
    };
  }, []);

  return { wrapperRef, trackRef };
}

/**
 * Number count-up when element enters viewport.
 */
export function useCountUp(
  refTarget: React.RefObject<HTMLElement>,
  to: number,
  opts: { duration?: number; suffix?: string; prefix?: string } = {}
) {
  useEffect(() => {
    if (!refTarget.current || prefersReduced()) {
      if (refTarget.current) {
        refTarget.current.textContent = `${opts.prefix ?? ""}${to}${opts.suffix ?? ""}`;
      }
      return;
    }

    let ctx: gsap.Context | null = null;
    (async () => {
      await ensureGsapPlugins();
      ctx = gsap.context(() => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: to,
          duration: opts.duration ?? 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: refTarget.current!,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            if (refTarget.current) {
              refTarget.current.textContent = `${opts.prefix ?? ""}${Math.round(obj.val)}${opts.suffix ?? ""}`;
            }
          },
        });
      }, refTarget.current!);
    })();

    return () => {
      ctx?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to]);
}
