import { motion } from "framer-motion";
import { useState } from "react";
import { IsometricBuildingCutaway } from "./BuildingIllustrations";

const layers = [
  {
    id: 3,
    name: "PENTHOUSE",
    desc: "Sky-high observatory suites with panoramic floor-to-ceiling glass and private rooftop terrace.",
  },
  {
    id: 2,
    name: "RESIDENCES",
    desc: "Engineered for maximum spatial efficiency with cross-ventilation and panoramic city exposure.",
  },
  {
    id: 1,
    name: "PODIUM",
    desc: "Curated lifestyle amenities — spa, pool deck, and private dining — suspended above the city.",
  },
  {
    id: 0,
    name: "LOBBY",
    desc: "A grand arrival experience with double-height ceilings, natural stone, and sculptural lighting.",
  },
];

export function ArchitecturalCutaway() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <section id="architecture" className="py-32 bg-background relative overflow-hidden">
      {/* Subtle background ambient */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left: text + layer list */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 max-w-xl"
          >
            <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4 font-semibold">
              Structural Innovation
            </p>
            <h3 className="text-4xl md:text-5xl font-heading font-light text-white mb-8 leading-tight">
              Anatomy of <br />
              <span className="italic text-muted-foreground">Excellence</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-10 font-light leading-relaxed">
              Every Meena property is conceived from the inside out. We collaborate with the world's most visionary architects to engineer spaces that redefine the limits of physics and aesthetics.
            </p>

            <div className="space-y-4">
              {layers.map((layer) => (
                <div
                  key={layer.id}
                  data-testid={`layer-${layer.id}`}
                  className={`p-5 border-l-2 transition-all duration-400 cursor-pointer ${
                    activeLayer === layer.id
                      ? "border-primary bg-primary/6 text-white"
                      : "border-white/10 text-muted-foreground hover:border-white/30 hover:bg-white/2"
                  }`}
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  onMouseLeave={() => setActiveLayer(null)}
                >
                  <h4 className="text-sm tracking-widest uppercase font-semibold mb-2">
                    {layer.name}
                  </h4>
                  <p className="text-sm font-light leading-relaxed opacity-80">
                    {layer.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: isometric building cutaway */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 w-full h-[520px] relative flex items-center justify-center"
          >
            <IsometricBuildingCutaway activeLayer={activeLayer} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
