import { useEffect } from 'react'
import './index.css'

export default function Index() {
    useEffect(() => {
        document.title = 'Frontend Mentor | Intro section with dropdown navigation'
        const favicon = document.getElementById('favicon')
        favicon.href = '/intro-section-with-dropdown-navigation-main/images/favicon-32x32.png'
        favicon.type = 'image/png'
        favicon.sizes = '32x32'
    }, [])

    return (
        <main className="introSection">
            <header>
                <img src="/intro-section-with-dropdown-navigation-main/images/logo.svg" alt="snap" />
                <nav>
                    <div>
                        <div>
                            <div>
                                <span>Features</span>
                                <img src="/intro-section-with-dropdown-navigation-main/images/icon-arrow-down.svg" alt="" />
                            </div>
                            <div>
                                <div>
                                    <img src="/intro-section-with-dropdown-navigation-main/images/icon-todo.svg" alt="" />
                                    <span>Todo List</span>
                                </div>
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
                        <div>
                            <div>
                                <span>Company</span>
                                <img src="/intro-section-with-dropdown-navigation-main/images/icon-arrow-down.svg" alt="" />
                            </div>
                            <div>
                                <span>History</span>
                                <span>Our Team</span>
                                <span>Blog</span>
                            </div>
                        </div>
                        <div>Careers</div>
                        <div>About</div>
                    </div>
                    <div>
                        Login
                        Register
                    </div>
                </nav>
            </header>
            <section>
                <div>
                    <h1>Make remote work</h1>
                    <p>
                        Get your team in sync, no matter your location. Streamline processes,
                        create team rituals, and watch productivity soar.
                    </p>
                    <button>
                        Learn more
                    </button>
                    <div>
                        <img src="/intro-section-with-dropdown-navigation-main/images/client-databiz.svg" alt="" />
                        <img src="/intro-section-with-dropdown-navigation-main/images/client-audiophile.svg" alt="" />
                        <img src="/intro-section-with-dropdown-navigation-main/images/client-meet.svg" alt="" />
                        <img src="/intro-section-with-dropdown-navigation-main/images/client-maker.svg" alt="" />
                    </div>
                </div>
                <img src="/intro-section-with-dropdown-navigation-main/images/image-hero-desktop.png" alt="" />
            </section>






        </main>
    )
}
