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
  { title: "Landing Pages", description: "High-converting, single-page experiences built to captivate.", image: serviceLanding, tag: "01" },
  { title: "E-commerce", description: "Scalable storefronts with seamless checkout and payments.", image: serviceEcommerce, tag: "02" },
  { title: "Multi-page Websites", description: "Content-rich websites with cohesive design systems.", image: serviceMultipage, tag: "03" },
  { title: "3D Websites", description: "Immersive WebGL experiences with spatial storytelling.", image: service3d, tag: "04" },
  { title: "UI/UX Design", description: "Research-driven design systems and prototypes.", image: serviceUiux, tag: "05" },
  { title: "App Development", description: "Full-stack applications from PWAs to native mobile.", image: serviceAppdev, tag: "06" },
  { title: "Machine Learning", description: "Custom-trained models — NLP to computer vision.", image: serviceMl, tag: "07" },
  { title: "AI Research Solutions", description: "End-to-end AI strategy grounded in cutting-edge research.", image: serviceResearch, tag: "08" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const Services = () => {
  return (
    <section id="services" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mb-3">
              What we do
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-foreground">
              Our Services
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Meticulous execution from concept to delivery.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={item}
              className="group border border-border/60 rounded-sm overflow-hidden hover:border-foreground/20 transition-colors duration-400 cursor-pointer"
            >
              <div className="relative h-48 flex items-center justify-center bg-accent/20 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] font-medium text-muted-foreground/60 tracking-widest">
                  {service.tag}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-medium text-foreground leading-snug">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-0.5" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
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
