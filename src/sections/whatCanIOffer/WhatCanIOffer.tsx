import { forwardRef } from "react";
import SectionBreak from "../../components/SectionBreak";

const WhatCanIOffer = forwardRef<HTMLDivElement>((props, ref) => {

    return (
        <section id="whatCanIOffer" ref={ref}>
            
            <h2>What Can I Offer You</h2>

            <div>
                <p>
                    I have a <strong>passion for learning</strong> and a <strong>can-do attitude</strong>, 
                    coupled with <strong>strong work ethic</strong> and <strong>attention to detail </strong> 
                    to deliver <strong>high-quality work</strong> consistently and reliably. 
                    I have a <strong>problem-solving mindset</strong> and the ability to think creatively 
                    and find <strong>efficient solutions</strong> to complex issues.
                </p>
                <p>
                    I am committed to following <strong>clean architecture</strong> and 
                    <strong> best practices</strong>, ensuring that all work is optimized for <strong>SEO </strong> 
                    and <strong>performance</strong>. I possess <strong>leadership skills </strong> 
                    and am able to take charge when needed, while maintaining a <strong>positive and upbeat attitude </strong> 
                    that fosters collaboration and teamwork.

                </p>
                <p>
                    I have the <strong>ability to communicate ideas clearly and concisely</strong>,
                    and to work effectively with <strong>cross-functional teams</strong>. I am able to <strong>maintain 
                    composure under pressure</strong> and meet <strong>tight deadlines</strong>. 
                    I believe in <strong>thinking outside the box</strong> and bringing <strong>fun and creativity </strong> 
                    to the table, while delivering <strong>bug-free code</strong>.
                </p>
                <p>
                    If you're looking for a <strong>dedicated and reliable teammate</strong>, 
                    feel free to get in contact with me any time!
                </p>
            </div>
            
            
            

        </section>
    )
})

export default WhatCanIOffer