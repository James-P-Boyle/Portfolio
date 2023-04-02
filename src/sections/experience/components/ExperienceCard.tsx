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

            
            
            <div>
                <span>{position}</span>
            
                <p>
                    <span>{company}</span>
                    <span> - </span>
                    <span>{location}</span>
                </p>

                <small>{date}</small>
            </div>
            
            

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