import { useState, useEffect } from "react"

interface ScrollDirection {
  isScrollingUp: boolean
  isScrollingDown: boolean
}

export default function useScrollDirection(): ScrollDirection {
  const [prevScrollY, setPrevScrollY] = useState<number>(0)
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(false)
  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > prevScrollY) {
        setIsScrollingUp(false)
        setIsScrollingDown(true)
      } else if (currentScrollY < prevScrollY) {
        setIsScrollingUp(true)
        setIsScrollingDown(false)
      }

      setPrevScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
    
  }, [prevScrollY])

  return { isScrollingUp, isScrollingDown }
}
