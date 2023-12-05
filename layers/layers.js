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
jsonSource_PAJMoojen_4.addFeatures(features_PAJMoojen_4);cluster_PAJMoojen_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PAJMoojen_4
});
var lyr_PAJMoojen_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PAJMoojen_4, 
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
jsonSource_AFAalbers_5.addFeatures(features_AFAalbers_5);cluster_AFAalbers_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_AFAalbers_5
});
var lyr_AFAalbers_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_AFAalbers_5, 
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
jsonSource_GerritJanBel_6.addFeatures(features_GerritJanBel_6);cluster_GerritJanBel_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_GerritJanBel_6
});
var lyr_GerritJanBel_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_GerritJanBel_6, 
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
jsonSource_JacquesBennink_7.addFeatures(features_JacquesBennink_7);cluster_JacquesBennink_7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_JacquesBennink_7
});
var lyr_JacquesBennink_7 = new ol.layer.Vector({
                declutter: true,
                source:cluster_JacquesBennink_7, 
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
jsonSource_WillemBennink_8.addFeatures(features_WillemBennink_8);cluster_WillemBennink_8 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_WillemBennink_8
});
var lyr_WillemBennink_8 = new ol.layer.Vector({
                declutter: true,
                source:cluster_WillemBennink_8, 
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
jsonSource_AliduBois_9.addFeatures(features_AliduBois_9);cluster_AliduBois_9 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_AliduBois_9
});
var lyr_AliduBois_9 = new ol.layer.Vector({
                declutter: true,
                source:cluster_AliduBois_9, 
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
jsonSource_BurgerlijkeOpenbareWerken_10.addFeatures(features_BurgerlijkeOpenbareWerken_10);cluster_BurgerlijkeOpenbareWerken_10 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_BurgerlijkeOpenbareWerken_10
});
var lyr_BurgerlijkeOpenbareWerken_10 = new ol.layer.Vector({
                declutter: true,
                source:cluster_BurgerlijkeOpenbareWerken_10, 
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
jsonSource_FrederikBrinkman_11.addFeatures(features_FrederikBrinkman_11);cluster_FrederikBrinkman_11 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_FrederikBrinkman_11
});
var lyr_FrederikBrinkman_11 = new ol.layer.Vector({
                declutter: true,
                source:cluster_FrederikBrinkman_11, 
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
jsonSource_FrancoisCousin_12.addFeatures(features_FrancoisCousin_12);cluster_FrancoisCousin_12 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_FrancoisCousin_12
});
var lyr_FrancoisCousin_12 = new ol.layer.Vector({
                declutter: true,
                source:cluster_FrancoisCousin_12, 
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
jsonSource_EduardCuypers_13.addFeatures(features_EduardCuypers_13);cluster_EduardCuypers_13 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_EduardCuypers_13
});
var lyr_EduardCuypers_13 = new ol.layer.Vector({
                declutter: true,
                source:cluster_EduardCuypers_13, 
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
jsonSource_FreekDicke_14.addFeatures(features_FreekDicke_14);cluster_FreekDicke_14 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_FreekDicke_14
});
var lyr_FreekDicke_14 = new ol.layer.Vector({
                declutter: true,
                source:cluster_FreekDicke_14, 
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
jsonSource_JanDuyvis_15.addFeatures(features_JanDuyvis_15);cluster_JanDuyvis_15 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_JanDuyvis_15
});
var lyr_JanDuyvis_15 = new ol.layer.Vector({
                declutter: true,
                source:cluster_JanDuyvis_15, 
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
jsonSource_GeorgeElenbaas_16.addFeatures(features_GeorgeElenbaas_16);cluster_GeorgeElenbaas_16 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_GeorgeElenbaas_16
});
var lyr_GeorgeElenbaas_16 = new ol.layer.Vector({
                declutter: true,
                source:cluster_GeorgeElenbaas_16, 
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
jsonSource_HeinvonEssen_17.addFeatures(features_HeinvonEssen_17);cluster_HeinvonEssen_17 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_HeinvonEssen_17
});
var lyr_HeinvonEssen_17 = new ol.layer.Vector({
                declutter: true,
                source:cluster_HeinvonEssen_17, 
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
jsonSource_HenriEstourgie_18.addFeatures(features_HenriEstourgie_18);cluster_HenriEstourgie_18 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_HenriEstourgie_18
});
var lyr_HenriEstourgie_18 = new ol.layer.Vector({
                declutter: true,
                source:cluster_HenriEstourgie_18, 
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
jsonSource_ArthurFermont_19.addFeatures(features_ArthurFermont_19);cluster_ArthurFermont_19 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ArthurFermont_19
});
var lyr_ArthurFermont_19 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ArthurFermont_19, 
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
jsonSource_JohanvanGendt_20.addFeatures(features_JohanvanGendt_20);cluster_JohanvanGendt_20 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_JohanvanGendt_20
});
var lyr_JohanvanGendt_20 = new ol.layer.Vector({
                declutter: true,
                source:cluster_JohanvanGendt_20, 
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
jsonSource_JohanGerber_21.addFeatures(features_JohanGerber_21);cluster_JohanGerber_21 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_JohanGerber_21
});
var lyr_JohanGerber_21 = new ol.layer.Vector({
                declutter: true,
                source:cluster_JohanGerber_21, 
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
jsonSource_FransGhijsels_22.addFeatures(features_FransGhijsels_22);cluster_FransGhijsels_22 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_FransGhijsels_22
});
var lyr_FransGhijsels_22 = new ol.layer.Vector({
                declutter: true,
                source:cluster_FransGhijsels_22, 
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
jsonSource_AlbertGmeligMeyling_23.addFeatures(features_AlbertGmeligMeyling_23);cluster_AlbertGmeligMeyling_23 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_AlbertGmeligMeyling_23
});
var lyr_AlbertGmeligMeyling_23 = new ol.layer.Vector({
                declutter: true,
                source:cluster_AlbertGmeligMeyling_23, 
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
jsonSource_GerritHendriks_24.addFeatures(features_GerritHendriks_24);cluster_GerritHendriks_24 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_GerritHendriks_24
});
var lyr_GerritHendriks_24 = new ol.layer.Vector({
                declutter: true,
                source:cluster_GerritHendriks_24, 
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
jsonSource_JohanvanHoytema_25.addFeatures(features_JohanvanHoytema_25);cluster_JohanvanHoytema_25 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_JohanvanHoytema_25
});
var lyr_JohanvanHoytema_25 = new ol.layer.Vector({
                declutter: true,
                source:cluster_JohanvanHoytema_25, 
                style: style_JohanvanHoytema_25,
                interactive: true,
                title: '<img src="styles/legend/JohanvanHoytema_25.png" /> Johan van Hoytema'
            });
