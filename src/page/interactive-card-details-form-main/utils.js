
function checkValue(value, length, min = null, max = null) {
    if (value.length < 1) {
        return "Can't be blank"
    } else if (!value.match(/^0*?[0-9]\d*$/)) {
        return "Wrong format, numbers only"
    } else if (value.length != length) {
        return "Invalid length"
    } else if (min && value < min) {
        return "Invalid value"
    } else if (max && value > max) {
        return "Invalid value"
    } else {
        return ''
    }
}

function checkDate(month, year) {
    const currentTime = new Date()
    const cardDate = new Date('20' + year, month)
    if (cardDate < currentTime) {
        return "Date expired"
    } else {
        return ""
    }
}

export { checkValue, checkDate }
