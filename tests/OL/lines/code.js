// OpenLayers - Test 1 - Lines

fileName = location.pathname.split("/").slice(-1)[0].slice(0,-5);

fetch('../../../datasets/lines/'+fileName+'.geojson').then(r => r.json()).then(d => {

    ol.proj.useGeographic();
    const map = new ol.Map({
        target: 'map',
        /*layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM(),
            }),
        ],*/
        view: new ol.View({
            center: [6.1,49.82],
            zoom: 10,
        }),
    });

    const vectorSource = new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(d, {
            /*dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'*/
        }),
    });

    const vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'rgb(51, 136, 255)',
                width: 3,
            })
        })
    });

    map.addLayer(vectorLayer);
});