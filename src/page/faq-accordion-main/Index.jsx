import { useEffect } from "react"
import './index.css'

export default function Index() {

    useEffect(() => {
        document.title = 'Frontend Mentor | FAQ accordion'
        const favicon = document.getElementById('favicon')
        favicon.href = '/faq-accordion-main/assets/images/favicon-32x32.png'
        favicon.type = 'image/png'
        favicon.sizes = '32x32'
    }, [])

    return (
        <main className="faq">
            <section>
                <div className="title">
                    <img src="/faq-accordion-main/assets/images/icon-star.svg" alt="" />
                    <h1>FAQs</h1>
                </div>
                <article>
                    <div>
                        <h3> What is Frontend Mentor, and how will it help me?</h3>
                        <img src="/faq-accordion-main/assets/images/icon-plus.svg" alt="" />
                    </div>
                    <p className="show">
                        Frontend Mentor offers realistic coding challenges to help developers improve their
                        frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
                        all levels and ideal for portfolio building.
                    </p>
                </article>
                <article>
                    <div>
                        <h3>  Is Frontend Mentor free?</h3>
                        <img src="/faq-accordion-main/assets/images/icon-plus.svg" alt="" />
                    </div>
                    <p>
                        Yes, Frontend Mentor offers both free and premium coding challenges, with the free
                        option providing access to a range of projects suitable for all skill levels.
                    </p>
                </article>
                <article>
                    <div>
                        <h3> Can I use Frontend Mentor projects in my portfolio?</h3>
                        <img src="/faq-accordion-main/assets/images/icon-plus.svg" alt="" />
                    </div>
                    <p>
                        Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                        way to showcase your skills to potential employers!
                    </p>
                </article>
                <article>
                    <div>
                        <h3> How can I get help if I'm stuck on a challenge?</h3>
                        <img src="/faq-accordion-main/assets/images/icon-plus.svg" alt="" />
                    </div>
                    <p>
                        The best place to get help is inside Frontend Mentor's Discord community. There's a help
                        channel where you can ask questions and seek support from other community members.
                    </p>
                </article>
            </section>

        </main>
    )
}