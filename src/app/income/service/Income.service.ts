import type { Income } from '../model/Income.class'

export default async function SaveIncome (
  formData: Income
): Promise<any> {
  try {
    const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`
    const response = await fetch(`${baseURL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    if (!response.ok) {
      throw new Error('Failed to fetch data for URL: /Incomes')
    }
    return await response.json()
  } catch (e) {
    console.log(e)
    throw e
  }
}
