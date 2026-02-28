import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.15, rootMargin = "0px 0px -60px 0px") {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

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
                    observer.unobserve(el);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);

        const rect = el.getBoundingClientRect();
        const alreadyVisible =
            rect.top < window.innerHeight * 0.85 && rect.bottom > 0;
        if (alreadyVisible) {
            setInView(true);
            observer.unobserve(el);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return [ref, inView];
}