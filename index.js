//map instance
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.2784, lng: -93.1338 },
    zoom: 8,
  });
}

window.initMap;

const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAidpXcu5bIMLxK1NGJr5MyCtN2tThm2as&libraries=geometry,places,localContext&callback=initMap`;
script.async = true;
document.head.appendChild(script);

// variables and constants
let trip = {};
const originField = document.getElementById("origin");
const destinationField = document.getElementById("destination");
const formSubmitBtn = document.getElementById("formSubmitBtn");
const milesPerDayField = document.getElementById("milesPerDay");
// let origin;
// let destination;
// let milesPerDay;
// let params;
// console.log(formSubmitBtn);

// formSubmitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   origin = originField.value;
//   destination = destinationField.value;
//   milesPerDay = milesPerDayField.value;
//   params = {
//     origin,
//     destination,
//     milesPerDay,
//   };

//   console.log(params);

//   ajaxCalled(params);
// });

// function ajaxCalled(tripParams) {
//   const XHR = new XMLHttpRequest();

//   // Define what happens on successful data submission
//   XHR.onload = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       try {
//         console.log(this.response);
//       } catch (err) {
//         console.log(err.message);
//         return;
//       }
//     }
//   };

//   // Set up our request
//   XHR.open("POST", "http://localhost:3000/google-api/map");

//   // Add the required HTTP header for form data POST requests

//   // Finally, send our data.
//   XHR.send(params);
// }

const btn = document.querySelector("#formSubmitBtn");

function sendData(data) {
  console.log("Sending data");

  const XHR = new XMLHttpRequest();

  let urlEncodedData = "",
    urlEncodedDataPairs = [],
    name;
  console.log(data);
  // Turn the data object into an array of URL-encoded key/value pairs.
  for (key in data) {
    console.log(key);
    console.log(data[key]);
    console.log(typeof encodeURIComponent(data[key]));
    urlEncodedDataPairs.push(
      encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    );
    console.log(urlEncodedDataPairs);
  }

  // Combine the pairs into a single string and replace all %-encoded spaces to
  // the '+' character; matches the behavior of browser form submissions.
  urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

  // Define what happens on successful data submission
  // XHR.addEventListener("load", function (event) {
  //   alert("Yeah! Data sent and response loaded.");
  // });

  // Define what happens in case of error
  // XHR.addEventListener("error", function (event) {
  //   alert("Oops! Something went wrong.");
  // });

  // Set up our request
  XHR.open("POST", "http://localhost:3000/google-api/map");

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
}

btn.addEventListener("click", function (e) {
  e.preventDefault();

  sendData({
    origin: "russellville",
    destination: "duluth",
    milesPerDayField: "300",
  });
});
