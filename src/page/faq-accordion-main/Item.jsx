import { useState } from "react"

export default function Item({ item, isActive, display }) {

    return (
        <article>
            <div onClick={display}>
                <h3> {item.title}</h3>
                <img src={isActive ?
                "/faq-accordion-main/assets/images/icon-minus.svg" :
                "/faq-accordion-main/assets/images/icon-plus.svg"
                }alt="" />
            </div>
            <p className={isActive ? "show" : undefined}>
                {item.content}
            </p>
        </article>
    )
}