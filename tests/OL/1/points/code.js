// OpenLayers - Test 1 - Points

fileName = location.pathname.split("/").slice(-1)[0].slice(0,-5);

fetch('../../../../datasets/points/'+fileName+'.geojson').then(r => r.json()).then(d => {

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

    //var t0 = window.performance.now();

    const vectorSource = new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(d, {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
        }),
    });

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

    /*vectorLayer.once("render", function () {
        var t1 = window.performance.now();
        var elapsed = t1 - t0;
        console.log("time to render: ", elapsed);
    });

    vectorLayer.getSource().on("featuresloadstart", function () {
        console.log('start')
    });

    vectorLayer.getSource().on("featuresloadend", function () {
        console.log('end')
    });*/

    map.addLayer(vectorLayer);
    //map.renderSync();
    /*var t1=performance.now();
    console.log(`Adding to map took: ${t1-t0} ms.`)*/
});