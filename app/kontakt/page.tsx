export default function Kontakt() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Kontakt
          </h1>
          <p className="text-slate-500 text-lg mb-8 leading-relaxed">
            Haben Sie Fragen zu unseren Produkten oder benötigen Sie eine Beratung? Unser Fachteam hilft Ihnen gerne weiter.
          </p>
          <div className="space-y-6">
            {[
              { icon: 'phone', label: 'Telefon', value: '+49 (0) 800 123 456 7' },
              { icon: 'mail', label: 'E-Mail', value: 'beratung@sanitaetshaus-online.shop' },
              { icon: 'schedule', label: 'Öffnungszeiten', value: 'Mo–Fr: 8:00 – 18:00 Uhr' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-teal-700">{item.icon}</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900">{item.label}</div>
                  <div className="text-slate-500">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Nachricht senden
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Name</label>
              <input type="text" placeholder="Ihr vollständiger Name" className="w-full px-4 py-3 border border-slate-200 rounded-lg text-base focus:outline-none focus:border-teal-700 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">E-Mail</label>
              <input type="email" placeholder="ihre@email.de" className="w-full px-4 py-3 border border-slate-200 rounded-lg text-base focus:outline-none focus:border-teal-700 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Betreff</label>
              <select className="w-full px-4 py-3 border border-slate-200 rounded-lg text-base focus:outline-none focus:border-teal-700 transition-colors bg-white">
                <option>Produktberatung</option>
                <option>Rezept einreichen</option>
                <option>Bestellung & Versand</option>
                <option>Sonstiges</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Nachricht</label>
              <textarea rows={5} placeholder="Wie können wir Ihnen helfen?" className="w-full px-4 py-3 border border-slate-200 rounded-lg text-base focus:outline-none focus:border-teal-700 transition-colors resize-none" />
            </div>
            <button className="w-full bg-teal-700 text-white py-4 rounded-lg font-bold text-base hover:bg-teal-800 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">send</span>
              Nachricht senden
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
