/******* 
    ####################################
    
    --- DO NOT DELETE THESE LINKS ---
    
    ####################################

    // Google Maps API DOCUMENTATION
    @link https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions

    @ Compoent INFO -> Modified March 17, 2022
    @link https://timdeschryver.dev/blog/google-maps-as-an-angular-component#info-window-mehods


    @ HELPs Links
    @link https://stackoverflow.com/questions/62142893/how-to-show-dynamic-content-in-angular-google-maps-infowindow 
    @link https://stackoverflow.com/questions/62142893/how-to-show-dynamic-content-in-angular-google-maps-infowindow
    @link https://github.com/angular/components/tree/master/src/google-maps#readme
    @link https://stackoverflow.com/questions/62845428/google-map-angular9-error-with-opening-info-window-getanchor-is-not-found


    @ Close infoWindow if is Oppend 
    @link https://www.angularfix.com/2021/10/how-to-show-dynamic-content-in.html
*/

import { Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'



@Component({
    selector: 'app-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

    /***************************
     *  GOOGLE MAP DOCUMENTATION
     *  @link https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
     */
    @ViewChild(GoogleMap, { static: false }) map: GoogleMap | undefined
    @ViewChild(MapInfoWindow, { static: false }) infoWindow?: MapInfoWindow
    @ViewChildren(MapInfoWindow) infoWindowsView?: QueryList<MapInfoWindow> | any;

    public zoom : number = 8
    public center: google.maps.LatLngLiteral | any;
    
    public options: google.maps.MapOptions = {
        mapTypeId: 'roadmap',
        zoomControl: true,
        scrollwheel: true,
        disableDoubleClickZoom: false,
        maxZoom: 15,
        minZoom: 8,
        clickableIcons: true
    }
    /* GOOGLE OPTIONS END */

    constructor() { }

    @Input() cardsData?: any;


    // openInfoWindow( marker: MapMarker, infoWindow: MapInfoWindow ) { infoWindow.open(marker) }
    // 
    openInfoWindow(marker: MapMarker, windowIndex: number) {
        /// stores the current index in forEach
        let curIdx = 0;
        this.infoWindowsView.forEach((window: MapInfoWindow) => {
            
            if (windowIndex === curIdx) {
                window.open(marker);
                curIdx++;
            } else {
                window.close();
                curIdx++;
            }
        });
    }
    
    setZoom( cardsData: any ){ return (cardsData?.id) ? 13 : 8 }
    setMarkerCenter( data: any){ this.center = this.setPosition( data ); }

    setTitle(data: any) { return {}; }
    
    setLabel(data: any) { return {}; }



    test(mydata : any) {
        console.log( "GOOGLE MAP ", mydata )
    }

    /**
     * 
     * @param data 
     * @returns 
     */
    setPosition(data: any) {
        let lat = '0';   
        let lng = '0';

        if( ( data.hasOwnProperty('location') ) )
        {
            lat = data.location?.lat 
            lng = data.location?.lon
        }       

        if( data.hasOwnProperty('address') ) {
            lat = data.address.location?.lat;
            lng = data.address.location?.long;
        }

        let pos = { 
            lat : parseFloat(lat), 
            lng : parseFloat(lng) 
        };

        return pos;
    }



    ngOnInit(): void {
        navigator.geolocation.getCurrentPosition((position) => {
            
            this.center = {

                // Get Position from Browser 
                // lat: position.coords.latitude,
                // lng: position.coords.longitude,
                
                // Static Position < HELSINKI >
                lat: 60.192059,
                lng: 24.945831,



                // Static Position < VESIRATTAANMÄKI >
                // lat:60.224307,
                // lng:24.687411,


            }
        })
    }
}
