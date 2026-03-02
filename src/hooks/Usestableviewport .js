
import { useEffect } from "react";

const useStableViewport = () => {
    useEffect(() => {
        const setVH = () => {
            // Use visualViewport if available (more accurate on iOS)
            const vh = (window.visualViewport?.height ?? window.innerHeight) * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };

        // Set once on mount
        setVH();

        // Only update on resize (orientation change), NOT on scroll
        // This prevents toolbar show/hide from triggering a layout change
        window.addEventListener("resize", setVH);

        return () => window.removeEventListener("resize", setVH);
    }, []);
};

export default useStableViewport;