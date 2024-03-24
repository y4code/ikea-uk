import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL("https://ikea-cheap.vercel.app/"),
    title: "IKEA UK Low Price Products",
    description: "IKEA UK Low Price Products | IKEA UK Low Price Goods; IKEA Discount Products; IKEA Specials List",
    openGraph: {
      type: "website",
      siteName: "IKEA UK Low Price Products",
      title: "IKEA UK Low Price Products",
      description: "IKEA UK Low Price Products | IKEA UK Low Price Goods; IKEA Discount Products; IKEA Specials List",
      url: "https://ikea-cheap.vercel.app/",
      images: [{ url: "https://github.com/y4code/ikea-uk/raw/main/screenshot.png" }],
    },
    twitter: {
      creator: "@y4code",
      site: "@y4code",
      title: "IKEA UK Low Price Products",
      description: "IKEA UK Low Price Products | IKEA UK Low Price Goods; IKEA Discount Products; IKEA Specials List",
      images: [{ url: "https://github.com/y4code/ikea-uk/raw/main/screenshot.png" }],
    },
    appleWebApp: {
      statusBarStyle: "black-translucent",
      title: "IKEA UK Low Price Products",
    },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-bold`}>
        <main>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <footer className="flex justify-center text-gray-700 py-4 font-bold dark:text-white">
          <a href="https://github.com/y4code/ikea-uk" className="hover:underline mx-3">GitHub</a>
          {" · "}
          <a href="https://ikea-lp.netlify.app" className="hover:underline mx-3">Inspired by ikea-low-price</a>
        </footer>
      </body>
    </html>
  )
}
