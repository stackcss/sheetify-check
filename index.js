var parse = require('css').parse

module.exports = function sheetifyCheck (filename, css, opts, cb) {
  try {
    parse(css, { source: filename })
  } catch (err) {
    return cb(err)
  }
  cb(null, css)
}
