var request = require('request')

var url = 'https://www.meipian.cn/o0m7whp?from=singlemessage&isappinstalled=1'

var click = 282
setInterval(function () {
  request(url, function (error, response, body) {
    console.log('error:', error) // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
    if (response.statusCode === 200) {
      click += 1
      console.log('clicks:', click)
    }
    // console.log('body:', body); // Print the HTML for the Google homepage.
  })
}, 1000)
