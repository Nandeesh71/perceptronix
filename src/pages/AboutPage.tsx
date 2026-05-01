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

const AboutPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Helmet>
      <title>About | PerceptroniX</title>
      <meta name="description" content="Learn about PerceptroniX — a premium technology studio crafting intelligent digital experiences." />
    </Helmet>
    <Navbar />
    <section className="pt-32 pb-20 px-6 lg:px-12 max-w-5xl mx-auto">
      <motion.div variants={stagger} initial="hidden" animate="visible">
        <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mb-4">
          About Us
        </motion.p>
        <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-light leading-tight mb-8">
          We build what's next.
        </motion.h1>
        <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
          PerceptroniX is a premium technology studio specializing in AI-powered web and app development. We combine deep technical expertise with refined design sensibility to create digital products that perform, scale, and inspire.
        </motion.p>
        <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
          Our team brings together engineers, designers, and researchers who share a relentless commitment to craft. Every project we take on is an opportunity to push boundaries and deliver something exceptional.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { label: "Founded", value: "2024" },
            { label: "Projects Delivered", value: "50+" },
            { label: "Technologies", value: "AI · Web · Mobile" },
          ].map((stat) => (
            <div key={stat.label} className="border border-border rounded-sm p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{stat.label}</p>
              <p className="text-2xl font-light">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
    <Footer />
  </div>
);

export default AboutPage;
