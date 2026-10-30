import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/portfolio";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cabinet = localFont({
  src: "../../public/fonts/CabinetGrotesk-Medium.ttf",
  variable: "--font-body",
  display: "swap",
});
const clash = localFont({
  src: "../../public/fonts/ClashDisplay-Semibold.ttf",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: {
    default: `${profile.shortName} — Backend & Distributed Systems`,
    template: `%s | ${profile.shortName}`,
  },
  description: profile.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.shortName} — Good systems. Built to hold.`,
    description: profile.description,
    url: profile.url,
    siteName: profile.shortName,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    title: `${profile.shortName} — Backend & Distributed Systems`,
    description: profile.description,
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#141413" },
    { media: "(prefers-color-scheme: light)", color: "#f4f2eb" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: profile.url,
    jobTitle: profile.role,
    sameAs: [profile.github, profile.linkedin, profile.leetcode],
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Birla Institute of Technology, Mesra",
    },
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cabinet.variable} ${clash.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(person).replace(/</g, "\\u003c"),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
