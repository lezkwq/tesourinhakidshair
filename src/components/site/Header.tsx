import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { BOOKING_URL } from "@/lib/site";

const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#espaco", label: "Nosso espaço" },
  { href: "#servicos", label: "Serviços" },
  { href: "#atipico", label: "Atendimento atípico" },
  { href: "#avaliacoes", label: "Avaliações" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-20">
        <a href="#inicio" aria-label="Tesourinha Kids Hair, início">
          <img src={logo.url} alt="Tesourinha Kids" className="h-10 w-auto md:h-12" />
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-bold">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="transition-colors hover:text-pink">{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-pop bg-pink px-4 py-2 text-xs text-primary-foreground sm:text-sm">
            AGENDAR HORÁRIO
          </a>
          <button className="rounded-full border-2 border-ink p-2 lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Menu móvel" className="border-t-2 border-ink/10 bg-cream lg:hidden">
          <ul className="flex flex-col px-6 py-3 font-display text-lg">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="block py-2">{n.label}</a></li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
