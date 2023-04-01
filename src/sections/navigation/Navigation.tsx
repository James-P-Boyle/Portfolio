import { RefObject, useEffect, useState } from "react"
import Hamburger from "../../components/Hamburger"
import SocialLinks from "../../components/SocialLinks"
// Custom Hooks
import useScrollDirection from "../../hooks/useScrollDirection"
import useScreenWidth from "../../hooks/useScreenWidth"
import Button from "../../components/Button"

interface NavigationProps {
    aboutRef: RefObject<HTMLDivElement>
    experienceRef: RefObject<HTMLDivElement>
    techStackRef: RefObject<HTMLDivElement>
    projectsRef: RefObject<HTMLDivElement>
  }

export default function Navigation({ 
    aboutRef, 
    experienceRef,
    techStackRef,
    projectsRef
}: NavigationProps) {

    const [ hideNav, setHideNav ] = useState(false)
    const [ showBurger, setShowBurger ] = useState(false)
    const { isScrollingUp, isScrollingDown } = useScrollDirection()
    const screenWidth = useScreenWidth()
    // NEED TO IMPORT THEME VARIABLE
    const isMobileScreen = screenWidth <= 768;
   
    // LARGE SCREENS
    useEffect(() => {
        setShowBurger(false)
        if(isScrollingDown && !isMobileScreen) {
            setHideNav(true)
            // setShowBurger(true)
        } 
        if(isScrollingUp && !isMobileScreen) {
            setHideNav(false)
            // setShowBurger(false)
        }
    }, [isScrollingDown, isScrollingUp, isMobileScreen])

    // SMALL SCREENS
    useEffect(() => {
        if(isMobileScreen) {
            setHideNav(true)
            setShowBurger(true)
        }
       
        if(isScrollingDown && isMobileScreen) {
            setShowBurger(false)
        }

    }, [isMobileScreen, isScrollingDown])
    
    const handleNavClick = (ref: RefObject<HTMLDivElement>) => {
        setHideNav(true)
        ref && ref.current && ref.current.scrollIntoView({ behavior: "smooth" })  
    }
    
    return (
        <>
            <header id="navigation" className={`${hideNav && "navHidden"}`}>
                {hideNav ? (
                    null
                ) : (
                    <> 
                        <a onClick={() => handleNavClick(aboutRef)}>About</a>
                        <a onClick={() => handleNavClick(experienceRef)}>Experience</a>
                        <a onClick={() => handleNavClick(techStackRef)}>Stack</a>
                        {/* <a onClick={() => handleNavClick(whatCanIOfferRef)}>What I Can Offer</a> */}
                        <a onClick={() => handleNavClick(projectsRef)}>Projects</a>
                        <SocialLinks />

                        {isMobileScreen && <Button onClickFunction={() => setHideNav(true)}>Close</Button>}
                    </>
                )}
            </header>
            {showBurger && hideNav && <Hamburger id="hamburger" onClickFunction={() => setHideNav(!hideNav)} />}
        </> 
    )
}
