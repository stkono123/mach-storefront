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

  const productsResponse = await fetch(
    `${apiUrl}/${projectKey}/products?limit=100`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  )

  const data = await productsResponse.json()

  // FIX: de-DE statt de, POS-Filter entfernt da POS ein gültiger Kanal ist
  const filtered = (data.results || []).filter((p: any) => {
    const current = p.masterData?.current
    const name =
      current?.name?.['de-DE'] ||
      current?.name?.['en-US'] ||
      ''
    const hasImage = !!current?.masterVariant?.images?.[0]?.url

    // Kein Bild -> raus
    if (!hasImage) return false

    // Kein Name -> raus
    if (!name) return false

    return true
  })

  return Response.json({ ...data, results: filtered, total: filtered.length })
}
