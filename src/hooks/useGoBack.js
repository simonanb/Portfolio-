import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

// Go up one level (project → category → landing) instead of back in history,
// so the Back button never bounces between the same two pages
export function useGoBack(parent = '/') {
  const navigate = useNavigate()

  return useCallback(() => {
    navigate(parent)
  }, [navigate, parent])
}
