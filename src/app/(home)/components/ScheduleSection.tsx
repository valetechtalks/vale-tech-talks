import { Coffee, Mic, MessageSquare, Users } from "lucide-react";

const schedule = [
  {
    time: "09:00",
    title: "Credenciamento & Coffee",
    description: "Networking e café da manhã",
    icon: Coffee,
    type: "break",
  },
  {
    time: "09:15",
    title: "Event Sourcing na Prática",
    description: "Como implementar event sourcing em aplicações reais",
    speaker: "Vinícius Almeida",
    icon: Mic,
    type: "talk",
  },
  {
    time: "10:05",
    title: "Kubernetes Operators",
    description: "Automatizando operações complexas no Kubernetes",
    speaker: "Lucas Riboli",
    icon: Mic,
    type: "talk",
  },
  {
    time: "10:55",
    title: "Transição de Carreira em Tech",
    description: "Painel com profissionais que fizeram transição para TI",
    speaker: "Tjeimi Kiewel, Matheus Martini, Jade Oliveira",
    icon: MessageSquare,
    type: "panel",
  },
  {
    time: "12:00",
    title: "Networking & Encerramento",
    description: "Oportunidade para trocar ideias e fazer conexões",
    icon: Users,
    type: "break",
  },
];

export function ScheduleSection() {
  if (schedule.length === 0) return null;

  return (
    <section id="programacao" className="py-24 border-t border-border">
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
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {schedule.map((item, index) => (
                <div key={index} className="relative flex gap-6">
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
                    {"speaker" in item && item.speaker && (
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
    </section>
  );
}
