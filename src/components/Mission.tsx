import { motion } from "framer-motion";

const links = [
  { title: "Core principles on AI safety", category: "Research" },
  { title: "Responsible deployment framework", category: "Safety" },
  { title: "Perceptronix Academy: Build with X-1", category: "Education" },
  { title: "Economic impact report 2026", category: "Analysis" },
  { title: "Model governance and transparency", category: "Policy" },
];

const Mission = () => {
  return (
    <section id="about" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h2 className="text-3xl md:text-4xl font-light text-foreground leading-tight">
              We build AI to serve humanity's long-term future.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="divide-y divide-border">
              {links.map((link) => (
                <a
                  key={link.title}
                  href="#"
                  className="flex items-center justify-between py-5 group"
                >
                  <span className="text-sm md:text-base text-foreground group-hover:opacity-70 transition-opacity">
                    {link.title}
                  </span>
                  <span className="text-xs text-muted-foreground ml-4 shrink-0">
                    {link.category}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
