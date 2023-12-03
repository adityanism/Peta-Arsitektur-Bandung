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

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMapsSatellite_2 = new ol.layer.Tile({
            'title': 'Google Maps Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_WazeWorld_3 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_PAJMoojen_4 = new ol.format.GeoJSON();
var features_PAJMoojen_4 = format_PAJMoojen_4.readFeatures(json_PAJMoojen_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAJMoojen_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAJMoojen_4.addFeatures(features_PAJMoojen_4);
var lyr_PAJMoojen_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PAJMoojen_4, 
                style: style_PAJMoojen_4,
                interactive: true,
                title: '<img src="styles/legend/PAJMoojen_4.png" /> P. A. J. Moojen'
            });
var format_AFAalbers_5 = new ol.format.GeoJSON();
var features_AFAalbers_5 = format_AFAalbers_5.readFeatures(json_AFAalbers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFAalbers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AFAalbers_5.addFeatures(features_AFAalbers_5);
var lyr_AFAalbers_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AFAalbers_5, 
                style: style_AFAalbers_5,
                interactive: true,
                title: '<img src="styles/legend/AFAalbers_5.png" /> A. F. Aalbers'
            });
var format_GerritJanBel_6 = new ol.format.GeoJSON();
var features_GerritJanBel_6 = format_GerritJanBel_6.readFeatures(json_GerritJanBel_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GerritJanBel_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GerritJanBel_6.addFeatures(features_GerritJanBel_6);
var lyr_GerritJanBel_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GerritJanBel_6, 
                style: style_GerritJanBel_6,
                interactive: true,
                title: '<img src="styles/legend/GerritJanBel_6.png" /> Gerrit Jan Bel'
            });
var format_JacquesBennink_7 = new ol.format.GeoJSON();
var features_JacquesBennink_7 = format_JacquesBennink_7.readFeatures(json_JacquesBennink_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JacquesBennink_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JacquesBennink_7.addFeatures(features_JacquesBennink_7);
var lyr_JacquesBennink_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JacquesBennink_7, 
                style: style_JacquesBennink_7,
                interactive: true,
                title: '<img src="styles/legend/JacquesBennink_7.png" /> Jacques Bennink'
            });
var format_WillemBennink_8 = new ol.format.GeoJSON();
var features_WillemBennink_8 = format_WillemBennink_8.readFeatures(json_WillemBennink_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WillemBennink_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WillemBennink_8.addFeatures(features_WillemBennink_8);
var lyr_WillemBennink_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WillemBennink_8, 
                style: style_WillemBennink_8,
                interactive: true,
                title: '<img src="styles/legend/WillemBennink_8.png" /> Willem Bennink'
            });
var format_AliduBois_9 = new ol.format.GeoJSON();
var features_AliduBois_9 = format_AliduBois_9.readFeatures(json_AliduBois_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AliduBois_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AliduBois_9.addFeatures(features_AliduBois_9);
var lyr_AliduBois_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AliduBois_9, 
                style: style_AliduBois_9,
                interactive: true,
                title: '<img src="styles/legend/AliduBois_9.png" /> Ali du Bois'
            });
var format_BurgerlijkeOpenbareWerken_10 = new ol.format.GeoJSON();
var features_BurgerlijkeOpenbareWerken_10 = format_BurgerlijkeOpenbareWerken_10.readFeatures(json_BurgerlijkeOpenbareWerken_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BurgerlijkeOpenbareWerken_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BurgerlijkeOpenbareWerken_10.addFeatures(features_BurgerlijkeOpenbareWerken_10);
var lyr_BurgerlijkeOpenbareWerken_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BurgerlijkeOpenbareWerken_10, 
                style: style_BurgerlijkeOpenbareWerken_10,
                interactive: true,
                title: '<img src="styles/legend/BurgerlijkeOpenbareWerken_10.png" /> Burgerlijke Openbare Werken'
            });
var format_FrederikBrinkman_11 = new ol.format.GeoJSON();
var features_FrederikBrinkman_11 = format_FrederikBrinkman_11.readFeatures(json_FrederikBrinkman_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrederikBrinkman_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrederikBrinkman_11.addFeatures(features_FrederikBrinkman_11);
var lyr_FrederikBrinkman_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FrederikBrinkman_11, 
                style: style_FrederikBrinkman_11,
                interactive: true,
                title: '<img src="styles/legend/FrederikBrinkman_11.png" /> Frederik Brinkman'
            });
