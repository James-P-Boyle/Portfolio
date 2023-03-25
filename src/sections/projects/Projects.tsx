import SectionBreak from "../../components/SectionBreak";
import ProjectCard from "./components/ProjectCard";
import ProjectContent from "./components/ProjectContent";

export default function Projects() {

    return (
        <section id="projects">
            <h2>Projects</h2>

            <SectionBreak />

            {projectsData.map((project) => (
                <ProjectCard 
                    name={project.name}
                    description={project.description}
                    techStack={project.techStack}
                    imageUrl={project.imageUrl}
                />
            ))}
            

        </section>
    )
}

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
      name: "Memoey",
      description: "A social media website to share pictures of my daugther Zoey with my family and friends",
      techStack: ["React", "Node.js", "MongoDB", "Node.js"],
      imageUrl: "https://picsum.photos/200/300",
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