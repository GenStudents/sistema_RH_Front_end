import CardBeneficio from "./CardBeneficio"
import Cta from "./Cta"
import MetricItem from "./MetricItem"
import { beneficios, metricas } from "./beneficiosData"

function Beneficios() {
    return (
        <>
            <section className="w-full bg-gray-50 py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">

                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            O que oferecemos para sua empresa
                        </h2>
                        <p className="text-gray-600">
                            Soluções completas para otimizar a gestão de pessoas, melhorar processos internos e fortalecer a cultura organizacional.
                        </p>
                    </div>

                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {beneficios.map((item, index) => (
                            <CardBeneficio
                                key={index}
                                icon={item.icon}
                                titulo={item.titulo}
                                descricao={item.descricao}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#17457A] py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                        {metricas.map((item, index) => (
                            <MetricItem
                                key={index}
                                numero={item.numero}
                                texto={item.texto}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Cta />
        </>
    )
}

export default Beneficios