type TechItemProps = {
    path: string[] | string
    title: string
}
  
export default function TechItem({ path, title }: TechItemProps) {
    const paths = Array.isArray(path) ? path.join(' ') : path
    return (
        <div className="item">
            <svg fill="none" viewBox="0 0 15 15">
                {paths.map((path: string, index: number) => (
                    <path fill="currentColor" key={index} d={path} />
                ))}
                <path fill="currentColor" d={path} />
            </svg>
            <span>{title}</span>
        </div>
    )
}
