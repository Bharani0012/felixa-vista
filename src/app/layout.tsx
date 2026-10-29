import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Felixa Vistas | Plotted Development in Padappai, Chennai",
  description:
    "Gated residential plots in Padappai, Chennai with 25+ lifestyle amenities, 10 minutes from Vandalur Bus Stand and home loans up to 80%.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="bg-white font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
