import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Counter({ from, to, duration = 2, suffix = "", prefix = "" }: { from: number, to: number, duration?: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );
    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeProgress * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return (
    <div ref={nodeRef} className="font-heading font-light text-5xl md:text-7xl text-white mb-4">
      {prefix}{count}{suffix}
    </div>
  );
}

export function Statistics() {
  return (
    <section className="py-32 bg-secondary/50 border-y border-white/5 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <Counter from={0} to={2.4} suffix="B" prefix="AED " />
            <p className="text-primary tracking-widest text-sm uppercase font-semibold">Total Portfolio Value</p>
            <p className="text-muted-foreground mt-4 max-w-xs text-sm">Curated real estate investments across premier locations.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <Counter from={0} to={250} suffix="+" />
            <p className="text-primary tracking-widest text-sm uppercase font-semibold">Luxury Properties</p>
            <p className="text-muted-foreground mt-4 max-w-xs text-sm">Exclusive residences, penthouses, and bespoke villas.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <Counter from={0} to={18} />
            <p className="text-primary tracking-widest text-sm uppercase font-semibold">Years of Excellence</p>
            <p className="text-muted-foreground mt-4 max-w-xs text-sm">A legacy of architectural innovation and trust.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
