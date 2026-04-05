import { motion } from "framer-motion";
import serviceLanding from "@/assets/service-landing.png";
import serviceEcommerce from "@/assets/service-ecommerce.png";
import serviceMultipage from "@/assets/service-multipage.png";
import service3d from "@/assets/service-3d.png";
import serviceUiux from "@/assets/service-uiux.png";
import serviceAppdev from "@/assets/service-appdev.png";
import serviceMl from "@/assets/service-ml.png";
import serviceResearch from "@/assets/service-research.png";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Landing Page Websites",
    description: "High-converting, single-page experiences designed to captivate and convert — pixel-perfect and blazing fast.",
    image: serviceLanding,
  },
  {
    title: "E-commerce Development",
    description: "Scalable storefronts with seamless checkout flows, inventory management, and payment integration.",
    image: serviceEcommerce,
  },
  {
    title: "Custom Multi-page Websites",
    description: "Content-rich, fully structured websites with intuitive navigation and consistent design systems.",
    image: serviceMultipage,
  },
  {
    title: "3D Websites",
    description: "Immersive, WebGL-powered digital experiences with interactive 3D elements and spatial storytelling.",
    image: service3d,
  },
  {
    title: "UI/UX Design",
    description: "Research-driven design systems, wireframes, and prototypes that prioritize usability and delight.",
    image: serviceUiux,
  },
  {
    title: "App & Web App Development",
    description: "Full-stack applications built for performance — from progressive web apps to native mobile experiences.",
    image: serviceAppdev,
  },
  {
    title: "Machine Learning Models",
    description: "Custom-trained models tailored to your domain — from NLP pipelines to computer vision systems.",
    image: serviceMl,
  },
  {
    title: "Research-based AI Solutions",
    description: "End-to-end AI strategy and implementation grounded in cutting-edge academic research and best practices.",
    image: serviceResearch,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section id="products" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
            What we build
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Services
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group border border-border rounded-sm p-6 flex flex-col hover:border-foreground/30 transition-colors duration-300"
            >
              <div className="w-full h-36 flex items-center justify-center mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-full w-auto object-contain"
                />
              </div>

              <h3 className="text-base font-medium text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {service.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground mt-5 group-hover:gap-2.5 transition-all"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
