// Leaflet - Test 1 - Polygons

fileName = location.pathname.split("/").slice(-1)[0].slice(0,-5);

fetch('../../../../datasets/polygons/'+fileName+'.geojson').then(r => r.json()).then(d => {
    /*var OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });*/
    var map = L.map('map'/*, {layers: [OSM]}*/).setView([49.82,6.1], 10); 
    map.attributionControl.setPrefix('<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">Leaflet ' + L.version + '</a>');

    //let t0 = performance.now();
    testdata = L.geoJSON(d);
    /*testdata.on('add', (e) => {
        map.whenReady((e) => {
            console.log('whenready')
            let t1 = performance.now();
            console.log(`Adding to map took: ${t1-t0} ms.`)
        });
    });*/
    testdata.addTo(map);
});		