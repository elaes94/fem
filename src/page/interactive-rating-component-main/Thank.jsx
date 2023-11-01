function Thank() {
    return (
        <section className="thank">
            {/* <!-- Thank you state start --> */}
            <img src="/interactive-rating-component-main/images/illustration-thank-you.svg" alt="" />

            <div>
                You selected  {/* <!-- Add rating here --> */} out of 5
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