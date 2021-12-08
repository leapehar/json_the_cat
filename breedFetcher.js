const request = require('request');


//console.log(process.argv);
let breed = process.argv[2];
console.log(breed);

let endpoint = `https://api.thecatapi.com/v1/breeds/search?name=${breed}`;
//let endpoint = `https://vrwvwvwrvw`;

request(endpoint, (error, response, body) => {

  if (error) {
    console.log("error: ", error);
    return;
  }

  const data = JSON.parse(body);
  //console.log(data);
  if (data.length < 1) {
    console.log('no data found');
    return;
  }

  let description = data[0]['description'];
  console.log("Description:", description);

});