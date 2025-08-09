// OpenLayers - Test 1 - COMBINED (3 layers)

fileName = location.pathname.split("/").slice(-1)[0].slice(0,-5);
featureCount = fileName.split("_")[1];

fetch('../../../datasets/points_forcombined/points_shifted_'+featureCount+'.geojson').then(r => r.json()).then(points => {
    fetch('../../../datasets/lines/lines_'+featureCount+'.geojson').then(r => r.json()).then(lines => {
        fetch('../../../datasets/polygons_forcombined/polygons_shifted_'+featureCount+'.geojson').then(r => r.json()).then(polygons => {

            ol.proj.useGeographic();
            const map = new ol.Map({
                target: 'map',
                /*layers: [
                    new ol.layer.Tile({
                        source: new ol.source.OSM(),
                    }),
                ],*/
                view: new ol.View({
                    center: [6.55,49.35],
                    zoom: 9,
                }),
            });

            // points
            const vectorSource_points = new ol.source.Vector({
                features: new ol.format.GeoJSON().readFeatures(points, {
                    /*dataProjection: 'EPSG:4326',
                    featureProjection: 'EPSG:3857'*/
                }),
            });

            // normal Canvas 2D renderer: 
            const vectorLayer_points = new ol.layer.Vector({
                source: vectorSource_points,
                style: new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 4.5,
                        fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)',
                        }),
                        stroke: null,
                    })
                })
            });

            map.addLayer(vectorLayer_points);

            // lines
            const vectorSource_lines = new ol.source.Vector({
                features: new ol.format.GeoJSON().readFeatures(lines, {
                    /*dataProjection: 'EPSG:4326',
                    featureProjection: 'EPSG:3857'*/
                }),
            });

            const vectorLayer_lines = new ol.layer.Vector({
                source: vectorSource_lines,
                style: new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'rgb(51, 136, 255)',
                        width: 3,
                    })
                })
            });

            map.addLayer(vectorLayer_lines);

            // polygons
            const vectorSource_polygons = new ol.source.Vector({
                features: new ol.format.GeoJSON().readFeatures(polygons, {
                    /*dataProjection: 'EPSG:4326',
                    featureProjection: 'EPSG:3857'*/
                }),
            });
            const vectorLayer_polygons = new ol.layer.Vector({
                source: vectorSource_polygons,
                style: new ol.style.Style({
                    fill: new ol.style.Fill({
                        color: 'rgba(51, 136, 255, 0.2)',
                    }),
                    stroke: new ol.style.Stroke({
                        color: 'rgb(51, 136, 255)',
                        width: 3,
                    })
                })
            });

            map.addLayer(vectorLayer_polygons);

        });
    });
});