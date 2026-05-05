import Link from 'next/link'

async function getProducts() {
  const res = await fetch(
    `https://mach-storefront-sigma.vercel.app/api/products`,
    { cache: 'no-store' }
  )
  const data = await res.json()
  return data.results || []
}

export default async function ProdukteListe() {
  const products = await getProducts()

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <span className="text-teal-700 text-xs font-bold uppercase tracking-widest mb-4 block">
            Sortiment
          </span>
          <h1 className="font-manrope text-4xl font-bold text-slate-900 mb-2">
            Alle Produkte
          </h1>
          <p className="text-slate-500">{products.length} Produkte verfügbar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p: any) => {
            const name =
              p.masterData?.current?.name?.['de-DE'] ||
              p.masterData?.current?.name?.['en-US'] ||
              'Produkt'
            const description =
              p.masterData?.current?.description?.['de-DE'] ||
              p.masterData?.current?.description?.['en-US'] ||
              ''
            const price =
              p.masterData?.current?.masterVariant?.prices?.[0]?.value?.centAmount
            const priceFormatted = price
              ? `${(price / 100).toFixed(2).replace('.', ',')} €`
              : 'Preis auf Anfrage'
            const image =
              p.masterData?.current?.masterVariant?.images?.[0]?.url
            const slug =
              p.masterData?.current?.slug?.['de-DE'] || p.key

            return (
              <Link
                key={p.id}
                href={`/produkte/${slug}`}
                className="block group"
              >
                <div className="bg-white border border-slate-200 p-5 rounded-xl hover:shadow-lg transition-all duration-300 h-full">
                  <div className="aspect-square mb-4 bg-slate-50 rounded-lg flex items-center justify-center overflow-hidden">
                    {image ? (
                      <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <span className="text-slate-300 text-5xl">📦</span>
                    )}
                  </div>
                  <h3 className="font-manrope text-sm font-semibold mb-2 text-slate-900 line-clamp-2">
                    {name}
                  </h3>
                  <p className="text-slate-400 text-xs mb-4 line-clamp-2">
                    {description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-manrope text-lg font-bold text-slate-900">
                      {priceFormatted}
                    </span>
                    <button className="bg-slate-100 p-2 rounded-full hover:bg-teal-700 hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
