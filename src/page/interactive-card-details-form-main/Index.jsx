import { useEffect, useState } from "react"
import './index.css'

export default function Index() {
    const [submit, isSubmit] = useState(false)
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
                <div className="one-field">
                    <label htmlFor="">Cardholder Name</label>
                    <input type="text" placeholder="e.g. Jane Appleseed" />
                    <span>error</span>
                </div>
                <div className="one-field">
                    <label htmlFor="">Card Number</label>
                    <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
                    <span>error</span>
                </div>
                <div className="date-cvc">
                    <div className="one-field">
                        <label htmlFor="">Date</label>
                        <div>
                            <input className="half" type="text" placeholder="MM" />
                            <input className="half" type="text" placeholder="YY" />
                        </div>
                        <span>error</span>
                    </div>
                    <div className="one-field">
                        <label htmlFor="">CVC</label>
                        <input type="text" placeholder="e.g. 123" />
                        <span>error</span>
                    </div>
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