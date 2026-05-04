export default function Kontakt() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="font-manrope text-headline-xl text-[#004c4c] mb-6">Kontakt</h1>
          <p className="text-[#515f78] text-body-lg mb-8">
            Haben Sie Fragen zu unseren Produkten oder benötigen Sie eine Beratung? Unser Fachteam hilft Ihnen gerne weiter.
          </p>
          <div className="space-y-6">
            {[
              { icon: 'phone', label: 'Telefon', value: '+49 (0) 800 123 456 7' },
              { icon: 'mail', label: 'E-Mail', value: 'beratung@sanitaetshaus-online.shop' },
              { icon: 'schedule', label: 'Öffnungszeiten', value: 'Mo–Fr: 8:00 – 18:00 Uhr' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#e7eeff] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[#004c4c]">{item.icon}</span>
                </div>
                <div>
                  <div className="font-bold text-[#111c2c]">{item.label}</div>
                  <div className="text-[#515f78]">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#bec9c8] rounded-xl p-8">
          <h2 className="font-manrope text-headline-md text-[#111c2c] mb-6">Nachricht senden</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-body-sm font-bold text-[#111c2c] mb-2">Name</label>
              <input
                type="text"
                placeholder="Ihr vollständiger Name"
                className="w-full px-4 py-3 border border-[#bec9c8] rounded-lg text-body-md focus:outline-none focus:border-[#004c4c] transition-colors"
              />
            </div>
            <div>
              <label className="block text-body-sm font-bold text-[#111c2c] mb-2">E-Mail</label>
              <input
                type="email"
                placeholder="ihre@email.de"
                className="w-full px-4 py-3 border border-[#bec9c8] rounded-lg text-body-md focus:outline-none focus:border-[#004c4c] transition-colors"
              />
            </div>
            <div>
              <label className="block text-body-sm font-bold text-[#111c2c] mb-2">Betreff</label>
              <select className="w-full px-4 py-3 border border-[#bec9c8] rounded-lg text-body-md focus:outline-none focus:border-[#004c4c] transition-colors bg-white">
                <option>Produktberatung</option>
                <option>Rezept einreichen</option>
                <option>Bestellung & Versand</option>
                <option>Sonstiges</option>
              </select>
            </div>
            <div>
              <label className="block text-body-sm font-bold text-[#111c2c] mb-2">Nachricht</label>
              <textarea
                rows={5}
                placeholder="Wie können wir Ihnen helfen?"
                className="w-full px-4 py-3 border border-[#bec9c8] rounded-lg text-body-md focus:outline-none focus:border-[#004c4c] transition-colors resize-none"
              />
            </div>
            <button className="w-full bg-[#004c4c] text-white py-4 rounded-lg font-bold text-body-md hover:bg-[#006666] transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">send</span>
              Nachricht senden
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
