import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { laptopCoffeeAboveImage } from '../assets'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brian Wardwell",
  description: "Portfolio: Web and Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} 
      >

      {/* Background Image Div */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${laptopCoffeeAboveImage}')` }}
      ></div>

      {/* Overlay Div */}
      <div className="absolute inset-0 bg-black/70"></div>
        {children}
      </body>
    </html>
  );
}
