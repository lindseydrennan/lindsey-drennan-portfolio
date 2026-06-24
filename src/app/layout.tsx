import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Libre_Baskerville, Plus_Jakarta_Sans, Work_Sans } from "next/font/google";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const baskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Lindsey Drennan - Brand & Web Designer",
    template: "%s | Lindsey Drennan",
  },
  description:
    "I'm a brand designer, web designer, front-end developer and photographer. Passionate about brand standards and design systems.",
  icons: {
    icon: "https://cdn.prod.website-files.com/674b6532c29e9c0c254fa406/674b9b90f668f9d0ac136a65_favicon-lindsey.png",
    apple:
      "https://cdn.prod.website-files.com/674b6532c29e9c0c254fa406/674b9bc545841811bb82c86a_web-lindsey.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexMono.variable} ${baskerville.variable} ${jakarta.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
