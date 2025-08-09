// MapLibre GL JS - Test 1 - COMBINED (3 layers)

fileName = location.pathname.split("/").slice(-1)[0].slice(0,-5);
featureCount = fileName.split("_")[1];

fetch('../../../datasets/points_forcombined/points_shifted_'+featureCount+'.geojson').then(r => r.json()).then(points => {
    fetch('../../../datasets/lines/lines_'+featureCount+'.geojson').then(r => r.json()).then(lines => {
        fetch('../../../datasets/polygons_forcombined/polygons_shifted_'+featureCount+'.geojson').then(r => r.json()).then(polygons => {

            const map = new maplibregl.Map({
                container: 'map', // container id
                style: {
                    "name": "EmptyBackgroundMap",
                    "layers": [],
                    "sources": {},
                    "version": 8,
                }, // bkg map style, override with an empty one (so that it does not wait for retrieving styles/tiles from the web)
                center: [6.55,49.35], // starting position [lng, lat]
                zoom: 8 // starting zoom
            });

            map.on('load', () => {
                // points
                map.addSource('samplePoints', {
                    'type': 'geojson',
                    'data': points
                });                
                map.addLayer({
                    'id': 'samplePoints',
                    'source': 'samplePoints',
                    'type': 'circle'
                });

                // lines
                map.addSource('sampleLines', {
                    'type': 'geojson',
                    'data': lines, 
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

                // polygons
                map.addSource('samplePolygons', {
                    'type': 'geojson',
                    'data': polygons, 
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
    });
});