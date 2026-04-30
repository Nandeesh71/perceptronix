const footerColumns = [
  {
    title: "Services",
    links: ["Landing Pages", "E-commerce", "3D Websites", "UI/UX Design", "App Development", "AI Solutions"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security"],
  },
];

const Footer = () => {
  return (
    <footer className="py-16" style={{ backgroundColor: "#313852" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <img src="/perceptronix-logo.png" alt="Perceptronix" className="h-20 w-auto object-contain" />
            <p className="text-xs mt-3 leading-relaxed max-w-[200px]" style={{ color: "#b0b8cc" }}>
              Premium technology studio crafting digital experiences.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-5" style={{ color: "#ffffff" }}>
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors duration-300" style={{ color: "#b0b8cc" }} onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"} onMouseLeave={(e) => e.currentTarget.style.color = "#b0b8cc"}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTopColor: "#4a5568" }}>
          <p className="text-xs" style={{ color: "#b0b8cc" }}>
            © 2026 Perceptronix. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["LinkedIn", "X", "GitHub"].map((s) => (
              <a key={s} href="#" className="text-xs transition-colors duration-300" style={{ color: "#b0b8cc" }} onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"} onMouseLeave={(e) => e.currentTarget.style.color = "#b0b8cc"}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
