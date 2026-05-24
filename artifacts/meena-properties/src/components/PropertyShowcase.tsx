import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ObsidianTower,
  AzurePavilionTower,
  VertexGardensTower,
  HorizonOneTower,
  CelestiaDoubleTower,
  AureonBlock,
} from "./BuildingIllustrations";

const properties = [
  {
    id: 1,
    name: "Meena Obsidian",
    type: "PENTHOUSE",
    location: "DUBAI",
    price: "$4.2M",
    accentColor: "#c9a84c",
    Building: ObsidianTower,
  },
  {
    id: 2,
    name: "Azure Pavilion",
    type: "SKY SUITE",
    location: "ABU DHABI",
    price: "$2.8M",
    accentColor: "#4a8fe8",
    Building: AzurePavilionTower,
  },
  {
    id: 3,
    name: "Vertex Gardens",
    type: "GARDEN VILLA",
    location: "DUBAI HILLS",
    price: "$3.5M",
    accentColor: "#4caf50",
    Building: VertexGardensTower,
  },
  {
    id: 4,
    name: "Horizon One",
    type: "WATERFRONT RESIDENCE",
    location: "PALM JUMEIRAH",
    price: "$5.1M",
    accentColor: "#1a8fe8",
    Building: HorizonOneTower,
  },
  {
    id: 5,
    name: "Celestia Towers",
    type: "TWIN TOWERS",
    location: "DOWNTOWN DUBAI",
    price: "$6.8M",
    accentColor: "#c9a84c",
    Building: CelestiaDoubleTower,
  },
  {
    id: 6,
    name: "Aureon Residences",
    type: "LUXURY APARTMENTS",
    location: "BUSINESS BAY",
    price: "$1.9M",
    accentColor: "#e8a040",
    Building: AureonBlock,
  },
];

function PropertyCard({ property }: { property: (typeof properties)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [mouseRel, setMouseRel] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setRotate({
      x: ((y - cy) / cy) * -8,
      y: ((x - cx) / cx) * 8,
    });
    setMouseRel({ x: x / rect.width, y: y / rect.height });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setMouseRel({ x: 0.5, y: 0.5 });
    setIsHovered(false);
  };

  const { Building, accentColor } = property;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
      className="w-full"
      style={{ perspective: "1200px" }}
      data-testid={`card-property-${property.id}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-[3/4] w-full cursor-pointer group"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: isHovered ? "transform 0.05s ease-out" : "transform 0.6s ease",
        }}
      >
        {/* === BACKGROUND LAYER — city environment === */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: `radial-gradient(ellipse at ${mouseRel.x * 100}% ${mouseRel.y * 100}%, ${accentColor}18 0%, #0a0a0b 70%)`,
            transform: "translateZ(0px)",
          }}
        >
          {/* Subtle grid environment */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(${accentColor}20 1px, transparent 1px), linear-gradient(90deg, ${accentColor}20 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          {/* Horizon glow */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 transition-opacity duration-500"
            style={{
              background: `linear-gradient(to top, ${accentColor}15, transparent)`,
              opacity: isHovered ? 1 : 0.4,
            }}
          />
        </div>

        {/* === MIDGROUND LAYER — ambient glow === */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-600"
          style={{
            transform: `translateZ(${isHovered ? 24 : 8}px)`,
            opacity: isHovered ? 1 : 0.3,
          }}
        >
          <div
            className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-2/3 h-1/2 blur-[60px] rounded-full transition-all duration-500"
            style={{ background: `${accentColor}30` }}
          />
        </div>

        {/* === FOREGROUND LAYER — the BUILDING === */}
        <div
          className="absolute inset-x-4 bottom-20 top-4 pointer-events-none transition-all duration-500"
          style={{
            transform: `translateZ(${isHovered ? 56 : 0}px)`,
            filter: isHovered
              ? `drop-shadow(0 8px 32px ${accentColor}40) drop-shadow(0 0 16px ${accentColor}30)`
              : `drop-shadow(0 4px 12px ${accentColor}15)`,
          }}
        >
          <Building isHovered={isHovered} />
        </div>

        {/* === TOP EDGE GLOW on hover === */}
        <div
          className="absolute inset-0 pointer-events-none border transition-all duration-500 rounded-sm"
          style={{
            borderColor: isHovered ? `${accentColor}60` : "rgba(255,255,255,0.06)",
            boxShadow: isHovered
              ? `inset 0 0 30px ${accentColor}10, 0 0 40px ${accentColor}20`
              : "none",
            transform: "translateZ(60px)",
          }}
        />

        {/* === TEXT OVERLAY === */}
        <div
          className="absolute inset-x-0 bottom-0 p-5 pt-16"
          style={{
            background: "linear-gradient(to top, #0a0a0b 60%, transparent)",
            transform: "translateZ(65px)",
          }}
        >
          <div
            className="text-xs font-bold tracking-widest mb-2 flex justify-between"
            style={{ color: accentColor }}
          >
            <span>{property.type}</span>
            <span>{property.location}</span>
          </div>
          <h3 className="text-xl font-heading font-light text-white mb-1 tracking-tight">
            {property.name}
          </h3>
          <p className="text-muted-foreground text-sm">{property.price}</p>

          <motion.div
            className="mt-4 overflow-hidden"
            animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="text-xs tracking-widest uppercase font-semibold py-2 px-4 border transition-colors duration-300"
              style={{ color: accentColor, borderColor: `${accentColor}50` }}
              data-testid={`button-explore-${property.id}`}
            >
              Explore Residence
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function PropertyShowcase() {
  return (
    <section id="residences" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-20 max-w-2xl"
        >
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4 font-semibold">
            Exclusive Residences
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-light text-white mb-6">
            The Collection
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            A curated selection of the most prestigious properties across the Emirates. Hover to watch the architecture emerge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
