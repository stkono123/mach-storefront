export default function Home() {
  const products = [
    {
      id: 1,
      category: 'ORTHOPÄDIE',
      name: 'Aktiv-Kniebandage Pro',
      description: 'Optimale Stabilisierung und Entlastung für das Kniegelenk im Alltag.',
      price: '49,95 €',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1Sy6X78A4ncP-_EPVI2rwWCo-P8iX0s5285ec-AZIiw4EHZSv50lnRxI-h7coPVPzvEs7WMv4m8qNt1SZnXtifnIs5GEHgE921ocKRzI9CkRbMmu3OuVEMuAXCukQl6f61iDOFoi6ShDcTvsgjQyjVoQkOj9VdOTn7005GmMWC1c6ZexvbmuNQr_YOkqP-iKX2yQ5sKTrUb9htAKPOraQlUE14_lDJdS4IDuGS-AQyq39adBvbotlhRiR3NBZyt7cckyMZxVoflBK',
    },
    {
      id: 2,
      category: 'MOBILITÄT',
      name: 'Leichtgewicht-Rollator Carbon',
      description: 'Maximaler Komfort und Sicherheit durch extrem leichtes Eigengewicht.',
      price: '289,00 €',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcLnR3dIoBZ16X53HzsnSH_Ke3rh_KEldPGtNb1TZ-a-TUyzcaNO5s880ga_D1rXu4HABWlx_pYPiWp50rw8QEaa6N0v3R0hw5uK1wd8K0YYMYDCXZgaw26jEmdndX5zbbgyC7DpiLpmG-iyGtJaKkJc-7L9QySvIaDlporZKsKSC1_VrjtP-Lwc9rCcj9bYzAdBb8_hz0EogRxsRm1THsvvdOTWk1FyyFWTQ2vxq3fPg4OW3sdXb8QtxEqFFfycZa4RvQxPP0nm_7',
    },
    {
      id: 3,
      category: 'DIAGNOSTIK',
      name: 'Blutdruckmessgerät Smart Connect',
      description: 'Vollautomatische Messung am Oberarm mit App-Anbindung zur Kontrolle.',
      price: '74,50 €',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkW0lVQ1EgZ1NVQohxAjtU9BR0r4StR9IpID3lJ2k-rVCdL7nAm87H6FDOx_ChzKGFok-rVCdL7nAm87H6FDOx_ChzKGFqCupZpvpfg72REG220vxagyTH8hggYVnrzfOffVpHVtaI_JwcIXp_IbAC1g3UrRJoF39xTd6kSI1x78OJXdwjF3jZxtNNUkMFVw7vBurY79MMoEWdP3WXCDDHLi9jAQQWKTCA07V4gtRETT9kMnjad9848Zyo_AqTQqJK0ftgI1RgPKGF0jNv7Rc9FMtrUhFuA2qmnYVPVt7',
    },
  ]

  const blogPosts = [
    {
      id: 1,
      category: 'RATGEBER',
      date: '15. Mai 2024',
      title: 'Mobilität im Alter: So bleiben Sie aktiv und sicher',
      excerpt: 'Regelmäßige Bewegung ist der Schlüssel zu einem gesunden Altern. Wir zeigen Ihnen, welche Hilfsmittel Sie dabei unterstützen können.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW4MCbwIPQ2iwpvQozc23ky79_NGlQNt3FHM_MDZwG1nSH3duhBwZsUWgLGrBiotwkGCUKVP85ShO27lu9Z_KEoFF_3Sz7zVU9IvfnFugAohV9hxJmpfMrH5397kW8ExedFS0oGP-BBtq3tbozj0Y4P7GWsul22Dbs0cGe6ZyG73N6Z_JppzPtbniqJy6RF_JQtqUA1AXBWoogUUDu-kls5H8c4-7FXOpzuvKE4FyX4LHtfeHNzGIh1lYpdX4f0vN--IKU0JZz67Zy',
    },
    {
      id: 2,
      category: 'INNOVATION',
      date: '10. Mai 2024',
      title: 'Digitalisierung der Pflege: Trends für 2024',
      excerpt: 'Smart-Home-Lösungen und digitale Überwachungssysteme revolutionieren die häusliche Pflege.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZaseXT2_HEtyXzy6fW23Rq55aWCVcbFeqaJw-XJc1YdP-CsZpLcEZHDHojw14ZXNmX425SF5MLj4c-7FZUq0iSciNH7HCHXPzNzT8N-2Jiiib0PYij_CtCUh3kiLaRusH1yShC-27bvCPT_UhwaFZRZKeY1J0kkGe14T0Fr_PuBa7REnxJkNfoTdK1-8crnMJ7ofpDwPzcg57L_fAsmIN0kzNTNGnzF5I_kZtmYQJEzoJiYIIgbA7z26nqFPBJrRfwifrX-iq2aU3',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative bg-white overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#004c4c] text-label-caps uppercase mb-4 block tracking-widest">Premium Gesundheitsversorgung</span>
            <h1 className="font-manrope text-headline-xl text-[#111c2c] mb-6">Medizinische Fachkompetenz für Ihr Zuhause</h1>
            <p className="text-body-lg text-[#515f78] mb-10 max-w-lg">
              Entdecken Sie erstklassige Hilfsmittel und medizinische Produkte, die Ihre Lebensqualität nachhaltig verbessern.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/produkte" className="bg-[#006666] text-white px-8 py-4 rounded-lg font-bold text-body-md hover:bg-teal-700 shadow-md transition-all active:scale-95 inline-block">
                Jetzt Entdecken
              </a>
              <a href="/kontakt" className="border-2 border-[#004c4c] text-[#004c4c] px-8 py-4 rounded-lg font-bold text-body-md hover:bg-[#004c4c]/5 transition-all inline-block">
                Beratung vereinbaren
              </a>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuARh9GcACiBYKvIwgn-KW_PwVEYDipE5NzKnUGC1uDwvEVHmH7CzAX4ynS4CG_lFarUgBZw_kqYhcq6D3Oc-sBEUvpY_4SFS1tdHN30m-GiKZDKMylbyo-fluGK1ed-UO-4lemGFxlMr0g1H5RCMF6BI0m9P7wJ7ttBu4x4kBKtZ4HFgFJE7RovahaeT1yAxI7zF98R8pRPcixmqLAXKRtg4R5_3M-n67Nx6cVKdk59fP9bHWGmAgQruZ9MzF-B3o1MY3fKnIBhPNdK"
              alt="Sanitätshaus Beratung"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-section-gap bg-[#f9f9ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-manrope text-headline-lg text-[#111c2c]">Bestseller & Empfehlungen</h2>
              <p className="text-[#515f78] mt-2">Von Experten geprüfte Qualitätsprodukte.</p>
            </div>
            <a href="/produkte" className="text-[#004c4c] font-bold flex items-center gap-1 hover:underline">
              Alle Produkte <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.id} className="bg-white border border-[#bec9c8] p-6 rounded-lg group hover:shadow-lg transition-all duration-300">
                <div className="aspect-square mb-6 bg-[#f0f3ff] rounded flex items-center justify-center overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="text-xs font-bold text-[#004c4c] mb-2 block">{p.category}</span>
                <h3 className="font-manrope text-body-lg font-semibold mb-2">{p.name}</h3>
                <p className="text-[#515f78] text-body-sm mb-4">{p.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-manrope text-headline-md text-[#111c2c]">{p.price}</span>
                  <button className="bg-[#dee8ff] p-2 rounded-full hover:bg-[#006666] hover:text-white transition-colors">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rezept Banner */}
      <section className="max-w-7xl mx-auto px-8 py-section-gap">
        <div className="bg-[#004c4c] p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-dashed border-[#a2f0ef]/30">
          <div className="text-white max-w-2xl">
            <h2 className="font-manrope text-headline-lg mb-4">Einfache Rezept-Einreichung</h2>
            <p className="text-[#a2f0ef] text-body-lg">
              Laden Sie Ihr ärztliches Rezept einfach online hoch. Wir kümmern uns um die Abrechnung mit Ihrer Krankenkasse.
            </p>
          </div>
          <button className="bg-white text-[#004c4c] px-10 py-4 rounded-lg font-bold text-body-md hover:bg-[#f9f9ff] transition-all flex items-center gap-3 shrink-0">
            <span className="material-symbols-outlined">upload_file</span>
            Rezept jetzt hochladen
          </button>
        </div>
      </section>

      {/* Blog */}
      <section className="py-section-gap bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <h2 className="font-manrope text-headline-lg text-[#111c2c]">Aktuelles aus unserem Gesundheitsmagazin</h2>
            <p className="text-[#515f78] mt-2">Wissen und Tipps für ein gesundes Leben.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-[16/9] mb-6 overflow-hidden rounded-lg">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs bg-[#e7eeff] text-[#55637d] px-3 py-1 rounded-full font-bold">{post.category}</span>
                  <span className="text-body-sm text-[#515f78]">{post.date}</span>
                </div>
                <h3 className="font-manrope text-headline-md mb-4 group-hover:text-[#004c4c] transition-colors">{post.title}</h3>
                <p className="text-[#515f78] text-body-md line-clamp-3">{post.excerpt}</p>
                <a href="/blog" className="mt-6 flex items-center gap-2 text-[#004c4c] font-bold">
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
