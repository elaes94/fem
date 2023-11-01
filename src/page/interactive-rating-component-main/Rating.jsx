import { Choice } from "./Choice"
import { useValidated } from "./Index"

export default function Rating() {

    const valid = useValidated()
    const rate = [1,2,3,4,5]

    return (
        <section>
            {/* <!-- Rating state start --> */}
            <img className="star" src="/interactive-rating-component-main/images/icon-star.svg" alt="" />
            <h1>
                How did we do?
            </h1>

            <p>
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>
            <div className="choices">
                    {rate.map( (value, i) =>
                    <Choice key={i}>{value}</Choice>
                    )}                
            </div>

            <button onClick={() => {
                valid.setValidated("valid")
                setTimeout(() => valid.setValidated(null), 5000)
            }}>
                Submit
            </button>

            {/* <!-- Rating state end --> */}

            {/* <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Your Name Here</a>.
            </div> */}
        </section>
    )
}