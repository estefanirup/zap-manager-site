import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "@/app/globals.css";
import LenisProvider from "@/providers/lenis";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Silicon Village | Inovação Tecnológica com IA, Design e Software",
    template: "%s | Silicon Village",
  },
  description: "Somos especialistas em inovação tecnológica. Desenvolvemos produtos digitais, soluções de IA, gestão de atendimento inteligente e infraestrutura em nuvem. +20 anos de mercado, AWS Partner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${publicSans.className} antialiased w-full min-h-screen overflow-x-hidden`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}