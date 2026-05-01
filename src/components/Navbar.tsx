import { useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["Services", "About", "Contact"];

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = useCallback((hash: string) => {
    const attempt = (retries: number) => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (retries > 0) {
        setTimeout(() => attempt(retries - 1), 150);
      }
    };
    attempt(5);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent, section: string) => {
      e.preventDefault();
      const hash = `#${section.toLowerCase()}`;

      if (location.pathname === "/") {
        scrollToSection(hash);
      } else {
        navigate("/", { state: { scrollTo: hash } });
      }
    },
    [location.pathname, navigate, scrollToSection]
  );

  const handleMobileNavClick = useCallback(
    (e: React.MouseEvent, section: string) => {
      e.preventDefault();
      const hash = `#${section.toLowerCase()}`;

      // Close menu first, then navigate after exit animation completes
      setMobileOpen(false);

      setTimeout(() => {
        if (location.pathname === "/") {
          scrollToSection(hash);
        } else {
          navigate("/", { state: { scrollTo: hash } });
        }
      }, 350); // Match the exit animation duration
    },
    [location.pathname, navigate, scrollToSection]
  );

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-foreground/90 backdrop-blur-md border-b border-background/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-14 sm:h-16">
        <a href="/" className="flex items-center logo-glow">
          <img
            src="/perceptronix-logo.png"
            alt="Perceptronix"
            className="h-16 sm:h-20 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`/#${link.toLowerCase()}`}
              className="relative text-sm font-medium text-background/60 transition-colors duration-300 hover:text-background"
              onClick={(e) => handleNavClick(e, link)}
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
            href="mailto:TENZOR.NEX@GMAIL.COM"
            className="ml-4 inline-flex items-center px-6 py-2.5 text-sm font-medium bg-background text-foreground rounded-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Get in touch
          </motion.a>
        </div>

        {/* Mobile menu button — larger touch target */}
        <button
          className="md:hidden text-background p-2 -mr-2 touch-manipulation"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-background/20 bg-foreground/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 sm:px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`/#${link.toLowerCase()}`}
                  className="text-base text-background/80 active:text-background py-3 px-3 rounded-sm active:bg-background/10 transition-colors touch-manipulation"
                  onClick={(e) => handleMobileNavClick(e, link)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                href="mailto:TENZOR.NEX@GMAIL.COM"
                className="mt-3 inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium bg-background text-foreground rounded-sm active:opacity-80 transition-opacity touch-manipulation"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.3 }}
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
