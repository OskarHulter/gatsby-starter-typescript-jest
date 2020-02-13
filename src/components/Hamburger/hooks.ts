import { useEffect } from 'react'

export const useOnClickOutside = (
  ref: React.MutableRefObject<HTMLElement>,
  handler: Function
) => {
  useEffect(() => {
    const listener = (event: Event): EventListener => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}
