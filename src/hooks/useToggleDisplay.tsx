import { useState, MouseEventHandler } from "react"

type UseToggleDisplayReturn<T extends HTMLElement> = [
  isOpen: boolean,
  toggle: MouseEventHandler<T>
]

export default function useToggleDisplay<T extends HTMLElement>(): UseToggleDisplayReturn<T> {
  const [isOpen, setIsOpen] = useState(false)

  function toggle(event: React.MouseEvent<T>) {
    event.preventDefault()
    setIsOpen(!isOpen)
  }

  return [isOpen, toggle]
}