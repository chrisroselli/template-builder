import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from 'next/image';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Treehouse Template Builder",
  description: "Template Builder for Treehouse Production team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary`}
    >
    <div className="w-full bg-white h-24 flex justify-left pl-5">
      <Image
      src="/img/th-marketing-logo-2021.svg"
      alt="Treehouse Marketing Logo"
      width={200}
      height={500}
    />
    </div>
      <div className="max-w-7xl mx-auto my-4">
    {children}
    </div>
    <div className="w-full bg-primary h-24"></div>
    </body>
    </html>
  );
}
