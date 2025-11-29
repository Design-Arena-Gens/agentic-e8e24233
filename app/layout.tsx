import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kiran Tea - Main Character Energy in a Cup',
  description: 'Authentic Darjeeling tea with Gen Z premium vibes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-matte-black">{children}</body>
    </html>
  )
}
