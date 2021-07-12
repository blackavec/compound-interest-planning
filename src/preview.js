
const Table = require("cli-table")

const schema = require('./schema')
const { transform } = require('./transformation')

module.exports.preview = function (data) {
    var table = new Table({
        head: schema.preview
    })

    data.map(data => table.push(transform(data)))

    console.log(table.toString())
}
