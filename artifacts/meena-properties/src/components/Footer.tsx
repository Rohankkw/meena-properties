import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-heading font-bold tracking-[0.2em] text-white block mb-6">
              MEENA
            </Link>
            <p className="text-muted-foreground max-w-sm font-light leading-relaxed">
              Curating the world's most extraordinary real estate for the discerning few. 
              Architecture beyond imagination.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-6">Explore</h4>
            <ul className="space-y-4">
              {["Residences", "Architecture", "Philosophy", "Journal"].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>Meena Tower, DIFC</li>
              <li>Dubai, United Arab Emirates</li>
              <li className="pt-2">
                <a href="mailto:concierge@meenaproperties.com" className="hover:text-primary transition-colors">
                  concierge@meenaproperties.com
                </a>
              </li>
              <li>+971 4 555 0000</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Meena Properties. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
