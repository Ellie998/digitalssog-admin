export const runtime = "edge";

import Script from "next/script";
import "./layout.css";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Progress from "@/components/progress";

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning={true} className="h-full">
      <head>
        <meta
          name="naver-site-verification"
          content={process.env.NEXT_PUBLIC_NAVER_VERIFICATION}
        />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script id="google-analytics">
          {`const host = window.location.hostname;
          if(host != "localhost"){
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        }
          `}
        </Script>

        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          async={true}
          rel="preload"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
          crossOrigin="anonymous"></Script>
      </head>
      <body suppressHydrationWarning={true} className="h-full">
        <Progress />
        {children}
        <ToastContainer position="bottom-left" />
      </body>
    </html>
  );
}
