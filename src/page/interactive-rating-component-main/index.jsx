import { createContext, useContext, useEffect, useState } from "react"
import Rating from "./Rating"
import Thank from "./Thank"

const CurrentValidContext = createContext(null)

export default function Index() {
    const [validated, setValidated] = useState(null)
    useEffect(() => {
        document.title = 'Frontend Mentor | Interactive rating component'
        const favicon = document.getElementById('favicon')
        favicon.href = '/results-summary-component-main/assets/images/favicon-32x32.png'
        favicon.type = 'image/png'
        favicon.sizes = '32x32'
    }, [])

    return (
        <CurrentValidContext.Provider value={{validated, setValidated}}>
            <main>
                <Display />
            </main>
        </CurrentValidContext.Provider>
    )
}

function Display(){
    const {validated, setValidated} = useContext(CurrentValidContext)
    if (validated === null || validated === "home")
    {
        return <Rating />
    }    

    return (
        <Thank />
    )
}

export function useValidated(){
    return useContext(CurrentValidContext)
}