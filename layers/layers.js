var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMapsSatellite_1 = new ol.layer.Tile({
            'title': 'Google Maps Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_PAJMoojen_2 = new ol.format.GeoJSON();
var features_PAJMoojen_2 = format_PAJMoojen_2.readFeatures(json_PAJMoojen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAJMoojen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAJMoojen_2.addFeatures(features_PAJMoojen_2);
var lyr_PAJMoojen_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PAJMoojen_2, 
                style: style_PAJMoojen_2,
                interactive: true,
                title: '<img src="styles/legend/PAJMoojen_2.png" /> P. A. J. Moojen'
            });
var format_AFAalbers_3 = new ol.format.GeoJSON();
var features_AFAalbers_3 = format_AFAalbers_3.readFeatures(json_AFAalbers_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFAalbers_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AFAalbers_3.addFeatures(features_AFAalbers_3);
var lyr_AFAalbers_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AFAalbers_3, 
                style: style_AFAalbers_3,
                interactive: true,
                title: '<img src="styles/legend/AFAalbers_3.png" /> A. F. Aalbers'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleMapsSatellite_1.setVisible(true);lyr_PAJMoojen_2.setVisible(true);lyr_AFAalbers_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleMapsSatellite_1,lyr_PAJMoojen_2,lyr_AFAalbers_3];
lyr_PAJMoojen_2.set('fieldAliases', {'Ket': 'Ket', 'Alamat': 'Alamat', 'Tahun': 'Tahun', });
lyr_AFAalbers_3.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_PAJMoojen_2.set('fieldImages', {'Ket': 'TextEdit', 'Alamat': 'TextEdit', 'Tahun': 'TextEdit', });
lyr_AFAalbers_3.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_PAJMoojen_2.set('fieldLabels', {'Ket': 'inline label', 'Alamat': 'inline label', 'Tahun': 'no label', });
lyr_AFAalbers_3.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_AFAalbers_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});