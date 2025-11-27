import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

const siteUrl = "https://example-marco-site.com"; // TODO: replace with production domain
const ogImageUrl = "/og-image.png";

export const metadata: Metadata = {
  // TODO: Replace with real production URL
  metadataBase: new URL("https://example-marco-site.com"),
  title: "Dr.-Ing. Marco Giannantonio - HV Battery & eDrive Strategy",
  description:
    "Project lead for high-voltage battery and eDrive strategy at Mercedes-Benz, shaping next-generation electric platforms through concept engineering and simulation.",
  keywords: [
    "Marco Giannantonio",
    "HV battery",
    "eDrive",
    "powertrain architecture",
    "Mercedes-Benz",
    "Dr.-Ing.",
    "simulation and data analytics",
  ],
  openGraph: {
    title: "Dr.-Ing. Marco Giannantonio - HV Battery & eDrive Strategy",
    description:
      "Project lead for high-voltage battery and eDrive strategy at Mercedes-Benz, shaping next-generation electric platforms through concept engineering and simulation.",
    type: "website",
    locale: "en_US",
    siteName: "Dr.-Ing. Marco Giannantonio",
    url: siteUrl,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Dr.-Ing. Marco Giannantonio – HV Battery & eDrive Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr.-Ing. Marco Giannantonio - HV Battery & eDrive Strategy",
    description:
      "Project lead for high-voltage battery and eDrive strategy at Mercedes-Benz, shaping next-generation electric platforms through concept engineering and simulation.",
    images: [ogImageUrl],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr.-Ing. Marco Giannantonio",
  jobTitle: "Project Lead - HV Battery Predevelopment",
  worksFor: {
    "@type": "Organization",
    name: "Mercedes-Benz AG",
  },
  url: siteUrl,
  sameAs: ["https://www.linkedin.com/in/dr-ing-marco-giannantonio-518383140/"],
  knowsAbout: [
    "High-voltage battery systems",
    "eDrive and powertrain architecture",
    "Simulation and data analytics",
    "Electric vehicle platforms",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-body text-text-primary antialiased">
        <div className="min-h-screen flex flex-col bg-body">
          {/* subtle background accent */}
          <div className="pointer-events-none fixed inset-0 -z-10 bg-body">
            <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          </div>
          <main className="flex-1">
            <div className="relative w-full max-w-6xl px-6 py-10 md:px-10 md:py-12 mx-auto">
              {children}
            </div>
          </main>
          <Footer />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
