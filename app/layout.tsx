import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SmoothScroll from "@/components/SmoothScroll";
import LocaleProvider from "@/components/LocaleProvider";
import T from "@/components/T";

/* The two faces the design system asks for, self-hosted by `next/font` at
   build time — no request leaves the page at runtime, and no machine has to
   happen to own the right font. Ringside (Lilly's face) is not free; Inter is
   the geometric grotesque the stack was already falling back towards, and it
   holds the measured scale's tight tracking at 106px. EB Garamond gives the
   serif italic a real italic — the emphasis in the statement and the task-row
   heading used to land in whatever Garamond-ish face the machine had. */
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cosmoxchemicals.example"),
  title: {
    default: "Cosmox Chemicals — Speciality Chemistry, Manufactured & Exported",
    template: "%s — Cosmox Chemicals",
  },
  description:
    "Cosmox Chemicals manufactures and exports metal soaps, halogen-free hypophosphite flame retardants, high-purity intermediates and functional materials from Surat, Gujarat, India.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* `lang` is what the site is written in and what prerenders; the country
       menu rewrites it on the element when a visitor picks another language,
       so a screen reader and the browser's own translation prompt both follow
       the choice. */
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <LocaleProvider>
          <a className="skip-link" href="#main">
            <T>Skip to content</T>
          </a>
          <SmoothScroll />
          <Reveal />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
