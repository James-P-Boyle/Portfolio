import { useState } from "react"
import Button from "../../../components/Button"

interface ExperienceCardProps {
    position: string
    company: string
    location: string
    date: string
    description: string
}

export function ExperienceCard({ position, company, location, date, description }: ExperienceCardProps){

    const [ showDescription, setShowDescription ] = useState(false)

    const handleToggleDescription = () => {
        setShowDescription(prevState => !prevState)
    }

    return (
        <div className={`experienceCard ${showDescription ? 'showDescription' : ''}`}>

            <h3>{position}</h3>

            <div>
                <em>
                    <span>{company}</span>
                    <span> - </span>
                    <span>{location}</span>
                </em>
            </div>
            
            <h4>{date}</h4>

            <Button onClickFunction={handleToggleDescription}>
                {showDescription 
                    ? 'Show less' 
                    : 'Show more'
                }
            </Button>
     
            <p>{description}</p>
        </div>
    )
}