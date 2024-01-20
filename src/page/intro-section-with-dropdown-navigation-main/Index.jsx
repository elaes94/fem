import { useEffect, useState } from 'react'
import './index.css'

let initState = {
    features: false,
    company: false,
    isDesktop: false,
    mobileMenu: false
}

export default function Index() {
    const [menu, setMenu] = useState(initState)
    useEffect(() => {
        document.title = 'Frontend Mentor | Intro section with dropdown navigation'
        const favicon = document.getElementById('favicon')
        favicon.href = '/intro-section-with-dropdown-navigation-main/images/favicon-32x32.png'
        favicon.type = 'image/png'
        favicon.sizes = '32x32'
        const desktop = window.innerWidth > 800
        setMenu({ ...menu, isDesktop: desktop, mobileMenu: desktop })
    }, [])
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 800) {
                setMenu({ ...menu, isDesktop: true, mobileMenu: true })
            } else {
                setMenu({ ...menu, isDesktop: false, mobileMenu: false })
            }
        })
    }, [])

    return (
        <main className="introSection">
            <header>
                <img src="/intro-section-with-dropdown-navigation-main/images/logo.svg" alt="snap" />
                <nav className={menu.mobileMenu ? '' : 'hide'}>
                    <div className='menu'>
                        <div>
                            <div className='features'>
                                <a href='#' onClick={() => { setMenu({ ...menu, features: !menu.features }) }}>
                                    <span>Features</span>
                                    <img className={menu.features ? '' : 'hide'} src="/intro-section-with-dropdown-navigation-main/images/icon-arrow-down.svg" alt="" />
                                    <img className={menu.features ? 'hide' : ''} src="/intro-section-with-dropdown-navigation-main/images/icon-arrow-up.svg" alt="" />
                                </a>
                            </div>
                            <div className={menu.features ? 'submenu' : 'submenu hide'}>
                                <div>
                                    <img src="/intro-section-with-dropdown-navigation-main/images/icon-todo.svg" alt="" />
                                    <span>Todo List</span>
                                </div>
                                <div>
                                    <img src="/intro-section-with-dropdown-navigation-main/images/icon-calendar.svg" alt="" />
                                    <span>Calendar</span>
                                </div>
                                <div>
                                    <img src="/intro-section-with-dropdown-navigation-main/images/icon-reminders.svg" alt="" />
                                    <span>Reminders</span>
                                </div>
                                <div>
                                    <img src="/intro-section-with-dropdown-navigation-main/images/icon-planning.svg" alt="" />
                                    <span>Planning</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='company'>
                                <a href='#' onClick={() => { setMenu({ ...menu, company: !menu.company }) }}>
                                    <span>Company</span>
                                    <img className={menu.company ? '' : 'hide'} src="/intro-section-with-dropdown-navigation-main/images/icon-arrow-down.svg" alt="" />
                                    <img className={menu.company ? 'hide' : ''} src="/intro-section-with-dropdown-navigation-main/images/icon-arrow-up.svg" alt="" />
                                </a>
                            </div>
                            <div className={menu.company ? 'submenu' : 'submenu hide'}>
                                <span>History</span>
                                <span>Our Team</span>
                                <span>Blog</span>
                            </div>
                        </div>
                        <a href='#'>Careers</a>
                        <a href='#'>About</a>
                    </div>
                    <div className='auth'>
                        <a href="#">Login</a>
                        <a href="#">Register</a>
                    </div>
                </nav>
            </header>
            <div className={menu.isDesktop ? 'mobile hide' : 'mobile'}>
                <div className={menu.mobileMenu ? 'back' : 'hide'}></div>
                <div className='icon' onClick={() => { setMenu({ ...menu, mobileMenu: !menu.mobileMenu }) }}>
                    <img className={menu.mobileMenu ? 'hide' : ''} src="/intro-section-with-dropdown-navigation-main/images/icon-menu.svg" alt="" />
                    <img className={menu.mobileMenu ? '' : 'hide'} src="/intro-section-with-dropdown-navigation-main/images/icon-close-menu.svg" alt="" />
                </div>
            </div>
            <section>
                <img className='mobile' src="/intro-section-with-dropdown-navigation-main/images/image-hero-mobile.png" alt="" />
                <div>
                    <h1>Make <br className='brake' />remote work</h1>
                    <p>
                        Get your team in sync, no matter your location. Streamline processes,
                        create team rituals, and watch productivity soar.
                    </p>
                    <button>
                        Learn more
                    </button>
                    <div className='client'>
                        <img src="/intro-section-with-dropdown-navigation-main/images/client-databiz.svg" alt="" />
                        <img src="/intro-section-with-dropdown-navigation-main/images/client-audiophile.svg" alt="" />
                        <img src="/intro-section-with-dropdown-navigation-main/images/client-meet.svg" alt="" />
                        <img src="/intro-section-with-dropdown-navigation-main/images/client-maker.svg" alt="" />
                    </div>
                </div>
                <img className='desktop' src="/intro-section-with-dropdown-navigation-main/images/image-hero-desktop.png" alt="" />
            </section>
            <div className='background'></div>
        </main>
    )
}
