import { RefObject, useState } from "react"
import SocialLinks from "../../components/SocialLinks"

interface NavigationProps {
    aboutRef: RefObject<HTMLDivElement>
    experienceRef: RefObject<HTMLDivElement>
    techStackRef: RefObject<HTMLDivElement>
    whatCanIOfferRef: RefObject<HTMLDivElement>
    projectsRef: RefObject<HTMLDivElement>
  }

export default function Navigation({ 
    aboutRef, 
    experienceRef,
    techStackRef,
    whatCanIOfferRef,
    projectsRef
}: NavigationProps) {

    const [hideNav, setHideNav] = useState(false)
    
    const handleNavClick = (ref: RefObject<HTMLDivElement>) => {

        setHideNav(true)

        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" })
        }
    }
    
    return (
    <header id="navigation" className={hideNav ? "hidden" : ""}>
        <a onClick={() => handleNavClick(aboutRef)}>About</a>
        <a onClick={() => handleNavClick(experienceRef)}>Experience</a>
        <a onClick={() => handleNavClick(techStackRef)}>Stack</a>
        <a onClick={() => handleNavClick(whatCanIOfferRef)}>What I Can Offer</a>
        <a onClick={() => handleNavClick(projectsRef)}>Projects</a>
   
        <SocialLinks />
    </header>
    )
}
