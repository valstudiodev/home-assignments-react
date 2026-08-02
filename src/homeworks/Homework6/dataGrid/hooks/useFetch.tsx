import { useState, useEffect } from "react";

export async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP помилка! Статус: ${response.status}`);
    }

    const data = await response.json()
    return data
  } catch (error) {
    if (error instanceof Error) {
      console.error('Помилка запиту:', error.message);
    }
    throw error
  }
}

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function loadData(): Promise<void> {
      setIsLoading(true)

      try {
        setError(null)
        const response = await fetchData<T>(url)
        setData(response)

      } catch (error) {
        if (error instanceof Error) {
          setError(error)
        }
      } finally {
        setIsLoading(false)
      }
    }
    void loadData()

  }, [url]);

  return {
    data,
    isLoading,
    error
  }
}