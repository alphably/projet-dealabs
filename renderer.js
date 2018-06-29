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
var row = document.getElementsByClassName('row');
  console.log(row);

request('https://www.dealabs.com/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('main#main section article .threadGrid').each(function(i, element){
      //console.log(i, element)
      imageAlt = $(this).children().children().children().first();
      imageSrc = $(this).children().children().children().first().attr().src;


      price = $(this).find('.threadGrid-title').children().last().first().first().text();
      descr = $(this).find('.threadGrid-body .userHtml .cept-description-container').text()

      console.log(descr);

      if (typeof imageSrc == "undefined") {
        imageSrc = 'img/not-found.png';
      }

      if (typeof imageAlt == "undefined") {
        imageAlt = "image sans alt"
      }

      console.log(imageSrc);


     /* var article = {
        rank: parseInt(rank),
        title: title,
        url: url,
        points: parseInt(points),
        username: username,
        comments: parseInt(comments)
      };
      console.log(metadata);      */

      //console.log(imageAlt)
      var content = '<div class="col-md-4"><div class="card mb-4 box-shadow"><img class="card-img-top" src="'+ imageSrc + '" alt="'+ imageAlt + '">'
          + '<div class="card-body"><p class="card-text">' + descr + '</p>'
          + '<div class="d-flex justify-content-between align-items-center">'
          + '<div class="btn-group"><button type="button" class="btn btn-primary">View the deal</button></div><small class="text-muted">'+ price +'</small></div></div></div></div>'

        row[0].innerHTML += content; 
    });
  }
});

