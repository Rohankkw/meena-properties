import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-heading font-bold tracking-[0.2em] text-white">
          MEENA
        </Link>

        <div className="hidden md:flex items-center space-x-12">
          {["Residences", "Architecture", "Philosophy", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="px-6 py-3 bg-primary/10 border border-primary/30 text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Private Viewing
          </button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-white/5 py-6 px-6 flex flex-col space-y-6 md:hidden">
          {["Residences", "Architecture", "Philosophy", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
