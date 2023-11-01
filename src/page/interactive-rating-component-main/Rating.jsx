import { useValidated } from "."

export default function Rating() {

    const valid = useValidated()

    return (
        <section>
            {/* <!-- Rating state start --> */}

            How did we do?

            Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering!

            1 2 3 4 5

            <button onClick={() => {
                valid.setValidated("valid")
                setTimeout(() => valid.setValidated(null), 5000)
                }}>
                Submit
            </button>

            {/* <!-- Rating state end --> */}

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Your Name Here</a>.
            </div>
        </section>
    )
}