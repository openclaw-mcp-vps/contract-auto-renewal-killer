import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contract Auto-Renewal Killer — Cancel Before It Costs You',
  description: 'Track contract renewal dates and automatically cancel or negotiate before auto-renewal. Built for finance teams and procurement managers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="31995c68-f732-4aaa-a4ce-27f52b64ef1e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
