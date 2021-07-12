
const prompt = require('prompt')
const colors = require("colors/safe")
const { calculate } = require("./src/calculator")
const { preview } = require("./src/preview")

async function main() {
  prompt.colors = true;
  prompt.message = colors.green(">");
  prompt.delimiter = colors.green(" ");
  prompt.start()
  const args = await prompt.get([
    { name: 'initialInvestmentAmount', message: 'Initial investment amount', description: 'Initial investment amount', type: 'number', required: true },
    { name: 'initialInvestmentCurrency', message: 'Initial investment currency', description: 'Initial investment currency(USD, EUR, DKK, ...)', type: 'string', required: true, default: "EUR" },
    { name: 'duration', message: 'Duration', description: 'duration(# of months)', type: 'number', required: false, default: 24 },
    { name: 'monthlyInterestRate', message: 'Monthly interest rate', description: 'Monthly interest rate(%)', type: 'number', required: false, default: 30 }
  ])

  const data = await calculate(args)
  preview(data)
}

(async () => {
  main()
})();
