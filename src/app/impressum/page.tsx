import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Cristian Leu",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold">Impressum</h1>

        <div className="space-y-2 text-sm md:text-base text-white/80">
          <p>Angaben gemäß § 5 TMG</p>
          <p>Cristian Leu</p>
          <p>Weinbergstr.</p>
          <p>72108 Rottenburg am Neckar</p>
          <p>Deutschland</p>

          <p className="mt-4">E-Mail: contact@cristian-leu.de</p>

          <p className="mt-6 font-semibold">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </p>
          <p>Cristian Leu</p>
        </div>
      </div>
    </main>
  );
}
