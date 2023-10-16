import { useEffect } from "react"
import './index.css'

function Index() {
    useEffect(() => {
        document.title = 'frontend Mentor | Results summary component'
        const favicon = document.getElementById('favicon')
        favicon.href = './src/page/results-summary-component-main/assets/images/favicon-32x32.png'
        favicon.type = 'image/png'
        favicon.sizes = '32x32'
    }, [])

    return (
        <>
            <article>
                <section className="result">
                    <div className="title lavender">
                        Your Result
                    </div>
                    <div className="score">
                        <div className="percent">
                            76
                        </div>
                        <div>
                        of 100
                        </div>
                    </div>

                    <div className="message">
                        Great
                    </div>
                    <p className="lavender">
                        You scored higher than 65% of the people who have taken these tests.
                    </p>
                </section>
                <section className="summary">
                    <div className="summary">
                        Summary
                    </div>
                    <div>
                        Reaction
                        80 / 100
                    </div>
                    <div>
                        Memory
                        92 / 100
                    </div>
                    <div>
                        Verbal
                        61 / 100
                    </div>
                    <div>
                        Visual
                        72 / 100
                    </div>
                    <button>
                        Continue
                    </button>
                </section>
            </article>

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Your Name Here</a>.
            </div>
        </>
    )
}

export default Index