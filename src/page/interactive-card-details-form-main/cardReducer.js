import { checkValue, checkDate } from "./utils";

export default function cardReducer(card, action) {
    switch (action.type) {
        case 'handleName': {
            return { ...card, name: action.name.substring(0, 25) }
        }
        case 'handleNumber': {
            let code = action.number.replace(/\s/g, '').substring(0, 16);
            let str = code.toString().replace(/\d{4}(?=.)/g, '$& ')
            return { ...card, number: str }
        }
        case 'handleMonth': {
            return { ...card, month: action.month.substring(0, 2) }
        }
        case 'handleYear': {
            return { ...card, year: action.year.substring(0, 2) }
        }
        case 'handleCvc': {
            return { ...card, cvc: action.cvc.substring(0, 3) }
        }
        case 'handleSubmit': {
            const number = checkValue(card.number.replace(/\s/g, ''), 16)
            const month = checkValue(card.month, 2, 1, 12)
            const year = checkValue(card.year, 2, 0, 99)
            let date = month != '' ? month : year
            date = date != '' ? date : checkDate(card.month, card.year)
            const cvc = checkValue(card.cvc, 3)
            return { ...card, error : { ...card.error, number, date, cvc}}
        }
    }
}