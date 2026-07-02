import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "프롬프트 엔지니어링 심화 | Advanced Prompt Engineering",
  description:
    "인하대학교 MFTEL 대학원 AI 바이브코딩·프롬프트 엔지니어링 심화. LLM 작동 원리부터 근거 기반 프롬프트 기법·컨텍스트 엔지니어링·평가까지.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "프롬프트 엔지니어링 심화 | Advanced Prompt Engineering",
    description:
      "MFTEL 대학원 AI 바이브코딩·프롬프트 엔지니어링 심화 — LLM 원리·CoT·ReAct·RAG·평가.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
