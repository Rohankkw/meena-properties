import { motion } from "framer-motion";

export function Vision() {
  return (
    <section id="philosophy" className="py-32 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="w-16 h-[1px] bg-primary mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-heading font-light text-white mb-10 leading-snug">
              "We do not build structures. We sculpt light, shape space, and curate silence. True luxury is the absence of the unnecessary."
            </h2>
            <p className="text-primary tracking-widest text-sm uppercase font-semibold">
              — The Meena Philosophy
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/3] bg-secondary relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.1),transparent_50%)] z-0" />
            
            {/* Abstract visual for Materiality */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full transform group-hover:scale-110 transition-transform duration-1000 ease-out" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-white/10 rounded-full transform group-hover:scale-105 transition-transform duration-1000 ease-out delay-100" />
            
            <div className="absolute bottom-8 left-8 z-20 max-w-sm">
              <h3 className="text-2xl font-heading text-white mb-3">Materiality</h3>
              <p className="text-muted-foreground text-sm font-light">
                Sourcing the rarest stones, resilient alloys, and sustainable timbers. Every surface is an invitation to touch.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[4/3] bg-secondary relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_50%)] z-0" />
            
            {/* Abstract visual for Light */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/20 to-transparent blur-2xl transform group-hover:opacity-70 transition-opacity duration-1000" />
            <div className="absolute top-1/4 right-1/4 w-[1px] h-1/2 bg-primary/50 shadow-[0_0_20px_var(--color-primary)] rotate-45 transform group-hover:h-3/4 transition-all duration-1000" />

            <div className="absolute bottom-8 left-8 z-20 max-w-sm">
              <h3 className="text-2xl font-heading text-white mb-3">Luminance</h3>
              <p className="text-muted-foreground text-sm font-light">
                Choreographing natural light to trace the passage of time across your living spaces.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
