export default function Blog() {
  const posts = [
    {
      id: 1,
      category: 'RATGEBER',
      date: '15. Mai 2024',
      title: 'Mobilität im Alter: So bleiben Sie aktiv und sicher',
      excerpt: 'Regelmäßige Bewegung ist der Schlüssel zu einem gesunden Altern. Wir zeigen Ihnen, welche Hilfsmittel Sie dabei unterstützen können, Ihre Selbstständigkeit bis ins hohe Alter zu bewahren.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW4MCbwIPQ2iwpvQozc23ky79_NGlQNt3FHM_MDZwG1nSH3duhBwZsUWgLGrBiotwkGCUKVP85ShO27lu9Z_KEoFF_3Sz7zVU9IvfnFugAohV9hxJmpfMrH5397kW8ExedFS0oGP-BBtq3tbozj0Y4P7GWsul22Dbs0cGe6ZyG73N6Z_JppzPtbniqJy6RF_JQtqUA1AXBWoogUUDu-kls5H8c4-7FXOpzuvKE4FyX4LHtfeHNzGIh1lYpdX4f0vN--IKU0JZz67Zy',
    },
    {
      id: 2,
      category: 'INNOVATION',
      date: '10. Mai 2024',
      title: 'Digitalisierung der Pflege: Trends für 2024',
      excerpt: 'Smart-Home-Lösungen und digitale Überwachungssysteme revolutionieren die häusliche Pflege. Erfahren Sie, welche Technologien heute bereits den Alltag von Patienten und Angehörigen erleichtern.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZaseXT2_HEtyXzy6fW23Rq55aWCVcbFeqaJw-XJc1YdP-CsZpLcEZHDHojw14ZXNmX425SF5MLj4c-7FZUq0iSciNH7HCHXPzNzT8N-2Jiiib0PYij_CtCUh3kiLaRusH1yShC-27bvCPT_UhwaFZRZKeY1J0kkGe14T0Fr_PuBa7REnxJkNfoTdK1-8crnMJ7ofpDwPzcg57L_fAsmIN0kzNTNGnzF5I_kZtmYQJEzoJiYIIgbA7z26nqFPBJrRfwifrX-iq2aU3',
    },
    {
      id: 3,
      category: 'PRODUKTE',
      date: '3. Mai 2024',
      title: 'Neue Rollator-Generation: Was wirklich zählt',
      excerpt: 'Der Markt für Gehhilfen hat sich in den letzten Jahren stark weiterentwickelt. Wir zeigen Ihnen, worauf Sie beim Kauf eines modernen Rollators achten sollten.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcLnR3dIoBZ16X53HzsnSH_Ke3rh_KEldPGtNb1TZ-a-TUyzcaNO5s880ga_D1rXu4HABWlx_pYPiWp50rw8QEaa6N0v3R0hw5uK1wd8K0YYMYDCXZgaw26jEmdndX5zbbgyC7DpiLpmG-iyGtJaKkJc-7L9QySvIaDlporZKsKSC1_VrjtP-Lwc9rCcj9bYzAdBb8_hz0EogRxsRm1THsvvdOTWk1FyyFWTQ2vxq3fPg4OW3sdXb8QtxEqFFfycZa4RvQxPP0nm_7',
    },
    {
      id: 4,
      category: 'GESUNDHEIT',
      date: '28. April 2024',
      title: 'Blutdruck richtig messen: Tipps vom Fachmann',
      excerpt: 'Viele Menschen messen ihren Blutdruck falsch und erhalten dadurch verfälschte Ergebnisse. Unser Experte erklärt die häufigsten Fehler und wie man sie vermeidet.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARh9GcACiBYKvIwgn-KW_PwVEYDipE5NzKnUGC1uDwvEVHmH7CzAX4ynS4CG_lFarUgBZw_kqYhcq6D3Oc-sBEUvpY_4SFS1tdHN30m-GiKZDKMylbyo-fluGK1ed-UO-4lemGFxlMr0g1H5RCMF6BI0m9P7wJ7ttBu4x4kBKtZ4HFgFJE7RovahaeT1yAxI7zF98R8pRPcixmqLAXKRtg4R5_3M-n67Nx6cVKdk59fP9bHWGmAgQruZ9MzF-B3o1MY3fKnIBhPNdK',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="mb-12">
        <h1 className="font-manrope text-headline-xl text-[#004c4c] mb-4">Gesundheitsmagazin</h1>
        <p className="text-[#515f78] text-body-lg max-w-2xl">
          Wissen, Tipps und Neuigkeiten rund um Gesundheit, Pflege und medizinische Hilfsmittel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {posts.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            <div className="aspect-[16/9] mb-6 overflow-hidden rounded-lg">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs bg-[#e7eeff] text-[#55637d] px-3 py-1 rounded-full font-bold">{post.category}</span>
              <span className="text-body-sm text-[#515f78]">{post.date}</span>
            </div>
            <h2 className="font-manrope text-headline-md mb-4 group-hover:text-[#004c4c] transition-colors">{post.title}</h2>
            <p className="text-[#515f78] text-body-md line-clamp-3">{post.excerpt}</p>
            <div className="mt-6 flex items-center gap-2 text-[#004c4c] font-bold">
              Weiterlesen <span className="material-symbols-outlined text-sm">open_in_new</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
