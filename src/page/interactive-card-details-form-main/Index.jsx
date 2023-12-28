import { useEffect, useState } from "react"
import './index.css'

export default function Index() {
    const [submit,isSubmit] = useState(false)
    useEffect(() => {
        document.title = 'Frontend Mentor | Product preview card component'
        const favicon = document.getElementById('favicon')
        favicon.href = '/interactive-card-details-form-main/images/favicon-32x32.png'
        favicon.type = 'image/png'
        favicon.sizes = '32x32'
    }, [])

    return (
        <main className="interactiveCard">
            <form action="">
                <div>
                    <label htmlFor="">Cardholder Name</label>
                    <input type="text" placeholder="e.g. Jane Appleseed"/>
                    <span></span>
                </div>
                <button>Confirm</button>
            </form>
            <div className="recto">
                <img src="/interactive-card-details-form-main/images/card-logo.svg" alt="" />
                <div className="number">0000 0000 0000 0000</div>
                <div className="divers">
                    <span className="name">Jane Appleseed</span>
                    <span className="date">00/00</span>
                </div>
            </div>
            <div className="verso">
                <span className="code">000</span>
            </div>

            Cardholder Name
            e.g. Jane Appleseed

            Card Number
            e.g. 1234 5678 9123 0000

            Exp. Date (MM/YY)
            MM
            YY

            CVC
            e.g. 123

            

            {/* <!-- Completed state start --> */}

            Thank you!
            We've added your card details
            Continue
        </main>
    )
}