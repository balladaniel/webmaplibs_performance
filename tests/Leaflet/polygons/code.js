// Leaflet - Test 1 - Polygons

fileName = location.pathname.split("/").slice(-1)[0].slice(0,-5);

var map; 
fetch('../../../datasets/polygons/'+fileName+'.geojson').then(r => r.json()).then(d => {
    /*var OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });*/
    map = L.map('map', {/*layers: [OSM]*/}).setView([28.538,-81.38], 13); 
    map.attributionControl.setPrefix('<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">Leaflet ' + L.version + '</a>');

    testdata = L.geoJSON(d);
    testdata.addTo(map);
});		