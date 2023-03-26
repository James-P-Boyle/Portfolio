import { ReactNode } from "react"

interface ButtonProps {
onClickFunction?: () => void
children: ReactNode
type?: "button" | "submit" | "reset";
}

export default function Button({ 
    onClickFunction, 
    children, 
    type = "button" 
}: ButtonProps) {

    return (
        <button className={`btn-primary`} onClick={onClickFunction} type={type}>
            { children }
        </button> 
    )
}