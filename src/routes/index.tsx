import { createFileRoute } from "@tanstack/react-router";
import { Heart, Sparkles, Smile } from "lucide-react";
import { IMG } from "@/lib/images";
import { BOOKING_URL } from "@/lib/site";
import { Header } from "@/components/site/Header";
import { Reviews } from "@/components/site/Reviews";
import { FinalCta, Footer, WhatsAppFloat } from "@/components/site/Footer";
import { Blob, Bow, Comb, Drop, Eye, Reveal, Scissors, Squiggle, Star, Sun, Wave } from "@/components/site/Decor";

const TITLE = "Tesourinha Kids Hair | Salão Infantil em Camboriú";
const DESC = "Um espaço infantil cheio de carinho, diversão e cuidado. Conheça a Tesourinha Kids Hair em Camboriú e agende o horário do seu pequeno.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
  }),
  component: Index,
});

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cream">
      <Sun className="absolute -left-20 -top-20 w-56 md:-left-24 md:-top-24 md:w-80" />
      <Star className="absolute right-[12%] top-12 w-8 animate-wiggle" color="var(--pink)" />
      <Squiggle className="absolute right-[6%] top-[40%] hidden w-20 md:block" color="var(--mint)" />
      <Blob className="absolute left-[8%] top-[55%] hidden w-16 md:block" color="var(--lime)" />
      <Star className="absolute left-[30%] top-10 w-5" color="var(--sky)" />
      <div className="relative mx-auto grid max-w-6xl items-end gap-6 px-6 pt-12 md:grid-cols-[1.2fr_1fr] md:pt-20">
        <div className="relative z-10 pb-2 text-center md:pb-24 md:text-left">
          <p className="mb-4 inline-block rounded-full bg-lime px-4 py-1 text-sm font-extrabold uppercase tracking-wider text-brand">Salão infantil · Camboriú</p>
          <h1 className="text-[2.6rem] font-bold leading-[0.95] sm:text-6xl lg:text-7xl">
            <span className="text-brand">Pequenos cortes,</span><br />
            <span className="text-pink">grandes momentos!</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-muted-foreground md:mx-0">
            Um espaço feito para os pequenos viverem uma experiência cheia de diversão, carinho e cuidado.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-pop bg-pink text-primary-foreground">AGENDAR HORÁRIO</a>
            <a href="#espaco" className="btn-pop bg-card text-ink">CONHEÇA NOSSO ESPAÇO</a>
          </div>
        </div>
        <div className="relative mx-auto mt-2 w-36 sm:w-48 md:mt-0 md:w-80">
          <Scissors className="absolute -left-8 top-8 w-9 animate-wiggle md:-left-10 md:top-10 md:w-12" />
          <Comb className="absolute -right-8 top-16 w-10 rotate-12 md:top-24 md:w-14" />
          <Star className="absolute -right-4 top-0 w-7" color="var(--orange)" />
          <img src={IMG.mascotHands} alt="Mascote da Tesourinha, um menino com cabelo azul em formato de tesoura" className="relative z-10 animate-float" fetchPriority="high" />
          <div className="absolute -bottom-2 left-1/2 h-6 w-2/3 -translate-x-1/2 rounded-[50%] bg-mint-deep/25" />
        </div>
      </div>
      <Wave fill="var(--mint)" variant="hills" className="-mt-6 relative" />
    </section>
  );
}

function About() {
  return (
    <section className="relative overflow-hidden bg-mint">
      <Eye className="pointer-events-none absolute left-3 top-2 z-0 w-10 md:left-[5%] md:top-10 md:w-20" />
      <Eye className="pointer-events-none absolute right-3 top-2 z-0 w-9 -scale-x-100 md:right-[5%] md:top-24 md:w-16" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-10 pt-14 md:pt-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="px-6 text-4xl font-bold text-ink md:px-0 md:text-6xl">Muito prazer, somos a Tesourinha!</h2>
        </Reveal>
        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <Reveal className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-2 rounded-[50%] md:-inset-4 border-[3px] border-dashed border-cream/90" />
            <div className="aspect-[1/1.08] overflow-hidden rounded-[50%] border-[6px] border-cream shadow-soft">
              <img src={IMG.interior} alt="Cadeiras infantis em formato de disco voador e quadriciclo no salão Tesourinha" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <Star className="absolute right-0 top-2 w-8 md:-right-2 md:top-4 md:w-10" color="var(--sun)" />
            <Blob className="absolute -bottom-2 left-0 w-16 md:-left-4 md:w-20" color="var(--pink)" />
          </Reveal>
          <Reveal delay={150} className="relative">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand">Tudo começa com um sorriso…</p>
            <p className="mt-4 text-xl leading-relaxed text-ink">
              Mais do que cortar cabelos, queremos transformar cada visita em um momento especial. Aqui, cada criança tem seu próprio tempo, seu jeito de ser e merece receber todo o carinho e cuidado.
            </p>
            <div className="mt-6 flex items-center gap-4"><Scissors className="w-12" color="var(--ink)" /><Squiggle className="w-20" color="var(--cream)" /><Star className="w-8" color="var(--pink)" /></div>
          </Reveal>
        </div>
      </div>
      <Wave fill="var(--cream)" variant="soft" />
    </section>
  );
}

