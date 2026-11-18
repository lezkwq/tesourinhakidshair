import { SiWhatsapp, SiInstagram } from "react-icons/si";
import { CalendarHeart, MapPin } from "lucide-react";
import { IMG } from "@/lib/images";
import { BOOKING_URL, INSTAGRAM_URL, PHONE_LABEL, WHATSAPP_URL } from "@/lib/site";
import { Reveal, Wave } from "./Decor";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-pink text-primary-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-8 pt-20 md:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <h2 className="text-4xl font-bold leading-tight md:text-6xl">Seu pequeno merece viver essa experiência!</h2>
          <p className="mt-5 max-w-lg text-lg opacity-95">Venha conhecer a Tesourinha Kids Hair e transforme o momento do corte em uma lembrança especial.</p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-pop mt-8 bg-sun text-lg text-ink">
            <CalendarHeart size={20} aria-hidden /> AGENDAR AGORA
          </a>
        </Reveal>
        <div className="relative mx-auto w-48 md:w-64">
          <div className="absolute inset-x-0 bottom-2 mx-auto h-6 w-3/4 rounded-[50%] bg-ink/20" />
          <img src={IMG.mascotWave} alt="Mascote da Tesourinha acenando" loading="lazy" className="relative animate-float" />
        </div>
      </div>
      <Wave fill="var(--brand)" variant="drips" />
    </section>
  );
}

export function Footer() {
  const social = [
    { href: WHATSAPP_URL, label: "WhatsApp", Icon: SiWhatsapp, cls: "bg-whatsapp text-primary-foreground" },
    { href: INSTAGRAM_URL, label: "Instagram", Icon: SiInstagram, cls: "bg-instagram text-primary-foreground" },
    { href: BOOKING_URL, label: "Agendar", Icon: CalendarHeart, cls: "bg-sun text-ink" },
  ];
  return (
    <footer className="bg-brand pb-28 pt-10 text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_auto] md:items-center lg:grid-cols-[1fr_auto_auto] lg:gap-12">
        <div>
          <div className="inline-block rounded-[2rem] bg-cream p-4"><img src={IMG.logo} alt="Tesourinha Kids" className="h-16 w-auto" loading="lazy" /></div>
          <p className="mt-4 font-display text-2xl font-semibold">Tesourinha Kids Hair</p>
          <p className="mt-1 flex items-center gap-2 opacity-90"><MapPin size={16} aria-hidden /> Camboriú – SC</p>
        </div>
        <div className="space-y-2 text-lg">
          <a className="flex items-center gap-2 hover:underline" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><SiWhatsapp aria-hidden /> {PHONE_LABEL}</a>
          <a className="flex items-center gap-2 hover:underline" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><SiInstagram aria-hidden /> @tesourinhakidshair</a>
        </div>
        <div className="flex flex-wrap gap-3 md:col-span-2 lg:col-span-1 lg:flex-nowrap lg:justify-end">
          {social.map(({ href, label, Icon, cls }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={`btn-pop h-12 whitespace-nowrap px-5 py-0 text-sm ${cls}`}>
              <Icon size={18} aria-hidden /> {label}
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl px-6 text-sm opacity-75">© {new Date().getFullYear()} Tesourinha Kids Hair. Feito com carinho em Camboriú.</p>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Fale com a Tesourinha pelo WhatsApp"
      className="group fixed bottom-4 right-4 z-50 flex h-14 w-14 animate-pop-in items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-soft transition-transform hover:scale-110 md:bottom-6 md:right-6 md:h-16 md:w-16">
      <SiWhatsapp size={30} aria-hidden />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-ink px-4 py-2 text-sm font-bold text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        Fale com a Tesourinha
      </span>
    </a>
  );
}
