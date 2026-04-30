import { motion, useScroll, useTransform } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  // Use useTransform instead of useSpring to avoid per-frame spring recalculations
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-foreground/60 via-foreground to-foreground/60 origin-left z-[60] will-change-transform"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
