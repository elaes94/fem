export default function Form({ card, onNameChange, onNumberChange, onMonthChange, onYearChange, onCvcChange, onSubmit }) {
    return (
        <form action="" onSubmit={onSubmit}>
            <div className="one-field">
                <label htmlFor="">Cardholder Name</label>
                <input type="text" placeholder="e.g. Jane Appleseed" onChange={onNameChange} value={card.name} />
            </div>
            <div className="one-field">
                <label htmlFor="">Card Number</label>
                <input type="text" placeholder="e.g. 1234 5678 9123 0000" onChange={onNumberChange} value={card.number} />
                { card.error.number && <span>{card.error.number}</span>}
            </div>
            <div className="date-cvc">
                <div className="one-field">
                    <label htmlFor="">Exp. Date (MM/YY)</label>
                    <div>
                        <input className="half" type="text" placeholder="MM" onChange={onMonthChange} value={card.month} />
                        <input className="half" type="text" placeholder="YY" onChange={onYearChange} value={card.year} />
                    </div>
                    { card.error.date && <span>{card.error.date}</span>}
                    { card.error.cvc && !card.error.date && <span className="hide">.</span>}
                </div>
                <div className="one-field">
                    <label htmlFor="">CVC</label>
                    <input type="text" placeholder="e.g. 123" onChange={onCvcChange} value={card.cvc} />                    
                    { card.error.cvc && <span>{card.error.cvc}</span>}                                      
                    { !card.error.cvc && card.error.date && <span className="hide">.</span>}
                </div>
            </div>
            <button>Confirm</button>
        </form>
    )
}