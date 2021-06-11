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
