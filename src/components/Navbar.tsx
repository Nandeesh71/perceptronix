import { useState } from "react";
import { motion } from "framer-motion";

const navLinks = ["Research", "Products", "Safety", "Careers", "News"];

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <a href="/" className="text-lg font-semibold tracking-tight text-foreground">
          {"{ Perceptron;x }"}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link}
              {hoveredLink === link && (
                <motion.span
                  layoutId="navbar-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium bg-foreground text-background rounded-sm hover:opacity-90 transition-opacity"
        >
          Get in touch
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
