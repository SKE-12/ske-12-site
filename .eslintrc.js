const { Neutrino } = require('neutrino')
const path = require('path')

module.exports = Neutrino({ root: path.resolve(__dirname, 'src') })
  .use('.neutrinorc.js')
  .call('eslintrc')
