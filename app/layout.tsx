import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Previmax | Plateforme Intelligente de Maintenance Prédictive',
  description: 'Previmax transforme votre maintenance industrielle avec une solution prédictive et prescriptive. Interopérabilité universelle, automatisation complète et intelligence artificielle.',
  icons: {
    icon: '/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        {children}
        {isProduction ? <Analytics /> : null}
      </body>
    </html>
  )
}
