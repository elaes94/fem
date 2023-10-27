import { useEffect, useState } from "react"
import './index.css'

function Index() {

    useEffect(() => {
        document.title = 'Frontend Mentor | Newsletter sign-up form with success message'
        const favicon = document.getElementById('favicon')
        favicon.href = '/newsletter-sign-up-with-success-message-main/images/favicon-32x32.png'
        favicon.type = 'image/png'
        favicon.sizes = '32x32'
    }, [])

    return (
        <>
            <section className="Newsletter">
                {/* <!-- Sign-up form start --> */}
                <div className="image">
                    <img src="/newsletter-sign-up-with-success-message-main/images/illustration-sign-up-mobile.svg" alt="" />
                </div>
                <div className="content">
                    Stay updated!

                    Join 60,000+ product managers receiving monthly updates on:

                    Product discovery and building what matters
                    Measuring to ensure updates are a success
                    And much more!

                    Email address
                    email@company.com

                    Subscribe to monthly newsletter

                    {/* <!-- Sign-up form end --> */}

                    {/* <!-- Success message start --> */}

                    Thanks for subscribing!

                    A confirmation email has been sent to ash@loremcompany.com.
                    Please open it and click the button inside to confirm your subscription.

                    Dismiss message

                    {/* <!-- Success message end --> */}
                </div>
            </section>
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Your Name Here</a>.
            </div>
        </>
    )
}

export default Index