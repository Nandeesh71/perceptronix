import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type FooterLink = { label: string; to: string; external?: boolean };

const serviceLinks: FooterLink[] = [
  { label: "Landing Pages", to: "/services/landing-pages" },
  { label: "E-commerce", to: "/services/e-commerce" },
  { label: "3D Websites", to: "/services/3d-websites" },
  { label: "UI/UX Design", to: "/services/ui-ux-design" },
  { label: "App Development", to: "/services/app-development" },
  { label: "AI Solutions", to: "/services/ai-research" },
];

const companyLinks: FooterLink[] = [
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "mailto:TENZOR.NEX@GMAIL.COM", external: true },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
  { label: "Security", to: "/security" },
];

const footerColumns = [
  { title: "Services", links: serviceLinks },
  { title: "Company", links: companyLinks },
  { title: "Legal", links: legalLinks },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nandeesh-s" },
  { label: "X", href: "https://x.com/Nandeesh71" },
  { label: "GitHub", href: "https://github.com/JEROLD-creator653" },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <footer className="py-16" style={{ backgroundColor: "#313852" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10"
        >
          <motion.div variants={fadeUp} className="col-span-2 md:col-span-1">
            <img src="/perceptronix-logo.png" alt="Perceptronix" className="h-20 w-auto object-contain" />
            <p className="text-xs mt-3 leading-relaxed max-w-[200px]" style={{ color: "#b0b8cc" }}>
              Premium technology studio crafting digital experiences.
            </p>
          </motion.div>

          {footerColumns.map((col) => (
            <motion.div key={col.title} variants={fadeUp}>
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-5" style={{ color: "#ffffff" }}>
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.to}
                        className="text-sm transition-colors duration-300 link-hover-underline"
                        style={{ color: "#b0b8cc" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#b0b8cc")}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-sm transition-colors duration-300 link-hover-underline"
                        style={{ color: "#b0b8cc" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#b0b8cc")}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTopColor: "#4a5568" }}
        >
          <p className="text-xs" style={{ color: "#b0b8cc" }}>
            © 2026 Perceptronix. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs transition-colors duration-300"
                style={{ color: "#b0b8cc" }}
                whileHover={{ y: -4, color: "#ffffff" }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                {s.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
