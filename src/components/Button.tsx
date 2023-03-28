import { ReactNode } from "react"

interface ButtonProps {
onClickFunction?: () => void
children: ReactNode
type?: "button" | "submit" | "reset";
addedClasses?: string
}

export default function Button({ 
    onClickFunction, 
    children, 
    type = "button", 
    addedClasses
}: ButtonProps) {

    return (
        <button className={`btn ${addedClasses}`} onClick={onClickFunction} type={type}>
            { children }
        </button> 
    )
}