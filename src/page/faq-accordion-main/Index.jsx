import { useEffect, useState } from "react"
import './index.css'
import Item from "./Item"

export default function Index() {
    const [list, setList] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        document.title = 'Frontend Mentor | FAQ accordion'
        const favicon = document.getElementById('favicon')
        favicon.href = '/faq-accordion-main/assets/images/favicon-32x32.png'
        favicon.type = 'image/png'
        favicon.sizes = '32x32'

        fetch('/faq-accordion-main/data.json')
            .then(res => res.json())
            .then(data => setList(data))
    }, [])

   

    const listItems = list.map((item, index) =>
        <Item
            key={index}
            item={item}
            isActive={activeIndex === index}
            display={() => setActiveIndex(index)}
        />
    )

    return (
        <main className="faq">
            <section>
                <div className="title">
                    <img src="/faq-accordion-main/assets/images/icon-star.svg" alt="" />
                    <h1>FAQs</h1>
                </div>
                {listItems}
            </section>

        </main>
    )
}