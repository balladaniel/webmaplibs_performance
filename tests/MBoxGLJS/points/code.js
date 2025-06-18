// MapBox GL JS - Test 1 - Points

fileName = location.pathname.split("/").slice(-1)[0].slice(0,-5);

fetch('../../../datasets/points/'+fileName+'.geojson').then(r => r.json()).then(d => {

    mapboxgl.accessToken = 'pk.eyJ1IjoiYmFsbGFkYSIsImEiOiJjbTJuNWM3NnYwMmgyMmtzMjhqZncxMjBjIn0.zS7FxElADDrKQ_dC31DbJw';
    const map = new mapboxgl.Map({
        container: 'map', // container id,
        projection: 'mercator',	// default was the `globe` 3D view, but lets keep projections consistent over all libraries (3857)
        style: {
            "name": "EmptyBackgroundMap",
            "layers": [],
            "sources": {},
            "version": 8,
        }, // bkg map style, override with an empty one (so that it does not wait for retrieving styles/tiles from the web)
        center: [0, 0], // starting position [lng, lat]
        zoom: 2 // starting zoom
    });

    map.on('load', () => {
        map.addSource('samplePoints', {
            'type': 'geojson',
            'data': d
        });
        
        // METHOD: SVG MARKER FOR POINTS
        map.addLayer({
            'id': 'samplePoints',
            'source': 'samplePoints',
            'type': 'circle'
        });
    });
});