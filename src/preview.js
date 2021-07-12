
const Table = require("cli-table")
const currencyFormatter = require('currency-formatter')


const format = (number, currency) => (
    currencyFormatter.format(number, {
        locale: 'en-US',
        thousandsSeparator: ',',
        decimalSeparator: '.',
        code: currency,
    })
)

module.exports.preview = async function (data) {
    var table = new Table({
        head: ['Month', 'Daily interest', 'Interest', 'Total Interest', 'Balance']
    })

    data.map(({ month, interest, totalInterest, balance, currency }) => table.push([
        month, 
        format(interest / 30, currency),
        format(interest, currency), 
        format(totalInterest, currency),
        format(balance, currency)
    ]))

    console.log(table.toString())
}
