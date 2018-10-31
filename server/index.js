const server = require('./server')

const port = 3000

server.use(function (err, req, res, next) {
  console.error(err.stack)
  res.send(500, 'Something broke!')
})

server.listen(port, function () { console.log("Server is listening on", port) })
