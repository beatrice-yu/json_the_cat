const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2], (err, respnonse, body) => {
  if (err) {
    console.log(err);
  } else {
    if (body === undefined) {
      console.log('Cat breed specified does not exist in the database.');
    } else {
      const data = JSON.parse(body);
      console.log(data[0].description);
    }
  }
});