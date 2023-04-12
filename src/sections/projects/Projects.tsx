import { forwardRef } from "react";
import ProjectCard from "./ProjectCard";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {

    return (
        <section id="projects" ref={ref}>
            <h2>Projects</h2>

            {projectsData.map((project) => (
                <ProjectCard 
                    name={project.name}
                    description={project.description}
                    techStack={project.techStack}
                    imageUrl={project.imageUrl}
                    liveUrl={project.liveUrl}
                    repoUrl={project.repoUrl}
                />
            ))}
        </section>
  )
})

export interface Project {
    name?: string
    description?: string
    techStack?: string[]
    imageUrl?: string
    repoUrl?: string
    liveUrl?: string
}

const projectsData: Project[] = [
    {
      name: "The BoylerPlate",
      description: "A blog for all things related to coding, built using laravel 10 and Typescript",
      techStack: ["Laravel", "Typescript", "Tailwind", "Php"],
      imageUrl: "public/images/boylerPlate.png",
      repoUrl: "https://github.com/James-P-Boyle/BoylerPlate",
      liveUrl: "http://stormy-journey-05006.herokuapp.com/",
    },
    {
      name: "Jamesy",
      description: "A second sample description for one of my big great projects",
      techStack: ["React", "Node.js", "MongoDB"],
      imageUrl: "https://picsum.photos/200",
      repoUrl: "https://github.com/memoey",
      liveUrl: "https://memoey.com",
    },
    {
      name: "Jamesy",
      description: "A second sample description for one of my big great projects",
      techStack: ["React", "Node.js", "MongoDB"],
      imageUrl: "https://picsum.photos/200",
      repoUrl: "https://github.com/memoey",
      liveUrl: "https://memoey.com",
    },
];

export default Projects