// Leaflet - Test 1 - Lines

fileName = location.pathname.split("/").slice(-1)[0].slice(0,-5);

fetch('../../../datasets/lines/'+fileName+'.geojson').then(r => r.json()).then(d => {
    /*var OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });*/
    var map = L.map('map'/*, {layers: [OSM]}*/).setView([49.82,6.1], 10); 
    map.attributionControl.setPrefix('<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">Leaflet ' + L.version + '</a>');

    testdata = L.geoJSON(d);
    testdata.addTo(map);
});		