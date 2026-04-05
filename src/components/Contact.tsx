import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mb-4">
            Start a project
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground leading-tight mb-6">
            Let's build something exceptional together.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-10">
            Tell us about your vision. We'll bring the expertise, craft, and 
            technology to make it a reality.
          </p>
          <a
            href="mailto:hello@perceptronix.com"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium bg-foreground text-background rounded-sm hover:opacity-90 transition-opacity duration-300"
          >
            hello@perceptronix.com <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
