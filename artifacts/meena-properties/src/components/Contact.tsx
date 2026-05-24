import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

export function Contact() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [btnHover, setBtnHover] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
  };

  return (
    <section id="contact" className="py-32 bg-secondary relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto border border-white/10 bg-background/50 backdrop-blur-md p-12 md:p-20 relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-light text-white mb-6">
              Begin Your Journey
            </h2>
            <p className="text-muted-foreground mb-10 text-lg font-light">
              Connect with our private client advisory team to schedule a discreet viewing of our current portfolio.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs tracking-widest text-muted-foreground uppercase">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs tracking-widest text-muted-foreground uppercase">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs tracking-widest text-muted-foreground uppercase">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs tracking-widest text-muted-foreground uppercase">Inquiry</label>
                <textarea 
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20 min-h-[100px] resize-none"
                  placeholder="How can we assist you?"
                />
              </div>

              <div className="pt-6">
                <button
                  ref={buttonRef}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setBtnHover(true)}
                  onMouseLeave={() => {
                    setBtnHover(false);
                    setMousePos({ x: 0, y: 0 });
                  }}
                  className="relative px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-semibold flex items-center gap-4 transition-colors hover:bg-white"
                  style={{
                    transform: btnHover ? `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)` : "translate(0px, 0px)",
                    transition: btnHover ? "none" : "transform 0.3s ease",
                  }}
                >
                  <span className="relative z-10">Submit Inquiry</span>
                  <ArrowRight className="w-4 h-4 relative z-10" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
