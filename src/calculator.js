
const monthlyData = ({ month, interest, totalInterest, balance, currency }) => 
    ({ month, interest, totalInterest, balance, currency })
const roundFix = (amount) => parseFloat((Math.round(amount * 100) / 100).toFixed(2))

module.exports.calculate = async function ({
  initialInvestmentAmount,
  initialInvestmentCurrency,
  duration,
  monthlyInterestRate,
}) {
    const result = []
    for (month = 1 ; month <= duration ; month++) {
        // get previews month data
        const previewsMonth = result[month - 2] || monthlyData({
            month,
            interest: 0,
            totalInterest: 0,
            balance: initialInvestmentAmount,
            currency: initialInvestmentCurrency
        })

        const interest = previewsMonth.balance * (monthlyInterestRate/100)

        // calculate the interest compare to previews month
        result.push(monthlyData(monthlyData({
            month,
            interest,
            totalInterest: previewsMonth.interest + interest,
            balance: roundFix(previewsMonth.balance + interest),
            currency: initialInvestmentCurrency
        })))
    }
    return result
}
