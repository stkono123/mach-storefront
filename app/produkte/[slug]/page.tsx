import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ExpandableDescription } from './ExpandableDescription'

async function getProduct(slug: string) {
  const projectKey = process.env.CT_PROJECT_KEY
  const clientId = process.env.CT_CLIENT_ID
  const clientSecret = process.env.CT_CLIENT_SECRET
  const authUrl = process.env.CT_AUTH_URL
  const apiUrl = process.env.CT_API_URL

  const authResponse = await fetch(`${authUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: 'grant_type=client_credentials',
  })

  const { access_token } = await authResponse.json()

  const res = await fetch(
    `${apiUrl}/${projectKey}/products?where=masterData(current(slug(de-DE%3D%22${slug}%22)))&limit=1`,
    { headers: { Authorization: `Bearer ${access_token}` }, cache: 'no-store' }
  )

  const data = await res.json()
  return data.results?.[0] || null
}

export default async function ProduktDetail({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  if (!product) notFound()

  const current = product.masterData?.current
  const name = current?.name?.['de-DE'] || current?.name?.['en-US'] || 'Produkt'
  const description = current?.description?.['de-DE'] || current?.description?.['en-US'] || ''
  const images = current?.masterVariant?.images || []
  const price = current?.masterVariant?.prices?.[0]?.value?.centAmount
  const priceFormatted = price
    ? `${(price / 100).toFixed(2).replace('.', ',')} €`
    : 'Preis auf Anfrage'

  const variants = [current?.masterVariant, ...(current?.variants || [])]
  const attributes = current?.masterVariant?.attributes || []
  const getAttr = (attrName: string) => attributes.find((a: any) => a.name === attrName)?.value || ''

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-8 py-6">
        <nav className="flex items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-teal-700 transition-colors">Start</Link>
          <span>/</span>
          <Link href="/produkte" className="hover:text-teal-700 transition-colors">Produkte</Link>
          <span>/</span>
          <span className="text-slate-600">{name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Bilder */}
          <div>
            <div className="aspect-square bg-white rounded-2xl border border-slate-200 overflow-hidden mb-4">
              {images[0] ? (
                <img
                  src={images[0].url}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-300 text-8xl">📦</div>
              )}
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {images.slice(1, 5).map((img: any, i: number) => (
                  <div key={i} className="aspect-square bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <img src={img.url} alt={`${name} ${i + 2}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Produktinfo */}
          <div>
            <span className="text-teal-700 text-xs font-bold uppercase tracking-widest mb-3 block">
              {getAttr('kategorie') || getAttr('category')}
            </span>
            <h1 className="font-manrope text-3xl font-bold text-slate-900 mb-4">{name}</h1>
            <div className="text-3xl font-bold text-slate-900 mb-6">{priceFormatted}</div>

            {description && <ExpandableDescription text={description} />}

            {/* Varianten */}
            {variants.length > 1 && (
              <div className="mb-8">
                <div className="text-sm font-semibold text-slate-700 mb-3">Varianten</div>
                <div className="flex flex-wrap gap-2">
                  {variants.map((v: any, i: number) => {
                    const varAttrs = v?.attributes || []
                    const farbe = varAttrs.find((a: any) => a.name === 'farbe')?.value
                    const grosse = varAttrs.find((a: any) => a.name === 'grosse')?.value
                    const label = [farbe, grosse].filter(Boolean).join(' / ') || v?.sku || `Variante ${i + 1}`
                    return (
                      <span key={i} className="px-3 py-1.5 text-xs font-medium bg-white border border-slate-200 rounded-lg text-slate-700">
                        {label}
                      </span>
                    )
                  })}
                </div>
              </div>
            )}

            <button className="w-full bg-teal-700 text-white py-4 rounded-xl font-semibold text-base hover:bg-teal-800 transition-colors mb-4">
              In den Warenkorb
            </button>

            <Link
              href="/produkte"
              className="block text-center text-sm text-slate-400 hover:text-teal-700 transition-colors"
            >
              ← Zurück zur Übersicht
            </Link>

            {/* Attribute */}
            {attributes.length > 0 && (
              <div className="mt-10 border-t border-slate-200 pt-8">
                <div className="text-sm font-semibold text-slate-700 mb-4">Produktdetails</div>
                <div className="grid grid-cols-2 gap-3">
                  {attributes
                    .filter((a: any) => !['product_id', 'shopify_id'].includes(a.name))
                    .map((a: any) => (
                      <div key={a.name} className="bg-white rounded-lg border border-slate-100 p-3">
                        <div className="text-xs text-slate-400 capitalize mb-1">{a.name.replace(/_/g, ' ')}</div>
                        <div className="text-sm font-medium text-slate-700">{String(a.value)}</div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
