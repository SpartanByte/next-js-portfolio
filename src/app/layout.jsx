import Metadata  from "next";
import "./globals.css";

import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { laptopCoffeeAboveImage } from '../assets'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<body className={outfit.className}>
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
