import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroSkyscraper } from "./BuildingIllustrations";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 180]);

  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => setMousePosition({ x: 0, y: 0 });

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
      style={{ perspective: "1200px" }}
    >
      {/* Layer 0 — deep background ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/6 blur-[80px]" />
      </div>

      {/* Layer 0 — tiny city silhouette along bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none opacity-20">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div
            key={i}
            className="absolute bottom-0 bg-primary/25"
            style={{
              left: `${i * 10}%`,
              width: `${5 + (i % 3) * 2}%`,
              height: `${40 + (i % 5) * 30}px`,
            }}
          />
        ))}
      </div>

      {/* Layer 1 — edge vignettes (BEFORE building, so building renders on top) */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% 0%, transparent 0%, #0a0a0b 72%)",
        }}
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 110%, transparent 0%, #0a0a0b 68%)",
        }}
      />

      {/* Layer 2 — interactive 3D skyscraper (above vignette, below text) */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-72 md:w-80 lg:w-96 mt-20"
          style={{ transformStyle: "preserve-3d", aspectRatio: "320/600" }}
        >
          <HeroSkyscraper mouseX={mousePosition.x} mouseY={mousePosition.y} />
        </div>
      </motion.div>

      {/* Layer 3 — bottom fade so building softly blends into the content below */}
      <div className="absolute inset-x-0 bottom-0 h-56 z-[3] pointer-events-none bg-gradient-to-t from-background via-background/70 to-transparent" />

      {/* Layer 10 — page content (always topmost) */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <p className="text-primary tracking-[0.35em] text-xs uppercase mb-6 font-semibold">
            The Pinnacle of Dubai Living
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-light tracking-tight text-white mb-8 max-w-5xl mx-auto leading-[1.05]">
            Architecture <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#f0d080] to-primary/60">
              Beyond Imagination
            </span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-14 font-light leading-relaxed">
            Luxury spaces crafted with vision, precision, and immersive modern living.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              data-testid="button-explore-residences"
              className="w-full sm:w-auto px-10 py-4 bg-primary text-black text-sm tracking-[0.2em] uppercase font-bold hover:bg-[#f0d080] transition-colors duration-300"
            >
              Explore Residences
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              data-testid="button-book-tour"
              className="w-full sm:w-auto px-10 py-4 border border-white/25 text-white text-sm tracking-[0.2em] uppercase hover:bg-white/5 hover:border-primary/50 transition-all duration-300"
            >
              Book Private Tour
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating stat badges */}
      <div className="absolute bottom-10 left-0 right-0 z-10 hidden lg:flex justify-between px-14">
        {[
          { value: "AED 2.4B", label: "Portfolio Value" },
          { value: "250+", label: "Properties" },
          { value: "18 Years", label: "Of Excellence" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + i * 0.15 }}
            className="glass-panel px-6 py-4 flex flex-col"
            data-testid={`stat-badge-${i}`}
          >
            <span className="text-primary font-bold text-xl tracking-wide">{stat.value}</span>
            <span className="text-xs text-muted-foreground tracking-widest uppercase mt-1">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
