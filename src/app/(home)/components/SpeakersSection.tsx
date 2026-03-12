import { Linkedin, Github, Twitter } from "lucide-react";

const speakers = [
  {
    name: "Vinícius Almeida",
    role: "Software Engineer",
    specialty: "Backend & Event Sourcing",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=vinicius&backgroundColor=6366f1",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Lucas Riboli",
    role: "Cloud Engineer",
    specialty: "Kubernetes & DevOps",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=lucas&backgroundColor=8b5cf6",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Tjeimi Kiewel",
    role: "UX Designer",
    specialty: "Product Design & Research",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=tjeimi&backgroundColor=ec4899",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
];

export function SpeakersSection() {
  if (speakers.length === 0) return null;

  return (
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
    </section>
  );
}
