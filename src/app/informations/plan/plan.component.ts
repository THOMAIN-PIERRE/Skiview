import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import {registerElement } from "nativescript-angular/element-registry";
import { Mapbox, MapboxMarker, MapboxViewApi } from "nativescript-mapbox";

registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);

@Component({
    selector: "ns-plan",
    templateUrl: "./plan.component.html"
})
export class PlanComponent implements OnInit {

        // We store a link out to the map
    mapbox: MapboxViewApi;

    constructor() {
        // Use the component constructor to inject providers.
    }
    ngOnInit(): void {
        // Init your component properties here.
    }
    onMapReady(args) {
        //creation of an instance of class MapboxView
        // we call the mapBox
        this.mapbox = args.map;
    }

    addMarkers() {
        //We give to first marker the status of <MapboxMarker> (allow to pick-up helper functions)
        const firstMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97724,
            lng: -0.73905,
            title: "BRACA",
            subtitle: "OUVERT",
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            // It's possible to click on the callout (=repère) to read more informations
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };
            //Second marker declaration
        const secondMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97664,
            lng: -0.74713,
            title: "LES OURSONS",
            subtitle: "OUVERT",
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            // It's possible to click on the callout (=repère) to read more informations
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

        const thirdMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97692,
            lng: -0.74620,
            title: "LES MARMOTTES",
            subtitle: "OUVERT",
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            // It's possible to click on the callout (=repère) to read more informations
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

        const fourthMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97461,
            lng: -0.74661,
            title: "LES SAPINS",
            subtitle: "OUVERT",
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            // It's possible to click on the callout (=repère) to read more informations
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

        const fifthMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97366,
            lng: -0.74857,
            title: "ARLAS",
            subtitle: "OUVERT",
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            // It's possible to click on the callout (=repère) to read more informations
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

        const sixthMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97718,
            lng: -0.75044,
            title: "MASSARE 2",
            subtitle: "OUVERT",
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            // It's possible to click on the callout (=repère) to read more informations
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

        const seventhMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97461,
            lng: -0.75426,
            title: "PLUVIOMETRE",
            subtitle: "OUVERT",
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            // It's possible to click on the callout (=repère) to read more informations
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

        const eightMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97281,
            lng: -0.75586,
            title: "CONTREBANDIERS",
            subtitle: "OUVERT",
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            // It's possible to click on the callout (=repère) to read more informations
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

        const ninethMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97475,
            lng: -0.72876,
            title: "LE FAMILY",
            subtitle: "OUVERT",
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            // It's possible to click on the callout (=repère) to read more informations
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

        const tenthMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97724,
            lng: -0.73905,
            title: "LE FAMILY",
            subtitle: "OUVERT",
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            // It's possible to click on the callout (=repère) to read more informations
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

        const eleventhMarker = <MapboxMarker>{
            id: 2,
            lat: 42.96674,
            lng: -0.72155,
            title: "LE PANORAMIQUE",
            subtitle: "OUVERT",
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            // It's possible to click on the callout (=repère) to read more informations
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

                //Allow to add markers to the map created (array of markers)
        this.mapbox.addMarkers([
            firstMarker, secondMarker, thirdMarker, fourthMarker, fifthMarker, sixthMarker, seventhMarker, eightMarker, ninethMarker, tenthMarker, eleventhMarker
        ]);
    }

        onDrawerButtonTap(): void {
            const sideDrawer = <RadSideDrawer>app.getRootView();
            sideDrawer.showDrawer();
        }
    }