var format_FrancoisCousin_12 = new ol.format.GeoJSON();
var features_FrancoisCousin_12 = format_FrancoisCousin_12.readFeatures(json_FrancoisCousin_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrancoisCousin_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrancoisCousin_12.addFeatures(features_FrancoisCousin_12);
var lyr_FrancoisCousin_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FrancoisCousin_12, 
                style: style_FrancoisCousin_12,
                interactive: true,
                title: '<img src="styles/legend/FrancoisCousin_12.png" /> Francois Cousin'
            });
var format_EduardCuypers_13 = new ol.format.GeoJSON();
var features_EduardCuypers_13 = format_EduardCuypers_13.readFeatures(json_EduardCuypers_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduardCuypers_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduardCuypers_13.addFeatures(features_EduardCuypers_13);
var lyr_EduardCuypers_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduardCuypers_13, 
                style: style_EduardCuypers_13,
                interactive: true,
                title: '<img src="styles/legend/EduardCuypers_13.png" /> Eduard Cuypers'
            });
var format_FreekDicke_14 = new ol.format.GeoJSON();
var features_FreekDicke_14 = format_FreekDicke_14.readFeatures(json_FreekDicke_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FreekDicke_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FreekDicke_14.addFeatures(features_FreekDicke_14);
var lyr_FreekDicke_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FreekDicke_14, 
                style: style_FreekDicke_14,
                interactive: true,
                title: '<img src="styles/legend/FreekDicke_14.png" /> Freek Dicke'
            });
var format_JanDuyvis_15 = new ol.format.GeoJSON();
var features_JanDuyvis_15 = format_JanDuyvis_15.readFeatures(json_JanDuyvis_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JanDuyvis_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JanDuyvis_15.addFeatures(features_JanDuyvis_15);
var lyr_JanDuyvis_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JanDuyvis_15, 
                style: style_JanDuyvis_15,
                interactive: true,
                title: '<img src="styles/legend/JanDuyvis_15.png" /> Jan Duyvis'
            });
var format_GeorgeElenbaas_16 = new ol.format.GeoJSON();
var features_GeorgeElenbaas_16 = format_GeorgeElenbaas_16.readFeatures(json_GeorgeElenbaas_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeorgeElenbaas_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeorgeElenbaas_16.addFeatures(features_GeorgeElenbaas_16);
var lyr_GeorgeElenbaas_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GeorgeElenbaas_16, 
                style: style_GeorgeElenbaas_16,
                interactive: true,
                title: '<img src="styles/legend/GeorgeElenbaas_16.png" /> George Elenbaas'
            });
var format_HeinvonEssen_17 = new ol.format.GeoJSON();
var features_HeinvonEssen_17 = format_HeinvonEssen_17.readFeatures(json_HeinvonEssen_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeinvonEssen_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeinvonEssen_17.addFeatures(features_HeinvonEssen_17);
var lyr_HeinvonEssen_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HeinvonEssen_17, 
                style: style_HeinvonEssen_17,
                interactive: true,
                title: '<img src="styles/legend/HeinvonEssen_17.png" /> Hein von Essen'
            });
var format_HenriEstourgie_18 = new ol.format.GeoJSON();
var features_HenriEstourgie_18 = format_HenriEstourgie_18.readFeatures(json_HenriEstourgie_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HenriEstourgie_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HenriEstourgie_18.addFeatures(features_HenriEstourgie_18);
var lyr_HenriEstourgie_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HenriEstourgie_18, 
                style: style_HenriEstourgie_18,
                interactive: true,
                title: '<img src="styles/legend/HenriEstourgie_18.png" /> Henri Estourgie'
            });
var format_ArthurFermont_19 = new ol.format.GeoJSON();
var features_ArthurFermont_19 = format_ArthurFermont_19.readFeatures(json_ArthurFermont_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArthurFermont_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArthurFermont_19.addFeatures(features_ArthurFermont_19);
var lyr_ArthurFermont_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ArthurFermont_19, 
                style: style_ArthurFermont_19,
                interactive: true,
                title: '<img src="styles/legend/ArthurFermont_19.png" /> Arthur Fermont'
            });
