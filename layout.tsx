import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sanitätshaus-Online.Shop',
  description: 'Medizinische Fachkompetenz für Ihr Zuhause',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-background font-inter text-on-surface antialiased">
        <header className="bg-slate-900 sticky top-0 z-50 border-b border-slate-800 shadow-sm font-manrope">
          <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
            <div className="flex items-center gap-8">
              <a href="/" className="text-xl font-bold text-white tracking-tight">
                Sanitätshaus-Online.Shop
              </a>
              <nav className="hidden md:flex gap-6 items-center">
                <a href="/produkte" className="text-slate-300 hover:text-white transition-colors text-sm">Produkte</a>
                <a href="/blog" className="text-slate-300 hover:text-white transition-colors text-sm">Blog</a>
                <a href="/kontakt" className="text-slate-300 hover:text-white transition-colors text-sm">Kontakt</a>
              </nav>
            </div>
            <div className="flex items-center gap-6">
              <button className="hidden lg:block bg-[#006666] text-white px-4 py-2 text-sm font-bold rounded-lg hover:bg-teal-700 transition-all">
                Rezept hochladen
              </button>
              <div className="flex gap-2 text-white">
                <span className="material-symbols-outlined cursor-pointer hover:bg-slate-800/50 p-2 rounded-full transition-all">shopping_cart</span>
                <span className="material-symbols-outlined cursor-pointer hover:bg-slate-800/50 p-2 rounded-full transition-all">account_circle</span>
              </div>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <section className="bg-[#f0f3ff] py-12 border-t border-[#bec9c8]/30">
          <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-between items-center gap-8 grayscale opacity-70">
            {[
              { icon: 'verified', text: 'QUALITÄT GEPRÜFT' },
              { icon: 'local_shipping', text: 'SCHNELLER VERSAND' },
              { icon: 'lock', text: 'SICHERES BEZAHLEN' },
              { icon: 'support_agent', text: 'FACHBERATUNG' },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2 font-bold text-[#515f78]">
                <span className="material-symbols-outlined">{b.icon}</span>
                {b.text}
              </div>
            ))}
          </div>
        </section>

        <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 font-manrope text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-12 max-w-7xl mx-auto">
            <div className="space-y-4">
              <span className="text-lg font-bold text-white block">Sanitätshaus-Online.Shop</span>
              <p className="max-w-sm">Ihr kompetenter Partner für medizinische Hilfsmittel. Wir vereinen traditionelle Fachkompetenz mit den Vorteilen der digitalen Welt.</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-bold mb-4">Service</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Versand & Retoure</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Hilfe</h4>
                <ul className="space-y-2">
                  <li><a href="/kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Zahlungsarten</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Krankenkassen</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 py-6 px-8 max-w-7xl mx-auto text-xs text-center">
            © 2025 Sanitätshaus-Online.Shop. Medizinische Fachkompetenz online. Alle Rechte vorbehalten.
          </div>
        </footer>
      </body>
    </html>
  )
}
