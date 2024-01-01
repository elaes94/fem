import './index.css'
import { useEffect, useReducer, useState } from "react"
import Form from "./Form"
import Confirmation from "./Confirmation"
import cardReducer from './cardReducer'

export default function Index() {
    const [submit, setSubmit] = useState(false)
    const [card, dispatch] = useReducer(cardReducer, {
        name: '',
        number: '',
        month: '',
        year: '',
        cvc: '',
        error: {
            number: '',
            date: '',
            cvc: ''
        }
    })

    useEffect(() => {
        document.title = 'Frontend Mentor | Product preview card component'
        const favicon = document.getElementById('favicon')
        favicon.href = '/interactive-card-details-form-main/images/favicon-32x32.png'
        favicon.type = 'image/png'
        favicon.sizes = '32x32'
    }, [])

    function handleName(e) {
        dispatch({
            type: 'handleName',
            name: e.target.value
        })
    }

    function handleNumber(e) {
        dispatch({
            type: 'handleNumber',
            number: e.target.value
        })
    }

    function handleMonth(e) {
        dispatch({
            type: 'handleMonth',
            month: e.target.value
        })
    }

    function handleYear(e) {
        dispatch({
            type: 'handleYear',
            year: e.target.value
        })
    }

    function handleCvc(e) {
        dispatch({
            type: 'handleCvc',
            cvc: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("click button")
        dispatch({
            type: 'handleSubmit',
        })
    }

    return (
        <main className="interactiveCard">
            {submit ? <Confirmation /> :
                <Form
                    card={card}
                    onNameChange={handleName}
                    onNumberChange={handleNumber}
                    onMonthChange={handleMonth}
                    onYearChange={handleYear}
                    onCvcChange={handleCvc}
                    onSubmit={handleSubmit}
                />}


            <div className="recto">
                <img src="/interactive-card-details-form-main/images/card-logo.svg" alt="" />
                <div className="number">{card.number || '0000 0000 0000 0000'}</div>
                <div className="divers">
                    <span className="name">{card.name || 'Jane Appleseed'}</span>
                    <span className="date">{card.month || '00'}/{card.year || '00'}</span>
                </div>
            </div>
            <div className="verso">
                <span className="code">{card.cvc || '000'}</span>
            </div>

            {/* <!-- Completed state start --> */}


        </main>
    )
}