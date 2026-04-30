import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollProgress from "@/components/ScrollProgress";

const Services = lazy(() => import("@/components/Services"));
const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
