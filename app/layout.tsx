import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ankush-portfolio.vercel.app"),
  title: "Ankush Majalikar | AI Engineer Portfolio OS",
  description:
    "3D animated AI/ML portfolio for Ankush Majalikar, featuring projects, skills, resume, analytics, and contact links.",
  openGraph: {
    title: "Ankush Majalikar | AI Engineer Portfolio OS",
    description:
      "AI/ML Engineer, Data Scientist, and Python Developer portfolio with dynamic 3D animation.",
    images: ["/assets/ankush-majalikar.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
