const request = require("request");

let url = "https://api.thecatapi.com/v1/breeds/search";

const fetchBreedDescription = function(breedName, callback) {
  breedName !== undefined ? url += "?q=" + breedName : null;
  request(url, (error, response, body) => {
    let data = JSON.parse(body);

    if (error !== null) {
      console.log("Error:", error);
    } else if (data.length) {
      data = data[0].description;
    } else {
      data = null;
      error = "Invalid search."
    }
    
    callback(error, data);
  });

};

module.exports = {fetchBreedDescription};