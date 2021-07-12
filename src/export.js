
const fs = require('fs')
const { v4 } = require('uuid')
const schema = require('./schema')
const { transform } = require('./transformation')

module.exports.exportCsv = function (data, csvPath) {
    data = data.map(data => transform(data))

    const delimiter = ';'

    const csv = [
        schema.export.join(delimiter),
        ...data.map(d => d.join(delimiter))
    ]
    
    const csvDest = `${csvPath}/cip-${v4()}.csv`
    fs.writeFileSync(csvDest, csv.join('\n'), { encoding: 'utf8' })
    console.log(`Csv Exported at: "${csvDest}"`)
}
