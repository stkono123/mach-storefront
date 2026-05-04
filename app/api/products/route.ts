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

  // Produkte abrufen
  const productsResponse = await fetch(
    `${apiUrl}/${projectKey}/products?limit=20`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  )

  const data = await productsResponse.json()
  return Response.json(data)
}
