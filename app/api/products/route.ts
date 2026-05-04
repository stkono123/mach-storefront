export async function GET() {
  const projectKey = process.env.CT_PROJECT_KEY
  const clientId = process.env.CT_CLIENT_ID
  const clientSecret = process.env.CT_CLIENT_SECRET
  const authUrl = process.env.CT_AUTH_URL
  const apiUrl = process.env.CT_API_URL

  // Auth Token holen
  const authResponse = await fetch(
    `${authUrl}/oauth/token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      },
      body: 'grant_type=client_credentials',
    }
  )

  const { access_token } = await authResponse.json()

  // Mehr Produkte laden damit nach dem Filtern genug übrig bleiben
  const productsResponse = await fetch(
    `${apiUrl}/${projectKey}/products?limit=100`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  )

  const data = await productsResponse.json()

  // Filterlogik
  const filtered = (data.results || []).filter((p: any) => {
    const current = p.masterData?.current
    const nameDe = current?.name?.['de'] || ''
    const nameEn = current?.name?.['en-US'] || ''
    const name = nameDe || nameEn
    const tags: string[] = p.masterData?.current?.searchKeywords?.['de']?.map((k: any) => k.text) || []
    const hasImage = !!current?.masterVariant?.images?.[0]?.url

    // Kein Bild -> raus
    if (!hasImage) return false

    // Name enthält "POS" -> raus
    if (name.includes('POS')) return false

    // Name beginnt mit "Auf Rezept:" -> raus
    if (name.startsWith('Auf Rezept:')) return false

    // Tag enthält "POS" -> raus
    if (tags.some((t) => t.includes('POS'))) return false

    // Tag enthält "Rezept" -> raus
    if (tags.some((t) => t.toLowerCase().includes('rezept'))) return false

    return true
  })

  return Response.json({ ...data, results: filtered, total: filtered.length })
}
