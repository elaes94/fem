import { useEffect } from "react"
import './index.css'

export default function Index() {
    useEffect(() => {
        document.title = 'Frontend Mentor | FAQ accordion'
        const favicon = document.getElementById('favicon')
        favicon.href = '/blog-preview-card-main/assets/images/favicon-32x32.png'
        favicon.type = 'image/png'
        favicon.sizes = '32x32'
    }, [])
    return (
        <main className="blogCard">
            Learning

            Published 21 Dec 2023

            HTML & CSS foundations

            These languages are the backbone of every website, defining structure, content, and presentation.

            Greg Hooper
        </main>
    )
}