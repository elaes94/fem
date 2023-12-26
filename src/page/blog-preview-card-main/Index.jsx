import { useEffect } from "react"
import './index.css'

export default function Index() {
    useEffect(() => {
        document.title = 'Frontend Mentor | Blog preview card'
        const favicon = document.getElementById('favicon')
        favicon.href = '/blog-preview-card-main/assets/images/favicon-32x32.png'
        favicon.type = 'image/png'
        favicon.sizes = '32x32'
    }, [])
    return (
        <main className="blogCard">
            <section>
                <div className="image">
                <img src="/blog-preview-card-main/assets/images/illustration-article.svg" alt="" />
                </div>
                <div className="type">
                    Learning
                </div>
                <div className="date">
                    Published 21 Dec 2023
                </div>
                <h1>
                    HTML & CSS foundations
                </h1>
                <p>
                    These languages are the backbone of every website, defining structure, content, and presentation.
                </p>
                <div className="author">
                    <img src="/blog-preview-card-main/assets/images/image-avatar.webp" alt="" />
                    <div>
                        Greg Hooper
                    </div>
                </div>
            </section>
        </main>
    )
}