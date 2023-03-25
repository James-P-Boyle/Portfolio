import SectionBreak from "../../components/SectionBreak"
import { ExperienceCard } from "./components/ExperienceCard"

export default function Experience() {

    return (
        <section id="experience">

            <h2>Relevant Expierence</h2>

            <SectionBreak />

            <ExperienceCard
                position="Full Stack Developer"
                company="Compose OHG"
                location="Germany"
                date="September 2021 - Present"
                description="As a hands-on developer, I have extensive experience in designing and implementing web applications using a variety of modern technologies, including TypeScript, React, Tailwind, and Laravel. During my tenure at [Company], I played an instrumental role in the development of [Project], which involved [brief description of the project]"
            />
            <ExperienceCard
                position="Full Stack Developer"
                company="Compose OHG"
                location="Germany"
                date="September 2021 - Present"
                description="As a hands-on developer, I have extensive experience in designing and implementing web applications using a variety of modern technologies, including TypeScript, React, Tailwind, and Laravel. During my tenure at [Company], I played an instrumental role in the development of [Project], which involved [brief description of the project]"
            />
            <ExperienceCard
                position="Full Stack Developer"
                company="Compose OHG"
                location="Germany"
                date="September 2021 - Present"
                description="As a hands-on developer, I have extensive experience in designing and implementing web applications using a variety of modern technologies, including TypeScript, React, Tailwind, and Laravel. During my tenure at [Company], I played an instrumental role in the development of [Project], which involved [brief description of the project]"
            />
            
            <div>
                <span>Check out my <a>CV</a> or <a>LinkedIn</a> to find out more</span>
            </div>
        </section> 
    )
} 
