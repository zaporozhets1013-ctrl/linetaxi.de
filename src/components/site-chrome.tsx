import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type MouseEvent } from "react";
import { Phone, MessageCircle, Mail, MapPin, Menu, X } from "lucide-react";

export const PHONE = "+49 30 12345678";
export const PHONE_TEL = "+493012345678";
export const WHATSAPP_NUMBER = "493012345678";
export const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}`;
export const EMAIL = "domains@optipartner.de";
export const MAILTO = `mailto:${EMAIL}`;

const NAV_ITEMS: Array<[string, string]> = [
  ["Leistungen", "leistungen"],
  ["Vorteile", "vorteile"],
  ["Ablauf", "ablauf"],
  ["Kontakt", "kontakt"],
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  // Keep URL clean (no #hash) after click
  window.history.replaceState(null, "", window.location.pathname + window.location.search);
}

export function useSectionNav() {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (id: string, onDone?: () => void) => (e: MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      scrollToId(id);
      onDone?.();
    } else {
      navigate({ to: "/" }).then(() => {
        // wait one frame for the section to mount
        requestAnimationFrame(() => {
          setTimeout(() => {
            scrollToId(id);
            onDone?.();
          }, 50);
        });
      });
    }
  };
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onSectionClick = useSectionNav();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // If the URL ever contains a hash (e.g. old bookmark), scroll to it once
  // and immediately strip it so the address bar stays clean.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    requestAnimationFrame(() => {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }, 50);
    });
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 sm:h-20">
        <Link
          to="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2 group"
        >
          <span className="grid place-items-center h-9 w-9 rounded-md bg-accent text-accent-foreground font-extrabold">
            L
          </span>
          <span
            className={`font-display font-extrabold text-lg tracking-tight ${
              solid ? "text-foreground" : "text-white"
            }`}
          >
            Line<span className="text-accent">Taxi</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_ITEMS.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={onSectionClick(id)}
              className={`transition-colors hover:text-accent ${
                solid ? "text-foreground" : "text-white/90"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>


        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold hover:scale-105 transition-transform"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Jetzt anrufen</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((o) => !o)}
            className={`md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border ${
              solid ? "border-border text-foreground" : "border-white/30 text-white"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container-x py-4 flex flex-col gap-3 text-sm font-medium">
            {NAV_ITEMS.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={onSectionClick(id, () => setOpen(false))}
                className="py-2 text-foreground hover:text-accent transition-colors"
              >
                {label}
              </a>
            ))}
            <Link
              to="/impressum"
              onClick={() => setOpen(false)}
              className="py-2 text-foreground hover:text-accent transition-colors"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              onClick={() => setOpen(false)}
              className="py-2 text-foreground hover:text-accent transition-colors"
            >
              Datenschutzerklärung
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const onSectionClick = useSectionNav();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-x py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid place-items-center h-10 w-10 rounded-md bg-accent text-accent-foreground font-extrabold">
                L
              </span>
              <span className="font-display font-extrabold text-2xl">
                Line<span className="text-accent">Taxi</span>
              </span>
            </div>
            <p className="mt-4 text-white/70 max-w-md text-sm leading-relaxed">
              Ihr zuverlässiger Partner für Personen- und Kurierfahrten. Premium-Service,
              faire Preise und 24/7 Erreichbarkeit – deutschlandweit.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-2 text-sm font-bold"
              >
                <Phone className="h-4 w-4" /> Anrufen
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-bold hover:bg-white/10 transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent">Rechtliches</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <Link to="/impressum" className="hover:text-accent transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-accent transition-colors">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <a href="#kontakt" onClick={onSectionClick("kontakt")} className="hover:text-accent transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent">Kontakt</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-accent" />
                <a href={`tel:${PHONE_TEL}`} className="hover:text-accent transition-colors">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-accent" />
                <a href={MAILTO} className="hover:text-accent transition-colors break-all">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent" />
                linetaxi.de
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} LineTaxi. Alle Rechte vorbehalten.</p>
          <p>Schnell. Sicher. Pünktlich.</p>
        </div>
      </div>
    </footer>
  );
}
