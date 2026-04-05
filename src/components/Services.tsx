import { motion } from "framer-motion";
import serviceLanding from "@/assets/service-landing.png";
import serviceEcommerce from "@/assets/service-ecommerce.png";
import serviceMultipage from "@/assets/service-multipage.png";
import service3d from "@/assets/service-3d.png";
import serviceUiux from "@/assets/service-uiux.png";
import serviceAppdev from "@/assets/service-appdev.png";
import serviceMl from "@/assets/service-ml.png";
import serviceResearch from "@/assets/service-research.png";

const services = [
  { title: "Landing Pages", image: serviceLanding },
  { title: "E-commerce", image: serviceEcommerce },
  { title: "Multi-page Websites", image: serviceMultipage },
  { title: "3D Websites", image: service3d },
  { title: "UI/UX Design", image: serviceUiux },
  { title: "App Development", image: serviceAppdev },
  { title: "Machine Learning", image: serviceMl },
  { title: "AI Research", image: serviceResearch },
];

const Services = () => (
  <section id="services" className="py-32 border-t border-border">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-light text-foreground mb-20"
      >
        Services
      </motion.h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group bg-background p-6 md:p-8 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="h-32 md:h-40 flex items-center justify-center mb-6">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                width={512}
                height={512}
                className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-sm font-medium text-foreground">
              {service.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
