// OpenLayers - Test 1 - Points

fileName = location.pathname.split("/").slice(-1)[0].slice(0,-5);

fetch('../../../datasets/points/'+fileName+'.geojson').then(r => r.json()).then(d => {

    ol.proj.useGeographic();
    const map = new ol.Map({
        target: 'map',
        /*layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM(),
            }),
        ],*/
        view: new ol.View({
            center: [0, 0],
            zoom: 3,
        }),
    });

    const vectorSource = new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(d, {
            /*dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'*/
        }),
    });

    // normal Canvas 2D renderer: 
    const vectorLayer = new ol.layer.Vector({
        source: vectorSource,
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

    map.addLayer(vectorLayer);
});