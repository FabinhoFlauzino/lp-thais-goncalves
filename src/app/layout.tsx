import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Thaís Gonçalves",
  description: "Cirurgiã-dentista apaixonada por transformar sorrisos e promover saúde com um olhar humanizado e inovador.",
  openGraph: {
    title: "Dra. Thaís Gonçalves",
    description: "Cirurgiã-dentista apaixonada por transformar sorrisos e promover saúde com um olhar humanizado e inovador.",
    url: "https://www.drathaisgoncalvesoficial.com.br",
    siteName: "Dra. Thaís Gonçalves",
    images: [
      {
        url: "/logo-com-nome.png", 
        width: 1200,
        height: 630,
        alt: "Transformando Sorrisos",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={``}>
        {children}
      </body>
    </html>
  );
}
