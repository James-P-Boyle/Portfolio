import { RefObject, forwardRef } from "react"
import SectionBreak from "../../components/SectionBreak"
import SocialLinks from "../../components/SocialLinks"


const About = forwardRef<HTMLDivElement>((props, ref) => {
 
    return (
        <section id="about" ref={ref}>
            <div>
                {/* image */}
            </div>
            <div>
                <h1>James Boyle</h1>
                <h2>Web Developer</h2>

                <SectionBreak />
                
                <p>Welcome to my web developer portfolio! I'm a passionate developer with experience in designing and developing web applications using modern technologies. With a focus on creating user-friendly and responsive web experiences, I strive to build dynamic and engaging websites that not only meet but exceed my clients' expectations.</p>
            </div>

            <SocialLinks />
        </section> 
  )
})

export default About