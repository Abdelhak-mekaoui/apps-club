import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import  SessionProvider  from "./SessionProvider"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="en">
        <body>
          <SessionProvider>
            <Navbar />
            {children}
            <Footer />
          </SessionProvider>
        </body>
      </html>
  )
}
