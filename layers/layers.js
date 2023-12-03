var wms_layers = [];


        var lyr_WazeWorld_0 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_PAJMoojen_1 = new ol.format.GeoJSON();
var features_PAJMoojen_1 = format_PAJMoojen_1.readFeatures(json_PAJMoojen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAJMoojen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAJMoojen_1.addFeatures(features_PAJMoojen_1);
var lyr_PAJMoojen_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PAJMoojen_1, 
                style: style_PAJMoojen_1,
                interactive: true,
                title: '<img src="styles/legend/PAJMoojen_1.png" /> P. A. J. Moojen'
            });
var format_AFAalbers_2 = new ol.format.GeoJSON();
var features_AFAalbers_2 = format_AFAalbers_2.readFeatures(json_AFAalbers_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFAalbers_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AFAalbers_2.addFeatures(features_AFAalbers_2);
var lyr_AFAalbers_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AFAalbers_2, 
                style: style_AFAalbers_2,
                interactive: true,
                title: '<img src="styles/legend/AFAalbers_2.png" /> A. F. Aalbers'
            });
var format_GerritJanBel_3 = new ol.format.GeoJSON();
var features_GerritJanBel_3 = format_GerritJanBel_3.readFeatures(json_GerritJanBel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GerritJanBel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GerritJanBel_3.addFeatures(features_GerritJanBel_3);
var lyr_GerritJanBel_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GerritJanBel_3, 
                style: style_GerritJanBel_3,
                interactive: true,
                title: '<img src="styles/legend/GerritJanBel_3.png" /> Gerrit Jan Bel'
            });
var format_JacquesBennink_4 = new ol.format.GeoJSON();
var features_JacquesBennink_4 = format_JacquesBennink_4.readFeatures(json_JacquesBennink_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JacquesBennink_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JacquesBennink_4.addFeatures(features_JacquesBennink_4);
var lyr_JacquesBennink_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JacquesBennink_4, 
                style: style_JacquesBennink_4,
                interactive: true,
                title: '<img src="styles/legend/JacquesBennink_4.png" /> Jacques Bennink'
            });
var format_WillemBennink_5 = new ol.format.GeoJSON();
var features_WillemBennink_5 = format_WillemBennink_5.readFeatures(json_WillemBennink_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WillemBennink_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WillemBennink_5.addFeatures(features_WillemBennink_5);
var lyr_WillemBennink_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WillemBennink_5, 
                style: style_WillemBennink_5,
                interactive: true,
                title: '<img src="styles/legend/WillemBennink_5.png" /> Willem Bennink'
            });
var format_AliduBois_6 = new ol.format.GeoJSON();
var features_AliduBois_6 = format_AliduBois_6.readFeatures(json_AliduBois_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AliduBois_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AliduBois_6.addFeatures(features_AliduBois_6);
var lyr_AliduBois_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AliduBois_6, 
                style: style_AliduBois_6,
                interactive: true,
                title: '<img src="styles/legend/AliduBois_6.png" /> Ali du Bois'
            });
var format_BurgerlijkeOpenbareWerken_7 = new ol.format.GeoJSON();
var features_BurgerlijkeOpenbareWerken_7 = format_BurgerlijkeOpenbareWerken_7.readFeatures(json_BurgerlijkeOpenbareWerken_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BurgerlijkeOpenbareWerken_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BurgerlijkeOpenbareWerken_7.addFeatures(features_BurgerlijkeOpenbareWerken_7);
var lyr_BurgerlijkeOpenbareWerken_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BurgerlijkeOpenbareWerken_7, 
                style: style_BurgerlijkeOpenbareWerken_7,
                interactive: true,
                title: '<img src="styles/legend/BurgerlijkeOpenbareWerken_7.png" /> Burgerlijke Openbare Werken'
            });
var format_FrederikBrinkman_8 = new ol.format.GeoJSON();
var features_FrederikBrinkman_8 = format_FrederikBrinkman_8.readFeatures(json_FrederikBrinkman_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrederikBrinkman_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrederikBrinkman_8.addFeatures(features_FrederikBrinkman_8);
var lyr_FrederikBrinkman_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FrederikBrinkman_8, 
                style: style_FrederikBrinkman_8,
                interactive: true,
                title: '<img src="styles/legend/FrederikBrinkman_8.png" /> Frederik Brinkman'
            });
