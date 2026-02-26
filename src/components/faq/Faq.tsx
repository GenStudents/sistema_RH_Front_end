import { ChevronDown } from "lucide-react"; // Importando a setinha do lucide-react
import { useState } from "react";

const faqs = [
  {
    question: "Qual o melhor plano para minha empresa?",
    answer:
      "Depende do tamanho da sua equipe e das funcionalidades que voce precisa. O plano Freelancer e ideal para equipes pequenas, o Startup para empresas em crescimento, e o Enterprise para organizacoes que precisam de suporte dedicado e infraestrutura personalizada.",
  },
  {
    question: "Como funciona o periodo de teste gratuito?",
    answer:
      "Oferecemos 14 dias de teste gratuito com acesso completo a todas as funcionalidades do plano escolhido. Nao e necessario cartao de credito para comecar. Ao final do periodo, voce pode escolher assinar ou cancelar sem custos.",
  },
  {
    question: "A RHConnect esta em conformidade com a LGPD?",
    answer:
      "Sim, a RHConnect foi desenvolvida seguindo todas as diretrizes da Lei Geral de Protecao de Dados (LGPD). Todos os dados sao criptografados, oferecemos controle de acesso granular e realizamos auditorias regulares de seguranca.",
  },
  {
    question: "Posso migrar meus dados de outro sistema?",
    answer:
      "Sim! Nossa equipe de suporte auxilia na migracao de dados de outros sistemas de RH. Oferecemos importacao via CSV, API e integracoes nativas com os principais softwares do mercado.",
  },
  {
    question: "Como funciona o suporte tecnico?",
    answer:
      "O suporte varia conforme o plano. No Freelancer, o tempo de resposta e de ate 48 horas. No Startup, ate 24 horas. No Enterprise, voce conta com suporte dedicado com resposta em ate 1 hora, incluindo um gerente de conta exclusivo.",
  },
  {
    question: "E possivel personalizar o sistema para minha empresa?",
    answer:
      "Sim, especialmente no plano Enterprise. Voce pode personalizar workflows, relatorios, campos de formularios e integracoes. Nossa equipe trabalha junto com voce para adaptar a plataforma as necessidades especificas da sua organizacao.",
  },
];

export function Faq() {
// Informamos ao TypeScript que o estado pode ser um número ou nulo
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Tipamos o parâmetro index explicitamente como number
  const toggleFaq = (index: number) => {
    // Se clicar na que já está aberta, ela fecha (null). Se clicar em outra, abre a nova.
    setOpenIndex(openIndex === index ? null : index);
  };
  

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center">
          Perguntas frequentes
        </h2>

        <div className="w-full divide-y divide-gray-200 border-b border-t border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full cursor-pointer items-center justify-between text-left text-base font-semibold text-slate-900 transition-colors hover:text-[#007EB7]"
                >
                  {faq.question}
                  <ChevronDown
                    className={`ml-4 size-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#007EB7]" : "text-gray-400"
                    }`}
                  />
                </button>
                
                {/* Animação com Grid - Expande suavemente */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] pt-4 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-700 leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;