var format_ToonIngenegeren_26 = new ol.format.GeoJSON();
var features_ToonIngenegeren_26 = format_ToonIngenegeren_26.readFeatures(json_ToonIngenegeren_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ToonIngenegeren_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ToonIngenegeren_26.addFeatures(features_ToonIngenegeren_26);cluster_ToonIngenegeren_26 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ToonIngenegeren_26
});
var lyr_ToonIngenegeren_26 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ToonIngenegeren_26, 
                style: style_ToonIngenegeren_26,
                interactive: true,
                title: '<img src="styles/legend/ToonIngenegeren_26.png" /> Toon Ingenegeren'
            });
var format_HendrikKorver_27 = new ol.format.GeoJSON();
var features_HendrikKorver_27 = format_HendrikKorver_27.readFeatures(json_HendrikKorver_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HendrikKorver_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HendrikKorver_27.addFeatures(features_HendrikKorver_27);cluster_HendrikKorver_27 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_HendrikKorver_27
});
var lyr_HendrikKorver_27 = new ol.layer.Vector({
                declutter: true,
                source:cluster_HendrikKorver_27, 
                style: style_HendrikKorver_27,
                interactive: true,
                title: '<img src="styles/legend/HendrikKorver_27.png" /> Hendrik Korver'
            });
var format_Landsgebouwendienst_28 = new ol.format.GeoJSON();
var features_Landsgebouwendienst_28 = format_Landsgebouwendienst_28.readFeatures(json_Landsgebouwendienst_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landsgebouwendienst_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landsgebouwendienst_28.addFeatures(features_Landsgebouwendienst_28);cluster_Landsgebouwendienst_28 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Landsgebouwendienst_28
});
var lyr_Landsgebouwendienst_28 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Landsgebouwendienst_28, 
                style: style_Landsgebouwendienst_28,
                interactive: true,
                title: '<img src="styles/legend/Landsgebouwendienst_28.png" /> Landsgebouwendienst'
            });
