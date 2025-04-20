import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trung Nguyen - Expert Software Engineer",
  description: "Trung Nguyen is a polyglot Software Engineer with experience in frontend and backend technologies including Java, React, Angular, and AEM. Expert in digital banking, Adobe Experience Manager, and logistics systems.",
  keywords: "Software Engineer, Java Developer, Full Stack Developer, AEM Developer, Vietnam Software Engineer, Digital Banking, Adobe Experience Manager",
  authors: [{ name: "Trung Nguyen" }],
  creator: "Trung Nguyen",
  publisher: "Trung Nguyen",
  robots: "index, follow",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
    other: {
      rel: 'mask-icon',
      url: '/favicon.svg',
    },
  },
  openGraph: {
    type: "profile",
    title: "Trung Nguyen - Expert Software Engineer",
    description: "Expert Software Engineer specializing in Java, AEM, and Digital Banking solutions",
    images: ["/profile-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trung Nguyen - Expert Software Engineer",
    description: "Expert Software Engineer specializing in Java, AEM, and Digital Banking solutions",
    images: ["/profile-image.jpg"],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
