import Item from "./Item"

function Subscribe() {
    return (
        <main className="newsletter">
            <section>
                {/* <!-- Sign-up form start --> */}
                <div className="image">
                    <img src="/newsletter-sign-up-with-success-message-main/images/illustration-sign-up-mobile.svg" alt="" />
                </div>
                <div className="content">
                    <h1>
                        Stay updated!
                    </h1>

                    <p>
                        Join 60,000+ product managers receiving monthly updates on:
                    </p>

                    <Item>Product discovery and building what matters</Item>
                    <Item>Measuring to ensure updates are a success</Item>
                    <Item>And much more!</Item>

                    <form>
                        <div className="formMessage">
                            <label htmlFor="">Email address</label>
                            <span>Valid email required</span>
                        </div>
                        <input type="text" placeholder="email@company.com" />
                        <button>
                            Subscribe to monthly newsletter
                        </button>
                    </form>

                    {/* <!-- Sign-up form end --> */}

                </div>
            </section>
        </main>
    )
}

export default Subscribe