var format_LaurentLogemann_29 = new ol.format.GeoJSON();
var features_LaurentLogemann_29 = format_LaurentLogemann_29.readFeatures(json_LaurentLogemann_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaurentLogemann_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaurentLogemann_29.addFeatures(features_LaurentLogemann_29);cluster_LaurentLogemann_29 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_LaurentLogemann_29
});
var lyr_LaurentLogemann_29 = new ol.layer.Vector({
                declutter: true,
                source:cluster_LaurentLogemann_29, 
                style: style_LaurentLogemann_29,
                interactive: true,
                title: '<img src="styles/legend/LaurentLogemann_29.png" /> Laurent Logemann'
            });
var format_HenriMaclainePont_30 = new ol.format.GeoJSON();
var features_HenriMaclainePont_30 = format_HenriMaclainePont_30.readFeatures(json_HenriMaclainePont_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HenriMaclainePont_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HenriMaclainePont_30.addFeatures(features_HenriMaclainePont_30);cluster_HenriMaclainePont_30 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_HenriMaclainePont_30
});
var lyr_HenriMaclainePont_30 = new ol.layer.Vector({
                declutter: true,
                source:cluster_HenriMaclainePont_30, 
                style: style_HenriMaclainePont_30,
                interactive: true,
                title: '<img src="styles/legend/HenriMaclainePont_30.png" /> Henri Maclaine Pont'
            });
var format_HenriMenaldavanSchouwenburg_31 = new ol.format.GeoJSON();
var features_HenriMenaldavanSchouwenburg_31 = format_HenriMenaldavanSchouwenburg_31.readFeatures(json_HenriMenaldavanSchouwenburg_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HenriMenaldavanSchouwenburg_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HenriMenaldavanSchouwenburg_31.addFeatures(features_HenriMenaldavanSchouwenburg_31);cluster_HenriMenaldavanSchouwenburg_31 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_HenriMenaldavanSchouwenburg_31
});
var lyr_HenriMenaldavanSchouwenburg_31 = new ol.layer.Vector({
                declutter: true,
                source:cluster_HenriMenaldavanSchouwenburg_31, 
                style: style_HenriMenaldavanSchouwenburg_31,
                interactive: true,
                title: '<img src="styles/legend/HenriMenaldavanSchouwenburg_31.png" /> Henri Menalda van Schouwenburg'
            });
var format_ThomasNix_32 = new ol.format.GeoJSON();
var features_ThomasNix_32 = format_ThomasNix_32.readFeatures(json_ThomasNix_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ThomasNix_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ThomasNix_32.addFeatures(features_ThomasNix_32);cluster_ThomasNix_32 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ThomasNix_32
});
var lyr_ThomasNix_32 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ThomasNix_32, 
                style: style_ThomasNix_32,
                interactive: true,
                title: '<img src="styles/legend/ThomasNix_32.png" /> Thomas Nix'
            });
var format_JellePiso_33 = new ol.format.GeoJSON();
var features_JellePiso_33 = format_JellePiso_33.readFeatures(json_JellePiso_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JellePiso_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JellePiso_33.addFeatures(features_JellePiso_33);cluster_JellePiso_33 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_JellePiso_33
});
var lyr_JellePiso_33 = new ol.layer.Vector({
                declutter: true,
                source:cluster_JellePiso_33, 
                style: style_JellePiso_33,
                interactive: true,
                title: '<img src="styles/legend/JellePiso_33.png" /> Jelle Piso'
            });
var format_RijkRijksen_34 = new ol.format.GeoJSON();
var features_RijkRijksen_34 = format_RijkRijksen_34.readFeatures(json_RijkRijksen_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RijkRijksen_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RijkRijksen_34.addFeatures(features_RijkRijksen_34);cluster_RijkRijksen_34 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_RijkRijksen_34
});
var lyr_RijkRijksen_34 = new ol.layer.Vector({
                declutter: true,
                source:cluster_RijkRijksen_34, 
                style: style_RijkRijksen_34,
                interactive: true,
                title: '<img src="styles/legend/RijkRijksen_34.png" /> Rijk Rijksen'
            });
