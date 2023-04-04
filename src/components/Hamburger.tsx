import Button from "./Button"
import React, { useEffect, useState } from 'react'

interface HamburgerProps {
    onClickFunction?: () => void
    id?: string
}

export default function Hamburger({ onClickFunction, id }: HamburgerProps) {

  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      setScroll(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scroll])

  return (
    
    <div id="hamburger" style={{ "--scroll": scroll } as React.CSSProperties}>
        <svg
        className="loader"
        width="100"
        height="100"
        viewBox="0 0 24 24"
   
      >
        <path d="M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z" />
    </svg>

    </div>

    
  )
}
