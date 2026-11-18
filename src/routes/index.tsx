import { createFileRoute } from "@tanstack/react-router";
import { Heart, Quote, Star as StarIcon } from "lucide-react";
import { IMG } from "@/lib/images";
import { BOOKING_URL, REVIEWS } from "@/lib/site";
import { Header } from "@/components/site/Header";
import { Reviews } from "@/components/site/Reviews";
import { FinalCta, Footer, WhatsAppFloat } from "@/components/site/Footer";
import { Reveal, Sun, Wave } from "@/components/site/Decor";

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
      <Sun className="absolute -left-8 -top-16 w-32 md:-left-24 md:-top-24 md:w-80" />
      <div className="relative mx-auto grid max-w-6xl items-end gap-6 px-6 pt-24 md:grid-cols-[1.2fr_1fr] md:pt-20">
        <div className="relative z-10 pb-2 text-center md:pb-24 md:text-left">
          <p className="mb-4 inline-block rounded-full bg-lime px-4 py-1 text-sm font-extrabold uppercase tracking-wider text-brand">Salão infantil · Camboriú</p>
          <h1 className="text-[2.6rem] font-bold leading-[0.95] sm:text-6xl lg:text-7xl">
            <span className="text-brand">O primeiro salão infantil de Camboriú, </span>
            <span className="text-pink">preparado até pra criança atípica</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-muted-foreground md:mx-0">
            Corte, hidratação e penteados pra toda criança de Camboriú, com paciência de sobra pra quem tem medo da tesoura.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-pop bg-pink text-primary-foreground">AGENDAR HORÁRIO</a>
            <a href="#espaco" className="btn-pop bg-card text-ink">CONHEÇA NOSSO ESPAÇO</a>
          </div>
        </div>
        <div className="relative mx-auto mt-2 hidden w-36 sm:w-48 md:mt-0 md:block md:w-80">
          <img src={IMG.mascotHands} alt="Mascote da Tesourinha, um menino com cabelo azul em formato de tesoura" className="relative z-10 animate-float" fetchPriority="high" />
          <div className="absolute -bottom-2 left-1/2 h-6 w-2/3 -translate-x-1/2 rounded-[50%] bg-mint-deep/25" />
        </div>
      </div>
      <Wave fill="var(--mint)" variant="hills" className="-mt-6 relative" />
    </section>
  );
}

function SocialProof() {
  return (
    <section className="bg-cream px-6 py-10">
      <Reveal className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand">Nota máxima no Google</p>
          <h2 className="mt-1 text-3xl font-bold leading-tight text-ink md:text-4xl">O primeiro salão infantil de Camboriú.</h2>
        </div>
        <div className="flex shrink-0 flex-col items-center rounded-2xl border-2 border-ink bg-card px-6 py-3 md:items-start">
          <span className="flex items-center gap-1 text-sun" aria-label="5 de 5 estrelas">
            {Array.from({ length: 5 }, (_, i) => <StarIcon key={i} size={20} fill="currentColor" strokeWidth={0} />)}
            <strong className="ml-2 text-2xl text-ink">5,0</strong>
          </span>
          <span className="text-sm font-bold text-muted-foreground">133 avaliações no Google</span>
        </div>
      </Reveal>
    </section>
  );
}

function FeaturedReview() {
  const review = REVIEWS.find(({ text }) => text.includes("Theo") && text.includes("TEA"));
  if (!review) return null;

  return (
    <section className="bg-pink-soft px-6 py-12">
      <Reveal className="mx-auto max-w-4xl rounded-[2rem] border-2 border-ink/10 bg-card p-7 shadow-soft md:p-10">
        <div className="flex items-center gap-3 text-brand">
          <Quote size={28} fill="currentColor" aria-hidden />
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em]">Um relato que importa</p>
        </div>
        <blockquote className="mt-5 text-xl leading-relaxed text-ink md:text-2xl">“{review.text}”</blockquote>
        <p className="mt-5 font-display text-lg font-semibold text-brand">— {review.name}</p>
      </Reveal>
    </section>
  );
}

