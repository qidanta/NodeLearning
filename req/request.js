var request = require('request')

function simpleRequest (urls, delay) {
  var click = 0
  setInterval(function () {
    urls.forEach(function (element) {
      console.log(element)
      request(element, function (error, response, body) {
        console.log('error:', error) // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
        if (response.statusCode === 200) {
          click += 1
          console.log('clicks:', click)
        }
      })
    })
  }, delay)
}

exports.simpleRequest = simpleRequest;