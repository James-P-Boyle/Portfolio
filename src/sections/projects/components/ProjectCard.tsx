import { useState } from "react"
import { Project } from "../Projects"

interface ProjectCardProps extends Project {}

export default function ProjectCard({ 
    name, 
    description, 
    techStack, 
    liveUrl, 
    repoUrl, 
    imageUrl 
}: ProjectCardProps) {

    const [ showTechStack, setShowTechStack ] = useState(false)
    const [ showImage, setShowImage ] = useState(false)

    const handleTechStackClicked = () => {
        setShowTechStack(!showTechStack)
        setShowImage(false)
    }

    const handleImageClicked = () => {
        setShowImage(!showImage)
    }

    return (
        <div 
            className="projectCard"
            style={{ 
                backgroundImage: showImage ? `url("${imageUrl}")` : '', 
                backgroundSize: showImage ? 'cover' : 'auto',
                backgroundPosition: showImage ? 'center' : ''

            }}
        >

        <h3 className={`${showImage ? 'contrast' : ''}`}>{name}</h3>
        

        <div className={`projectCardContent ${showImage ? 'hide' : ''}`} >
            
            {showTechStack ? (
                <div>
                    {techStack?.map((tech) => (
                        <p>{tech}</p>
                    ))}
                </div>
            ) : (
                <p>{description}</p>
            )}
            
          
        </div>
        
        <div>
            <button onClick={handleTechStackClicked}>
                {showTechStack 
                    ? 'Overview' 
                    : 'Tech Stack'
                }
            </button> 

            <button>View Code</button> 

            <button>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    View Live
                </a>
            </button> 

            <button onClick={handleImageClicked}>
                {showImage 
                    ? 'Hide Image' 
                    : 'Show Image'
                }
            </button>
        </div>
    </div>
    )
}