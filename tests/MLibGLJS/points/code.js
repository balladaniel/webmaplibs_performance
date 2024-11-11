// MapLibre GL JS - Test 1 - Points

fileName = location.pathname.split("/").slice(-1)[0].slice(0,-5);

fetch('../../../datasets/points/'+fileName+'.geojson').then(r => r.json()).then(d => {

    const map = new maplibregl.Map({
        container: 'map', // container id
        style: {
            "name": "EmptyBackgroundMap",
            "layers": [
                /*{
                    "id": "background",
                    "type": "background",
                    "paint": {
                        "background-color": "#D8F2FF"
                    },
                    "layout": {
                        "visibility": "none"
                    },
                    "maxzoom": 24
                }*/
            ],
            "sources": {},
            "version": 8,
        }, // bkg map style, override with an empty one (so that it does not wait for retrieving styles/tiles from the web)
        center: [0, 0], // starting position [lng, lat]
        zoom: 2 // starting zoom
    });

    //var t0 = window.performance.now();

    map.on('load', () => {
        map.addSource('samplePoints', {
            'type': 'geojson',
            'data': d
        });
        
        // METHOD: SVG MARKER FOR POINTS (THERE ARE DEFAULT MARKERS AS WELL! Unlike Leaflet, 
        // might have to use geojson.forEach() to add a marker for each coord pair in geojson...)
        map.addLayer({
            'id': 'samplePoints',
            'source': 'samplePoints',
            'type': 'circle'
        });
    });

    //var t1=performance.now();
    //console.log(`Adding to map took: ${t1-t0} ms.`)
});