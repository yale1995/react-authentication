'use client'
import './global.css'
import { AuthProvider } from '../contexts/AuthContext'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <AuthProvider>
      <html lang="pt-BR">
        <head />

        <body>{children}</body>

      </html>
    </AuthProvider>
  )
}
