import { useRef } from 'react'
import MainLayout from './components/layouts/MainLayout'
import SocialLinks from './components/SocialLinks'
import './scss/app.scss'
import About from './sections/about/About'
import Experience from './sections/experience/Experience'
import Navigation from './sections/navigation/Navigation'
import Projects from './sections/projects/Projects'
import TechStack from './sections/techStack/TechStack'
import WhatCanIOffer from './sections/whatCanIOffer/WhatCanIOffer'

export default function App() {

  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const whatCanIOfferRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navigation
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        techStackRef={techStackRef}
        whatCanIOfferRef={whatCanIOfferRef}
        projectsRef={projectsRef}
      />

      <MainLayout>
        <About ref={aboutRef} />
        <Experience ref={experienceRef} />
        <TechStack ref={techStackRef} />
        <WhatCanIOffer ref={whatCanIOfferRef} />
        <Projects ref={projectsRef} />
        <SocialLinks />
      </MainLayout>
    </>
  )
}

