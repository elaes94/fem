import { useEffect, useState } from "react"
import './index.css'
import Signup from "./Signup"
import Success from "./Success"

function Index() {
    const [sign, setSign] = useState('')
    const [error, setError] = useState(true)
    useEffect(() => {
        document.title = 'Frontend Mentor | Newsletter sign-up form with success message'
        const favicon = document.getElementById('favicon')
        favicon.href = '/newsletter-sign-up-with-success-message-main/images/favicon-32x32.png'
        favicon.type = 'image/png'
        favicon.sizes = '32x32'
    }, [])

    function handleMail(e) {
        const email = e.target.value
        if (email.match(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm)) {
            setError(false)
        } else {
            setError(true)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        error ? setSign('error') : setSign('valid')
    }

    function handleReturn(e) {
        e.preventDefault
        setError(true)
        setSign('')
    }

    return (
        <main className="newsletter">
            {sign == 'valid' ? 
            <Success onSubmit={handleReturn}/> : 
            <Signup sign={sign} onMailChange={handleMail} onSubmit={handleSubmit} />}
        </main>
    )
}

export default Index