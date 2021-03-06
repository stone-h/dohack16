'use strict';
// libraries
var restify = require('restify')

let lightcontroller = require('./lightcontrol.js')
let sensorcontroller = require('./sensorcontrol.js')
let buttoncontroller = require('./buttoncontrol.js')
// define server
var server = restify.createServer();
server.use(restify.bodyParser());
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'example.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
server.use(allowCrossDomain)

server.get(/\/public\/?.*/, restify.serveStatic({
    directory: __dirname,
    default: 'index.html'
}))




server.get('/', (req, res) => {
  res.send("hello api ")
})


server.get('/getsensorvalue', (req, res) => {
  sensorcontroller.getSensorValue((value) => {
    res.json({value: value})
  })
})

server.get('/getmotiondetected', (req, res) => {
  sensorcontroller.getMotionDetected((value) => {
    res.json({detected: value})
  })
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

server.get('/getbuttonpress/:id', (req, res) => {
  let lightid = req.params.id
  if(lightid < 3 && lightid >= 0){
    buttoncontroller.getPressed(lightid, (value) => {
      console.log("va: " + value)
      res.json({pressed: value})
    })
  }else{
    res.send(404)
  }
})

server.get('/getvalue/:id', (req, res) => {
  let lightid = req.params.id
  if(lightid < 4 && lightid >= 0){
    lightcontroller.getValue(lightid, (value) => {
      console.log("va: " + value)
      res.json({value: value})
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

server.get('/setvalue/:id/:value', (req, res) =>{
  let lightid = req.params.id
  let value   = req.params.value
  if(lightid < 4 && lightid >= 0 && value >= 0 && value <= 254){
    lightcontroller.setValue(lightid, value)
    res.send(200)
  }else{
    res.send(404)
  }
})

server.listen(8081, ()=> console.log("server started"))
