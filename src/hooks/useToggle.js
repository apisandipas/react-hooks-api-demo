import { useState } from 'react'

export function useToggle(defaultState = false) {
  const [on, setToggle] = useState(defaultState)

  return [
    on,
    (state = null) => setToggle(state || !on)
  ]
}
