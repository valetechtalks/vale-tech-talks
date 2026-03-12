import Image from "next/image";

const sponsors = [
  {
    name: "Universidade Feevale",
    logo: "/images/feevale.svg",
  },
  {
    name: "Diretório Acadêmico da Computação",
    logo: "/images/dac.jpg",
  },
];

export function SponsorsSection() {
  if (sponsors.length === 0) return null;

  return (
    <section id="patrocinadores" className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Patrocinadores</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Empresas e instituições que apoiam nossa comunidade e tornam
            nossos eventos possíveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="group rounded-2xl border border-border bg-card/50 p-8 text-center hover:border-accent/50 transition-all hover:glow m"
            >
              <div className="h-32 flex items-center justify-center mb-4">
                {sponsor.logo ? (
                  <div className="relative h-32 w-full">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-muted group-hover:text-foreground transition-colors">
                    {sponsor.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
