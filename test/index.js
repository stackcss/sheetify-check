var test = require('tape')
var sheetify = require('sheetify')

var check = require.resolve('../')

test('accepts valid input', function (t) {
  t.plan(2)
  var src = '.a { color: red }'
  sheetify(src, 'style.css', {
    transform: [check]
  }, function (err, res) {
    t.ifError(err)
    t.equal(src, res.css)
  })
})

test('rejects invalid input', function (t) {
  t.plan(2)
  var src = '.a { color red }'
  sheetify(src, 'style.css', {
    transform: [check]
  }, function (err) {
    t.ok(err)
    t.equal(err.reason, 'property missing \':\'')
  })
})
