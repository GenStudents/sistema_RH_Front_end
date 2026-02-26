import { ArrowRight, Check } from "lucide-react"
import HeroImg from '../../assets/Hero.png'

function Home() {
    return (
        <section className="bg-gray-50">

            <div className=" container  mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative ">

                {/* Brand Info */}
                <div className="flex flex-col justify-center py-14 md:py-0">
                    <div className="text-center md:text-left space-y-6">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-sky-50 px-4 py-1.5">

                            <span className="text-1xs text-gray-600 font-medium text-muted-foreground">
                                Plataforma #1 em Gestao de RH
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal">
                            Transforme a forma como sua empresa gerencia{" "}
                            <span className="text-sky-700">RH</span>
                        </h1>

                        <p className="text-gray-600 xl:max-w-[500px]">
                            Automatize processos, gerencie talentos e tome decisões estratégicas
                            com dados em tempo real. Tudo em uma única plataforma.
                        </p>
                        {/* buttons */}
                        <div className="flex justify-center gap-8 md:justify-start">
                            <button className="bg-sky-950 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center gap-2">

                                Solicitar Demo
                                <ArrowRight size={15} />
                            </button>
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300">
                                Conhecer Produto
                            </button>
                        </div>
                        {/* */}
                        <div className="flex justify-center gap-14 md:justify-start">
                            <span className="text-gray-600 text-sm ">
                                <Check size={14} className="inline mr-1 text-sky-500" />
                                Sem cartão de crédito
                            </span>
                            <span className="text-gray-600 text-sm ">
                                <Check size={14} className="inline mr-1 text-sky-500" />
                                14 dias de teste grátis
                            </span>
                        </div>

                    </div>
                </div>

                {/* Hero Image */}
<div className="flex items-center justify-center">
  <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-xl">
    <img
      src={HeroImg}
      alt="Imagem de destaque do sistema de RH"
      className="w-full max-w-[600px] h-auto object-cover"
    />
  </div>
</div>
            </div>
        </section>
    );
}

export default Home;