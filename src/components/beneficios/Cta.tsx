import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-[#001633] px-6 py-16 text-center md:px-16">

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Pronto para transformar seu RH?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-300 text-lg leading-relaxed">
            Agende uma demonstração gratuita e descubra como a RHConnect pode
            otimizar a gestão de pessoas da sua empresa.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-sky-600 px-8 py-3 font-semibold text-white transition hover:bg-sky-500">
            Solicitar Demo Gratuita
            <ArrowRight size={18} />
          </button>

        </div>
      </div>
    </section>
  );
}