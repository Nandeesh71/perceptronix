import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-foreground"
            >
              AI{" "}
              <span className="font-medium underline underline-offset-4 decoration-secondary decoration-2">
                infrastructure
              </span>{" "}
              built for the next era
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-md"
            >
              Perceptronix develops foundational AI systems with precision, safety, and 
              long-term impact at their core. We believe in building technology that endures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex items-center gap-6"
            >
              <a
                href="#research"
                className="inline-flex items-center px-6 py-3 text-sm font-medium bg-foreground text-background rounded-sm hover:opacity-90 transition-opacity"
              >
                Explore our work →
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Learn more
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-lg">
              {/* Geometric grid pattern */}
              <svg viewBox="0 0 400 400" className="w-full h-full text-foreground/10">
                {Array.from({ length: 20 }).map((_, i) => (
                  <line
                    key={`h-${i}`}
                    x1="0" y1={i * 20} x2="400" y2={i * 20}
                    stroke="currentColor" strokeWidth="0.5"
                  />
                ))}
                {Array.from({ length: 20 }).map((_, i) => (
                  <line
                    key={`v-${i}`}
                    x1={i * 20} y1="0" x2={i * 20} y2="400"
                    stroke="currentColor" strokeWidth="0.5"
                  />
                ))}
                <circle cx="200" cy="200" r="120" fill="none" stroke="hsl(210,18%,77%)" strokeWidth="1" opacity="0.6" />
                <circle cx="200" cy="200" r="80" fill="none" stroke="hsl(224,28%,26%)" strokeWidth="0.5" opacity="0.3" />
                <circle cx="200" cy="200" r="3" fill="hsl(224,28%,26%)" opacity="0.6" />
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const r = 120;
                  const x = 200 + r * Math.cos((angle * Math.PI) / 180);
                  const y = 200 + r * Math.sin((angle * Math.PI) / 180);
                  return <circle key={i} cx={x} cy={y} r="2.5" fill="hsl(224,28%,26%)" opacity="0.4" />;
                })}
              </svg>
              <div className="absolute bottom-8 left-8 text-xs text-muted-foreground font-light tracking-widest uppercase">
                Neural topology v3.2
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
