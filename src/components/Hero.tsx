import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Large heading — left side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.25rem] font-normal leading-[1.08] tracking-tight text-foreground">
              Digital products and{" "}
              <span className="underline underline-offset-[6px] decoration-[1.5px] decoration-muted-foreground/40">
                intelligent systems
              </span>{" "}
              built with precision
            </h1>
          </motion.div>

          {/* Description — right side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 lg:pt-4"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-[1.75] mb-8">
              Perceptronix is a technology studio specializing in premium web
              experiences, custom software, and AI-driven solutions — engineered
              with craft and purpose.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#services"
                className="inline-flex items-center px-7 py-3.5 text-sm font-medium bg-foreground text-background rounded-sm hover:opacity-90 transition-opacity duration-300"
              >
                Our services
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Get in touch →
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default Hero;
