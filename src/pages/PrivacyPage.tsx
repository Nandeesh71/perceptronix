import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const PrivacyPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Helmet>
      <title>Privacy Policy | PerceptroniX</title>
      <meta name="description" content="PerceptroniX privacy policy — how we collect, use, and protect your data." />
    </Helmet>
    <Navbar />
    <section className="pt-32 pb-20 px-6 lg:px-12 max-w-5xl mx-auto">
      <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
        <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mb-4">Legal</motion.p>
        <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-light leading-tight mb-8">Privacy Policy</motion.h1>
        <motion.div variants={fadeUp} className="prose prose-sm max-w-3xl text-muted-foreground space-y-4">
          <p>Last updated: May 1, 2026</p>
          <h2 className="text-foreground text-lg font-medium mt-8">1. Information We Collect</h2>
          <p>We collect information you provide directly, such as when you contact us via email or submit a project inquiry. This may include your name, email address, and project details.</p>
          <h2 className="text-foreground text-lg font-medium mt-8">2. How We Use Your Information</h2>
          <p>We use the information to respond to your inquiries, deliver our services, improve our website, and communicate updates about our services.</p>
          <h2 className="text-foreground text-lg font-medium mt-8">3. Data Protection</h2>
          <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
          <h2 className="text-foreground text-lg font-medium mt-8">4. Contact</h2>
          <p>For privacy-related questions, reach out to us at <a href="mailto:TENZOR.NEX@GMAIL.COM" className="text-foreground underline">our email</a>.</p>
        </motion.div>
      </motion.div>
    </section>
    <Footer />
  </div>
);

export default PrivacyPage;
