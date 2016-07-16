'use strict';
let request = require('request') // library to make http requests

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0" // accept the selfsig cert


let baseurl = "https://192.168.193.1:8443/rest/devices/controls/sensors/b6aa249d-5e11-4bd3-81a6-b98be26beddd"

let getValue = (cb) => {
  // options for request
  let options = {
    uri: baseurl,
    method: 'GET',
    timeout: 6000
  }
  // make the request and log response / error
  request(options, (error, response, body) => {
    console.log("error: " + error)
    console.log("body:")
    console.log(body)
    let value = JSON.parse(body)['measureValue']
    cb(value)
  })

}


exports.getSensorValue = getValue
