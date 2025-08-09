// Leaflet - Test 1 - COMBINED (3 layers)

fileName = location.pathname.split("/").slice(-1)[0].slice(0,-5);
featureCount = fileName.split("_")[1];

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

// loading the three geojson files of points, lines and polygons
fetch('../../../datasets/points_forcombined/points_shifted_'+featureCount+'.geojson').then(r => r.json()).then(points => {
    fetch('../../../datasets/lines/lines_'+featureCount+'.geojson').then(r => r.json()).then(lines => {
        fetch('../../../datasets/polygons_forcombined/polygons_shifted_'+featureCount+'.geojson').then(r => r.json()).then(polygons => {

            var map = L.map('map').setView([49.35,6.55], 9); 
            map.attributionControl.setPrefix('<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">Leaflet ' + L.version + '</a>');
            
            // points
            pointsLayer = L.geoJSON(points, {
                pointToLayer: function (feature, latlng) {
                    return L.circleMarker(latlng, geojsonMarkerOptions_black);
                }});
            pointsLayer.addTo(map);

            // lines
            linesLayer = L.geoJSON(lines);
            linesLayer.addTo(map);

            // polygons
            polygonsLayer = L.geoJSON(polygons);
            polygonsLayer.addTo(map);

        });		
    });		
});		