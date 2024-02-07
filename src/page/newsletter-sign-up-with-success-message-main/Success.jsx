export default function Success({ onSubmit }) {

    return (
        <div className="wrapper">
            Thanks for subscribing!

            A confirmation email has been sent to ash@loremcompany.com.
            Please open it and click the button inside to confirm your subscription.
            <form onSubmit={onSubmit}>
                <button>Dismiss message</button>
            </form>

        </div>
    )
}