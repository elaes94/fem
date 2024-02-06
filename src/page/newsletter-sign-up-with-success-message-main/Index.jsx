import { useEffect, useState } from "react"
import './index.css'
import Signup from "./Signup"
import Success from "./Success"

function Index() {
    const [sign, setSign] = useState(false)
    useEffect(() => {
        document.title = 'Frontend Mentor | Newsletter sign-up form with success message'
        const favicon = document.getElementById('favicon')
        favicon.href = '/newsletter-sign-up-with-success-message-main/images/favicon-32x32.png'
        favicon.type = 'image/png'
        favicon.sizes = '32x32'
    }, [])

    return (
        <>
            <main className="newsletter">
                {/* <!-- Sign-up form start --> */}
                <div className="wrapper">
                    <div className="image">
                        <img className="desk" src="/newsletter-sign-up-with-success-message-main/images/illustration-sign-up-desktop.svg" alt="" />
                        <img className="mobile" src="/newsletter-sign-up-with-success-message-main/images/illustration-sign-up-mobile.svg" alt="" />
                    </div>
                    <div className="content">
                        <h1>Stay updated!</h1>

                        <p>Join 60,000+ product managers receiving monthly updates on:</p>
                        <ul>
                            <li>
                                <img src="/newsletter-sign-up-with-success-message-main/images/icon-list.svg" alt="" />
                                <span>Product discovery and building what matters</span>
                            </li>
                            <li>
                                <img src="/newsletter-sign-up-with-success-message-main/images/icon-list.svg" alt="" />
                                <span>Measuring to ensure updates are a success</span>
                            </li>
                            <li>
                                <img src="/newsletter-sign-up-with-success-message-main/images/icon-list.svg" alt="" />
                                <span>And much more!</span>
                            </li>
                        </ul>
                        <form action="">
                            <div className="label mark">
                                <label htmlFor="">Email address</label>
                                <span className="error">Valid email required</span>
                            </div>
                            <input type="text" placeholder="email@company.com" />
                            <button className="mark">Subscribe to monthly newsletter</button>
                        </form>
                        {/* <!-- Sign-up form end --> */}
                    </div>
                </div>
            </main>
            {/* <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Your Name Here</a>.
            </div> */}
        </>
    )
}

export default Index