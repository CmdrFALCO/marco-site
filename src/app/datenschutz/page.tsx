import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Cristian Leu",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Datenschutzerklärung
        </h1>

        <section className="space-y-2 text-sm md:text-base text-white/80">
          <h2 className="text-lg font-semibold">Verantwortlicher</h2>
          <p>Cristian Leu</p>
          <p>E-Mail: contact@cristian-leu.de</p>
        </section>

        <section className="space-y-2 text-sm md:text-base text-white/80">
          <h2 className="text-lg font-semibold">
            Erhebung und Speicherung personenbezogener Daten
          </h2>
          <p>
            Beim Aufruf meiner Website werden automatisch Informationen an den
            Server meiner Website gesendet und temporär in sogenannten Logfiles
            gespeichert. Dies sind z. B.:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Referrer-URL</li>
            <li>Browsertyp und -version sowie ggf. Betriebssystem</li>
          </ul>
          <p>
            Diese Daten werden verarbeitet, um die Systemsicherheit und eine
            komfortable Nutzung der Website zu gewährleisten.
          </p>
        </section>

        <section className="space-y-2 text-sm md:text-base text-white/80">
          <h2 className="text-lg font-semibold">Kontaktaufnahme</h2>
          <p>
            Wenn Sie mir per E-Mail Anfragen senden, werden Ihre Angaben zur
            Bearbeitung gespeichert. Diese Daten gebe ich nicht ohne Ihre
            Einwilligung weiter.
          </p>
        </section>

        <section className="space-y-2 text-sm md:text-base text-white/80">
          <h2 className="text-lg font-semibold">Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
            Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
            Wenden Sie sich hierzu an die im Impressum angegebene Adresse.
          </p>
        </section>

        <section className="space-y-2 text-sm md:text-base text-white/80">
          <h2 className="text-lg font-semibold">Beschwerderecht</h2>
          <p>
            Sie haben das Recht, sich bei der zuständigen
            Datenschutz-Aufsichtsbehörde zu beschweren.
          </p>
        </section>
      </div>
    </main>
  );
}
