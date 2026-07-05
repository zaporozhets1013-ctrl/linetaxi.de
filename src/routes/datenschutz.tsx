import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer, EMAIL, MAILTO } from "../components/site-chrome";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – LineTaxi" },
      { name: "description", content: "Datenschutzerklärung von LineTaxi – Informationen zur Verarbeitung Ihrer personenbezogenen Daten." },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-x max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Rechtliches
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
            Datenschutzerklärung
          </h1>

          <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-foreground">1. Verantwortlicher</h2>
              <p className="mt-2">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist LineTaxi,
                Musterstraße 1, 10115 Berlin. Kontakt:{" "}
                <a href={MAILTO} className="text-foreground hover:text-accent break-all">
                  {EMAIL}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground">2. Erhebung und Speicherung personenbezogener Daten</h2>
              <p className="mt-2">
                Bei der Nutzung unseres Kontaktformulars oder der Anfrage einer Fahrt erheben wir
                Name, Telefonnummer, E-Mail-Adresse, Abhol- und Zieladresse sowie eine optionale
                Nachricht. Diese Daten verarbeiten wir ausschließlich zur Bearbeitung Ihrer
                Anfrage auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground">3. Server-Logfiles</h2>
              <p className="mt-2">
                Unser Hosting-Anbieter erhebt automatisch Informationen wie IP-Adresse,
                Browsertyp und Zugriffszeit. Diese Daten dienen der Sicherstellung eines
                störungsfreien Betriebs und werden nicht mit anderen Datenquellen zusammengeführt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground">4. Karten und externe Dienste</h2>
              <p className="mt-2">
                Auf unserer Seite binden wir eine Karte von OpenStreetMap ein. Beim Laden der
                Karte werden technisch notwendige Verbindungsdaten an OpenStreetMap übermittelt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground">5. Ihre Rechte</h2>
              <p className="mt-2">
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
                Einschränkung der Verarbeitung sowie Datenübertragbarkeit und Widerspruch.
                Wenden Sie sich hierzu an{" "}
                <a href={MAILTO} className="text-foreground hover:text-accent break-all">
                  {EMAIL}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground">6. Speicherdauer</h2>
              <p className="mt-2">
                Ihre Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt und
                gesetzliche Aufbewahrungspflichten nicht entgegenstehen.
              </p>
            </section>
          </div>

          <div className="mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              ← Zur Startseite
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
