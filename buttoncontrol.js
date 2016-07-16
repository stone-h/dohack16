'use strict';
let request = require('request') // library to make http requests

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0" // accept the selfsig cert


let baseurl = "https://192.168.193.1:8443/rest/devices/controls/switches/"

let switches = ["38b16aea-c6b1-4975-870c-62861c566a28", "5298143a-586a-4533-979b-879c8b2fa6b4"]

let getValue = (switchid, cb) => {
  // options for request
  let options = {
    uri: baseurl + switches[switchid],
    method: 'GET',
    timeout: 6000
  }
  // make the request and log response / error
  request(options, (error, response, body) => {
    console.log("error: " + error)
    console.log("body:")
    console.log(body)
    let value = JSON.parse(body)['buttonState']
    cb(value)
  })

}

exports.getPressed = getValue