var format_JohanvanGendt_20 = new ol.format.GeoJSON();
var features_JohanvanGendt_20 = format_JohanvanGendt_20.readFeatures(json_JohanvanGendt_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JohanvanGendt_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JohanvanGendt_20.addFeatures(features_JohanvanGendt_20);
var lyr_JohanvanGendt_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JohanvanGendt_20, 
                style: style_JohanvanGendt_20,
                interactive: true,
                title: '<img src="styles/legend/JohanvanGendt_20.png" /> Johan van Gendt'
            });
var format_JohanGerber_21 = new ol.format.GeoJSON();
var features_JohanGerber_21 = format_JohanGerber_21.readFeatures(json_JohanGerber_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JohanGerber_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JohanGerber_21.addFeatures(features_JohanGerber_21);
var lyr_JohanGerber_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JohanGerber_21, 
                style: style_JohanGerber_21,
                interactive: true,
                title: '<img src="styles/legend/JohanGerber_21.png" /> Johan Gerber'
            });
var format_FransGhijsels_22 = new ol.format.GeoJSON();
var features_FransGhijsels_22 = format_FransGhijsels_22.readFeatures(json_FransGhijsels_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FransGhijsels_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FransGhijsels_22.addFeatures(features_FransGhijsels_22);
var lyr_FransGhijsels_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FransGhijsels_22, 
                style: style_FransGhijsels_22,
                interactive: true,
                title: '<img src="styles/legend/FransGhijsels_22.png" /> Frans Ghijsels'
            });
var format_AlbertGmeligMeyling_23 = new ol.format.GeoJSON();
var features_AlbertGmeligMeyling_23 = format_AlbertGmeligMeyling_23.readFeatures(json_AlbertGmeligMeyling_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlbertGmeligMeyling_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertGmeligMeyling_23.addFeatures(features_AlbertGmeligMeyling_23);
var lyr_AlbertGmeligMeyling_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlbertGmeligMeyling_23, 
                style: style_AlbertGmeligMeyling_23,
                interactive: true,
                title: '<img src="styles/legend/AlbertGmeligMeyling_23.png" /> Albert Gmelig Meyling'
            });
var format_GerritHendriks_24 = new ol.format.GeoJSON();
var features_GerritHendriks_24 = format_GerritHendriks_24.readFeatures(json_GerritHendriks_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GerritHendriks_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GerritHendriks_24.addFeatures(features_GerritHendriks_24);
var lyr_GerritHendriks_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GerritHendriks_24, 
                style: style_GerritHendriks_24,
                interactive: true,
                title: '<img src="styles/legend/GerritHendriks_24.png" /> Gerrit Hendriks'
            });
