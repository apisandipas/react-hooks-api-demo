import { useState, useEffect } from 'react'
import { useToggle } from './useToggle'

export function useUsers(defaultState = []) {
  const [users, setUsers] = useState(defaultState)
  const [isLoading, toggleLoader] = useToggle(true)

  useEffect(async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const json = await res.json()
      setUsers(json)
      toggleLoader(false)
    } catch(e) {
      console.log('ERROR', e)
      toggleLoader(false)
    }
  }, [])

  return [users, isLoading]
}
