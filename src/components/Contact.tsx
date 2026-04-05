import { motion } from "framer-motion";

const Contact = () => (
  <section id="contact" className="py-32 border-t border-border">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-4xl font-light text-foreground mb-8">
          Let's work together.
        </h2>
        <a
          href="mailto:hello@perceptronix.com"
          className="text-base text-muted-foreground hover:text-foreground transition-colors duration-300 underline underline-offset-4 decoration-border hover:decoration-foreground"
        >
          hello@perceptronix.com
        </a>
      </motion.div>
    </div>
  </section>
);

export default Contact;
