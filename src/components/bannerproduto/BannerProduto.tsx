export function BannerProduto() {
  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-24 md:pb-24 md:pt-32">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className=" text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Transforme a gestão de pessoas da sua empresa
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A RHConnect centraliza recrutamento, gestão de talentos e analytics em uma única plataforma intuitiva. Simplifique processos e foque no que realmente importa: as pessoas.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">



        </div>
        </div>

        {/* Dashboard Preview Image */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-xl border-border bg-card shadow-2xl shadow-primary/10">
            <img
              src="/images/dashboard-preview.jpg"
              alt="Preview do painel da RHConnect mostrando gestao de RH"
              width={1200}
              height={100}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerProduto