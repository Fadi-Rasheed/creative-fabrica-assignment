export const apiQuery = async <T>(url: string): Promise<T> =>
  fetch(url).then(async response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json() as Promise<T>
  })
