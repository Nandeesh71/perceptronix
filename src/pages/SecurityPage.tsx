import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SecurityPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Helmet>
      <title>Security | PerceptroniX</title>
      <meta name="description" content="PerceptroniX security practices — how we protect your data and our infrastructure." />
    </Helmet>
    <Navbar />
    <section className="pt-32 pb-20 px-6 lg:px-12 max-w-5xl mx-auto">
      <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
        <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mb-4">Legal</motion.p>
        <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-light leading-tight mb-8">Security</motion.h1>
        <motion.div variants={fadeUp} className="prose prose-sm max-w-3xl text-muted-foreground space-y-4">
          <p>At PerceptroniX, security is foundational to everything we build.</p>
          <h2 className="text-foreground text-lg font-medium mt-8">Infrastructure</h2>
          <p>All our applications are deployed on enterprise-grade cloud infrastructure with encrypted data at rest and in transit (TLS 1.3).</p>
          <h2 className="text-foreground text-lg font-medium mt-8">Development Practices</h2>
          <p>We follow secure coding standards, conduct regular code reviews, and perform dependency vulnerability scanning on every build.</p>
          <h2 className="text-foreground text-lg font-medium mt-8">Reporting Vulnerabilities</h2>
          <p>If you discover a security issue, please report it responsibly to <a href="mailto:TENZOR.NEX@GMAIL.COM" className="text-foreground underline">our team</a>.</p>
        </motion.div>
      </motion.div>
    </section>
    <Footer />
  </div>
);

export default SecurityPage;
