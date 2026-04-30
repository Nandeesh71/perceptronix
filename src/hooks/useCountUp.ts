import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function useCountUp(target: string, duration = 1.5) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Parse target: "50+", "12", "4yr"
    const numMatch = target.match(/(\d+)/);
    if (!numMatch) {
      setDisplay(target);
      return;
    }

    const num = parseInt(numMatch[1]);
    const prefix = target.slice(0, target.indexOf(numMatch[1]));
    const suffix = target.slice(target.indexOf(numMatch[1]) + numMatch[1].length);

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * num);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return { ref, display };
}
