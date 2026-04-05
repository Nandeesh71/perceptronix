const footerColumns = [
  {
    title: "Products",
    links: ["Perceptron X-1", "Cortex API", "Enterprise", "Pricing", "Documentation"],
  },
  {
    title: "Research",
    links: ["Publications", "Safety", "Open source", "Benchmarks"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "News", "Blog", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Compliance"],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <span className="text-base font-semibold text-foreground">
              {"{ Perceptron;x }"}
            </span>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Perceptronix PBC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["LinkedIn", "X", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
