import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import serviceLanding from "@/assets/service-landing.png";
import serviceEcommerce from "@/assets/service-ecommerce.png";
import serviceMultipage from "@/assets/service-multipage.png";
import service3d from "@/assets/service-3d.png";
import serviceUiux from "@/assets/service-uiux.png";
import serviceAppdev from "@/assets/service-appdev.png";
import serviceMl from "@/assets/service-ml.png";
import serviceResearch from "@/assets/service-research.png";

const services = [
  {
    title: "Landing Pages",
    description: "High-converting, single-page experiences crafted to captivate your audience and drive results.",
    image: serviceLanding,
    tag: "01",
  },
  {
    title: "E-commerce",
    description: "Scalable storefronts with seamless checkout, inventory management, and payment systems.",
    image: serviceEcommerce,
    tag: "02",
  },
  {
    title: "Multi-page Websites",
    description: "Content-rich, structured websites with intuitive navigation and cohesive design systems.",
    image: serviceMultipage,
    tag: "03",
  },
  {
    title: "3D Websites",
    description: "Immersive WebGL-powered experiences with interactive 3D elements and spatial storytelling.",
    image: service3d,
    tag: "04",
  },
  {
    title: "UI/UX Design",
    description: "Research-driven design systems, wireframes, and prototypes that prioritize usability.",
    image: serviceUiux,
    tag: "05",
  },
  {
    title: "App Development",
    description: "Full-stack applications built for performance — from progressive web apps to native mobile.",
    image: serviceAppdev,
    tag: "06",
  },
  {
    title: "Machine Learning",
    description: "Custom-trained models tailored to your domain — NLP pipelines to computer vision systems.",
    image: serviceMl,
    tag: "07",
  },
  {
    title: "AI Research Solutions",
    description: "End-to-end AI strategy grounded in cutting-edge research and industry best practices.",
    image: serviceResearch,
    tag: "08",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Services = () => {
  return (
    <section id="services" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mb-3">
              What we do
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-foreground">
              Our Services
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Each project is approached with meticulous attention to detail, 
            ensuring world-class execution from concept to delivery.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={item}
              className="group relative border border-border rounded-sm overflow-hidden hover:border-foreground/25 transition-all duration-500 cursor-pointer"
            >
              {/* Image area */}
              <div className="relative h-48 flex items-center justify-center bg-accent/30 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-36 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 text-[10px] font-medium text-muted-foreground tracking-widest">
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-base font-medium text-foreground leading-snug">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-0.5" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
