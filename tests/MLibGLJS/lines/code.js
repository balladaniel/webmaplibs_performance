// MapLibre GL JS - Test 1 - Lines

fileName = location.pathname.split("/").slice(-1)[0].slice(0,-5);

fetch('../../../datasets/lines/'+fileName+'.geojson').then(r => r.json()).then(d => {

    const map = new maplibregl.Map({
        container: 'map', // container id
        style: {
            "name": "EmptyBackgroundMap",
            "layers": [],
            "sources": {},
            "version": 8,
        }, // bkg map style, override with an empty one (so that it does not wait for retrieving styles/tiles from the web)
        center: [6.1,49.82], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    map.on('load', () => {
        map.addSource('sampleLines', {
            'type': 'geojson',
            'data': d, 
            tolerance: 0.01 //  Default simplification tolerance (0.375) is overridden, due to small line features being omitted at the zoom level: https://github.com/mapbox/mapbox-gl-js/issues/8635
        });
        
        map.addLayer({
            'id': 'sampleLines',
            'source': 'sampleLines',
            'type': 'line',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': 'rgb(51, 136, 255)',
                'line-width': 3
            }
        });
    });
});