'use strict';
let request = require('request') // library to make http requests

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0" // accept the selfsig cert


let baseurl = "https://192.168.193.1:8443/rest/devices/lights/"

let lights = ["1f4aa0bf-ffd6-463d-a863-63481461cf1e", // 1
              "ec3daa0f-ebe7-47d0-b2b0-987a7c71be8a", // 2
              "ec8d551c-6bc8-4df9-a613-0a9ab3357cc6", // 3
              "49f1ee60-f3db-4d13-8efc-06b2bdc908ea"] // 4

// set light on or off
let getLight = (lightindex, cb) => {
  // options for request
  let options = {
    uri: baseurl + lights[lightindex] + '/onoff',
    method: 'GET',
    timeout: 6000
  }
  // make the request and log response / error
  request(options, (error, response, body) => {
    console.log("error: " + error)
    console.log("body:")
    console.log(body)
    let value = JSON.parse(body)['on']
    cb(value)
  })

}


// set light on or off
let setLight = (lightindex, lightstatus) => {
  // options for request
  let options = {
    uri: baseurl + lights[lightindex] + '/onoff',
    method: 'PUT',
    timeout: 6000,
    json: {
      "on": lightstatus
    }
  }
  // make the request and log response / error
  request(options, (error, response, body) => {
    console.log("error: " + error)
    console.log("body:")
    console.log(body)
  })

}

// set light value
let setValue = (lightindex, lightvalue) => {
  // options for request
  let options = {
    uri: baseurl + lights[lightindex] + '/levelcontrol',
    method: 'PUT',
    timeout: 6000,
    json: {
    "level": 50,
    "minLevel": lightvalue,
    "maxLevel": 254
}
  }
  // make the request and log response / error
  request(options, (error, response, body) => {
    console.log("error: " + error)
    console.log("body:")
    console.log(body)
    return body['on']
  })
}

exports.setLight = setLight
exports.getLight = getLight
