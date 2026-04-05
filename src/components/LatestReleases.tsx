import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const releases = [
  {
    title: "Perceptron X-1 Launch",
    description: "Our most advanced foundation model — purpose-built for enterprise reasoning and multi-step problem solving.",
    cta: "Read announcement",
    date: "March 28, 2026",
    category: "Product Launch",
  },
  {
    title: "Safety Benchmark v4",
    description: "A new open standard for evaluating alignment and safety properties in large language models.",
    cta: "View the benchmark",
    date: "March 15, 2026",
    category: "Research",
  },
  {
    title: "Cortex API — Public Beta",
    description: "Developer-first API for deploying intelligent agents with built-in guardrails and observability.",
    cta: "Start building",
    date: "February 22, 2026",
    category: "Developer Tools",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const LatestReleases = () => {
  return (
    <section id="research" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light text-foreground mb-16"
        >
          Latest releases
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {releases.map((release) => (
            <motion.article
              key={release.title}
              variants={item}
              className="group border border-border rounded-sm p-8 flex flex-col justify-between hover:border-foreground/30 transition-colors duration-300"
            >
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {release.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {release.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:gap-2.5 transition-all"
                >
                  {release.cta} <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="mt-10 pt-6 border-t border-border">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span className="uppercase tracking-wider font-medium">Date</span>
                  <span>{release.date}</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span className="uppercase tracking-wider font-medium">Category</span>
                  <span>{release.category}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LatestReleases;
