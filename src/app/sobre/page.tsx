import type { Metadata } from "next"
import Image from "next/image"
//import { Navbar } from "@/components/navbar"
//import { Footer } from "@/components/footer"
//import { CtaSection } from "@/components/cta-section"
import { Target, Eye, Heart } from "lucide-react"
import { TeamSection } from "@/components/teamMembers"

export const metadata: Metadata = {
  title: "Sobre Nós - RH Tech",
  description:
    "Conheça o RH Tech: sistema de gestão de colaboradores com cadastro, atualização e busca por cargo.",
}

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Facilitar a gestão interna de colaboradores com um cadastro centralizado e processos simples, rápidos e confiáveis.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser uma solução objetiva para apoiar rotinas de RH, com base sólida em API REST e integração com banco de dados.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Clareza, consistência e organização. Compromisso com qualidade nas entregas e foco na experiência de quem usa o sistema.",
  },
]

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-background pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                Sobre nós
              </p>

              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground font-mono md:text-5xl">
                RH Tech — Gestão de colaboradores com simplicidade
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                O RH Tech é um sistema de gestão de colaboradores, com operações
                de CRUD e busca por cargo, pensado para organizar informações e
                apoiar rotinas do dia a dia do RH.
              </p>
            </div>
          </div>
        </section>

        {/* Story section - two columns */}
        <section className="bg-card py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold tracking-tight text-foreground font-mono md:text-4xl">
                  Nossa história
                </h2>

                <p className="leading-relaxed text-muted-foreground">
                  Este projeto foi desenvolvido como um sistema interno para
                  centralizar o cadastro de colaboradores e facilitar tarefas
                  comuns: cadastrar, listar, editar e remover registros.
                </p>

                <p className="leading-relaxed text-muted-foreground">
                  Além do CRUD, o RH Tech permite consultar colaboradores por
                  cargo, ajudando na organização das informações e agilizando
                  buscas dentro da empresa.
                </p>

                <p className="leading-relaxed text-muted-foreground">
                  O foco é unir uma interface limpa e responsiva no front-end
                  com boas práticas no back-end, por meio de uma API REST e
                  integração com banco de dados relacional.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
                <Image
                  src="/images/about-team.jpg"
                  alt="Equipe do projeto RH Tech"
                  width={640}
                  height={440}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 640px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                O que nos guia
              </p>

              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground font-mono md:text-4xl">
                Missão, Visão e Valores
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {values.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TeamSection />
        {/* <CtaSection /> */}
      </main>
      {/* <Footer /> */}  </>
  )
} 