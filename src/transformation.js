
const currencyFormatter = require('currency-formatter')

const format = (number, currency) => (
    currencyFormatter.format(number, {
        locale: 'en-US',
        thousandsSeparator: ',',
        decimalSeparator: '.',
        precision: 2,
        code: currency,
    })
)

module.exports.transform = ({ month, interest, totalInterest, balance, currency }) =>
    [
        month, 
        format(interest / 30, currency),
        format(interest, currency), 
        format(totalInterest, currency),
        format(balance, currency)
    ]