function AboutExperience() {
  return (
    <section className="relative overflow-hidden bg-mint">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-14 md:grid-cols-2 md:gap-12">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand">Muito prazer, somos a Tesourinha!</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-ink md:text-5xl">Um corte mais leve para cada criança.</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink">
            Um salão pensado para os pequenos: cadeiras divertidas, espaço para brincar e atendimento que acompanha o ritmo de cada criança.
          </p>
        </Reveal>
        <Reveal delay={120} className="mx-auto w-full max-w-xl">
          <div className="overflow-hidden rounded-[2.5rem] border-[6px] border-cream shadow-soft">
            <img src={IMG.interior} alt="Cadeiras infantis divertidas do salão Tesourinha Kids Hair" loading="lazy" className="aspect-[3/2] w-full object-cover" />
          </div>
        </Reveal>
      </div>
      <Wave fill="var(--cream)" variant="soft" />
    </section>
  );
}

function Services() {
  const s = [
    { t: "Corte infantil", d: "Cortes pensados para os pequenos, respeitando seu estilo e personalidade.", c: "bg-sun", r: "md:-rotate-2 rounded-[2.5rem_2.5rem_4rem_2rem]" },
    { t: "Hidratação", d: "Um cuidado especial para os cabelos das crianças.", c: "bg-mint", r: "md:translate-y-10 md:rotate-1 rounded-[4rem_2rem_2.5rem_3rem]" },
    { t: "Penteados", d: "Penteados infantis para deixar cada momento ainda mais especial.", c: "bg-pink-soft", r: "md:-rotate-1 rounded-[2rem_4rem_3rem_2.5rem]" },
  ];
  return (
    <section id="servicos" className="relative overflow-hidden bg-sky pt-12">
      <Reveal className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-4xl font-bold text-ink md:text-6xl">Um cuidado especial em cada detalhe!</h2>
      </Reveal>
      <div className="mx-auto mt-14 grid max-w-5xl gap-8 px-6 pb-24 md:grid-cols-3">
        {s.map((x, i) => (
          <Reveal key={x.t} delay={i * 120}>
            <article className={`h-full border-[3px] border-ink p-8 transition-transform duration-300 hover:-translate-y-2 ${x.c} ${x.r}`} style={{ boxShadow: "var(--shadow-pop)" }}>
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
        <Reveal className="relative mx-auto hidden w-60 justify-center md:flex md:w-80">
          <div className="absolute inset-0 m-auto h-60 w-60 rounded-[58%_42%_50%_50%/50%_55%_45%_50%] bg-cream md:h-72 md:w-72" />
          <Heart className="absolute left-2 top-4 text-pink" size={36} fill="currentColor" aria-hidden />
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
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-bold text-ink md:text-6xl">Entre, fique à vontade e conheça nosso espaço!</h2>
      </Reveal>
      <div className="relative mx-auto mt-14 max-w-5xl px-6 pb-28">
        <Reveal className="relative md:w-[68%]">
          <div className="overflow-hidden rounded-[3rem_3rem_6rem_3rem] border-[6px] border-cream bg-cream shadow-soft md:-rotate-2">
            <img src={IMG.fachada} alt="Fachada colorida do salão Tesourinha Kids Hair em Camboriú" loading="lazy" className="aspect-[4/5] w-full object-cover object-[50%_60%] md:aspect-[4/3] md:object-[50%_40%]" />
          </div>
          <span className="absolute -top-5 left-8 rounded-full border-2 border-ink bg-pink px-5 py-2 font-display font-semibold text-primary-foreground">Nossa fachada</span>
        </Reveal>
        <Reveal delay={150} className="relative mt-8 w-full md:absolute md:right-6 md:top-28 md:mt-0 md:ml-auto md:mr-2 md:w-[46%]">
          <div className="overflow-hidden rounded-[2.5rem] border-[6px] border-cream shadow-soft md:rotate-3 md:rounded-full">
            <img src={IMG.interior} alt="Cadeirinhas divertidas onde as crianças sentam para cortar" loading="lazy" className="aspect-[3/2] w-full object-cover md:aspect-square" />
          </div>
          <span className="absolute -bottom-3 right-2 whitespace-nowrap text-sm md:right-6 md:text-base rounded-full border-2 border-ink bg-mint px-5 py-2 font-display font-semibold">Cadeirinhas divertidas</span>
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
        <SocialProof />
        <Services />
        <FeaturedReview />
        <AboutExperience />
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
