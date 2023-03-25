import { Project } from "../Projects"

export default function ProjectContent({ description }: Project) {

    return (
        <div className="projectCardContent">
             
            <p>{description}</p>
      
        </div>
    )
}