type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

async function fetchData<T, R> (
  url: string,
  method: HttpMethod,
  body?: R,
  customHeaders?: Record<string, string>
): Promise<T> {
  // eslint-disable-next-line no-useless-catch
  try {
    const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`
    const response = await fetch(`${baseURL}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...customHeaders
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch data for URL: ${url}`)
    }

    const data: T = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

export default fetchData
