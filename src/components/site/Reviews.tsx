import { Star as StarIcon, User } from "lucide-react";
import { REVIEWS, type Review } from "@/lib/site";
import { Reveal, Star, Squiggle } from "./Decor";

const TINTS = ["bg-pink-soft", "bg-lime", "bg-sky", "bg-sun", "bg-mint"];

function ReviewCard({ r, i }: { r: Review; i: number }) {
  return (
    <figure className={`flex w-[290px] shrink-0 flex-col gap-3 rounded-[2rem] border-2 border-ink/10 bg-card p-6 shadow-soft sm:w-[340px] ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
      <div className="flex text-sun" aria-label="5 estrelas">
        {Array.from({ length: 5 }, (_, k) => <StarIcon key={k} size={18} fill="currentColor" strokeWidth={0} />)}
      </div>
      <blockquote className="flex-1 text-[15px] leading-relaxed text-foreground/85">“{r.text}”</blockquote>
      <figcaption className="flex items-center gap-3">
        <span className={`flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-ink/15 ${TINTS[i % TINTS.length]}`}>
          {r.photo ? <img src={r.photo} alt="" className="h-full w-full object-cover" loading="lazy" /> : <User size={20} className="text-ink/60" aria-hidden />}
        </span>
        <span className="font-display text-base font-semibold">{r.name}</span>
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <section id="avaliacoes" className="relative overflow-hidden bg-cream py-20 md:py-28">
      <Star className="absolute left-4 top-6 w-6 animate-wiggle md:left-[8%] md:top-16 md:w-8" color="var(--pink)" />
      <Squiggle className="absolute right-4 top-6 w-12 md:right-[10%] md:top-24 md:w-20" color="var(--mint)" />
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <div className="mx-auto mb-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border-2 border-ink bg-card px-5 py-2" style={{ boxShadow: "var(--shadow-pop)" }}>
          <span className="font-display text-2xl font-bold">5,0</span>
          <span className="flex text-sun">{Array.from({ length: 5 }, (_, k) => <StarIcon key={k} size={18} fill="currentColor" strokeWidth={0} />)}</span>
          <span className="text-sm font-bold">133 avaliações no Google</span>
        </div>
        <h2 className="text-4xl font-bold text-brand md:text-6xl">O carinho de quem já viveu essa experiência!</h2>
        <p className="mt-4 text-lg text-muted-foreground">Famílias que confiam, pequenos que adoram voltar e momentos que ficam na memória.</p>
      </Reveal>
      <div className="relative mt-14 [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
        <div className="marquee-track flex w-max py-4">
          {loop.map((r, i) => (
            <div key={i} className="pr-6" aria-hidden={i >= REVIEWS.length || undefined}><ReviewCard r={r} i={i} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}
