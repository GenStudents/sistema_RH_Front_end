import { Target, Eye, Heart } from "lucide-react"
import MembrosEquipe from "../../components/membrosequipe/MembrosEquipe";
import { useState, useEffect } from "react";

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

export default function SobreNos() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      
      <main className="min-h-screen">
        {/* Header com animação */}
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          
          <div className="mx-auto max-w-7xl px-6 relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className={`mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                Sobre nós
              </p>

              <h1 className={`text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl transition-all duration-1000 delay-100 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                RH Tech — Gestão de colaboradores com simplicidade
              </h1>

              <p className={`mt-6 text-lg leading-relaxed text-muted-foreground transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                O RH Tech é um sistema de gestão de colaboradores, com operações
                de CRUD e busca por cargo, pensado para organizar informações e
                apoiar rotinas do dia a dia do RH.
              </p>
            </div>
          </div>
        </section>

        {/* Story section - two columns com animações */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className={`flex flex-col gap-6 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Nossa história
                </h2>

                <p className="leading-relaxed text-muted-foreground hover:text-blue-600 transition-colors">
                  Este projeto foi desenvolvido como um sistema interno para
                  centralizar o cadastro de colaboradores e facilitar tarefas
                  comuns: cadastrar, listar, editar e remover registros.
                </p>

                <p className="leading-relaxed text-muted-foreground hover:text-blue-600 transition-colors">
                  Além do CRUD, o RH Tech permite consultar colaboradores por
                  cargo, ajudando na organização das informações e agilizando
                  buscas dentro da empresa.
                </p>

                <p className="leading-relaxed text-muted-foreground hover:text-blue-600 transition-colors">
                  O foco é unir uma interface limpa e responsiva no front-end
                  com boas práticas no back-end, por meio de uma API REST e
                  integração com banco de dados relacional.
                </p>
              </div>

              <div className={`overflow-hidden rounded-2xl border-2 border-blue-200 shadow-2xl hover:shadow-3xl transition-all duration-500 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
                <img
                  src="/images/about-team.png"
                  alt="Equipe do projeto RH Tech"
                  className="h-auto w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                O que nos guia
              </p>

              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Missão, Visão e Valores
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {values.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex flex-col gap-4 rounded-2xl border-2 border-blue-200 bg-white p-8 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:animate-pulse-glow transition-all">
                    <item.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <MembrosEquipe />
      </main>
    </>
  )
} 