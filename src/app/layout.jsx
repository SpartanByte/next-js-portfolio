import "./globals.css";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { laptopCoffeeAboveImage } from '../assets'
import Script from 'next/script'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Brian Wardwell | Web Development',
  description: 'Brian Wardwell: Web and Software Developer Portfolio Website',
}

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
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-15V33GPK3X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-15V33GPK3X');
          `}
        </Script>
      </body>
    </html>
  );
}
