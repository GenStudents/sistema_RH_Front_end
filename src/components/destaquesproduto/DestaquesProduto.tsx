import { ArrowRight, BarChart3, Briefcase, Clock, GitBranch, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Gestao de Vagas",
    description:
      "Crie, publique e gerencie vagas em multiplas plataformas com um unico clique. Acompanhe o status de cada posicao em tempo real com um painel centralizado.",
  },
  {
    icon: GitBranch,
    title: "Pipeline de Recrutamento",
    description:
      "Visualize todo o processo seletivo em um pipeline intuitivo. Mova candidatos entre etapas, adicione notas e colabore com sua equipe sem perder nenhum detalhe.",
  },
  {
    icon: Users,
    title: "Gestao de Talentos",
    description:
      "Acompanhe o desenvolvimento de cada colaborador. Avalie desempenho, defina metas, planeje PDIs e identifique os proximos lideres da sua organizacao.",
  },
  {
    icon: BarChart3,
    title: "Relatorios e Analytics",
    description:
      "Dashboards interativos com KPIs de RH essenciais. Tempo de contratacao, turnover, custo por contratacao e muito mais, tudo em graficos claros e acionaveis.",
  },
  {
    icon: Clock,
    title: "Automacao de Fluxos",
    description:
      "Configure fluxos automaticos para admissao, onboarding, ferias e desligamento. Reduza erros manuais e libere tempo para o que realmente importa: as pessoas.",
  },
  {
    icon: ShieldCheck,
    title: "Conformidade e Seguranca",
    description:
      "Mantenha-se em conformidade com a LGPD e as regulamentacoes trabalhistas. Dados criptografados, controle de acesso granular e auditoria completa.",
  },
]

export function DestaquesProduto() {
  return (
    <section className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#007EB7]">
            Funcionalidades
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Tudo o que voce precisa para gerir seu RH
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-gray-200 bg-card p-6 transition-all duration-300 hover:border-[#007EB7] hover:shadow-lg hover:shadow-[#007EB7]/10"
            >
              {/* Ícone: fundo azul claro por padrão, preenchido de azul no hover */}
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-[#007EB7]/10 text-[#007EB7] transition-colors group-hover:bg-[#007EB7] group-hover:text-white">
                <feature.icon className="size-6" />
              </div>
              
              <h3 className="mb-2 font-[family-name:var(--font-heading)] text-lg font-bold text-slate-900">
                {feature.title}
              </h3>
              
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                {feature.description}
              </p>
              
              {/* Link e seta na cor exata solicitada */}
              <a
                href="#"
                className="inline-flex cursor-pointer items-center gap-1 text-sm font-bold text-[#007EB7] transition-colors hover:text-[#005f8a]"
              >
                Saiba mais <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DestaquesProduto