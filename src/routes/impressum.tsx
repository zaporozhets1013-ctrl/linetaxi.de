import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer, EMAIL, MAILTO, PHONE, PHONE_TEL } from "../components/site-chrome";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – LineTaxi" },
      { name: "description", content: "Impressum und Anbieterkennzeichnung von LineTaxi." },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-x max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Rechtliches
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">Impressum</h1>

          <div className="prose prose-neutral mt-10 space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-bold">Angaben gemäß § 5 TMG</h2>
              <p className="mt-2 text-muted-foreground">
                LineTaxi<br />
                Musterstraße 1<br />
                10115 Berlin<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">Kontakt</h2>
              <p className="mt-2 text-muted-foreground">
                Telefon:{" "}
                <a href={`tel:${PHONE_TEL}`} className="text-foreground hover:text-accent">
                  {PHONE}
                </a>
                <br />
                E-Mail:{" "}
                <a href={MAILTO} className="text-foreground hover:text-accent break-all">
                  {EMAIL}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">Vertretungsberechtigte Person</h2>
              <p className="mt-2 text-muted-foreground">Geschäftsführung: Oleksandr Zaporozhets</p>
            </section>

            <section>
              <h2 className="text-xl font-bold">Umsatzsteuer-ID</h2>
              <p className="mt-2 text-muted-foreground">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE000000000
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="mt-2 text-muted-foreground">
                Oleksandr Zaporozhets<br />
                Musterstraße 1, 10115 Berlin
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">Haftungsausschluss</h2>
              <p className="mt-2 text-muted-foreground">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
                Gewähr übernehmen.
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
