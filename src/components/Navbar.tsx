import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["Services", "About", "Contact"];

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    const hash = `#${section.toLowerCase()}`;
    if (location.pathname === "/") {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + hash);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-foreground/90 backdrop-blur-md border-b border-background/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <a href="/" className="flex items-center logo-glow">
          <img src="/perceptronix-logo.png" alt="Perceptronix" className="h-20 w-auto object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-sm font-medium text-background/60 transition-colors duration-300 hover:text-background"
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link}
              {hoveredLink === link && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-background"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
          <motion.a
            href="#contact"
            className="ml-4 inline-flex items-center px-6 py-2.5 text-sm font-medium bg-background text-foreground rounded-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Get in touch
          </motion.a>
        </div>

        <button
          className="md:hidden text-background"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-background/20 bg-foreground/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-base text-background py-2"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-background text-foreground rounded-sm"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                Get in touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