var format_FrancoisCousin_9 = new ol.format.GeoJSON();
var features_FrancoisCousin_9 = format_FrancoisCousin_9.readFeatures(json_FrancoisCousin_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrancoisCousin_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrancoisCousin_9.addFeatures(features_FrancoisCousin_9);
var lyr_FrancoisCousin_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FrancoisCousin_9, 
                style: style_FrancoisCousin_9,
                interactive: true,
                title: '<img src="styles/legend/FrancoisCousin_9.png" /> Francois Cousin'
            });
var format_EduardCuypers_10 = new ol.format.GeoJSON();
var features_EduardCuypers_10 = format_EduardCuypers_10.readFeatures(json_EduardCuypers_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduardCuypers_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduardCuypers_10.addFeatures(features_EduardCuypers_10);
var lyr_EduardCuypers_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduardCuypers_10, 
                style: style_EduardCuypers_10,
                interactive: true,
                title: '<img src="styles/legend/EduardCuypers_10.png" /> Eduard Cuypers'
            });
var format_FreekDicke_11 = new ol.format.GeoJSON();
var features_FreekDicke_11 = format_FreekDicke_11.readFeatures(json_FreekDicke_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FreekDicke_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FreekDicke_11.addFeatures(features_FreekDicke_11);
var lyr_FreekDicke_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FreekDicke_11, 
                style: style_FreekDicke_11,
                interactive: true,
                title: '<img src="styles/legend/FreekDicke_11.png" /> Freek Dicke'
            });
var format_JanDuyvis_12 = new ol.format.GeoJSON();
var features_JanDuyvis_12 = format_JanDuyvis_12.readFeatures(json_JanDuyvis_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JanDuyvis_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JanDuyvis_12.addFeatures(features_JanDuyvis_12);
var lyr_JanDuyvis_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JanDuyvis_12, 
                style: style_JanDuyvis_12,
                interactive: true,
                title: '<img src="styles/legend/JanDuyvis_12.png" /> Jan Duyvis'
            });
var format_GeorgeElenbaas_13 = new ol.format.GeoJSON();
var features_GeorgeElenbaas_13 = format_GeorgeElenbaas_13.readFeatures(json_GeorgeElenbaas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeorgeElenbaas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeorgeElenbaas_13.addFeatures(features_GeorgeElenbaas_13);
var lyr_GeorgeElenbaas_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GeorgeElenbaas_13, 
                style: style_GeorgeElenbaas_13,
                interactive: true,
                title: '<img src="styles/legend/GeorgeElenbaas_13.png" /> George Elenbaas'
            });
var format_HeinvonEssen_14 = new ol.format.GeoJSON();
var features_HeinvonEssen_14 = format_HeinvonEssen_14.readFeatures(json_HeinvonEssen_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeinvonEssen_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeinvonEssen_14.addFeatures(features_HeinvonEssen_14);
var lyr_HeinvonEssen_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HeinvonEssen_14, 
                style: style_HeinvonEssen_14,
                interactive: true,
                title: '<img src="styles/legend/HeinvonEssen_14.png" /> Hein von Essen'
            });
var format_HenriEstourgie_15 = new ol.format.GeoJSON();
var features_HenriEstourgie_15 = format_HenriEstourgie_15.readFeatures(json_HenriEstourgie_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HenriEstourgie_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HenriEstourgie_15.addFeatures(features_HenriEstourgie_15);
var lyr_HenriEstourgie_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HenriEstourgie_15, 
                style: style_HenriEstourgie_15,
                interactive: true,
                title: '<img src="styles/legend/HenriEstourgie_15.png" /> Henri Estourgie'
            });
var format_ArthurFermont_16 = new ol.format.GeoJSON();
var features_ArthurFermont_16 = format_ArthurFermont_16.readFeatures(json_ArthurFermont_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArthurFermont_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArthurFermont_16.addFeatures(features_ArthurFermont_16);
var lyr_ArthurFermont_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ArthurFermont_16, 
                style: style_ArthurFermont_16,
                interactive: true,
                title: '<img src="styles/legend/ArthurFermont_16.png" /> Arthur Fermont'
            });
