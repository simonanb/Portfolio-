import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

// Go back in history, or to `fallback` when the page was opened directly
// (React Router stores the in-app history index on history.state.idx)
export function useGoBack(fallback = '/') {
  const navigate = useNavigate()

  return useCallback(() => {
    if (window.history.state?.idx > 0) navigate(-1)
    else navigate(fallback)
  }, [navigate, fallback])
}
