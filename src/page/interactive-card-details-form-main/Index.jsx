import { useEffect } from "react"
import './index.css'

export default function Index() {
    useEffect(() => {
        document.title = 'Frontend Mentor | Product preview card component'
        const favicon = document.getElementById('favicon')
        favicon.href = '/interactive-card-details-form-main/images/favicon-32x32.png'
        favicon.type = 'image/png'
        favicon.sizes = '32x32'
    }, [])

    return (
        <main className="interactiveCard">
            0000 0000 0000 0000
            Jane Appleseed
            00/00

            000

            Cardholder Name
            e.g. Jane Appleseed

            Card Number
            e.g. 1234 5678 9123 0000

            Exp. Date (MM/YY)
            MM
            YY

            CVC
            e.g. 123

            Confirm

            {/* <!-- Completed state start --> */}

            Thank you!
            We've added your card details
            Continue
        </main>
    )
}