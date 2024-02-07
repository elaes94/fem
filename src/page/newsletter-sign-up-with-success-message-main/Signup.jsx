export default function Signup({ sign, onMailChange, onSubmit }) {

    return (
        <div className="wrapper">
            <div className="image">
                <img className="desk" src="/newsletter-sign-up-with-success-message-main/images/illustration-sign-up-desktop.svg" alt="" />
                <img className="mobile" src="/newsletter-sign-up-with-success-message-main/images/illustration-sign-up-mobile.svg" alt="" />
            </div>
            <div className="content">
                <h1>Stay updated!</h1>

                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul>
                    <li>
                        <img src="/newsletter-sign-up-with-success-message-main/images/icon-list.svg" alt="" />
                        <span>Product discovery and building what matters</span>
                    </li>
                    <li>
                        <img src="/newsletter-sign-up-with-success-message-main/images/icon-list.svg" alt="" />
                        <span>Measuring to ensure updates are a success</span>
                    </li>
                    <li>
                        <img src="/newsletter-sign-up-with-success-message-main/images/icon-list.svg" alt="" />
                        <span>And much more!</span>
                    </li>
                </ul>
                <form onSubmit={onSubmit}>
                    <div className="label mark">
                        <label htmlFor="">Email address</label>
                        <span className={sign == 'error' ? 'error' : 'hide' }>Valid email required</span>
                    </div>
                    <input type="text" placeholder="email@company.com" onChange={onMailChange} />
                    <button className="mark">Subscribe to monthly newsletter</button>
                </form>
            </div>
        </div>
    )
}