import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mb-4">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-foreground leading-tight">
              Building technology that endures.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <p className="text-base text-muted-foreground leading-[1.8] mb-6">
              Perceptronix is a technology studio specializing in premium digital products 
              and intelligent systems. We combine deep engineering expertise with refined 
              design sensibility to create solutions that stand apart.
            </p>
            <p className="text-base text-muted-foreground leading-[1.8]">
              Every project we undertake reflects our commitment to craftsmanship — 
              from the architecture beneath the surface to the pixels our users see.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-8 pt-10 border-t border-border">
              {[
                { number: "50+", label: "Projects delivered" },
                { number: "12", label: "Team members" },
                { number: "4yr", label: "In the industry" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-light text-foreground">{stat.number}</p>
                  <p className="text-xs text-muted-foreground mt-1.5 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
