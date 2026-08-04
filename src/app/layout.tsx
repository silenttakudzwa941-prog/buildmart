import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppButton from "../../components/WhatsAppButton";
import { QuoteProvider } from '@/context/QuoteContext';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KAZMAT HARDWARE | Quality Building Materials",
  description: "Your trusted hardware store in Marondera. Cement, roofing, plumbing, electrical, tools & more. Visit kazmathardware.com",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "KAZMAT HARDWARE",
    description: "Quality Building Materials & Hardware Supplies",
    url: "https://www.kazmathardware.com",
    siteName: "KAZMAT HARDWARE",
    images: [
      {
        url: "/logo01.png", // put your logo in public folder
        width: 1200,
        height: 630,
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <QuoteProvider>
          {children}
          <WhatsAppButton />
        </QuoteProvider>
      </body>
    </html>
  );
 
}


