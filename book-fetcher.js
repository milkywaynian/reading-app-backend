const fetch = require ('node-fetch');
const dotenv = require('dotenv').config(); 
console.log("Script run");
// request a book title and get a jSon response from google books API 

fetch('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });


//   fetch('placeholder_API_key')
//     .then(res => res.json())
//     .then(json => {
//         return {
//             day: json.SiteRep.DV.Location.Period[0].Rep[0],
//             night: json.SiteRep.DV.Location.Period[0].Rep[1]
//         }
//         })
//     .then(json => {
//         return {
//             day: convertToHumanReadable(json.day),
//             night: convertToHumanReadable(json.night),
//         }
//     })
//     .then(readable => console.log(readable));