var format_JohanvanGendt_17 = new ol.format.GeoJSON();
var features_JohanvanGendt_17 = format_JohanvanGendt_17.readFeatures(json_JohanvanGendt_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JohanvanGendt_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JohanvanGendt_17.addFeatures(features_JohanvanGendt_17);
var lyr_JohanvanGendt_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JohanvanGendt_17, 
                style: style_JohanvanGendt_17,
                interactive: true,
                title: '<img src="styles/legend/JohanvanGendt_17.png" /> Johan van Gendt'
            });
var format_JohanGerber_18 = new ol.format.GeoJSON();
var features_JohanGerber_18 = format_JohanGerber_18.readFeatures(json_JohanGerber_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JohanGerber_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JohanGerber_18.addFeatures(features_JohanGerber_18);
var lyr_JohanGerber_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JohanGerber_18, 
                style: style_JohanGerber_18,
                interactive: true,
                title: '<img src="styles/legend/JohanGerber_18.png" /> Johan Gerber'
            });
var format_FransGhijsels_19 = new ol.format.GeoJSON();
var features_FransGhijsels_19 = format_FransGhijsels_19.readFeatures(json_FransGhijsels_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FransGhijsels_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FransGhijsels_19.addFeatures(features_FransGhijsels_19);
var lyr_FransGhijsels_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FransGhijsels_19, 
                style: style_FransGhijsels_19,
                interactive: true,
                title: '<img src="styles/legend/FransGhijsels_19.png" /> Frans Ghijsels'
            });
var format_AlbertGmeligMeyling_20 = new ol.format.GeoJSON();
var features_AlbertGmeligMeyling_20 = format_AlbertGmeligMeyling_20.readFeatures(json_AlbertGmeligMeyling_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlbertGmeligMeyling_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertGmeligMeyling_20.addFeatures(features_AlbertGmeligMeyling_20);
var lyr_AlbertGmeligMeyling_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlbertGmeligMeyling_20, 
                style: style_AlbertGmeligMeyling_20,
                interactive: true,
                title: '<img src="styles/legend/AlbertGmeligMeyling_20.png" /> Albert Gmelig Meyling'
            });
var format_GerritHendriks_21 = new ol.format.GeoJSON();
var features_GerritHendriks_21 = format_GerritHendriks_21.readFeatures(json_GerritHendriks_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GerritHendriks_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GerritHendriks_21.addFeatures(features_GerritHendriks_21);
var lyr_GerritHendriks_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GerritHendriks_21, 
                style: style_GerritHendriks_21,
                interactive: true,
                title: '<img src="styles/legend/GerritHendriks_21.png" /> Gerrit Hendriks'
            });
var format_JohanvanHoytema_22 = new ol.format.GeoJSON();
var features_JohanvanHoytema_22 = format_JohanvanHoytema_22.readFeatures(json_JohanvanHoytema_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JohanvanHoytema_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JohanvanHoytema_22.addFeatures(features_JohanvanHoytema_22);
var lyr_JohanvanHoytema_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JohanvanHoytema_22, 
                style: style_JohanvanHoytema_22,
                interactive: true,
                title: '<img src="styles/legend/JohanvanHoytema_22.png" /> Johan van Hoytema'
            });

