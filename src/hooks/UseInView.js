import { useEffect, useRef, useState } from "react";

/**
 * useInView — fires once when the element enters the viewport
 * @param {number} threshold  — how much of the element must be visible (0–1)
 * @param {string} rootMargin — shrink/expand the trigger zone (e.g. "0px 0px -80px 0px")
 */
export function useInView(threshold = 0.15, rootMargin = "0px 0px -60px 0px") {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // If the user prefers reduced motion, show immediately — no animation
        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) {
            setInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(el); // fire once, then stop watching
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return [ref, inView];
}