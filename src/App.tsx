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

  return (
    <>
      <Navigation />

      <MainLayout>

        <About />
        <Experience />
        <TechStack />
        <WhatCanIOffer />
        <Projects />
        <SocialLinks />

      </MainLayout>
    </>
  )
}