var format_EverharddeRoo_35 = new ol.format.GeoJSON();
var features_EverharddeRoo_35 = format_EverharddeRoo_35.readFeatures(json_EverharddeRoo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EverharddeRoo_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EverharddeRoo_35.addFeatures(features_EverharddeRoo_35);cluster_EverharddeRoo_35 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_EverharddeRoo_35
});
var lyr_EverharddeRoo_35 = new ol.layer.Vector({
                declutter: true,
                source:cluster_EverharddeRoo_35, 
                style: style_EverharddeRoo_35,
                interactive: true,
                title: '<img src="styles/legend/EverharddeRoo_35.png" /> Everhard de Roo'
            });
var format_RichardSchoemaker_36 = new ol.format.GeoJSON();
var features_RichardSchoemaker_36 = format_RichardSchoemaker_36.readFeatures(json_RichardSchoemaker_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RichardSchoemaker_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RichardSchoemaker_36.addFeatures(features_RichardSchoemaker_36);cluster_RichardSchoemaker_36 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_RichardSchoemaker_36
});
var lyr_RichardSchoemaker_36 = new ol.layer.Vector({
                declutter: true,
                source:cluster_RichardSchoemaker_36, 
                style: style_RichardSchoemaker_36,
                interactive: true,
                title: '<img src="styles/legend/RichardSchoemaker_36.png" /> Richard Schoemaker'
            });
var format_SimonSnuijf_37 = new ol.format.GeoJSON();
var features_SimonSnuijf_37 = format_SimonSnuijf_37.readFeatures(json_SimonSnuijf_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SimonSnuijf_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SimonSnuijf_37.addFeatures(features_SimonSnuijf_37);cluster_SimonSnuijf_37 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_SimonSnuijf_37
});
var lyr_SimonSnuijf_37 = new ol.layer.Vector({
                declutter: true,
                source:cluster_SimonSnuijf_37, 
                style: style_SimonSnuijf_37,
                interactive: true,
                title: '<img src="styles/legend/SimonSnuijf_37.png" /> Simon Snuijf'
            });
var format_TheoTaen_38 = new ol.format.GeoJSON();
var features_TheoTaen_38 = format_TheoTaen_38.readFeatures(json_TheoTaen_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TheoTaen_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TheoTaen_38.addFeatures(features_TheoTaen_38);cluster_TheoTaen_38 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_TheoTaen_38
});
var lyr_TheoTaen_38 = new ol.layer.Vector({
                declutter: true,
                source:cluster_TheoTaen_38, 
                style: style_TheoTaen_38,
                interactive: true,
                title: '<img src="styles/legend/TheoTaen_38.png" /> Theo Taen'
            });
var format_TrudesVoorhoeve_39 = new ol.format.GeoJSON();
var features_TrudesVoorhoeve_39 = format_TrudesVoorhoeve_39.readFeatures(json_TrudesVoorhoeve_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrudesVoorhoeve_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrudesVoorhoeve_39.addFeatures(features_TrudesVoorhoeve_39);cluster_TrudesVoorhoeve_39 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_TrudesVoorhoeve_39
});
var lyr_TrudesVoorhoeve_39 = new ol.layer.Vector({
                declutter: true,
                source:cluster_TrudesVoorhoeve_39, 
                style: style_TrudesVoorhoeve_39,
                interactive: true,
                title: '<img src="styles/legend/TrudesVoorhoeve_39.png" /> Trudes Voorhoeve'
            });
var format_AtVrijburg_40 = new ol.format.GeoJSON();
var features_AtVrijburg_40 = format_AtVrijburg_40.readFeatures(json_AtVrijburg_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AtVrijburg_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AtVrijburg_40.addFeatures(features_AtVrijburg_40);cluster_AtVrijburg_40 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_AtVrijburg_40
});
var lyr_AtVrijburg_40 = new ol.layer.Vector({
                declutter: true,
                source:cluster_AtVrijburg_40, 
                style: style_AtVrijburg_40,
                interactive: true,
                title: '<img src="styles/legend/AtVrijburg_40.png" /> At Vrijburg'
            });
