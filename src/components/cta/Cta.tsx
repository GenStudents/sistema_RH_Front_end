export function Cta() {
  return (
    <section className="bg-[#041020] py-20 md:py-28 relative overflow-hidden">
      {/* Elemento decorativo opcional de fundo para dar um charme extra */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Pronto para transformar seu RH?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/90">
            Agende uma demonstração gratuita e descubra como a RHConnect pode otimizar a gestão de pessoas da sua empresa.
          </p>
          
          <div className="mt-10">
            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center rounded-md bg-[#007EB7] px-8 py-3 text-base font-bold text-[#ffffff] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#007EB7] hover:shadow-xl"
            >
              Solicitar Demo Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;