'use strict';
// libraries
var restify = require('restify')

let lightcontroller = require('./lightcontrol.js')

// define server
var server = restify.createServer();
server.use(restify.bodyParser())
server.use(restify.queryParser())


server.get('/', (req, res) => {
  res.send("hello api ")
})

// set light on with id
server.get('/setlight/on/:id', (req, res) => {
  let lightid = req.params.id
  lightcontroller.setLight(lightid, true)
})

// set light value with id
server.get('/setvalue/:id/:value', (req, res) => {
  let lightid = req.params.id
  let value   = req.params.value

  if(lightid < 4 && lightid >= 0 && value >= 0 && value <= 254){
    console.log("setval: " + lightid + " -> " + value)
    lightcontroller.setValue(lightid, value)
    res.send(200)
  }else{
    res.send(404)
  }
})

server.listen(8081)