var format_JohanvanHoytema_25 = new ol.format.GeoJSON();
var features_JohanvanHoytema_25 = format_JohanvanHoytema_25.readFeatures(json_JohanvanHoytema_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JohanvanHoytema_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JohanvanHoytema_25.addFeatures(features_JohanvanHoytema_25);
var lyr_JohanvanHoytema_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JohanvanHoytema_25, 
                style: style_JohanvanHoytema_25,
                interactive: true,
                title: '<img src="styles/legend/JohanvanHoytema_25.png" /> Johan van Hoytema'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_GoogleMapsSatellite_2.setVisible(true);lyr_WazeWorld_3.setVisible(true);lyr_PAJMoojen_4.setVisible(true);lyr_AFAalbers_5.setVisible(true);lyr_GerritJanBel_6.setVisible(true);lyr_JacquesBennink_7.setVisible(true);lyr_WillemBennink_8.setVisible(true);lyr_AliduBois_9.setVisible(true);lyr_BurgerlijkeOpenbareWerken_10.setVisible(true);lyr_FrederikBrinkman_11.setVisible(true);lyr_FrancoisCousin_12.setVisible(true);lyr_EduardCuypers_13.setVisible(true);lyr_FreekDicke_14.setVisible(true);lyr_JanDuyvis_15.setVisible(true);lyr_GeorgeElenbaas_16.setVisible(true);lyr_HeinvonEssen_17.setVisible(true);lyr_HenriEstourgie_18.setVisible(true);lyr_ArthurFermont_19.setVisible(true);lyr_JohanvanGendt_20.setVisible(true);lyr_JohanGerber_21.setVisible(true);lyr_FransGhijsels_22.setVisible(true);lyr_AlbertGmeligMeyling_23.setVisible(true);lyr_GerritHendriks_24.setVisible(true);lyr_JohanvanHoytema_25.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_OpenStreetMap_1,lyr_GoogleMapsSatellite_2,lyr_WazeWorld_3,lyr_PAJMoojen_4,lyr_AFAalbers_5,lyr_GerritJanBel_6,lyr_JacquesBennink_7,lyr_WillemBennink_8,lyr_AliduBois_9,lyr_BurgerlijkeOpenbareWerken_10,lyr_FrederikBrinkman_11,lyr_FrancoisCousin_12,lyr_EduardCuypers_13,lyr_FreekDicke_14,lyr_JanDuyvis_15,lyr_GeorgeElenbaas_16,lyr_HeinvonEssen_17,lyr_HenriEstourgie_18,lyr_ArthurFermont_19,lyr_JohanvanGendt_20,lyr_JohanGerber_21,lyr_FransGhijsels_22,lyr_AlbertGmeligMeyling_23,lyr_GerritHendriks_24,lyr_JohanvanHoytema_25];
lyr_PAJMoojen_4.set('fieldAliases', {'Ket': 'Ket', 'Alamat': 'Alamat', 'Tahun': 'Tahun', });
lyr_AFAalbers_5.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_GerritJanBel_6.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_JacquesBennink_7.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_WillemBennink_8.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_AliduBois_9.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_BurgerlijkeOpenbareWerken_10.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_FrederikBrinkman_11.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_FrancoisCousin_12.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_EduardCuypers_13.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_FreekDicke_14.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_JanDuyvis_15.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_GeorgeElenbaas_16.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_HeinvonEssen_17.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_HenriEstourgie_18.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_ArthurFermont_19.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_JohanvanGendt_20.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_JohanGerber_21.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_FransGhijsels_22.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_AlbertGmeligMeyling_23.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_GerritHendriks_24.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_JohanvanHoytema_25.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_PAJMoojen_4.set('fieldImages', {'Ket': 'TextEdit', 'Alamat': 'TextEdit', 'Tahun': 'TextEdit', });
lyr_AFAalbers_5.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_GerritJanBel_6.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_JacquesBennink_7.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_WillemBennink_8.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_AliduBois_9.set('fieldImages', {'Ket': 'TextEdit', 'Tahun': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_BurgerlijkeOpenbareWerken_10.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_FrederikBrinkman_11.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_FrancoisCousin_12.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_EduardCuypers_13.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_FreekDicke_14.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_JanDuyvis_15.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_GeorgeElenbaas_16.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_HeinvonEssen_17.set('fieldImages', {'Ket': 'TextEdit', 'Tahun': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_HenriEstourgie_18.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_ArthurFermont_19.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_JohanvanGendt_20.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_JohanGerber_21.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_FransGhijsels_22.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_AlbertGmeligMeyling_23.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_GerritHendriks_24.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_JohanvanHoytema_25.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_PAJMoojen_4.set('fieldLabels', {'Ket': 'inline label', 'Alamat': 'inline label', 'Tahun': 'inline label', });
lyr_AFAalbers_5.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_GerritJanBel_6.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_JacquesBennink_7.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_WillemBennink_8.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_AliduBois_9.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_BurgerlijkeOpenbareWerken_10.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_FrederikBrinkman_11.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_FrancoisCousin_12.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_EduardCuypers_13.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_FreekDicke_14.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_JanDuyvis_15.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_GeorgeElenbaas_16.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_HeinvonEssen_17.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_HenriEstourgie_18.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_ArthurFermont_19.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_JohanvanGendt_20.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_JohanGerber_21.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_FransGhijsels_22.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_AlbertGmeligMeyling_23.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_GerritHendriks_24.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_JohanvanHoytema_25.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_JohanvanHoytema_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});