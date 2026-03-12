import { Code, ExternalLink } from "lucide-react";

const navigation = [
  { name: "Sobre", href: "#sobre" },
  { name: "Local", href: "#localizacao" },
  // { name: "Speakers", href: "#speakers" },
  // { name: "Programação", href: "#programacao" },
  { name: "Fotos", href: "#fotos" },
  { name: "Patrocinadores", href: "#patrocinadores" },
  { name: "Código de Conduta", href: "/codigo-de-conduta" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Code className="h-6 w-6 text-accent" />
            <span className="text-lg font-semibold">Vale Tech Talks</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <a
            href="https://www.meetup.com/valetechtalks/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/90 transition-colors"
          >
            Participar
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
