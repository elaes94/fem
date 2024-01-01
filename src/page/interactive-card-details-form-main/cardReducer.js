import { checkValue, checkDate } from "./utils";

export default function cardReducer(card, action) {
    switch (action.type) {
        case 'handleName': {
            return { ...card, name: action.name.substring(0, 25) }
        }
        case 'handleNumber': {
            let code = action.number.replace(/\s/g, '').substring(0, 16);
            const numberError = checkValue(code, 16)
            let str = code.toString().replace(/\d{4}(?=.)/g, '$& ')
            return { ...card, number: str, error: { ...card.error, number: numberError } }
        }
        case 'handleMonth': {
            const errorMonth = checkValue(action.month.substring(0, 2), 2, 1, 12)
            const year = checkValue(card.year, 2, 0, 99)
            let dateError = errorMonth != '' ? errorMonth : year
            dateError = dateError != '' ? dateError : checkDate(action.month, card.year)
            return { ...card, month: action.month.substring(0, 2), error: { ...card.error, month: errorMonth, date: dateError } }
        }
        case 'handleYear': {
            const month = checkValue(card.month, 2, 1, 12)
            const errorYear = checkValue(action.year.substring(0, 2), 2, 0, 99)
            let dateError = month != '' ? month : errorYear
            dateError = dateError != '' ? dateError : checkDate(card.month, action.year)
            return { ...card, year: action.year.substring(0, 2), error: { ...card.error, year: errorYear, date: dateError } }
        }
        case 'handleCvc': {
            const cvc = action.cvc.substring(0, 3)
            const cvcError = checkValue(cvc, 3)
            return { ...card, cvc, error: { ...card.error, cvc: cvcError } }
        }
    }
}