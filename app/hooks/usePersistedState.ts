'use client'

import { useEffect, useState } from 'react'

export function usePersistedState<T>(
  key: string,
  defaultValue: T,
): [T, (value: T | ((prev: T) => T)) => void, boolean] {
  const [state, setState] = useState<T>(defaultValue)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedValue = localStorage.getItem(key)
    if (storedValue !== null) {
      setState(JSON.parse(storedValue))
    }
    setLoading(false)
  }, [key])

  const setValue = (value: T | ((prev: T) => T)) => {
    const newValue = value instanceof Function ? value(state) : value
    setState(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [state, setValue, loading]
}
