import { ExternalLink } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-border bg-gradient-to-br from-card via-card to-accent/5 p-12 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Faça parte da comunidade
            </h2>
            <p className="text-muted max-w-xl mx-auto mb-8">
              Junte-se a mais de 1.050 profissionais e estudantes de TI do
              Vale do Sinos. Participe dos nossos eventos e cresça junto com a
              comunidade.
            </p>
            <a
              href="https://www.meetup.com/valetechtalks/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-medium text-white hover:bg-accent/90 transition-all hover:scale-105"
            >
              Participar do Meetup
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
