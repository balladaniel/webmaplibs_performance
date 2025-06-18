// Leaflet - Test 1 - Points

fileName = location.pathname.split("/").slice(-1)[0].slice(0,-5);

var geojsonMarkerOptions_orange = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var geojsonMarkerOptions_black = {
    radius: 4,
    color: "#000",
    stroke: false,
    fillOpacity: 1
};

fetch('../../../datasets/points/'+fileName+'.geojson').then(r => r.json()).then(d => {
    /*var OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });*/
    var map = L.map('map'/*, {layers: [OSM]}*/).setView([0,0], 3); 
    map.attributionControl.setPrefix('<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">Leaflet ' + L.version + '</a>');
    
    testdata = L.geoJSON(d, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, geojsonMarkerOptions_black);
        }});
    testdata.addTo(map);
});		