function Experience() {
  const items = [
    { t: "Diversão", d: "Um espaço pensado para transformar o corte em um momento especial.", Icon: Sparkles, c: "bg-sun", pos: "md:translate-y-0" },
    { t: "Carinho", d: "Atendimento atencioso, respeitando o ritmo e a individualidade de cada criança.", Icon: Heart, c: "bg-pink-soft", pos: "md:translate-y-12" },
    { t: "Acolhimento", d: "Um ambiente onde cada pequeno pode se sentir confortável e respeitado.", Icon: Smile, c: "bg-lime", pos: "md:-translate-y-4" },
  ];
  return (
    <section className="relative overflow-hidden bg-cream pb-6 pt-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1fr]">
        <Reveal>
          <h2 className="text-4xl font-bold leading-tight text-brand md:text-6xl">Muito mais que um corte de cabelo!</h2>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            No Tesourinha, cada detalhe é pensado para que os pequenos se sintam à vontade. Criamos um ambiente acolhedor, divertido e preparado para tornar o momento do corte uma experiência positiva.
          </p>
          <Squiggle className="mt-6 w-24" color="var(--pink)" />
        </Reveal>
        <div className="relative flex min-h-56 items-center justify-center md:min-h-64 md:items-end">
          <div className="absolute bottom-6 h-60 w-60 rounded-full bg-pink-soft md:h-72 md:w-72" />
          <Scissors className="absolute left-4 top-2 w-12 animate-wiggle md:left-6 md:top-4 md:w-14" color="var(--mint-deep)" />
          <Star className="absolute right-10 top-0 w-10" color="var(--orange)" />
          <Blob className="absolute right-4 top-24 w-14" color="var(--mint)" />
          <div className="relative flex h-56 w-56 items-center justify-center md:h-72 md:w-72"><Comb className="absolute left-6 top-16 w-24 -rotate-12 animate-float" /><Bow className="absolute bottom-14 right-6 w-24 rotate-6" /><Star className="absolute bottom-20 left-14 w-10" color="var(--brand)" /></div>
        </div>
      </div>
      <ul className="mx-auto mt-16 grid max-w-6xl gap-10 px-6 pb-16 md:grid-cols-3">
        {items.map(({ t, d, Icon, c, pos }, i) => (
          <li key={t} className={pos}>
            <Reveal delay={i * 120} className="flex gap-4">
              <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[45%_55%_60%_40%] border-2 border-ink ${c}`}>
                <Icon className="text-ink" aria-hidden />
              </span>
              <div>
                <h3 className="text-2xl font-bold">{t}</h3>
                <p className="mt-1 text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
      <Wave fill="var(--sky)" variant="bumpy" />
    </section>
  );
}

function Services() {
  const s = [
    { t: "Corte infantil", d: "Cortes pensados para os pequenos, respeitando seu estilo e personalidade.", art: <Scissors className="w-16" />, c: "bg-sun", r: "md:-rotate-2 rounded-[2.5rem_2.5rem_4rem_2rem]" },
    { t: "Hidratação", d: "Um cuidado especial para os cabelos das crianças.", art: <Drop className="w-12" />, c: "bg-mint", r: "md:translate-y-10 md:rotate-1 rounded-[4rem_2rem_2.5rem_3rem]" },
    { t: "Penteados", d: "Penteados infantis para deixar cada momento ainda mais especial.", art: <Bow className="w-16" />, c: "bg-pink-soft", r: "md:-rotate-1 rounded-[2rem_4rem_3rem_2.5rem]" },
  ];
  return (
    <section id="servicos" className="relative overflow-hidden bg-sky pt-12">
      <Star className="absolute right-[8%] top-10 w-10 animate-wiggle" color="var(--cream)" />
      <Reveal className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-4xl font-bold text-ink md:text-6xl">Um cuidado especial em cada detalhe!</h2>
      </Reveal>
      <div className="mx-auto mt-14 grid max-w-5xl gap-8 px-6 pb-24 md:grid-cols-3">
        {s.map((x, i) => (
          <Reveal key={x.t} delay={i * 120}>
            <article className={`group h-full border-[3px] border-ink p-8 transition-transform duration-300 hover:-translate-y-2 ${x.c} ${x.r}`} style={{ boxShadow: "var(--shadow-pop)" }}>
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-cream transition-transform duration-500 group-hover:rotate-12">{x.art}</div>
              <h3 className="text-3xl font-bold">{x.t}</h3>
              <p className="mt-3 text-ink/80">{x.d}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Wave fill="var(--pink-soft)" variant="drips" flip />
    </section>
  );
}

function Atypical() {
  return (
    <section id="atipico" className="relative overflow-hidden bg-pink-soft pt-12">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 md:grid-cols-[1fr_1.3fr]">
        <Reveal className="relative mx-auto flex w-60 justify-center md:w-80">
          <div className="absolute inset-0 m-auto h-60 w-60 rounded-[58%_42%_50%_50%/50%_55%_45%_50%] bg-cream md:h-72 md:w-72" />
          <Heart className="absolute left-2 top-4 text-pink" size={36} fill="currentColor" aria-hidden />
          <Star className="absolute bottom-10 right-0 w-9" color="var(--brand)" />
          <div className="relative flex h-56 items-center justify-center md:h-72"><Heart className="animate-float text-pink" size={120} fill="currentColor" strokeWidth={1.5} aria-hidden /><Heart className="absolute right-4 top-10 text-brand" size={34} fill="currentColor" aria-hidden /><Heart className="absolute bottom-10 left-4 text-sun" size={28} fill="currentColor" aria-hidden /></div>
        </Reveal>
        <Reveal delay={120}>
          <p className="inline-block rounded-full bg-cream px-4 py-1 text-sm font-extrabold uppercase tracking-wider text-pink">Atendimento atípico</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-brand md:text-6xl">Cada criança tem seu próprio tempo.</h2>
          <p className="mt-3 font-display text-2xl font-semibold text-pink">Aqui, o acolhimento vem primeiro.</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/85">
            Sabemos que cada criança vive o momento do corte de uma maneira diferente. Por isso, valorizamos o respeito, a paciência e um atendimento atencioso, considerando as necessidades e o ritmo de cada pequeno.
          </p>
          <p className="mt-4 max-w-xl text-ink/75">
            Recebemos crianças atípicas com calma e carinho. Conte para a gente como seu pequeno se sente mais confortável, e preparamos o momento juntos.
          </p>
        </Reveal>
      </div>
      <Wave fill="var(--sun)" variant="soft" flip />
    </section>
  );
}

function Space() {
  return (
    <section id="espaco" className="relative overflow-hidden bg-sun pt-12">
      <Squiggle className="absolute left-4 top-4 w-12 md:left-[6%] md:top-16 md:w-20" color="var(--brand)" />
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-bold text-ink md:text-6xl">Entre, fique à vontade e conheça nosso espaço!</h2>
      </Reveal>
      <div className="relative mx-auto mt-14 max-w-5xl px-6 pb-28">
        <Reveal className="relative md:w-[68%]">
          <div className="overflow-hidden rounded-[3rem_3rem_6rem_3rem] border-[6px] border-cream bg-cream shadow-soft md:-rotate-2">
            <img src={IMG.fachada} alt="Fachada colorida do salão Tesourinha Kids Hair em Camboriú" loading="lazy" className="aspect-[4/3] w-full object-cover object-[50%_40%]" />
          </div>
          <span className="absolute -top-5 left-8 rounded-full border-2 border-ink bg-pink px-5 py-2 font-display font-semibold text-primary-foreground">Nossa fachada</span>
        </Reveal>
        <Reveal delay={150} className="relative -mt-12 ml-auto mr-2 w-[70%] md:absolute md:right-6 md:top-28 md:mt-0 md:w-[46%]">
          <div className="overflow-hidden rounded-full border-[6px] border-cream shadow-soft md:rotate-3">
            <img src={IMG.interior} alt="Cadeirinhas divertidas onde as crianças sentam para cortar" loading="lazy" className="aspect-square w-full object-cover" />
          </div>
          <span className="absolute -bottom-3 right-2 whitespace-nowrap text-sm md:right-6 md:text-base rounded-full border-2 border-ink bg-mint px-5 py-2 font-display font-semibold">Cadeirinhas divertidas</span>
          <Star className="absolute -left-3 top-2 w-9 animate-wiggle md:-left-4 md:w-12" color="var(--pink)" />
        </Reveal>
      </div>
      <Wave fill="var(--cream)" variant="hills" />
    </section>
  );
}

function Index() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Experience />
        <Services />
        <Atypical />
        <Space />
        <Reviews />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
