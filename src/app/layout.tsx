import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vale Tech Talks - Tech Meetup do Vale do Sinos",
  description:
    "Comunidade de profissionais e estudantes de TI do Vale do Rio dos Sinos. Eventos gratuitos sobre programação, frameworks, carreira e tecnologias emergentes.",
  keywords: [
    "tech meetup",
    "vale do sinos",
    "programação",
    "desenvolvimento",
    "tecnologia",
    "novo hamburgo",
  ],
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
