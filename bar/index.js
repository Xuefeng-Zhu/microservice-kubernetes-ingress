var express = require('express')
var app = express()

app.get('/bar', function (req, res) {
  res.send('bar!')
})


app.listen(80, function () {
  console.log('Example app listening on port 80!')
})