var format_MaartenWesterduin_41 = new ol.format.GeoJSON();
var features_MaartenWesterduin_41 = format_MaartenWesterduin_41.readFeatures(json_MaartenWesterduin_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaartenWesterduin_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaartenWesterduin_41.addFeatures(features_MaartenWesterduin_41);cluster_MaartenWesterduin_41 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_MaartenWesterduin_41
});
var lyr_MaartenWesterduin_41 = new ol.layer.Vector({
                declutter: true,
                source:cluster_MaartenWesterduin_41, 
                style: style_MaartenWesterduin_41,
                interactive: true,
                title: '<img src="styles/legend/MaartenWesterduin_41.png" /> Maarten Westerduin'
            });
var format_FransWiemans_42 = new ol.format.GeoJSON();
var features_FransWiemans_42 = format_FransWiemans_42.readFeatures(json_FransWiemans_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FransWiemans_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FransWiemans_42.addFeatures(features_FransWiemans_42);cluster_FransWiemans_42 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_FransWiemans_42
});
var lyr_FransWiemans_42 = new ol.layer.Vector({
                declutter: true,
                source:cluster_FransWiemans_42, 
                style: style_FransWiemans_42,
                interactive: true,
                title: '<img src="styles/legend/FransWiemans_42.png" /> Frans Wiemans'
            });
