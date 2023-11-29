import type { Metadata } from "next"
import "./globals.css"
import Navbar from "../../components/Navbar"
import { ThemeProvider } from "../../components/ThemeProvider"
import Footer from "../../components/Footer"

export const metadata: Metadata = {
  title: "Liam Cohen",
  description: "Liam Cohen's portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
