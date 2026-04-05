import { motion } from "framer-motion";
import heroVisual from "@/assets/hero-visual.jpg";

const Hero = () => {
  return (
    <section className="pt-20">
      {/* Text section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-32">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mb-6"
          >
            Technology Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-foreground"
          >
            We craft{" "}
            <span className="font-medium italic">digital experiences</span>{" "}
            that define brands
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg"
          >
            From bespoke websites to intelligent AI systems — we engineer
            premium solutions with precision, elegance, and purpose.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex items-center gap-6"
          >
            <a
              href="#services"
              className="inline-flex items-center px-7 py-3.5 text-sm font-medium bg-foreground text-background rounded-sm hover:opacity-90 transition-opacity duration-300"
            >
              View our services
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 underline underline-offset-4 decoration-border"
            >
              About us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Full-width hero image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        <div className="w-full aspect-[21/9] overflow-hidden rounded-sm">
          <img
            src={heroVisual}
            alt="Neural network visualization"
            width={1920}
            height={768}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
