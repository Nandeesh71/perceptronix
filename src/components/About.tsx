import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const StatItem = ({ number, label }: { number: string; label: string }) => {
  const { ref, display } = useCountUp(number);
  return (
    <div>
      <p ref={ref as any} className="text-2xl md:text-3xl font-light text-foreground">
        {display}
      </p>
      <p className="text-xs text-muted-foreground mt-1.5 tracking-wide">{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mb-4">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-foreground leading-tight">
              Building technology that endures.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-muted-foreground leading-[1.8] mb-6"
            >
              Perceptronix is a technology studio specializing in premium digital products 
              and intelligent systems. We combine deep engineering expertise with refined 
              design sensibility to create solutions that stand apart.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base text-muted-foreground leading-[1.8]"
            >
              Every project we undertake reflects our commitment to craftsmanship — 
              from the architecture beneath the surface to the pixels our users see.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-8 pt-10 border-t border-border"
            >
              <StatItem number="50+" label="Projects delivered" />
              <StatItem number="12" label="Team members" />
              <StatItem number="4yr" label="In the industry" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
