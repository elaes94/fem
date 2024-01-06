import './index.css'
import { useEffect, useReducer, useState } from "react"
import Form from "./Form"
import Confirmation from "./Confirmation"
import cardReducer from './cardReducer'

export default function Index() {
    const [validate, setValidate] = useState('empty')
    const [card, dispatch] = useReducer(cardReducer, {
        name: '',
        number: '',
        month: '',
        year: '',
        cvc: '',
        error: {
            number: "Can't be blank",
            month: "Can't be blank",
            year: "Can't be blank",
            date: "Can't be blank",
            cvc: "Can't be blank"
        }
    })

    useEffect(() => {
        document.title = 'Frontend Mentor | Interactive card details form'
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
        if (card.error.number == '' && card.error.date == '' && card.error.cvc == '') {
            setValidate(validate == 'error' || validate == 'empty' ? 'valid' : 'empty')
        } else {
            setValidate('error')
        }
    }

    return (
        <main className="interactiveCard">
            {validate == "valid" ? <Confirmation validate={validate} /> :
                <Form
                    card={card}
                    validate={validate}
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
        </main>
    )
}