import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-white overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="text-teal-700 text-xs font-bold uppercase tracking-widest mb-4 block">
              Premium Gesundheitsversorgung
            </span>
            <h1 className="font-manrope text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
              Medizinische Fachkompetenz für Ihr Zuhause
            </h1>
            <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
              Entdecken Sie erstklassige Hilfsmittel und medizinische Produkte, die Ihre Lebensqualität nachhaltig verbessern. Von Orthopädietechnik bis zum täglichen Pflegebedarf – wir beraten Sie mit deutscher Fachkompetenz.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/produkte" className="bg-teal-700 text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-teal-800 shadow-md transition-all active:scale-95 inline-block">
                Jetzt entdecken
              </a>
              <a href="/kontakt" className="border-2 border-teal-700 text-teal-700 px-8 py-4 rounded-lg font-bold text-base hover:bg-teal-50 transition-all inline-block">
                Beratung vereinbaren
              </a>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/hero.png"
              alt="Sanitätshaus Beratung"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-manrope text-3xl font-semibold text-slate-900">Bestseller & Empfehlungen</h2>
              <p className="text-slate-500 mt-2">Von Experten geprüfte Qualitätsprodukte.</p>
            </div>
            <a href="/produkte" className="text-teal-700 font-bold flex items-center gap-1 hover:underline">
              Alle Produkte <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                category: 'ORTHOPÄDIE',
                name: 'Aktiv-Kniebandage Pro',
                description: 'Optimale Stabilisierung und Entlastung für das Kniegelenk im Alltag.',
                price: '49,95 €',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1Sy6X78A4ncP-_EPVI2rwWCo-P8iX0s5285ec-AZIiw4EHZSv50lnRxI-h7coPVPzvEs7WMv4m8qNt1SZnXtifnIs5GEHgE921ocKRzI9CkRbMmu3OuVEMuAXCukQl6f61iDOFoi6ShDcTvsgjQyjVoQkOj9VdOTn7005GmMWC1c6ZexvbmuNQr_YOkqP-iKX2yQ5sKTrUb9htAKPOraQlUE14_lDJdS4IDuGS-AQyq39adBvbotlhRiR3NBZyt7cckyMZxVoflBK',
              },
              {
                category: 'MOBILITÄT',
                name: 'Leichtgewicht-Rollator Carbon',
                description: 'Maximaler Komfort und Sicherheit durch extrem leichtes Eigengewicht.',
                price: '289,00 €',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcLnR3dIoBZ16X53HzsnSH_Ke3rh_KEldPGtNb1TZ-a-TUyzcaNO5s880ga_D1rXu4HABWlx_pYPiWp50rw8QEaa6N0v3R0hw5uK1wd8K0YYMYDCXZgaw26jEmdndX5zbbgyC7DpiLpmG-iyGtJaKkJc-7L9QySvIaDlporZKsKSC1_VrjtP-Lwc9rCcj9bYzAdBb8_hz0EogRxsRm1THsvvdOTWk1FyyFWTQ2vxq3fPg4OW3sdXb8QtxEqFFfycZa4RvQxPP0nm_7',
              },
              {
                category: 'DIAGNOSTIK',
                name: 'Blutdruckmessgerät Smart Connect',
                description: 'Vollautomatische Messung am Oberarm mit App-Anbindung zur Kontrolle.',
                price: '74,50 €',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZaseXT2_HEtyXzy6fW23Rq55aWCVcbFeqaJw-XJc1YdP-CsZpLcEZHDHojw14ZXNmX425SF5MLj4c-7FZUq0iSciNH7HCHXPzNzT8N-2Jiiib0PYij_CtCUh3kiLaRusH1yShC-27bvCPT_UhwaFZRZKeY1J0kkGe14T0Fr_PuBa7REnxJkNfoTdK1-8crnMJ7ofpDwPzcg57L_fAsmIN0kzNTNGnzF5I_kZtmYQJEzoJiYIIgbA7z26nqFPBJrRfwifrX-iq2aU3',
              },
            ].map((p) => (
              <div key={p.name} className="bg-white border border-slate-200 p-6 rounded-xl group hover:shadow-lg transition-all duration-300">
                <div className="aspect-square mb-6 bg-slate-50 rounded-lg flex items-center justify-center overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="text-xs font-bold text-teal-700 mb-2 block tracking-widest">{p.category}</span>
                <h3 className="font-manrope text-lg font-semibold mb-2 text-slate-900">{p.name}</h3>
                <p className="text-slate-500 text-sm mb-4">{p.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-manrope text-2xl font-bold text-slate-900">{p.price}</span>
                  <button className="bg-slate-100 p-2 rounded-full hover:bg-teal-700 hover:text-white transition-colors">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rezept Banner */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="bg-teal-800 p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-dashed border-teal-500/30">
          <div className="text-white max-w-2xl">
            <h2 className="font-manrope text-3xl font-semibold mb-4">Einfache Rezept-Einreichung</h2>
            <p className="text-teal-200 text-lg leading-relaxed">
              Laden Sie Ihr ärztliches Rezept einfach online hoch. Wir kümmern uns um die Abrechnung mit Ihrer Krankenkasse und liefern Ihr Hilfsmittel direkt nach Hause.
            </p>
          </div>
          <button className="bg-white text-teal-800 px-10 py-4 rounded-xl font-bold text-base hover:bg-slate-50 transition-all flex items-center gap-3 shrink-0 shadow-lg">
            <span className="material-symbols-outlined">upload_file</span>
            Rezept jetzt hochladen
          </button>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <h2 className="font-manrope text-3xl font-semibold text-slate-900">Aktuelles aus unserem Gesundheitsmagazin</h2>
            <p className="text-slate-500 mt-2">Wissen und Tipps für ein gesundes Leben.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                category: 'RATGEBER',
                date: '15. Mai 2024',
                title: 'Mobilität im Alter: So bleiben Sie aktiv und sicher',
                excerpt: 'Regelmäßige Bewegung ist der Schlüssel zu einem gesunden Altern. Wir zeigen Ihnen, welche Hilfsmittel Sie dabei unterstützen können, Ihre Selbstständigkeit bis ins hohe Alter zu bewahren.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW4MCbwIPQ2iwpvQozc23ky79_NGlQNt3FHM_MDZwG1nSH3duhBwZsUWgLGrBiotwkGCUKVP85ShO27lu9Z_KEoFF_3Sz7zVU9IvfnFugAohV9hxJmpfMrH5397kW8ExedFS0oGP-BBtq3tbozj0Y4P7GWsul22Dbs0cGe6ZyG73N6Z_JppzPtbniqJy6RF_JQtqUA1AXBWoogUUDu-kls5H8c4-7FXOpzuvKE4FyX4LHtfeHNzGIh1lYpdX4f0vN--IKU0JZz67Zy',
              },
              {
                category: 'INNOVATION',
                date: '10. Mai 2024',
                title: 'Digitalisierung der Pflege: Trends für 2024',
                excerpt: 'Smart-Home-Lösungen und digitale Überwachungssysteme revolutionieren die häusliche Pflege. Erfahren Sie, welche Technologien heute bereits den Alltag von Patienten und Angehörigen erleichtern.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZaseXT2_HEtyXzy6fW23Rq55aWCVcbFeqaJw-XJc1YdP-CsZpLcEZHDHojw14ZXNmX425SF5MLj4c-7FZUq0iSciNH7HCHXPzNzT8N-2Jiiib0PYij_CtCUh3kiLaRusH1yShC-27bvCPT_UhwaFZRZKeY1J0kkGe14T0Fr_PuBa7REnxJkNfoTdK1-8crnMJ7ofpDwPzcg57L_fAsmIN0kzNTNGnzF5I_kZtmYQJEzoJiYIIgbA7z26nqFPBJrRfwifrX-iq2aU3',
              },
            ].map((post) => (
              <article key={post.title} className="group cursor-pointer">
                <div className="aspect-video mb-6 overflow-hidden rounded-xl">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-bold">{post.category}</span>
                  <span className="text-sm text-slate-500">{post.date}</span>
                </div>
                <h3 className="font-manrope text-2xl font-semibold mb-4 group-hover:text-teal-700 transition-colors text-slate-900">{post.title}</h3>
                <p className="text-slate-500 text-base line-clamp-3 leading-relaxed">{post.excerpt}</p>
                <a href="/blog" className="mt-6 flex items-center gap-2 text-teal-700 font-bold">
                  Weiterlesen <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
