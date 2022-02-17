const request = require("request");
const fs = require("fs");

let url = "https://api.thecatapi.com/v1/breeds/search";

const breed = process.argv[2];
breed !== undefined ? url += "?q=" + breed : null;

request(url, (error, response, body) => {
  if (error !== null) {
    console.log("Error:", error);
  } else {
    const data = JSON.parse(body);
    
    if (data.length) {
      console.log(data[0].description);
    } else {
      console.log("Invalid search.");
    }
  }
});