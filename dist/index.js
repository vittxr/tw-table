
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./tw-table.cjs.production.min.js')
} else {
  module.exports = require('./tw-table.cjs.development.js')
}
