export default function Form({ card, onNameChange, onNumberChange, onMonthChange, onYearChange, onCvcChange }) {
    return (
        <form action="">
            <div className="one-field">
                <label htmlFor="">Cardholder Name</label>
                <input type="text" placeholder="e.g. Jane Appleseed" onChange={onNameChange} value={card.name} />
            </div>
            <div className="one-field">
                <label htmlFor="">Card Number</label>
                <input type="text" placeholder="e.g. 1234 5678 9123 0000" onChange={onNumberChange} value={card.number} />
                <span>Wrong format, numbers only</span>
            </div>
            <div className="date-cvc">
                <div className="one-field">
                    <label htmlFor="">Exp. Date (MM/YY)</label>
                    <div>
                        <input className="half" type="text" placeholder="MM" onChange={onMonthChange} value={card.month} />
                        <input className="half" type="text" placeholder="YY" onChange={onYearChange} value={card.year} />
                    </div>
                    <span>Can't be blank</span>
                </div>
                <div className="one-field">
                    <label htmlFor="">CVC</label>
                    <input type="text" placeholder="e.g. 123" onChange={onCvcChange} value={card.cvc} />
                    <span>Can't be blank</span>
                </div>
            </div>
            <button>Confirm</button>
        </form>
    )
}