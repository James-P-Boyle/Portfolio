import SocialLinks from './components/SocialLinks'
import './scss/app.scss'
import About from './sections/about/About'
import Experience from './sections/experience/Experience'
import Projects from './sections/projects/Projects'
import TechStack from './sections/techStack/TechStack'
import WhatCanIOffer from './sections/whatCanIOffer/WhatCanIOffer'

function App() {

  return (
    <main>
      <About />
      <Experience />
      <TechStack />
      <WhatCanIOffer />
      <Projects />
      <SocialLinks />
    </main>
  )
}

export default App
