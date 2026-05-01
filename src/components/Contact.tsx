import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl"
        >
          <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mb-4">
            Start a project
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-light text-foreground leading-tight mb-6">
            Let's build something exceptional together.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed mb-10">
            Tell us about your vision. We'll bring the expertise, craft, and 
            technology to make it a reality.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="mailto:TENZOR.NEX@GMAIL.COM"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium bg-foreground text-background rounded-sm"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 30px hsl(224 28% 26% / 0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Get in touch <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
