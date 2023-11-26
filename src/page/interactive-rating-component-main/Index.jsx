import { createContext, useContext, useEffect, useState } from "react"
import Rating from "./Rating"
import Thank from "./Thank"
import './index.css'

const CurrentValidContext = createContext(null)
const ScoreContext = createContext()

export default function Index() {
    const [validated, setValidated] = useState(null)
    const [score, setScore] = useState(0)
    useEffect(() => {
        document.title = 'Frontend Mentor | Interactive rating component'
        const favicon = document.getElementById('favicon')
        favicon.href = '/interactive-rating-component-main/images/favicon-32x32.png'
        favicon.type = 'image/png'
        favicon.sizes = '32x32'
    }, [])

    return (
        <CurrentValidContext.Provider value={{ validated, setValidated }}>
            <ScoreContext.Provider value={{score, setScore}}>
                <main className="rating">
                    <Display />
                </main>
            </ScoreContext.Provider>
        </CurrentValidContext.Provider>
    )
}

function Display() {
    const { validated, setValidated } = useContext(CurrentValidContext)
    if (validated === null || validated === "home") {
        return <Rating />
    }

    return (
        <Thank />
    )
}

export function useValidated() {
    return useContext(CurrentValidContext)
}

export function useScore() {
    return useContext(ScoreContext)
}