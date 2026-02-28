import { useInView } from "../hooks/UseInView";
import "./ScrollReveal.css";

/**
 * ScrollReveal — wraps any section and animates it into view
 *
 * Props:
 *  - delay     {number}  extra delay in ms (for staggering siblings) — default 0
 *  - direction {"up" | "down" | "left" | "right"} — default "up"
 *  - distance  {"sm" | "md" | "lg"} — how far the element travels — default "md"
 *  - threshold {number}  0–1, how much must be visible to trigger — default 0.12
 */
export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = "md",
  threshold = 0.12,
  className = "",
  style = {},
}) {
  const [ref, inView] = useInView(threshold, "0px 0px -50px 0px");

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal--${direction} scroll-reveal--${distance} ${
        inView ? "scroll-reveal--visible" : ""
      } ${className}`}
      style={{
        transitionDelay: inView ? `${delay}ms` : "0ms",
        ...style,
      }}
    >
      {children}
    </div>
  );
}