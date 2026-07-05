import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, type FormEvent, Fragment } from "react";
import {
  Phone,
  MessageCircle,
  Send,
  Globe,
  Plane,
  Train,
  HeartPulse,
  Briefcase,
  Package,
  Clock,
  Zap,
  Smile,
  BadgeEuro,
  Car,
  CarFront,
  CreditCard,
  PhoneCall,
  Mail,
  CheckCircle2,
  CalendarCheck,
  ArrowRight,
  Shield,
  Lock,
  BadgeCheck,
  Sparkles,
  Star,
  Globe2,
  LayoutTemplate,
  Smartphone,
  FileText,
  Rocket,
  LifeBuoy,
  Quote,
} from "lucide-react";
import heroTaxi from "../assets/hero-taxi.jpg";
import serviceFlughafen from "../assets/service-flughafen.jpg";
import serviceBahnhof from "../assets/service-bahnhof.jpg";
import serviceKranken from "../assets/service-kranken.jpg";
import serviceBusiness from "../assets/service-business.jpg";
import serviceKurier from "../assets/service-kurier.jpg";
import serviceNight from "../assets/service-night.jpg";
import benefitAbholung from "../assets/benefit-abholung.jpg";
import benefitFahrer from "../assets/benefit-fahrer.jpg";
import benefitFestpreise from "../assets/benefit-festpreise.jpg";
import benefitFahrzeuge from "../assets/benefit-fahrzeuge.jpg";
import benefitKarte from "../assets/benefit-karte.jpg";
import benefitNacht from "../assets/benefit-nacht.jpg";
import avatarAndreas from "../assets/avatar-andreas.jpg";
import avatarSabine from "../assets/avatar-sabine.jpg";
import avatarMichael from "../assets/avatar-michael.jpg";
import avatarJulia from "../assets/avatar-julia.jpg";
import avatarThomas from "../assets/avatar-thomas.jpg";
import avatarNadine from "../assets/avatar-nadine.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  Header,
  Footer,
  PHONE,
  PHONE_TEL,
  WHATSAPP,
  EMAIL,
  MAILTO,
  useSectionNav,
} from "../components/site-chrome";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LineTaxi – Ihr zuverlässiger Taxi-Service | linetaxi.de" },
      { name: "description", content: "Premium Taxi-Service: Flughafentransfer, Geschäftsfahrten, Krankenfahrten. Schnell, sicher, pünktlich – 24/7 für Sie unterwegs." },
      { property: "og:title", content: "LineTaxi – Ihr zuverlässiger Taxi-Service" },
      { property: "og:description", content: "Schnell. Sicher. Pünktlich. 24 Stunden für Sie unterwegs." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LineTaxiPage,
});

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setVisible(true), obs.disconnect()),
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  dark = false,
  className = "",
  subtitleClassName = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
  subtitleClassName?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-28 ${dark ? "bg-primary text-primary-foreground" : "bg-background text-foreground"} ${className}`}
    >
      <div className="container-x">
        <div
          ref={ref}
          className={`max-w-2xl mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" />
            {eyebrow}
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight">{title}</h2>
          {subtitle && (
            <p className={`mt-4 text-base sm:text-lg ${dark ? "text-white/70" : "text-muted-foreground"} ${subtitleClassName}`}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

const services = [
  { icon: Plane, title: "Flughafentransfer", text: "Stressfrei zum Flughafen – mit Flugüberwachung und kostenlosem Wartezeitpuffer.", photo: serviceFlughafen },
  { icon: Train, title: "Bahnhoftransfer", text: "Pünktlich zum Gleis oder direkter Empfang am Bahnsteig mit Gepäckservice.", photo: serviceBahnhof },
  { icon: HeartPulse, title: "Krankenfahrten", text: "Komfortable Fahrten zu Arzt, Klinik oder Reha – mit allen Krankenkassen abrechenbar.", photo: serviceKranken },
  { icon: Briefcase, title: "Geschäftsfahrten", text: "Diskreter Business-Service mit moderner Limousine und erfahrenem Fahrer.", photo: serviceBusiness },
  { icon: Package, title: "Kurierfahrten", text: "Schneller Versand wichtiger Dokumente und Pakete – stadtweit und überregional.", photo: serviceKurier },
  { icon: Clock, title: "24/7 Taxi-Service", text: "Rund um die Uhr für Sie da – auch an Sonn- und Feiertagen ohne Aufpreis.", photo: serviceNight },
];

const benefits = [
  { icon: Zap, title: "Schnelle Abholung", text: "Durchschnittliche Wartezeit unter 8 Minuten im gesamten Stadtgebiet.", photo: benefitAbholung },
  { icon: Smile, title: "Freundliche Fahrer", text: "Geschulte, ortskundige Fahrer mit Sprachkenntnissen Deutsch und Englisch.", photo: benefitFahrer },
  { icon: BadgeEuro, title: "Faire Festpreise", text: "Transparente Preisstruktur – keine versteckten Kosten, Festpreis auf Wunsch.", photo: benefitFestpreise },
  { icon: Car, title: "Moderne Fahrzeuge", text: "Komfortable Limousinen, klimatisiert, gepflegt und regelmäßig gewartet.", photo: benefitFahrzeuge },
  { icon: CreditCard, title: "Kartenzahlung möglich", text: "Bequeme Zahlung per EC-, Kreditkarte, Apple Pay oder Google Pay direkt im Fahrzeug.", photo: benefitKarte },
  { icon: PhoneCall, title: "Rund um die Uhr erreichbar", text: "Persönliche Telefonzentrale 24/7 – auch für Vorbestellungen und Großaufträge.", photo: benefitNacht },
];

const steps = [
  { n: "01", title: "Fahrt anfragen", text: "Per Telefon, WhatsApp oder Formular – schnell und unkompliziert.", icon: Phone },
  { n: "02", title: "Bestätigung erhalten", text: "Sie erhalten innerhalb weniger Minuten Festpreis und Abholzeit.", icon: CalendarCheck },
  { n: "03", title: "Pünktlich abgeholt werden", text: "Ihr Fahrer steht zur vereinbarten Zeit bereit – garantiert.", icon: Car },
];

const reviews = [
  { name: "Andreas Krüger", city: "Berlin", text: "Absolut pünktlich und sehr freundlicher Fahrer. Der Transfer zum Flughafen Tegel lief völlig entspannt – klare Empfehlung, jederzeit wieder!", photo: avatarAndreas },
  { name: "Sabine Weiß", city: "Potsdam", text: "Ich nutze LineTaxi regelmäßig für Geschäftstermine. Immer saubere Fahrzeuge, faire Festpreise und ein professioneller Service – absolut empfehlenswert.", photo: avatarSabine },
  { name: "Michael Hoffmann", city: "Berlin", text: "Kurzfristig nachts bestellt und nach 6 Minuten stand das Taxi bereits vor der Tür. Klasse Leistung, gerne wieder!", photo: avatarMichael },
  { name: "Julia Bergmann", city: "Berlin", text: "Sehr angenehme Fahrt zum ICE-Bahnhof. Der Fahrer half mit dem Gepäck, war höflich und fuhr souverän. Fünf Sterne verdient.", photo: avatarJulia },
  { name: "Thomas Richter", city: "Charlottenburg", text: "Krankenfahrt für meine Mutter reibungslos organisiert. Rücksichtsvoll, geduldig und pünktlich – vielen Dank!", photo: avatarThomas },
  { name: "Nadine Schulz", city: "Berlin", text: "Kartenzahlung im Fahrzeug funktionierte einwandfrei, faire Preise und ein wirklich moderner Mercedes. Rundum Premium-Service in Berlin.", photo: avatarNadine },
];

const faqs = [
  { q: "Welche Leistungen bietet LineTaxi?", a: "Wir bieten Personenbeförderung für jeden Anlass: Flughafen- und Bahnhoftransfers, Geschäftsfahrten, Krankenfahrten, Kurierdienste und den klassischen Taxi-Service – 24 Stunden am Tag, 7 Tage die Woche.", icon: CarFront },
  { q: "Kann ich rund um die Uhr buchen?", a: "Ja. Unsere Zentrale ist 365 Tage im Jahr rund um die Uhr erreichbar – telefonisch, per WhatsApp oder über das Formular auf dieser Seite.", icon: Clock },
  { q: "Gibt es Festpreise?", a: "Für Flughafen-, Bahnhof- und Langstreckenfahrten bieten wir transparente Festpreise ohne versteckte Zusatzkosten. Innerorts fahren wir nach dem geeichten Taxameter.", icon: Car },
  { q: "Sind Flughafentransfers möglich?", a: "Selbstverständlich. Wir überwachen Ihren Flug kostenlos und garantieren pünktliche Abholung – auch bei Verspätungen.", icon: Plane },
  { q: "Wie erfolgt die Zahlung?", a: "Bequem per EC-Karte, Kreditkarte, Apple Pay, Google Pay oder in bar direkt im Fahrzeug. Auf Wunsch stellen wir Rechnungen aus.", icon: CreditCard },
  { q: "Kann ich dieses komplette Projekt kaufen?", a: "Ja. Diese Website inklusive der Premium-Domain linetaxi.de steht komplett zum Verkauf. Der Kauf und der sichere Domain-Transfer werden über SEDO abgewickelt. Der einmalige Komplettpreis beträgt 490 €.", icon: Globe },
];

const projectBenefits = [
  { icon: Globe2, title: "Premium-Domain linetaxi.de" },
  { icon: LayoutTemplate, title: "Moderne One-Page-Website" },
  { icon: Smartphone, title: "Vollständig responsives Design" },
  { icon: FileText, title: "Alle Texte inklusive" },
  { icon: Rocket, title: "Sofort einsatzbereit" },
  { icon: LifeBuoy, title: "Persönliche Unterstützung beim Transfer" },
];

function ReviewCard({
  review,
  index,
}: {
  review: { name: string; city: string; text: string; photo: string };
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
      className={`relative h-full flex flex-col rounded-[20px] border border-border bg-card p-7 shadow-sm hover:shadow-[0_24px_50px_-12px_rgba(15,15,15,0.28)] hover:-translate-y-1 hover:border-accent transition-all duration-[250ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <Quote className="absolute top-5 right-5 h-8 w-8 text-accent/10" />
      <div className="flex gap-0.5 text-accent drop-shadow-sm">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current" />
        ))}
      </div>
      <p className="mt-5 flex-1 text-sm sm:text-base text-foreground leading-relaxed">
        „{review.text}"
      </p>
      <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
        <img
          src={review.photo}
          alt={review.name}
          loading="lazy"
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow-[0_4px_14px_-4px_rgba(15,15,15,0.25)]"
        />
        <div>
          <p className="text-sm font-bold text-foreground">{review.name}</p>
          <p className="text-xs text-muted-foreground">{review.city}</p>
        </div>
      </div>
    </div>
  );
}

function ProjectInquiryForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const vorname = String(fd.get("vorname") ?? "");
    const email = String(fd.get("email") ?? "");
    const nachricht = String(fd.get("nachricht") ?? "");
    const subject = `Projekt-Anfrage: linetaxi.de von ${vorname || "Interessent"}`;
    const body =
      `Vorname: ${vorname}\n` +
      `E-Mail: ${email}\n\n` +
      `Nachricht:\n${nachricht}\n`;
    window.location.href = `${MAILTO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-card border border-accent/30 p-6 sm:p-8 shadow-premium"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Vorname</span>
          <input
            required
            type="text"
            name="vorname"
            placeholder="Ihr Vorname"
            className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">E-Mail</span>
          <input
            required
            type="email"
            name="email"
            placeholder="ihre@email.de"
            className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Nachricht</span>
          <textarea
            required
            name="nachricht"
            rows={4}
            placeholder="Ihre Nachricht zum Projektkauf..."
            className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition resize-none"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-8 py-4 font-bold shadow-premium hover:shadow-glow hover:-translate-y-0.5 transition-all"
      >
        Projekt anfragen
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </button>
      {sent && (
        <div className="mt-5 flex items-center gap-2 rounded-lg bg-accent/15 text-foreground px-4 py-3 text-sm font-medium">
          <CheckCircle2 className="h-5 w-5 text-accent-foreground" />
          Vielen Dank! Ihre E-Mail-App öffnet sich – bitte senden Sie die Nachricht ab.
        </div>
      )}
    </form>
  );
}

function useProjectAnchor() {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("projekt-anfrage");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
}

function Hero() {
  const onSectionClick = useSectionNav();
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden bg-primary">
      <img
        src={heroTaxi}
        alt="Schwarzes Premium Taxi von LineTaxi in deutscher Großstadt bei Sonnenuntergang"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/40" />

      <div className="container-x relative z-10 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-3xl text-primary-foreground">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-accent/60 bg-accent/15 backdrop-blur px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-accent animate-badge-pulse-ring">
            <Sparkles className="h-3.5 w-3.5" />
            Projekt zu verkaufen
          </div>

          <div className="reveal-delay-1 mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            24 / 7 Verfügbar in ganz Deutschland
          </div>

          <h1 className="reveal-delay-1 mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
            LineTaxi –<br />
            <span className="text-accent">Ihr zuverlässiger</span><br />
            Taxi-Service
          </h1>


          <p className="reveal-delay-2 mt-6 text-lg sm:text-2xl text-white/85 font-medium max-w-2xl">
            Schnell. Sicher. Pünktlich. 24 Stunden für Sie unterwegs.
          </p>

          <div className="reveal-delay-3 mt-10 flex flex-wrap gap-3 sm:gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 text-sm sm:text-base font-bold shadow-premium hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" />
              Jetzt anrufen
            </a>
            <a
              href="#kontakt"
              onClick={onSectionClick("kontakt")}
              className="group inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3.5 text-sm sm:text-base font-bold hover:-translate-y-0.5 transition-transform"
            >
              <Send className="h-5 w-5" />
              Fahrt anfragen
            </a>
            <a
              href="#projekt-kauf"
              onClick={onSectionClick("projekt-kauf")}
              className="group relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent via-accent to-amber-300 text-accent-foreground px-7 py-4 text-sm sm:text-base font-extrabold ring-2 ring-accent/40 shadow-glow hover:shadow-premium hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
            >
              <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg] animate-shine-sweep" />
              <Globe className="h-5 w-5 relative" />
              <span className="relative">Website & Domain kaufen</span>
              <ArrowRight className="h-4 w-4 relative transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur text-white px-6 py-3.5 text-sm sm:text-base font-bold hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>

          <dl className="reveal-delay-3 mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-white/15 pt-8">
            {[
              ["< 8 Min.", "Wartezeit"],
              ["24/7", "Verfügbar"],
              ["100%", "Festpreis"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="text-2xl sm:text-3xl font-extrabold text-accent">{v}</dt>
                <dd className="mt-1 text-xs sm:text-sm text-white/70 uppercase tracking-wider">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  text,
  index,
  dark = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  index: number;
  dark?: boolean;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
      className={`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${dark
          ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-accent/40"
          : "bg-card border-border hover:border-accent hover:-translate-y-1 hover:shadow-premium"}`}
    >
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-accent/0 group-hover:bg-accent/10 blur-2xl transition-colors" />
      <div className="relative">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className={`mt-5 text-xl font-bold ${dark ? "text-white" : "text-foreground"}`}>{title}</h3>
        <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}>{text}</p>
      </div>
    </div>
  );
}

function ServicePhotoCard({
  icon: Icon,
  title,
  text,
  photo,
  index,
  variant = "light",
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  photo: string;
  index: number;
  variant?: "light" | "dark";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const isDark = variant === "dark";
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl ease-out
        ${isDark
          ? "transition-all duration-[250ms] hover:-translate-y-[6px] border border-white/10 bg-[#2B2B2B] shadow-[0_20px_50px_-25px_rgba(0,0,0,0.9)] hover:shadow-[0_35px_70px_-20px_rgba(0,0,0,0.85)] hover:border-accent/40"
          : "transition-all duration-300 hover:-translate-y-[5px] border border-border bg-white shadow-[0_10px_30px_-15px_rgba(15,15,15,0.15)] hover:shadow-[0_25px_50px_-15px_rgba(15,15,15,0.28)]"}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={photo}
          alt={title}
          loading="lazy"
          width={1024}
          height={768}
          className={`h-full w-full object-cover brightness-110 ease-out ${isDark ? "transition-transform duration-[250ms] group-hover:scale-[1.03]" : "transition-transform duration-300 group-hover:scale-[1.025]"}`}
        />
        <div className={`absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t ${isDark ? "from-black/60" : "from-black/35"} to-transparent`} />
        <div className={`absolute bottom-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg ring-2 ${isDark ? "ring-[#2B2B2B]" : "ring-white"}`}>
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-foreground"}`}>{title}</h3>
        <p className={`mt-2 text-sm leading-relaxed ${isDark ? "text-white/70" : "text-muted-foreground"}`}>{text}</p>
      </div>
    </div>
  );
}



function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "");
    const telefon = String(fd.get("telefon") ?? "");
    const email = String(fd.get("email") ?? "");
    const abholort = String(fd.get("abholort") ?? "");
    const ziel = String(fd.get("ziel") ?? "");
    const nachricht = String(fd.get("nachricht") ?? "");

    const subject = `Fahrtanfrage von ${name || "Website"}`;
    const body =
      `Name: ${name}\n` +
      `Telefon: ${telefon}\n` +
      `E-Mail: ${email}\n` +
      `Abholort: ${abholort}\n` +
      `Ziel: ${ziel}\n\n` +
      `Nachricht:\n${nachricht}\n`;

    const href = `${MAILTO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-card border border-border p-6 sm:p-10 shadow-premium"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {[
          { name: "name", label: "Name", type: "text", placeholder: "Max Mustermann" },
          { name: "telefon", label: "Telefon", type: "tel", placeholder: "+49 ..." },
          { name: "email", label: "E-Mail", type: "email", placeholder: "ihre@email.de" },
          { name: "abholort", label: "Abholort", type: "text", placeholder: "Straße, PLZ Ort" },
        ].map((f) => (
          <label key={f.name} className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{f.label}</span>
            <input
              required
              type={f.type}
              name={f.name}
              placeholder={f.placeholder}
              className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
            />
          </label>
        ))}
        <label className="block sm:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ziel</span>
          <input
            required
            type="text"
            name="ziel"
            placeholder="Zieladresse"
            className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Nachricht</span>
          <textarea
            name="nachricht"
            rows={4}
            placeholder="Anzahl Personen, Gepäck, Wunschuhrzeit ..."
            className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition resize-none"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-7 group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 font-bold hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        Jetzt Fahrt anfragen
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </button>

      {sent && (
        <div className="mt-5 flex items-center gap-2 rounded-lg bg-accent/15 text-foreground px-4 py-3 text-sm font-medium">
          <CheckCircle2 className="h-5 w-5 text-accent-foreground" />
          Vielen Dank! Ihre E-Mail-App öffnet sich – bitte senden Sie die Nachricht ab.
        </div>
      )}
    </form>
  );
}

function StepCard({
  step,
  index,
  icon: Icon,
}: {
  step: { n: string; title: string; text: string };
  index: number;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`group flex-1 flex min-h-[260px] sm:min-h-[300px] flex-col items-center justify-center rounded-[18px] border border-border bg-card p-8 sm:p-10 text-center shadow-[0_14px_40px_-12px_rgba(15,15,15,0.2)] transition-all duration-[250ms] hover:-translate-y-[6px] hover:shadow-[0_25px_50px_-15px_rgba(15,15,15,0.28)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_10px_30px_-8px_rgba(244,196,48,0.55)] ring-4 ring-background">
        <Icon className="h-8 w-8" />
      </span>
      <span className="mt-5 text-xs font-bold uppercase tracking-widest text-accent">Schritt {step.n}</span>
      <h3 className="mt-2 text-[1.65rem] font-extrabold text-foreground">{step.title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.text}</p>
    </div>
  );
}

function LineTaxiPage() {
  const onProjectAnchor = useProjectAnchor();
  return (

    <div className="min-h-screen bg-background scroll-smooth">
      <Header />
      <main>
        <Hero />

        <Section
          id="leistungen"
          eyebrow="Unsere Leistungen"
          title="Mobilität für jeden Anlass"
          subtitle="Vom Flughafentransfer bis zur Krankenfahrt – LineTaxi steht für zuverlässigen Service auf höchstem Niveau."
          className="bg-[#F8F9FA]"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {services.map((s, i) => (
              <ServicePhotoCard key={s.title} {...s} index={i} />
            ))}
          </div>
          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-border pt-8 text-center">
            {[
              ["< 8 Min.", "Wartezeit"],
              ["24/7", "Verfügbar"],
              ["100%", "Festpreis"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="text-2xl sm:text-3xl font-extrabold text-foreground">{v}</dt>
                <dd className="mt-1 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">{l}</dd>
              </div>
            ))}
          </dl>
        </Section>


        <Section
          id="vorteile"
          eyebrow="Premium Chauffeur"
          title="Premium-Service, der überzeugt"
          subtitle="Tausende Kunden vertrauen täglich auf unseren Service – aus guten Gründen."
          dark
          className="bg-[#1F1F1F] relative overflow-hidden"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-0"
            style={{
              background:
                "radial-gradient(60% 40% at 15% 0%, rgba(244,196,48,0.12), transparent 70%), radial-gradient(50% 40% at 90% 100%, rgba(244,196,48,0.08), transparent 70%)",
            }}
          />
          <div className="relative mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {benefits.map((b, i) => (
              <ServicePhotoCard key={b.title} {...b} index={i} variant="dark" />
            ))}
          </div>

          <dl className="relative mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/10 pt-10">
            {[
              { icon: Zap, v: "< 8 Min.", l: "Durchschnittliche Wartezeit" },
              { icon: Clock, v: "24/7", l: "Erreichbar für Sie" },
              { icon: BadgeEuro, v: "100%", l: "Transparente Festpreise" },
              { icon: Car, v: "Premium", l: "Mercedes-Flotte" },
            ].map(({ icon: Icon, v, l }) => (
              <div key={l} className="flex flex-col items-center text-center">
                <span className="inline-flex h-[51px] w-[51px] items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_0_30px_-5px_rgba(244,196,48,0.6)]">
                  <Icon className="h-[23px] w-[23px]" />
                </span>
                <dt className="mt-4 text-[1.8rem] sm:text-[2.25rem] font-extrabold text-white">{v}</dt>
                <dd className="mt-1 text-xs sm:text-sm text-white/75 uppercase tracking-wider">{l}</dd>
              </div>
            ))}
          </dl>
        </Section>


        <Section
          id="ablauf"
          eyebrow="So funktioniert es"
          title="In 3 Schritten zur Fahrt"
          subtitle="Von der Anfrage bis zur Abholung – in wenigen Minuten."
          className="pt-4 sm:pt-8"
        >
          <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-4">
            {steps.map((s, i) => (
              <Fragment key={s.n}>
                <StepCard step={s} index={i} icon={s.icon} />
                {i < steps.length - 1 && (
                  <div className="hidden md:flex flex-none items-center justify-center self-center text-accent">
                    <ArrowRight className="h-9 w-9" strokeWidth={1.5} />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </Section>

        <Section
          id="stimmen"
          eyebrow="Kundenstimmen"
          title="Das sagen unsere Kunden"
          className="py-24 sm:py-36"
          subtitle={
            <span className="inline-flex flex-wrap items-center gap-2 text-sm sm:text-base">
              <span className="inline-flex text-accent drop-shadow-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </span>
              <span>4.9/5 bei Google</span>
              <span>•</span>
              <span>Über 12.000 zufriedene Fahrgäste</span>
            </span>
          }
        >
          <div className="grid grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-6">
            {reviews.map((r, i) => (
              <ReviewCard key={r.name} review={r} index={i} />
            ))}
          </div>
        </Section>

        <Section
          id="faq"
          eyebrow="FAQ"
          title="Häufig gestellte Fragen"
          subtitle="Antworten auf die häufigsten Fragen zu unserem Service und diesem Projekt."
          className="!pt-8 sm:!pt-12 !pb-8 sm:!pb-10"
        >
          <div className="w-full">
            <Accordion type="single" collapsible className="w-full space-y-6">
              {faqs.map((f, i) => {
                const isLast = i === faqs.length - 1;
                return (
                  <AccordionItem
                    key={f.q}
                    value={`item-${i}`}
                    className={cn(
                      "min-h-[96px] sm:min-h-[92px] rounded-[18px] border border-border bg-card px-7 shadow-[0_8px_30px_-12px_rgba(15,15,15,0.12)] overflow-hidden transition-all duration-[250ms] hover:bg-accent/[0.04] hover:shadow-[0_14px_45px_-12px_rgba(15,15,15,0.16)] hover:-translate-y-0.5",
                      isLast
                        ? "border-accent bg-accent/[0.08] data-[state=open]:bg-accent/[0.12] data-[state=open]:border-accent data-[state=open]:shadow-[0_20px_55px_-12px_rgba(15,15,15,0.2)]"
                        : "data-[state=open]:border-accent data-[state=open]:shadow-[0_20px_55px_-12px_rgba(15,15,15,0.2)]"
                    )}
                  >
                    <AccordionTrigger
                      className={cn(
                        "h-full items-center text-left py-7 text-base sm:text-lg font-semibold hover:text-accent hover:no-underline transition-colors duration-[250ms]",
                        isLast && "text-lg sm:text-xl font-semibold"
                      )}
                    >
                      <span className="inline-flex items-center gap-4">
                        <span className="grid place-items-center h-10 w-10 shrink-0 rounded-lg bg-accent/15 text-accent">
                          <f.icon className="h-5 w-5" />
                        </span>
                        {f.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-7 duration-300">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
            <div className="mt-10 text-center">
              <p className="text-sm sm:text-base text-muted-foreground">
                Noch Fragen? Kontaktieren Sie uns jederzeit – wir beraten Sie gerne persönlich.
              </p>
              <a
                href="#kontakt"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="mt-5 group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-9 py-4 text-base font-bold shadow-premium hover:shadow-glow hover:-translate-y-1 hover:scale-[1.02] transition-all duration-[250ms]"
              >
                Jetzt Kontakt aufnehmen
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </Section>

        <Section
          id="projekt-kauf"
          eyebrow="Projekt zu verkaufen"
          title="Komplette Website inklusive Domain linetaxi.de"
          subtitle="Ein schlüsselfertiges Premium-Projekt für Ihren Taxi- oder Mobilitätsbetrieb – sofort startklar."
          subtitleClassName="!mt-6"
          className="!pt-12 sm:!pt-16 !pb-10 sm:!pb-12"
        >
          <div className="grid lg:grid-cols-[62fr_38fr] gap-6 lg:gap-8 items-start">
            <div className="relative overflow-hidden rounded-[28px] border border-accent/20 bg-card p-10 sm:p-12 lg:p-14 shadow-[0_24px_70px_-18px_rgba(15,15,15,0.12)] transition-all duration-300 hover:shadow-[0_32px_90px_-20px_rgba(15,15,15,0.16)] hover:-translate-y-1">
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent-foreground">
                  <Sparkles className="h-3.5 w-3.5" />
                  Premium Angebot
                </div>
                <h3 className="mt-5 text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
                  Diese komplette Website inklusive der Domain linetaxi.de steht zum Verkauf.
                </h3>

                <div className="mt-8 sm:mt-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent-foreground">
                    <Zap className="h-3.5 w-3.5" />
                    Sofort verfügbar
                  </div>
                  <div className="mt-3 flex flex-wrap items-end gap-4">
                    <p className="text-[72px] sm:text-[90px] lg:text-[100px] font-black tracking-tight text-price text-shadow-gold leading-none">
                      490&nbsp;€
                    </p>
                    <p className="text-sm text-muted-foreground max-w-[14rem] mb-2 sm:mb-3">
                      Domain + Website + alle Rechte. Keine versteckten Kosten.
                    </p>
                  </div>
                  <p className="mt-2 text-sm sm:text-base font-medium text-foreground/80">
                    Einmalige Zahlung – keine monatlichen Gebühren.
                  </p>
                </div>

                <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {projectBenefits.map((b) => (
                    <div key={b.title} className="group flex items-center gap-3">
                      <span className="grid place-items-center h-9 w-9 shrink-0 rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                        <b.icon className="h-4.5 w-4.5" />
                      </span>
                      <p className="text-sm font-semibold text-foreground">{b.title}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 sm:mt-10 flex flex-col gap-4">
                  <a
                    href="https://sedo.com/search/details/?domain=linetaxi.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-accent via-accent to-amber-300 text-accent-foreground px-8 py-5 text-base sm:text-lg font-extrabold ring-2 ring-accent/40 shadow-glow hover:-translate-y-1 hover:shadow-[0_0_80px_-10px_rgba(218,165,32,0.45)] transition-all duration-[250ms]"
                  >
                    <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg] animate-shine-sweep" />
                    <Shield className="h-6 w-6 relative" />
                    <span className="relative">Über Sedo kaufen</span>
                    <ArrowRight className="h-5 w-5 relative group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#kontakt"
                    onClick={onProjectAnchor}
                    className="group w-full inline-flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-5 text-base sm:text-lg font-bold hover:bg-accent hover:text-accent-foreground shadow-premium hover:-translate-y-1 hover:shadow-[0_0_80px_-10px_rgba(218,165,32,0.45)] transition-all duration-[250ms]"
                  >
                    <Send className="h-6 w-6" />
                    Projekt anfragen
                  </a>
                </div>

                <p className="mt-5 text-xs text-muted-foreground text-center sm:text-left">
                  Sichere Kaufabwicklung und geschützter Domain-Transfer über SEDO.
                </p>
              </div>
            </div>

            <aside>
              <div className="rounded-[24px] border border-border bg-secondary/50 p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(15,15,15,0.12)] transition-all duration-300 hover:shadow-[0_28px_80px_-18px_rgba(15,15,15,0.15)] hover:-translate-y-1">
                <div className="flex items-center gap-2">
                  <span className="grid place-items-center h-9 w-9 shrink-0 rounded-full bg-accent/10 text-accent">
                    <Shield className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="text-lg font-bold text-foreground">Warum sicher kaufen?</h3>
                </div>
                <ul className="mt-5 space-y-4">
                  {[
                    { icon: Lock, text: "Sichere Zahlung via SEDO Treuhand" },
                    { icon: CheckCircle2, text: "Garantierter Domain-Transfer" },
                    { icon: BadgeCheck, text: "Alle Rechte an Website & Domain" },
                    { icon: LifeBuoy, text: "Persönliche Betreuung beim Transfer" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <span className="grid place-items-center h-6 w-6 shrink-0 rounded-full bg-accent/10 text-accent mt-0.5">
                        <item.icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm text-foreground/90 leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-accent-foreground">
                  <Shield className="h-3.5 w-3.5" />
                  100% sicher über SEDO
                </div>
              </div>
            </aside>
          </div>
        </Section>

        <Section
          id="kontakt"
          eyebrow="Kontakt"
          title="Fahrt anfragen"
          subtitle="Senden Sie uns Ihre Anfrage – wir melden uns umgehend mit Ihrem persönlichen Festpreis."
          className="pt-20 sm:pt-28 pb-8 sm:pb-12"
        >
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-10">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <span className="grid place-items-center h-9 w-9 rounded-lg bg-accent text-accent-foreground">
                    <Car className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold">Taxi-Fahrt anfragen</h3>
                </div>
                <ContactForm />
              </div>

              <div id="projekt-anfrage" className="scroll-mt-24">
                <div className="mb-4 flex items-center gap-2">
                  <span className="grid place-items-center h-9 w-9 rounded-lg bg-primary text-primary-foreground">
                    <Globe className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold">Projekt anfragen</h3>
                </div>
                <p className="mb-4 text-sm sm:text-base text-muted-foreground">
                  Interessieren Sie sich für den Kauf dieser kompletten Website inklusive Domain?
                  Schreiben Sie uns eine Nachricht.
                </p>
                <ProjectInquiryForm />
              </div>
            </div>
            <aside className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl bg-primary text-primary-foreground p-8">
                <h3 className="text-xl font-bold">Direkt erreichbar</h3>
                <p className="mt-2 text-white/70 text-sm">Lieber persönlich? Rufen Sie uns jederzeit an – auch nachts.</p>
                <div className="mt-6 space-y-4">
                  <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 group">
                    <span className="grid place-items-center h-11 w-11 rounded-xl bg-accent text-accent-foreground">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-white/60">Telefon</span>
                      <span className="font-bold group-hover:text-accent transition-colors">{PHONE}</span>
                    </span>
                  </a>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <span className="grid place-items-center h-11 w-11 rounded-xl bg-accent text-accent-foreground">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-white/60">WhatsApp</span>
                      <span className="font-bold group-hover:text-accent transition-colors">Chat starten</span>
                    </span>
                  </a>
                  <a href={MAILTO} className="flex items-center gap-3 group">
                    <span className="grid place-items-center h-11 w-11 rounded-xl bg-accent text-accent-foreground">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-white/60">E-Mail</span>
                      <span className="font-bold group-hover:text-accent transition-colors break-all">{EMAIL}</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border shadow-premium h-72">
                <iframe
                  title="Einsatzgebiet LineTaxi"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=13.3,52.45,13.5,52.55&layer=mapnik"
                  className="w-full h-full grayscale-[20%]"
                  loading="lazy"
                />
              </div>
            </aside>
          </div>
        </Section>

      </main>

      <Footer />
    </div>
  );
}
