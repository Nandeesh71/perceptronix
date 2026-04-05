import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-32 border-t border-border">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-light text-foreground leading-snug"
        >
          Technology that endures.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base text-muted-foreground leading-[1.9] lg:pt-2"
        >
          Perceptronix is a technology studio specializing in premium digital 
          products and intelligent systems. We combine deep engineering expertise 
          with refined design sensibility to deliver solutions that stand apart.
        </motion.p>
      </div>
    </div>
  </section>
);

export default About;
