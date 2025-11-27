import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr.-Ing. Marco Giannantonio – HV Battery & Powertrain Strategy",
  description:
    "Executive profile of Dr.-Ing. Marco Giannantonio, Mercedes-Benz AG – HV battery pre-development and electrified powertrain strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-body text-text-primary antialiased">
        <div className="min-h-screen flex justify-center">
          <div className="relative w-full max-w-6xl px-6 py-10 md:px-10 md:py-12">
            {/* subtle background accent */}
            <div className="pointer-events-none fixed inset-0 -z-10 bg-body">
              <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
