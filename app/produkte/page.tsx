export default function Produkte() {
  const products = [
    { id: 1, name: 'Premium Rollator', category: 'MOBILITÄT', price: '249,00 €', badge: 'Bestseller', description: 'Leichtgewicht-Rollator mit ergonomischen Handgriffen und integrierter Sitzfläche für maximalen Komfort.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVCZc9ps0LQ45vhWlWzpOdDjwH7BCMvJQSNxMWSPFHVk9flfcOXv-c4hAcf0mDJAQOX-mlhlH2Ze-lq5xWUx70wbKvt2wWaABoNpCORCMIioG3-97rbXuKwrN9Attu4nqxhLxtaafat8fjdviq2ah0xxvGYLK7ncNnhWtqhb404HcDWGAc_hodXzSLb3g6D9xGBEXgu7Mm8JA_obYLXTXAzWrBE5W-ZJTANTw-ZbLRIcaly1rEVkOaTsGh6N-xOi2FVkuJ3WV4XIBQ' },
    { id: 2, name: 'Aktiv-Kniebandage Pro', category: 'ORTHOPÄDIE', price: '49,95 €', badge: null, description: 'Optimale Stabilisierung und Entlastung für das Kniegelenk im Alltag und Sport.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1Sy6X78A4ncP-_EPVI2rwWCo-P8iX0s5285ec-AZIiw4EHZSv50lnRxI-h7coPVPzvEs7WMv4m8qNt1SZnXtifnIs5GEHgE921ocKRzI9CkRbMmu3OuVEMuAXCukQl6f61iDOFoi6ShDcTvsgjQyjVoQkOj9VdOTn7005GmMWC1c6ZexvbmuNQr_YOkqP-iKX2yQ5sKTrUb9htAKPOraQlUE14_lDJdS4IDuGS-AQyq39adBvbotlhRiR3NBZyt7cckyMZxVoflBK' },
    { id: 3, name: 'Unterarmstützen Soft', category: 'MOBILITÄT', price: '39,00 €', badge: null, description: 'Paarweise Krücken mit Softgriff und verstellbarer Höhe für sicheren Halt bei Verletzungen.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCellwHvgzbAKJXn8UyyiB_81xFFVWs1_ynLe6YeRWH24j8a7mtOKxmlYDbK_bxBHzUPk6rKiK8AfaHZejq1msPCk08PI44s6OCpfQsxfIx8CdZKEKuZGMby8ekQngHIRpnJKj88w1p0skDC9zbE0XhqFwh8xHB9XzNBnMf5quTutFIJ9vVUM1tvOCjdl5b1wn_ed2T_6_WuDVqUqs0lL9cF5chPfeSQpXv9RgKk5E2xxqFxfp4d2yS910mFOrICZZP41xO4mFovMBb' },
    { id: 4, name: 'Orthopädisches Kissen', category: 'PFLEGE', price: '65,00 €', badge: null, description: 'Viskoelastisches Kopfkissen zur optimalen Entlastung der Nackenmuskulatur während des Schlafens.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvQS_JkvNYrQxDBG92TPdO6XPmXWvQNduMyJQDC4n7ItEc965G3oWsmphqeZK1GTp8YY3N45BJynRUJU03-xkzON2qeYqD2bi7dx_VM_D9JBOtnVslLtZe6wuSVxNlDAEnkFTlMDzEcRLX_AeGwjs7hk65EUtZjGrRxabDq3yGbG8ePO7WkELrPK6qJ70yDhSvhYzVXEH-nK1u3jonzO51F2mcH1ORBGyNocwOJAmOdJn7OkxvDD0AbI3CZk8lyvWwCS4LReo5iTEa' },
    { id: 5, name: 'Blutdruckmessgerät Smart Connect', category: 'DIAGNOSTIK', price: '74,50 €', badge: 'Neu', description: 'Vollautomatische Messung am Oberarm mit App-Anbindung zur langfristigen Kontrolle.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcLnR3dIoBZ16X53HzsnSH_Ke3rh_KEldPGtNb1TZ-a-TUyzcaNO5s880ga_D1rXu4HABWlx_pYPiWp50rw8QEaa6N0v3R0hw5uK1wd8K0YYMYDCXZgaw26jEmdndX5zbbgyC7DpiLpmG-iyGtJaKkJc-7L9QySvIaDlporZKsKSC1_VrjtP-Lwc9rCcj9bYzAdBb8_hz0EogRxsRm1THsvvdOTWk1FyyFWTQ2vxq3fPg4OW3sdXb8QtxEqFFfycZa4RvQxPP0nm_7' },
    { id: 6, name: 'Diagnose Set Pro', category: 'DIAGNOSTIK', price: '129,00 €', badge: null, description: 'Kombiniertes Set aus Infrarot-Thermometer und Pulsoximeter für die präzise Vitalwertkontrolle.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAshE_474Kle1Vj8K7Ms_7YyNm4o_e2k1yw9yoXRNpTDHbmWJ1r-j_YyUwGVWMHyyDgELVXfhYVxmlRK7_8jWpCqMzpsagjJnGo0sMk4vrkS7boN1UYEzd1rdUTqdAG8ogYSy7mVX7iHNfAsk-mOquNd776N3cQ8pfCrYo0dIdRBMY3nTw7vB43IS_ohZN_5jcJFP3FA4N_A5gOV_7Xob5303ZL84l1wgD-qyhHP9dJm19AkxfAEy4mz0IE29hAx9z2z3IcFEVBCH9s' },
  ]

  const categories = ['Alltagshilfen', 'Mobilität', 'Pflege', 'Fitness', 'Orthopädie', 'Diagnostik']

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">

        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0 space-y-8">
          <div>
            <h3 className="text-teal-700 font-bold text-lg mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Kategorien</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-teal-700 focus:ring-teal-600" />
                    <span className="text-slate-700 group-hover:text-teal-700 transition-colors">{cat}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-6 border-t border-slate-200">
            <h3 className="text-teal-700 font-bold text-lg mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Preisbereich</h3>
            <input type="range" min="0" max="1000" className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-700" />
            <div className="flex justify-between text-sm text-slate-500 mt-2">
              <span>0 €</span>
              <span>1.000 €</span>
            </div>
          </div>
          <button className="w-full py-3 bg-teal-700 text-white font-bold rounded-lg hover:bg-teal-800 transition-all">
            Filter anwenden
          </button>
        </aside>

        {/* Product Grid */}
        <section className="flex-grow">
          <header className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-5xl font-bold text-teal-700 tracking-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Unsere Produkte
              </h1>
              <p className="text-slate-500 text-lg mt-2">Hochwertige medizinische Hilfsmittel für Ihren Alltag.</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>Sortieren nach:</span>
              <select className="bg-transparent border-none font-bold text-teal-700 focus:ring-0 cursor-pointer">
                <option>Beliebtheit</option>
                <option>Preis aufsteigend</option>
                <option>Preis absteigend</option>
              </select>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <article key={p.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="aspect-square bg-white relative overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {p.badge && (
                    <span className="absolute top-4 right-4 bg-teal-700 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">{p.badge}</span>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-teal-700 mb-1 block tracking-widest">{p.category}</span>
                  <h2 className="text-xl font-semibold text-teal-700 mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>{p.name}</h2>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">{p.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'Manrope, sans-serif' }}>{p.price}</span>
                    <button className="p-3 bg-teal-700 text-white rounded-lg flex items-center gap-2 hover:bg-teal-800 transition-colors active:scale-95">
                      <span className="material-symbols-outlined">shopping_cart</span>
                      <span className="font-bold text-sm">In den Warenkorb</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            {[1, 2, 3].map((n) => (
              <button key={n} className={`w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors ${n === 1 ? 'text-teal-700 font-bold border-teal-700' : 'text-slate-600'}`}>{n}</button>
            ))}
            <span className="w-10 h-10 flex items-center justify-center text-slate-400">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors text-slate-600">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
