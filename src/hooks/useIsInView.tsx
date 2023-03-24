import { useState, useEffect, useRef  } from "react"

export default function useIsInView(): [boolean, React.RefObject<HTMLDivElement>] {

    const [ isInView, setIsInView ] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting)
            }
        )

        ref.current && observer.observe(ref.current)

        return () => {
            ref.current && observer.unobserve(ref.current) 
        }
    })

    return [isInView, ref]
}