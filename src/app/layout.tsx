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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
