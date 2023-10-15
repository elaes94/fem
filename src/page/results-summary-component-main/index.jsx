import { useEffect } from "react"

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
            Your Result
            76
            of 100

            Great
            You scored higher than 65% of the people who have taken these tests.

            Summary

            Reaction
            80 / 100

            Memory
            92 / 100

            Verbal
            61 / 100

            Visual
            72 / 100

            Continue

            <div class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Your Name Here</a>.
            </div>
        </>
    )
}

export default Index