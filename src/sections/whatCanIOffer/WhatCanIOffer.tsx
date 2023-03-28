import { forwardRef } from "react";
import SectionBreak from "../../components/SectionBreak";

const WhatCanIOffer = forwardRef<HTMLDivElement>((props, ref) => {

    return (
        <section id="whatCanIOffer" ref={ref}>
            
            <h2>What Can I Offer You</h2>

            <SectionBreak />

            <div>
                <span><strong>SEO</strong> and <strong>Performance Reviews</strong></span>
                <span><strong>Clean Architecture</strong> and <strong>Best Practices</strong></span>
                <span><strong>Can Do Attitude</strong> and <strong>Willingness to Learn</strong></span>
                <span><strong>Ability to collaborate</strong> effectively with <strong>cross-functional teams</strong></span>
                <span>Ability to maintain a <strong>positive and upbeat attitude</strong> while still delivering <strong>high-quality work</strong> consistently and reliably</span>
                <span>Ability to <strong>work well under pressure</strong> and meet <strong>tight deadlines</strong></span>
                <span><strong>Creative thinking</strong> and ability to think outside the box</span>
                <span><strong>Strong work ethic</strong> and genuine <strong>passion for learning</strong></span>
                <span><strong>Fun yet reliable</strong> teammate</span>
                <span><strong>Leadership skills</strong> and ability to take charge when needed</span>
                <span><strong>Problem-solving skills</strong> and ability to find <strong>efficient solutions</strong> to complex issues</span>
                <span><strong>Attention to detail</strong> and commitment to delivering <strong>bug-free</strong> code</span>
                <span><strong>Effective communication skills</strong> and ability to articulate ideas clearly and concisely</span>
            </div>

        </section>
    )
})

export default WhatCanIOffer