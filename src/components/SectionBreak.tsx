import { useEffect, useRef } from "react"
import useIsInView from "../hooks/useIsInView"

export default function SectionBreak() {

    const [isInView, ref] = useIsInView()

    return (
        <div className={`sectionBreak ${isInView ? 'visible' : ''}`} ref={ref}>
            <span></span>
            <span></span>
        </div>
    )
}