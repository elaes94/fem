import { useEffect } from "react"
import './index.css'

export default function Index() {
    useEffect(() => {
        document.title = 'Frontend Mentor | Product preview card component'
        const favicon = document.getElementById('favicon')
        favicon.href = '/product-preview-card-component-main/images/favicon-32x32.png'
        favicon.type = 'image/png'
        favicon.sizes = '32x32'
    }, [])
    return (
        <main className="productPreview">
            <section>
                <img src="/product-preview-card-component-main/images/image-product-desktop.jpg" alt="" />
                <div className="description">
                    <div className="type">
                        Perfume
                    </div>
                    <h1>
                        Gabrielle Essence Eau De Parfum
                    </h1>
                    <p>
                        A floral, solar and voluptuous interpretation composed by Olivier Polge,
                        Perfumer-Creator for the House of CHANEL.
                    </p>
                    <div className="price">
                        <span className="new"> $149.99</span>
                        <span className="old"> $169.99</span>
                    </div>
                    <button>
                        <img src="/product-preview-card-component-main/images/icon-cart.svg" alt="" />
                        Add to Cart
                    </button>
                </div>
            </section>
        </main>
    )
}