import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trung Nguyen - Software Engineer",
  description: "Trung Nguyen is a software engineer with experience in frontend and backend technologies including Java, React, Angular, and AEM. Skilled in digital banking, Adobe Experience Manager, and logistics systems.",
  keywords: "Software Engineer, Java Developer, Full Stack Developer, AEM Developer, Vietnam Software Engineer, Digital Banking, Adobe Experience Manager",
  authors: [{ name: "Trung Nguyen" }],
  creator: "Trung Nguyen",
  publisher: "Trung Nguyen",
  robots: "index, follow",
  icons: {
    icon: '/ttng/favicon.svg',
    shortcut: '/ttng/favicon.svg',
    apple: '/ttng/favicon.svg',
    other: {
      rel: 'mask-icon',
      url: '/ttng/favicon.svg',
    },
  },
  openGraph: {
    type: "profile",
    title: "Trung Nguyen - Software Engineer",
    description: "Software Engineer specializing in Java, AEM, and Digital Banking solutions",
    images: ["/ttng/me.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trung Nguyen - Software Engineer",
    description: "Software Engineer specializing in Java, AEM, and Digital Banking solutions",
    images: ["/ttng/me.jpeg"],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://media.twiliocdn.com/sdk/js/webchat-v3/releases/3.3.0/webchat.min.js"
          integrity="sha256-ydLLXnNrb26iFUvKAHsYt9atwfzz0LNcgBmo0NmD5Uk="
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        {children}
        <div id="twilio-webchat-widget-root"></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("load", () => {
                const appConfig = {
                  deploymentKey: "CV65ca0626bf17f90209e6c9718bc8775e",
                  appStatus: "open",
                  fileAttachment: {
                    enabled: false
                  }
                };
                Twilio.initWebchat(appConfig);
              });
            `,
          }}
        ></script>
      </body>
    </html>
  );
}
