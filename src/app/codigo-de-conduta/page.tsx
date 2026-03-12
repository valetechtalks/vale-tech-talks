import { Code, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Código de Conduta - Vale Tech Talks",
  description:
    "Código de conduta do Vale Tech Talks. Todos os participantes, palestrantes, patrocinadores e voluntários precisam concordar com este código.",
};

export default function CodigoDeConduta() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Code className="h-6 w-6 text-accent" />
              <span className="text-lg font-semibold">Vale Tech Talks</span>
            </Link>
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

      {/* Content */}
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="gradient-text">Código de Conduta</span>
        </h1>

        <p className="text-muted mb-12 text-lg">
          Todos os participantes, palestrantes, patrocinadores e voluntários da
          conferência precisam concordar com este código de conduta. Os
          organizadores/responsáveis vão reforçar que este código seja seguido
          durante eventos e em projetos de código aberto. Esperamos a cooperação
          de todos os participantes para ajudar a garantir um ambiente seguro
          para todos.
        </p>

        <div className="space-y-12">
          {/* Quick Version */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              Versão Rápida{" "}
              <span className="text-muted font-normal text-base">(TL;DR)</span>
            </h2>
            <div className="rounded-2xl border border-border bg-card/50 p-8 space-y-4">
              <p className="text-foreground">
                O Vale Tech Talks e todas as conferências filiadas são dedicadas
                a fornecer uma experiência de conferência livre de assédio para
                todos, independentemente do sexo, identidade de gênero e
                expressão, idade, orientação sexual, deficiência, aparência
                física, tamanho corporal, cor de pele, etnia, religião (ou falta
                dela) ou escolhas de tecnologias.
              </p>
              <p className="text-muted">
                Nós não toleramos o assédio aos participantes de eventos e
                membros da comunidade sob qualquer forma.
              </p>
              <p className="text-muted">
                Linguagem e imagens sexuais não são apropriadas em nenhum local
                dos eventos realizados, incluindo palestras, workshops, festas,
                Twitter e outras mídias on-line.
              </p>
              <p className="text-muted">
                Os participantes que violarem estas regras poderão ser punidos
                ou expulsos dos eventos sem restituição, a critério dos
                organizadores da conferência. A punição pode ir desde a expulsão
                do participante da conferência atual, até ser banido da próxima
                edição dela, ou até mesmo dos demais eventos filiados.
              </p>
            </div>
          </section>

          {/* Detailed Version */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Versão Detalhada</h2>
            <div className="space-y-6 text-muted">
              <p>
                Assédio inclui comentários verbais ofensivos relacionados ao
                gênero, identidade de gênero e expressão, idade, orientação
                sexual, deficiência, aparência física, tamanho corporal, cor de
                pele, etnia, religião, escolhas de tecnologias, imagens sexuais
                em espaços públicos, intimidação deliberada, perseguição,
                stalking, fotografias ou filmagens constrangedoras, interrupção
                contínua das apresentações ou outros eventos, contato físico
                inadequado e atenção sexual indesejada.
              </p>
              <p>
                Os participantes que receberem uma solicitação para interromper
                qualquer comportamento de assédio devem fazê-lo imediatamente.
              </p>
              <p>
                Os patrocinadores também estão sujeitos às políticas
                antiassédio. Particularmente, os patrocinadores não devem usar
                imagens, atividades ou outro material de cunho sexual. As
                equipes de estandes e tendas (incluindo voluntários), palestrantes
                ou participantes, não devem utilizar roupas, uniformes ou trajes
                sexualizados ou de outra forma criar um ambiente sexualizado.
              </p>
              <p>
                Se um participante se envolve em comportamento de assédio, os
                organizadores da conferência podem tomar todas as medidas que
                considerem adequadas, incluindo avisar o ofensor ou expulsá-lo
                da conferência sem nenhum reembolso.
              </p>
              <p>
                Caso seja assediado, perceba que alguém está sendo assediado ou
                tenha alguma dúvida, entre em contato com um membro da equipe da
                conferência imediatamente. Não tome atitudes por conta própria e
                denuncie a situação de forma discreta, a fim de mantermos a
                segurança de todos, a ordem, e o sigilo.
              </p>
              <p>
                A equipe da conferência estará disposta a auxiliar os
                participantes a contatarem a segurança do local, assim como as
                devidas aplicações da lei local, fornecer escoltas ou ajudar
                aqueles que sofrerem assédio para que se sintam seguros pelo
                decorrer da conferência. Nós valorizamos a sua participação e
                queremos que aproveite o máximo possível, sinta-se a vontade e
                em segurança, e acima de tudo, respeitado.
              </p>
              <p>
                Esperamos que os participantes sigam estas regras em salas de
                apresentação e workshops de cada conferência, além de eventos
                sociais relacionados, como after-parties, happy-hours ou
                jantares.
              </p>
            </div>
          </section>
        </div>
      </main>

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
