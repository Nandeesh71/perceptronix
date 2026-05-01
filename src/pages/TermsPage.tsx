import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const TermsPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Helmet>
      <title>Terms of Service | PerceptroniX</title>
      <meta name="description" content="PerceptroniX terms of service — the rules and guidelines for using our services." />
    </Helmet>
    <Navbar />
    <section className="pt-32 pb-20 px-6 lg:px-12 max-w-5xl mx-auto">
      <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
        <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mb-4">Legal</motion.p>
        <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-light leading-tight mb-8">Terms of Service</motion.h1>
        <motion.div variants={fadeUp} className="prose prose-sm max-w-3xl text-muted-foreground space-y-4">
          <p>Last updated: May 1, 2026</p>
          <h2 className="text-foreground text-lg font-medium mt-8">1. Services</h2>
          <p>PerceptroniX provides web development, app development, UI/UX design, and AI/ML consulting services. All deliverables are subject to the terms agreed upon in individual project contracts.</p>
          <h2 className="text-foreground text-lg font-medium mt-8">2. Intellectual Property</h2>
          <p>Upon full payment, clients receive ownership of all custom deliverables created for their project. PerceptroniX retains the right to showcase work in portfolio materials unless otherwise agreed.</p>
          <h2 className="text-foreground text-lg font-medium mt-8">3. Limitation of Liability</h2>
          <p>PerceptroniX shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
          <h2 className="text-foreground text-lg font-medium mt-8">4. Contact</h2>
          <p>Questions about these terms? <a href="mailto:TENZOR.NEX@GMAIL.COM" className="text-foreground underline">Contact us</a>.</p>
        </motion.div>
      </motion.div>
    </section>
    <Footer />
  </div>
);

export default TermsPage;
