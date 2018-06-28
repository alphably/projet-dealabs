// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var request = require('request');
var fs = require('fs');

var cheerio = require('cheerio');




/*request('https://www.dealabs.com/', function (error, response, body) {
console.log('error:', error); // Print the error if one occurred
console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
console.log('body:', body); 
// data = body;

    fs.appendFile('dealabs.html', body , function (err) {
    if (err) throw err;
        //console.log('Saved file !');
    });

});*/

request('https://www.dealabs.com/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('main#main section article .threadGrid').each(function(i, element){
      let image = $(this).children();
      console.log($(image));
    });
  }
});

