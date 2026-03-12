import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://valetechtalks.com.br"),
  title: {
    default: "Vale Tech Talks - Tech Meetup do Vale do Sinos",
    template: "%s | Vale Tech Talks",
  },
  description:
    "Comunidade de profissionais e estudantes de TI do Vale do Rio dos Sinos. Eventos gratuitos sobre programação, frameworks, carreira e tecnologias emergentes.",
  keywords: [
    "tech meetup",
    "vale do sinos",
    "vale do rio dos sinos",
    "programação",
    "desenvolvimento",
    "tecnologia",
    "novo hamburgo",
    "feevale",
    "comunidade tech",
    "meetup gratuito",
    "TI",
    "software",
    "carreira em tecnologia",
    "Rio Grande do Sul",
  ],
  authors: [{ name: "Vale Tech Talks" }],
  creator: "Vale Tech Talks",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://valetechtalks.com.br",
    siteName: "Vale Tech Talks",
    title: "Vale Tech Talks - Tech Meetup do Vale do Sinos",
    description:
      "Comunidade de profissionais e estudantes de TI do Vale do Rio dos Sinos. Eventos gratuitos sobre programação, frameworks, carreira e tecnologias emergentes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vale Tech Talks - Tech Meetup do Vale do Sinos",
    description:
      "Comunidade de profissionais e estudantes de TI do Vale do Rio dos Sinos. Eventos gratuitos sobre programação, frameworks, carreira e tecnologias emergentes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://valetechtalks.com.br",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#818cf8" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
