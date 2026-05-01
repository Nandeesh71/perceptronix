import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollProgress from "@/components/ScrollProgress";

const Services = lazy(() => import("@/components/Services"));
const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash || (location.state as { scrollTo?: string })?.scrollTo;
    if (hash) {
      const attempt = (retries: number) => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (retries > 0) {
          setTimeout(() => attempt(retries - 1), 150);
        }
      };
      // Small delay to let lazy components mount
      setTimeout(() => attempt(6), 100);
    }
  }, [location.hash, location.state]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>PerceptroniX | AI-Powered Web & App Development</title>
        <meta name="description" content="PerceptroniX builds cutting-edge websites, mobile apps, ML solutions and e-commerce platforms." />
      </Helmet>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <Services />
      </Suspense>
      <Suspense fallback={null}>
        <About />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
