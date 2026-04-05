import { motion } from "framer-motion";
import heroVisual from "@/assets/hero-visual.jpg";

const Hero = () => (
  <section className="pt-20">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-40">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl lg:text-[5.5rem] font-light leading-[1.05] text-foreground max-w-4xl"
      >
        We craft <span className="italic font-normal">digital products</span> with precision
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 text-base text-muted-foreground max-w-md leading-relaxed"
      >
        Websites, applications, and AI systems — engineered for brands that demand excellence.
      </motion.p>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="inline-flex mt-10 px-7 py-3.5 text-sm font-medium bg-foreground text-background rounded-sm hover:opacity-90 transition-opacity duration-300"
      >
        Our services
      </motion.a>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="max-w-7xl mx-auto px-6 lg:px-12"
    >
      <div className="w-full aspect-[2.5/1] overflow-hidden rounded-sm">
        <img
          src={heroVisual}
          alt="Perceptronix"
          width={1920}
          height={768}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  </section>
);

export default Hero;
