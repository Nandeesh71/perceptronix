import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Service not found</h1>
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = services.findIndex((s) => s.slug === service.slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{service.title} | PerceptroniX</title>
        <meta name="description" content={service.description.slice(0, 155)} />
      </Helmet>
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12"
            >
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mb-4"
              >
                {service.tag} — Service
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-3xl md:text-5xl lg:text-[3.5rem] font-light text-foreground leading-[1.1] mb-6"
              >
                {service.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-muted-foreground leading-[1.8]"
              >
                {service.headline}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40, rotate: -2 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-sm overflow-hidden border border-border/60 bg-accent/20">
                <img
                  src={service.image}
                  alt={`${service.title} illustration`}
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                custom={0}
                variants={fadeUp}
                className="text-2xl md:text-3xl font-light text-foreground leading-tight mb-6"
              >
                Overview
              </motion.h2>
              <motion.p
                custom={1}
                variants={fadeUp}
                className="text-base text-muted-foreground leading-[1.8]"
              >
                {service.description}
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                custom={0}
                variants={fadeUp}
                className="text-2xl md:text-3xl font-light text-foreground leading-tight mb-6"
              >
                What's included
              </motion.h2>
              <ul className="space-y-4">
                {service.details.map((detail, i) => (
                  <motion.li
                    key={i}
                    custom={i + 1}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-foreground/60 mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mb-4"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-light text-foreground leading-tight mb-16"
          >
            What sets us apart
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {service.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                variants={fadeUp}
                className="border border-border/60 rounded-sm p-8 hover:border-foreground/20 transition-colors duration-400"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 mb-4 font-medium">
                  0{i + 1}
                </p>
                <h3 className="text-base font-medium text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mb-4"
          >
            Our process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-light text-foreground leading-tight mb-16"
          >
            From concept to delivery
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="flex flex-wrap gap-4"
          >
            {service.process.map((step, i) => (
              <motion.div
                key={step}
                custom={i}
                variants={fadeUp}
                className="flex items-center gap-3 border border-border/60 rounded-sm px-6 py-4"
              >
                <span className="text-xs font-medium text-muted-foreground/50">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm font-medium text-foreground">{step}</span>
                {i < service.process.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-muted-foreground/30 ml-1" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-2xl md:text-4xl font-light text-foreground leading-tight mb-6">
              Ready to start your {service.title.toLowerCase()} project?
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Let's discuss your vision and build something exceptional together.
            </p>
            <motion.a
              href="mailto:hello@perceptronix.com"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium bg-foreground text-background rounded-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Get in touch <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Navigation between services */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 divide-x divide-border">
            <div className="py-10 pr-8">
              {prevService ? (
                <Link
                  to={`/services/${prevService.slug}`}
                  className="group flex flex-col gap-1"
                >
                  <span className="text-xs text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
                    ← Previous
                  </span>
                  <span className="text-sm font-medium text-foreground group-hover:text-foreground/80 transition-colors">
                    {prevService.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
            <div className="py-10 pl-8 text-right">
              {nextService ? (
                <Link
                  to={`/services/${nextService.slug}`}
                  className="group flex flex-col gap-1 items-end"
                >
                  <span className="text-xs text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
                    Next →
                  </span>
                  <span className="text-sm font-medium text-foreground group-hover:text-foreground/80 transition-colors">
                    {nextService.title}
                  </span>
                </Link>
              ) : (
                <Link
                  to="/#services"
                  className="group flex flex-col gap-1 items-end"
                >
                  <span className="text-xs text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
                    View all →
                  </span>
                  <span className="text-sm font-medium text-foreground group-hover:text-foreground/80 transition-colors">
                    All Services
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
