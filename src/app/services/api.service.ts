import { Injectable, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, Subscription, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LangService } from './lang.service';

export enum APICategories{
    PLACES = 'places',
    EVENTS = 'events',
    ACTIVITIES = 'activities',
}

export enum APIParams{
    lang = "?language_filter=",
    tags = "?tags_filter=",
}

@Injectable({
    providedIn: "root",
})
export class ApiService {
    // Fix CORS error 
    // private apiURL : string = 'https://open-api.myhelsinki.fi/v2/';

    private apiExcludeParamsFromURLReqex : any = {
        // activity : /(\? +APIParams.lang+ ).*/g,
        activity : { reqex : new RegExp( "(\/"+APIParams.lang+").*", "g" ) },
    }

    private readonly apiURL : string = '/api';



    constructor(
        private http: HttpClient,
        private langService: LangService
    ) {}
    

    getApiExcludeParamsFromURLReqex( byName: string ) : any {
        return( this.apiExcludeParamsFromURLReqex[byName] != undefined ) 
            ? this.apiExcludeParamsFromURLReqex[byName]
            : false
    }

    getFavorites() {
        console.log( "NULL RETURNED" );
        return [];
        // let url = this.apiURL + "places/" + this.checkURL() + "language_filter=en";
        // return this.http.get(url);
    }


    getOnceItemByUrl( qUrl: string ){
        return this.http.get( this.apiURL + qUrl );
    }


    getAllByCategory( category : string ){
        let api = this.generateApiUrl( category );
        console.log( api )

        // return this.http.get( api );
        return this.http.get( api );
    }
    
    




    private generateApiUrl( category : string ) : string {
        let lang = this.langService.getLanguage();
        return this.apiURL + '/' + category+ '/' + APIParams.lang + lang.value
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
