import { useState } from "react"

export default function Item({ item }) {
    const [activeIndex, setActiveIndex] = useState(false)

    function display() {
        setActiveIndex(activeIndex ? false : true);
    }

    return (
        <article>
            <div onClick={display}>
                <h3> {item.title}</h3>
                <img src={activeIndex ?
                "/faq-accordion-main/assets/images/icon-minus.svg" :
                "/faq-accordion-main/assets/images/icon-plus.svg"
                }alt="" />
            </div>
            <p className={activeIndex ? "show" : undefined}>
                {item.content}
            </p>
        </article>
    )
}