import { ReactNode } from "react"

type TechItemProps = {
    children: ReactNode
    title: string
}
  
export default function TechItem({ children, title }: TechItemProps) {

    return (
        <div className="item">
            {children}
            <span>{title}</span>
        </div>
    )
}
