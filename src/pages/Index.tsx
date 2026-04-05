import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import LatestReleases from "@/components/LatestReleases";
import Mission from "@/components/Mission";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <LatestReleases />
      <Mission />
      <Footer />
    </div>
  );
};

export default Index;
