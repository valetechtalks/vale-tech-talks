import { ExternalLink } from "lucide-react";

const stats = [
  { label: "Membros", value: "1.050+" },
  { label: "Eventos", value: "12+" },
  { label: "Avaliação", value: "4.9/5" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <a
          href="https://forms.gle/E5jitMFcPAAm8Xhv6"
          target="_blank"
          rel="noopener noreferrer"
          className="shimmer-border inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 transition-all hover:scale-105"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          <span className="text-sm text-muted">Call for Papers aberto para o próximo evento</span>
        </a>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
          <span className="gradient-text">Vale Tech Talks</span>
        </h1>

        <p className="mx-auto max-w-2xl text-xl text-muted mb-8">
          Comunidade de profissionais e estudantes de TI do Vale do Rio dos
          Sinos. Eventos gratuitos sobre programação, frameworks, carreira e
          tecnologias emergentes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://www.meetup.com/valetechtalks/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-medium text-white hover:bg-accent/90 transition-all hover:scale-105"
          >
            Inscreva-se no Meetup
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-base font-medium text-foreground hover:bg-card transition-colors"
          >
            Saiba mais
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted" />
        </div>
      </div>
    </section>
  );
}
