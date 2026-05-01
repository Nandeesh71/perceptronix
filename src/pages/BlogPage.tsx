import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const BlogPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Helmet>
      <title>Blog | PerceptroniX</title>
      <meta name="description" content="Insights on AI, web development, design systems, and emerging technology from the PerceptroniX team." />
    </Helmet>
    <Navbar />
    <section className="pt-32 pb-20 px-6 lg:px-12 max-w-5xl mx-auto">
      <motion.div variants={stagger} initial="hidden" animate="visible">
        <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mb-4">
          Blog
        </motion.p>
        <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-light leading-tight mb-8">
          Thinking out loud.
        </motion.h1>
        <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
          Our thoughts on technology, design, AI research, and the craft of building digital products.
        </motion.p>
        <motion.div variants={fadeUp} className="border border-border rounded-sm p-8 text-center">
          <p className="text-muted-foreground">Coming soon — stay tuned for our first articles.</p>
        </motion.div>
      </motion.div>
    </section>
    <Footer />
  </div>
);

export default BlogPage;
