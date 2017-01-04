var express = require('express')
var app = express()

app.get('/foo', function (req, res) {
  res.send('foo!')
})


app.listen(80, function () {
  console.log('Example app listening on port 80!')
})