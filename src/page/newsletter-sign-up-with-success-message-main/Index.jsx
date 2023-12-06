import { useEffect, useState } from "react"
import './index.css'
import Subscribe from "./Subscribe"
import Thanks from "./Thanks"

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
            <Subscribe />
            {/* <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Your Name Here</a>.
            </div> */}
        </>
    )
}

export default Index