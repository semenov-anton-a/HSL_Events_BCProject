import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Observable } from 'rxjs/internal/Observable';
import { PlacesComponent } from 'src/app/pages';
import { PlacesCardsComponent } from '../cards/places-cards/places-cards.component';

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

    zoom = 8
    center: google.maps.LatLngLiteral | any;
    options: google.maps.MapOptions = {
        mapTypeId: 'roadmap', // https://developers.google.com/maps/documentation/javascript/reference/map#MapTypeId
        zoomControl: true,
        scrollwheel: true,
        disableDoubleClickZoom: false,
        // maxZoom: 15,
        // minZoom: 8,
        clickableIcons: true
    }

    @Input() markers: any;
    /* GOOGLE OPTIONS END */

    constructor() {

    }

    // @ViewChild( PlacesCardsComponent )  cardsData$: any[] | undefined;
    @Input() cardsData?: any[];

    addMarker(data : any) : void {
        console.log(data);
    }
    
    ngOnInit(): void {
        navigator.geolocation.getCurrentPosition((position) => {
            this.center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            }
        })
    }
}
