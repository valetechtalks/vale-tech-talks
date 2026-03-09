"use client";

import {
  MapPin,
  Calendar,
  Users,
  Code,
  Zap,
  Clock,
  Coffee,
  Mic,
  MessageSquare,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { PhotoStack } from "./components/PhotoStack";

const navigation = [
  { name: "Sobre", href: "#about" },
  { name: "Local", href: "#location" },
  // { name: "Speakers", href: "#speakers" },
  // { name: "Programação", href: "#schedule" },
  { name: "Fotos", href: "#photos" },
  { name: "Patrocinadores", href: "#sponsors" },
];

const speakers = [];
const schedule = [];

// const speakers = [
//   {
//     name: "Vinícius Almeida",
//     role: "Software Engineer",
//     specialty: "Backend & Event Sourcing",
//     image: "https://api.dicebear.com/7.x/avataaars/svg?seed=vinicius&backgroundColor=6366f1",
//     social: {
//       linkedin: "#",
//       github: "#",
//       twitter: "#",
//     },
//   },
//   {
//     name: "Lucas Riboli",
//     role: "Cloud Engineer",
//     specialty: "Kubernetes & DevOps",
//     image: "https://api.dicebear.com/7.x/avataaars/svg?seed=lucas&backgroundColor=8b5cf6",
//     social: {
//       linkedin: "#",
//       github: "#",
//       twitter: "#",
//     },
//   },
//   {
//     name: "Tjeimi Kiewel",
//     role: "UX Designer",
//     specialty: "Product Design & Research",
//     image: "https://api.dicebear.com/7.x/avataaars/svg?seed=tjeimi&backgroundColor=ec4899",
//     social: {
//       linkedin: "#",
//       github: "#",
//       twitter: "#",
//     },
//   },
// ];

// const schedule = [
//   {
//     time: "09:00",
//     title: "Credenciamento & Coffee",
//     description: "Networking e café da manhã",
//     icon: Coffee,
//     type: "break",
//   },
//   {
//     time: "09:15",
//     title: "Event Sourcing na Prática",
//     description: "Como implementar event sourcing em aplicações reais",
//     speaker: "Vinícius Almeida",
//     icon: Mic,
//     type: "talk",
//   },
//   {
//     time: "10:05",
//     title: "Kubernetes Operators",
//     description: "Automatizando operações complexas no Kubernetes",
//     speaker: "Lucas Riboli",
//     icon: Mic,
//     type: "talk",
//   },
//   {
//     time: "10:55",
//     title: "Transição de Carreira em Tech",
//     description: "Painel com profissionais que fizeram transição para TI",
//     speaker: "Tjeimi Kiewel, Matheus Martini, Jade Oliveira",
//     icon: MessageSquare,
//     type: "panel",
//   },
//   {
//     time: "12:00",
//     title: "Networking & Encerramento",
//     description: "Oportunidade para trocar ideias e fazer conexões",
//     icon: Users,
//     type: "break",
//   },
// ];

const sponsors = [
  {
    name: "Universidade Feevale",
    logo: "/images/feevale.svg",
  },
  {
    name: "Diretório Acadêmico da Computação",
    logo: "/images/dac.jpg"
  },
];

const stats = [
  { label: "Membros", value: "1.050+" },
  { label: "Eventos", value: "12+" },
  { label: "Avaliação", value: "4.9/5" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-accent" />
              <span className="text-lg font-semibold">Vale Tech Talks</span>
            </div>
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-sm text-muted">Próximo evento em breve</span>
          </div>

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
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-base font-medium text-foreground hover:bg-card transition-colors"
            >
              Saiba mais
            </a>
          </div>

          {/* Stats */}
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

      {/* About Section */}
      <section id="about" className="py-24 border-t border-border">
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

      {/* Location Section */}
      <section id="location" className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Localização</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Nossos eventos acontecem em Novo Hamburgo, no coração do Vale do
              Sinos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Universidade Feevale
                  </h3>
                  <p className="text-muted">
                    RS-239, 2755 - Vila Nova
                    <br />
                    Novo Hamburgo, RS
                    <br />
                    Salão de Exposições - Prédio Arenito
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Eventos Periódicos
                  </h3>
                  <p className="text-muted">
                    Realizamos meetups regularmente, geralmente aos sábados pela
                    manhã. Fique de olho no nosso Meetup para as próximas datas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Entrada Gratuita</h3>
                  <p className="text-muted">
                    Todos os nossos eventos são gratuitos e abertos à comunidade.
                    Basta confirmar presença pelo Meetup.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-border glow">
              <div className="aspect-video bg-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.7844607925855!2d-51.1287!3d-29.6783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951943c0c4d0f7b7%3A0x5d0f0c0f0c0f0c0f!2sUniversidade%20Feevale!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa da localização"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      {speakers.length > 0 && (
        <section id="speakers" className="py-24 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="gradient-text">Speakers</span>
              </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Profissionais experientes compartilhando conhecimento e
              experiências com a comunidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {speakers.map((speaker) => (
              <div
                key={speaker.name}
                className="group relative rounded-2xl border border-border bg-card/50 p-8 text-center hover:border-accent/50 transition-all hover:glow"
              >
                <div className="relative mx-auto w-32 h-32 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="relative w-32 h-32 rounded-full bg-card border-2 border-border group-hover:border-accent/50 transition-colors"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{speaker.name}</h3>
                <p className="text-accent text-sm mb-2">{speaker.role}</p>
                <p className="text-muted text-sm mb-6">{speaker.specialty}</p>
                <div className="flex items-center justify-center gap-4">
                  <a
                    href={speaker.social.linkedin}
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={speaker.social.github}
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={speaker.social.twitter}
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>)}

      {/* Schedule Section */}
      {schedule.length > 0 && (
        <section id="schedule" className="py-24 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="gradient-text">Programação</span>
              </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Confira a agenda do próximo evento. Horários sujeitos a alteração.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-8">
                {/* @ts-ignore */}
                {schedule.map((item, index) => (
                  <div key={index} className="relative flex gap-6">
                    {/* Timeline dot */}
                    <div
                      className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${
                        item.type === "talk"
                          ? "bg-accent/10 text-accent"
                          : item.type === "panel"
                          ? "bg-purple-500/10 text-purple-400"
                          : "bg-card text-muted"
                      } border border-border`}
                    >
                      <item.icon className="h-6 w-6" />
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 rounded-xl border border-border p-6 ${
                        item.type === "break" ? "bg-card/30" : "bg-card/50"
                      } hover:border-accent/30 transition-colors`}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-sm font-mono text-accent">
                          {item.time}
                        </span>
                        {item.type !== "break" && (
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              item.type === "talk"
                                ? "bg-accent/10 text-accent"
                                : "bg-purple-500/10 text-purple-400"
                            }`}
                          >
                            {item.type === "talk" ? "Palestra" : "Painel"}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted text-sm mb-2">
                        {item.description}
                      </p>
                      {item.speaker && (
                        <p className="text-sm text-foreground/70">
                          <span className="text-muted">por</span> {item.speaker}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>)}

      {/* Sponsors Section */}
      {sponsors.length > 0 && (
        <section id="sponsors" className="py-24 border-t border-border">
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
                className="group rounded-2xl border border-border bg-card/50 p-8 text-center hover:border-accent/50 transition-all hover:glow"
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  {sponsor.logo ? (
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-16 max-w-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-muted group-hover:text-foreground transition-colors">
                      {sponsor.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-medium text-muted group-hover:text-foreground transition-colors">
                  {sponsor.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted mb-6">
              Quer patrocinar o Vale Tech Talks?
            </p>
            <a
              href="mailto:contato@valetechtalks.com"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-base font-medium text-foreground hover:bg-card hover:border-accent/50 transition-all"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </section>)}

      {/* Photos Section */}
      <section id="photos" className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Fotos</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Registros dos nossos eventos. Clique nas fotos para navegar pela
              galeria.
            </p>
          </div>

          <div className="flex justify-center">
            <PhotoStack />
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-accent" />
              <span className="text-lg font-semibold">Vale Tech Talks</span>
            </div>

            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} Vale Tech Talks. Feito com{" "}
              <span className="text-accent">&hearts;</span> pela comunidade.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
