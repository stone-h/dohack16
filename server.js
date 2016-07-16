'use strict';
// libraries
var restify = require('restify')

let lightcontroller = require('./lightcontrol.js')

// define server
var server = restify.createServer();
server.use(restify.bodyParser());


server.get('/', (req, res) => {
  res.send("hello api ")
})

// set light on with id
server.get('/setlight/on/:id', (req, res) => {
  let lightid = req.params.id
  lightcontroller.setLight(lightid, true)
})

// set light off with id
server.get('/setlight/off/:id', (req, res) => {
  let lightid = req.params.id
  lightcontroller.setLight(lightid, false)
})

server.listen(8080)
