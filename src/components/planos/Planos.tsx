import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Freelancer",
    description: "O essencial para fornecer seu melhor trabalho para clientes.",
    monthlyPrice: 19,
    annualPrice: 15,
    cta: "Comprar plano",
    highlighted: false,
    features: [
      "5 produtos",
      "Até 1.000 assinantes",
      "Analytics básico",
      "Suporte em 48 horas",
    ],
  },
  {
    name: "Startup",
    description: "Um plano que escala com seu negócio em rápido crescimento.",
    monthlyPrice: 29,
    annualPrice: 23,
    cta: "Comprar plano",
    highlighted: false,
    features: [
      "25 produtos",
      "Até 10.000 assinantes",
      "Analytics avançado",
      "Suporte em 24 horas",
      "Automações de marketing",
    ],
  },
  {
    name: "Enterprise",
    description: "Suporte dedicado e infraestrutura para sua empresa.",
    monthlyPrice: null,
    annualPrice: null,
    cta: "Solicite uma demonstração",
    highlighted: true,
    features: [
      "Produtos ilimitados",
      " Assinantes ilimitados ",
      "Analytics avançado",
      "Suporte dedicado em 1 hora",
      "Automações de marketing",
      "Ferramentas de relatórios personalizados",
    ],
  },
];

export function Planos() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#007EB7]">
            Preços
          </p>
          <h2 className="mt-2 font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Preços que crescem com você 
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Escolha um plano acessível repleto dos melhores recursos para engajar seu público, criar fidelidade e impulsionar vendas.
          </p>
        </div>

        {/* Toggle Mensal/Anual */}
        <div className="mb-12 flex items-center justify-center gap-3">
          <button
            onClick={() => setIsAnnual(false)}
            className={`cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
              !isAnnual
                ? "bg-[#007EB7] text-white shadow-md shadow-[#007EB7]/20"
                : "text-gray-500 hover:bg-[#007EB7]/10 hover:text-[#007EB7]"
            }`}
          >
            Mensal
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
              isAnnual
                ? "bg-[#007EB7] text-white shadow-md shadow-[#007EB7]/20"
                : "text-gray-500 hover:bg-[#007EB7]/10 hover:text-[#007EB7]"
            }`}
          >
            Anual
          </button>
        </div>

        {/* Plans */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "border-transparent bg-[#007EB7] text-white shadow-xl scale-105" // Destaque: Fundo azul e levemente maior
                  : "border-gray-200 bg-white hover:border-[#007EB7] hover:shadow-lg hover:shadow-[#007EB7]/10" // Normal: Borda e sombra azul no hover
              }`}
            >
              <div className="mb-6">
                <h3
                  className={`font-(family-name:--font-heading) text-xl font-bold ${
                    plan.highlighted ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    plan.highlighted ? "text-white/80" : "text-gray-700"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                {plan.monthlyPrice !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`font-(family-name:--font-heading) text-4xl font-extrabold ${
                        plan.highlighted ? "text-white" : "text-slate-900"
                      }`}
                    >
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-white/80" : "text-gray-500"
                      }`}
                    >
                      /mês
                    </span>
                  </div>
                ) : (
                  <span
                    className={`font-(family-name:--font-heading) text-4xl font-extrabold ${
                      plan.highlighted ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Sob consulta
                  </span>
                )}
              </div>

              <button
                type="button"
                className={`mb-8 w-full cursor-pointer px-8 py-3 rounded-md font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-white text-[#007EB7] hover:bg-gray-100" // Botão branco com texto azul para destacar no fundo azul
                    : "bg-[#007EB7] text-white hover:bg-[#005f8a]" // Botão azul normal
                }`}
              >
                {plan.cta}
              </button>

              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`mt-0.5 size-4 shrink-0 ${
                        plan.highlighted ? "text-white" : "text-[#007EB7]" // Ícone do check branco no card azul, azul nos normais
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-white/90" : "text-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Planos;