import { useScore } from "./Index"

function Thank() {

    const score = useScore()

    return (
        <section className="thank">
            {/* <!-- Thank you state start --> */}
            <img className="draw" src="/interactive-rating-component-main/images/illustration-thank-you.svg" alt="" />

            <div className="score">
                You selected  {score.score} out of 5
            </div>


            <h1>
                Thank you!
            </h1>
            <p>
                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
            </p>

            {/* <!-- Thank you state end --> */}
        </section>
    )
}

export default Thank