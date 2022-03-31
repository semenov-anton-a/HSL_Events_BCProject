import { Injectable, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, Subscription, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LangService } from './lang.service';

enum APICategories{
    PLACES = 'places',
    EVENTS = 'events',
    ACTIVITIES = 'activities',
}

enum APIOptions{
    lang = "?language_filter=",
    tags = "?tags_filter="
}

@Injectable({
    providedIn: "root",
})
export class ApiService {
    // Fix CORS error 
    // private apiURL : string = 'https://open-api.myhelsinki.fi/v2/';

    private readonly apiURL : string = '/api';

    private apiOptions: any = {
        lang : "",
        
    }

    constructor(
        private http: HttpClient,
        private langService: LangService
    ) {

        

    }
    

    getFavorites() {
        console.log( "NULL RETURNED" );
        return [];
        // let url = this.apiURL + "places/" + this.checkURL() + "language_filter=en";
        // return this.http.get(url);
    }




    
    
    getPlacesByLanguage( category: string, lng : string ){
        // this.generateApiUrl( category, lng );

        console.log ( this.apiURL +'/'+category+ this.apiOptions.lang + lng )
        return this.http.get( this.apiURL + this.apiOptions.lang + lng );
    }

    getAllPlaces(){
        let api = this.generateApiUrl( APICategories.PLACES );
        console.log(api)

        return this.http.get( this.apiURL );
    }
    
    private generateApiUrl( category : string ) : string {
        let lang = this.langService.getLanguage();
        return this.apiURL +'/'+ category + APIOptions.lang + lang.value
    }

    /**
     * IF API HTTP | HTTPs
     * @returns String
     */
    private checkURL(): string {
        return "";
        // return this.apiURL.match(/^http|https/g) ? "?" : "";
    }

}
