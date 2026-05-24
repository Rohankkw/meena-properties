import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { PropertyShowcase } from "../components/PropertyShowcase";
import { ArchitecturalCutaway } from "../components/ArchitecturalCutaway";
import { Statistics } from "../components/Statistics";
import { Vision } from "../components/Vision";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <Statistics />
      <PropertyShowcase />
      <ArchitecturalCutaway />
      <Vision />
      <Contact />
      <Footer />
    </main>
  );
}
