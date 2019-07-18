'use strict';
const cheerio = require('cheerio');
const rp = require('request-promise');

export function index(req, res) {
  let url = 'https://www.nasdaq.com/symbol/bac/analyst-research';
  const options = {
    uri: url,
    transform: function (body) {
    return cheerio.load(body);
    }
  };
  rp(options).then(($) => {
    let title;
    let release;
    let rating;
    let json = {title : "", release : "", rating : ""};

    $('.row').filter(function(){
    // Let's store the data we filter into a variable so we can easily see what's going on.
    var data = $(this);
    // In examining the DOM we notice that the title rests within the first child element of the header tag.
    // Utilizing jQuery we can easily navigate and get the text by writing the following code:
    title = data.children('.row').find('12-Month Price Target Range').text();
    console.log(title);
    release = data.children('#titleYear').text();
    console.log(release);
    // Once we have our title, we'll store it to the our json object.
    json.title = title;
    json.release = release;
    });

    $('.ratingValue').filter(function(){
    var data = $(this);
    // The .star-box-giga-star class was exactly where we wanted it to be.
    // To get the rating, we can simply just get the .text(), no need to traverse the DOM any further
    rating = data.text();
    json.rating = rating;
    });
    res.send(json);
  }).catch(err => {
    res.json(err);
  })
}
