import { ReactNode } from "react"

interface ButtonProps {
onClickFunction?: () => void
children: ReactNode
type?: "button" | "submit" | "reset";
addedClasses?: string
id?: string
}

export default function Button({ 
    onClickFunction, 
    children, 
    type = "button", 
    addedClasses,
    id
}: ButtonProps) {

    return (
        <button 
            id={id} 
            className={`btn ${addedClasses}`} 
            onClick={onClickFunction} 
            type={type}
        >
            { children }
        </button> 
    )
}