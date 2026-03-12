import { MapPin, Calendar, Clock } from "lucide-react";

export function LocationSection() {
  return (
    <section id="localizacao" className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Localização</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Nossos eventos acontecem em Novo Hamburgo, na Universidade Feevale.
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.6594174114894!2d-51.121675408960485!3d-29.663850629765037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951943931e5bed2f%3A0xc0d78c5c5ba599b5!2sFeevale%20University%20-%20Campus%20II!5e1!3m2!1sen!2sus!4v1773106623951!5m2!1sen!2sus"
                width="100%"
                height="100%"
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
  );
}
