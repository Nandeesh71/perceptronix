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

const CareersPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Helmet>
      <title>Careers | PerceptroniX</title>
      <meta name="description" content="Join the PerceptroniX team — we're looking for engineers, designers, and researchers who push boundaries." />
    </Helmet>
    <Navbar />
    <section className="pt-32 pb-20 px-6 lg:px-12 max-w-5xl mx-auto">
      <motion.div variants={stagger} initial="hidden" animate="visible">
        <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mb-4">
          Careers
        </motion.p>
        <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-light leading-tight mb-8">
          Build with the best.
        </motion.h1>
        <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
          We're always looking for exceptional talent. If you're passionate about technology, design, and building products that matter — we'd love to hear from you.
        </motion.p>
        <motion.div variants={fadeUp} className="border border-border rounded-sm p-8 text-center">
          <p className="text-muted-foreground mb-4">No open positions right now, but we're always interested in great people.</p>
          <a
            href="mailto:TENZOR.NEX@GMAIL.COM"
            className="inline-flex items-center px-8 py-4 text-sm font-medium bg-foreground text-background rounded-sm"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
    <Footer />
  </div>
);

export default CareersPage;
