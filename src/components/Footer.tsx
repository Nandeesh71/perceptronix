const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <span className="text-sm font-semibold text-foreground">
        {"{ Perceptron;x }"}
      </span>
      <div className="flex items-center gap-8">
        {["Services", "About", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {link}
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        © 2026 Perceptronix
      </p>
    </div>
  </footer>
);

export default Footer;