var format_CharlesWolffSchoemaker_43 = new ol.format.GeoJSON();
var features_CharlesWolffSchoemaker_43 = format_CharlesWolffSchoemaker_43.readFeatures(json_CharlesWolffSchoemaker_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CharlesWolffSchoemaker_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CharlesWolffSchoemaker_43.addFeatures(features_CharlesWolffSchoemaker_43);cluster_CharlesWolffSchoemaker_43 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_CharlesWolffSchoemaker_43
});
var lyr_CharlesWolffSchoemaker_43 = new ol.layer.Vector({
                declutter: true,
                source:cluster_CharlesWolffSchoemaker_43, 
                style: style_CharlesWolffSchoemaker_43,
                interactive: true,
                title: '<img src="styles/legend/CharlesWolffSchoemaker_43.png" /> Charles Wolff Schoemaker'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_GoogleMapsSatellite_2.setVisible(true);lyr_WazeWorld_3.setVisible(true);lyr_PAJMoojen_4.setVisible(true);lyr_AFAalbers_5.setVisible(true);lyr_GerritJanBel_6.setVisible(true);lyr_JacquesBennink_7.setVisible(true);lyr_WillemBennink_8.setVisible(true);lyr_AliduBois_9.setVisible(true);lyr_BurgerlijkeOpenbareWerken_10.setVisible(true);lyr_FrederikBrinkman_11.setVisible(true);lyr_FrancoisCousin_12.setVisible(true);lyr_EduardCuypers_13.setVisible(true);lyr_FreekDicke_14.setVisible(true);lyr_JanDuyvis_15.setVisible(true);lyr_GeorgeElenbaas_16.setVisible(true);lyr_HeinvonEssen_17.setVisible(true);lyr_HenriEstourgie_18.setVisible(true);lyr_ArthurFermont_19.setVisible(true);lyr_JohanvanGendt_20.setVisible(true);lyr_JohanGerber_21.setVisible(true);lyr_FransGhijsels_22.setVisible(true);lyr_AlbertGmeligMeyling_23.setVisible(true);lyr_GerritHendriks_24.setVisible(true);lyr_JohanvanHoytema_25.setVisible(true);lyr_ToonIngenegeren_26.setVisible(true);lyr_HendrikKorver_27.setVisible(true);lyr_Landsgebouwendienst_28.setVisible(true);lyr_LaurentLogemann_29.setVisible(true);lyr_HenriMaclainePont_30.setVisible(true);lyr_HenriMenaldavanSchouwenburg_31.setVisible(true);lyr_ThomasNix_32.setVisible(true);lyr_JellePiso_33.setVisible(true);lyr_RijkRijksen_34.setVisible(true);lyr_EverharddeRoo_35.setVisible(true);lyr_RichardSchoemaker_36.setVisible(true);lyr_SimonSnuijf_37.setVisible(true);lyr_TheoTaen_38.setVisible(true);lyr_TrudesVoorhoeve_39.setVisible(true);lyr_AtVrijburg_40.setVisible(true);lyr_MaartenWesterduin_41.setVisible(true);lyr_FransWiemans_42.setVisible(true);lyr_CharlesWolffSchoemaker_43.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_OpenStreetMap_1,lyr_GoogleMapsSatellite_2,lyr_WazeWorld_3,lyr_PAJMoojen_4,lyr_AFAalbers_5,lyr_GerritJanBel_6,lyr_JacquesBennink_7,lyr_WillemBennink_8,lyr_AliduBois_9,lyr_BurgerlijkeOpenbareWerken_10,lyr_FrederikBrinkman_11,lyr_FrancoisCousin_12,lyr_EduardCuypers_13,lyr_FreekDicke_14,lyr_JanDuyvis_15,lyr_GeorgeElenbaas_16,lyr_HeinvonEssen_17,lyr_HenriEstourgie_18,lyr_ArthurFermont_19,lyr_JohanvanGendt_20,lyr_JohanGerber_21,lyr_FransGhijsels_22,lyr_AlbertGmeligMeyling_23,lyr_GerritHendriks_24,lyr_JohanvanHoytema_25,lyr_ToonIngenegeren_26,lyr_HendrikKorver_27,lyr_Landsgebouwendienst_28,lyr_LaurentLogemann_29,lyr_HenriMaclainePont_30,lyr_HenriMenaldavanSchouwenburg_31,lyr_ThomasNix_32,lyr_JellePiso_33,lyr_RijkRijksen_34,lyr_EverharddeRoo_35,lyr_RichardSchoemaker_36,lyr_SimonSnuijf_37,lyr_TheoTaen_38,lyr_TrudesVoorhoeve_39,lyr_AtVrijburg_40,lyr_MaartenWesterduin_41,lyr_FransWiemans_42,lyr_CharlesWolffSchoemaker_43];
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
lyr_ToonIngenegeren_26.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_HendrikKorver_27.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_Landsgebouwendienst_28.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_LaurentLogemann_29.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_HenriMaclainePont_30.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_HenriMenaldavanSchouwenburg_31.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_ThomasNix_32.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_JellePiso_33.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_RijkRijksen_34.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_EverharddeRoo_35.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_RichardSchoemaker_36.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_SimonSnuijf_37.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_TheoTaen_38.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_TrudesVoorhoeve_39.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_AtVrijburg_40.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_MaartenWesterduin_41.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_FransWiemans_42.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
lyr_CharlesWolffSchoemaker_43.set('fieldAliases', {'Ket': 'Ket', 'Tahun': 'Tahun', 'Alamat': 'Alamat', });
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
lyr_ToonIngenegeren_26.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_HendrikKorver_27.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_Landsgebouwendienst_28.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_LaurentLogemann_29.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_HenriMaclainePont_30.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_HenriMenaldavanSchouwenburg_31.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_ThomasNix_32.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_JellePiso_33.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_RijkRijksen_34.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_EverharddeRoo_35.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_RichardSchoemaker_36.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_SimonSnuijf_37.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_TheoTaen_38.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_TrudesVoorhoeve_39.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_AtVrijburg_40.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_MaartenWesterduin_41.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_FransWiemans_42.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
lyr_CharlesWolffSchoemaker_43.set('fieldImages', {'Ket': '', 'Tahun': '', 'Alamat': '', });
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
lyr_ToonIngenegeren_26.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_HendrikKorver_27.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_Landsgebouwendienst_28.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_LaurentLogemann_29.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_HenriMaclainePont_30.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_HenriMenaldavanSchouwenburg_31.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_ThomasNix_32.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_JellePiso_33.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_RijkRijksen_34.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_EverharddeRoo_35.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_RichardSchoemaker_36.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_SimonSnuijf_37.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_TheoTaen_38.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_TrudesVoorhoeve_39.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_AtVrijburg_40.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_MaartenWesterduin_41.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_FransWiemans_42.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_CharlesWolffSchoemaker_43.set('fieldLabels', {'Ket': 'inline label', 'Tahun': 'inline label', 'Alamat': 'inline label', });
lyr_CharlesWolffSchoemaker_43.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});