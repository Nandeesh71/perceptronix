import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";

const headlineWords = ["Digital", "products", "and", "intelligent", "systems", "built", "with", "precision"];

const wordContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="pt-20 relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb-1 absolute top-20 left-[10%] w-[400px] h-[400px] rounded-full bg-foreground/[0.06] blur-[100px]" />
        <div className="orb-2 absolute top-40 right-[15%] w-[350px] h-[350px] rounded-full bg-muted/[0.15] blur-[80px]" />
        <div className="orb-3 absolute bottom-10 left-[40%] w-[300px] h-[300px] rounded-full bg-accent/[0.2] blur-[90px]" />
      </div>

      <FloatingParticles />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Large heading — left side */}
          <div className="lg:col-span-7">
            <motion.h1
              variants={wordContainer}
              initial="hidden"
              animate="visible"
              className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.25rem] font-normal leading-[1.08] tracking-tight text-foreground"
            >
              {headlineWords.map((word, i) => (
                <motion.span key={i} variants={wordVariant} className="inline-block mr-[0.3em]">
                  {word === "intelligent" || word === "systems" ? (
                    <span className="underline underline-offset-[6px] decoration-[1.5px] decoration-muted-foreground/40">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Description — right side */}
          <div className="lg:col-span-5 lg:pt-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-base md:text-lg text-muted-foreground leading-[1.75] mb-8"
            >
              Perceptronix is a technology studio specializing in premium web
              experiences, custom software, and AI-driven solutions — engineered
              with craft and purpose.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-center gap-6"
            >
              <motion.a
                href="#services"
                className="inline-flex items-center px-7 py-3.5 text-sm font-medium bg-foreground text-background rounded-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Our services
              </motion.a>
              <motion.a
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                whileHover={{ x: 4 }}
              >
                Get in touch →
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default Hero;
