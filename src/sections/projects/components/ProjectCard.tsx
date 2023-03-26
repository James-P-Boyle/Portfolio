import { useState } from "react"
import Button from "../../../components/Button"
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
            <Button onClickFunction={handleTechStackClicked}>
                {showTechStack 
                    ? 'Overview' 
                    : 'Tech Stack'
                }
            </Button>
            
            <Button>
                View Code
            </Button>

            <Button onClickFunction={handleImageClicked}>
                {showImage 
                    ? 'Hide Image' 
                    : 'Show Image'
                }
            </Button>

            <Button>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    View Live
                </a>
            </Button>

        </div>
    </div>
    )
}