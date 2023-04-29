import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

const montserrat =  Montserrat({
  weight: ['900', '300'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PaztG Motionworks',
  description: 'Motionworks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
