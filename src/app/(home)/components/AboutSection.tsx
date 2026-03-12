import { Users, Zap, Code } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Sobre o <span className="gradient-text">Vale Tech Talks</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Uma iniciativa comunitária formada por profissionais independentes
            de TI da região do Vale do Sinos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group rounded-2xl border border-border bg-card/50 p-8 hover:border-accent/50 transition-all hover:glow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-6 group-hover:scale-110 transition-transform">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Comunidade</h3>
            <p className="text-muted">
              Unimos a comunidade de computação do Vale do Sinos e regiões
              vizinhas através de eventos gratuitos e acessíveis.
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-card/50 p-8 hover:border-accent/50 transition-all hover:glow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Conhecimento</h3>
            <p className="text-muted">
              Palestras sobre linguagens de programação, frameworks,
              desenvolvimento de carreira e tecnologias emergentes.
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-card/50 p-8 hover:border-accent/50 transition-all hover:glow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 mb-6 group-hover:scale-110 transition-transform">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Networking</h3>
            <p className="text-muted">
              Conecte-se com outros profissionais e estudantes, troque
              experiências e cresça junto com a comunidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
