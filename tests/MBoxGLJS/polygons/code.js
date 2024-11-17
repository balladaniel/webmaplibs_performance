// MapBox GL JS - Test 1 - Polygons

fileName = location.pathname.split("/").slice(-1)[0].slice(0,-5);

fetch('../../../datasets/polygons/'+fileName+'.geojson').then(r => r.json()).then(d => {

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
        center: [-81.38, 28.538], // starting position [lng, lat]
        zoom: 12 // starting zoom
    });

    map.on('load', () => {
        map.addSource('samplePolygons', {
            'type': 'geojson',
            'data': d, 
            tolerance: 0.01 //  Default simplification tolerance (0.375) is overridden, due to small features being omitted at the zoom level: https://github.com/mapbox/mapbox-gl-js/issues/8635
        });
        
        map.addLayer({
            'id': 'samplePolygons_fill',
            'source': 'samplePolygons',
            'type': 'fill',
            'layout': {},
            'paint': {
                'fill-color': 'rgb(51, 136, 255)',
                'fill-opacity': 0.2
            }
        });
        map.addLayer({
            'id': 'samplePolygons_outline',
            'source': 'samplePolygons',
            'type': 'line',
            'layout': {},
            'paint': {
                'line-color': 'rgb(51, 136, 255)',
                'line-width': 3
            }
        });
    });
});