lyr_WazeWorld_0.setVisible(true);lyr_PAJMoojen_1.setVisible(true);lyr_AFAalbers_2.setVisible(true);lyr_GerritJanBel_3.setVisible(true);lyr_JacquesBennink_4.setVisible(true);lyr_WillemBennink_5.setVisible(true);lyr_AliduBois_6.setVisible(true);lyr_BurgerlijkeOpenbareWerken_7.setVisible(true);lyr_FrederikBrinkman_8.setVisible(true);lyr_FrancoisCousin_9.setVisible(true);lyr_EduardCuypers_10.setVisible(true);lyr_FreekDicke_11.setVisible(true);lyr_JanDuyvis_12.setVisible(true);lyr_GeorgeElenbaas_13.setVisible(true);lyr_HeinvonEssen_14.setVisible(true);lyr_HenriEstourgie_15.setVisible(true);lyr_ArthurFermont_16.setVisible(true);lyr_JohanvanGendt_17.setVisible(true);lyr_JohanGerber_18.setVisible(true);lyr_FransGhijsels_19.setVisible(true);lyr_AlbertGmeligMeyling_20.setVisible(true);lyr_GerritHendriks_21.setVisible(true);lyr_JohanvanHoytema_22.setVisible(true);
var layersList = [lyr_WazeWorld_0,lyr_PAJMoojen_1,lyr_AFAalbers_2,lyr_GerritJanBel_3,lyr_JacquesBennink_4,lyr_WillemBennink_5,lyr_AliduBois_6,lyr_BurgerlijkeOpenbareWerken_7,lyr_FrederikBrinkman_8,lyr_FrancoisCousin_9,lyr_EduardCuypers_10,lyr_FreekDicke_11,lyr_JanDuyvis_12,lyr_GeorgeElenbaas_13,lyr_HeinvonEssen_14,lyr_HenriEstourgie_15,lyr_ArthurFermont_16,lyr_JohanvanGendt_17,lyr_JohanGerber_18,lyr_FransGhijsels_19,lyr_AlbertGmeligMeyling_20,lyr_GerritHendriks_21,lyr_JohanvanHoytema_22];
lyr_PAJMoojen_1.set('fieldAliases', {'Ket': 'Ket', 'Alamat': 'Alamat', 'Tahun': 'Tahun', });
lyr_AFAalbers_2.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_GerritJanBel_3.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_JacquesBennink_4.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_WillemBennink_5.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_AliduBois_6.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_BurgerlijkeOpenbareWerken_7.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_FrederikBrinkman_8.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_FrancoisCousin_9.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_EduardCuypers_10.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_FreekDicke_11.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_JanDuyvis_12.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_GeorgeElenbaas_13.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_HeinvonEssen_14.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_HenriEstourgie_15.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_ArthurFermont_16.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_JohanvanGendt_17.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_JohanGerber_18.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_FransGhijsels_19.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_AlbertGmeligMeyling_20.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_GerritHendriks_21.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_JohanvanHoytema_22.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_PAJMoojen_1.set('fieldImages', {'Ket': 'TextEdit', 'Alamat': 'TextEdit', 'Tahun': 'TextEdit', });
lyr_AFAalbers_2.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_GerritJanBel_3.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_JacquesBennink_4.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_WillemBennink_5.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_AliduBois_6.set('fieldImages', {'Ket': 'TextEdit', 'Tahun': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_BurgerlijkeOpenbareWerken_7.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_FrederikBrinkman_8.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_FrancoisCousin_9.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_EduardCuypers_10.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_FreekDicke_11.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_JanDuyvis_12.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_GeorgeElenbaas_13.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_HeinvonEssen_14.set('fieldImages', {'Ket': 'TextEdit', 'Tahun': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_HenriEstourgie_15.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_ArthurFermont_16.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_JohanvanGendt_17.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_JohanGerber_18.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_FransGhijsels_19.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_AlbertGmeligMeyling_20.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_GerritHendriks_21.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_JohanvanHoytema_22.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_PAJMoojen_1.set('fieldLabels', {'Ket': 'inline label', 'Alamat': 'inline label', 'Tahun': 'inline label', });
lyr_AFAalbers_2.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_GerritJanBel_3.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_JacquesBennink_4.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_WillemBennink_5.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_AliduBois_6.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_BurgerlijkeOpenbareWerken_7.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_FrederikBrinkman_8.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_FrancoisCousin_9.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_EduardCuypers_10.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_FreekDicke_11.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_JanDuyvis_12.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_GeorgeElenbaas_13.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_HeinvonEssen_14.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_HenriEstourgie_15.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_ArthurFermont_16.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_JohanvanGendt_17.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_JohanGerber_18.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_FransGhijsels_19.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_AlbertGmeligMeyling_20.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_GerritHendriks_21.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_JohanvanHoytema_22.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_JohanvanHoytema_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});