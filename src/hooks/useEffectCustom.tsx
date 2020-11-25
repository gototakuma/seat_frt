import { useEffect, useRef } from 'react'

export const useEffectCustom = (func: any, dependencyList: any) => {
  const fisrtFlgRef = useRef(true)

  useEffect(() => {
    if (!fisrtFlgRef.current) {
      func()
    } else {
      fisrtFlgRef.current = false
    }
  }, dependencyList)
}
