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

server.get('/getlight/:id', (req, res) => {
  let lightid = req.params.id
  if(lightid < 4 && lightid >= 0){
    lightcontroller.getLight(lightid, (value) => {
      console.log("va: " + value)
      res.json({on: value})
    })
  }else{
    res.send(404)
  }
})



// set light on with id
server.get('/getlight/:id', (req, res) => {
  let lightid = req.params.id
  if(lightid < 4 && lightid >= 0){
    lightcontroller.getLight(lightid, (value) => {
      console.log("va: " + value)
      res.json({on: value})
    })
  }else{
    res.send(404)
  }
})

// set light on with id
server.get('/setlight/on/:id', (req, res) => {
  let lightid = req.params.id
  if(lightid < 4 && lightid >= 0){
    lightcontroller.setLight(lightid, true)
    res.send(200)
  }else{
    res.send(404)
  }
})

// set light off with id
server.get('/setlight/off/:id', (req, res) => {
  let lightid = req.params.id
  if(lightid < 4 && lightid >= 0){
    lightcontroller.setLight(lightid, false)
    res.send(200)
  }else{
    res.send(404)
  }
})

server.listen(8081)
