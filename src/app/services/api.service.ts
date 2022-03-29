import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
    providedIn: "root",
})
export class ApiService {

    @Input() public currentLanguage : string | undefined ;


    // private apiURL: string = './assets/json/';
    // private apiURL: string = '/api';
    
    // Fix CORS error 
    // private apiURL : string = 'https://open-api.myhelsinki.fi/v2/';

    constructor(
        private http: HttpClient
    ) {}


    getFavorites() {
        console.log( "NULL RETURNED" );
        return [];
        // let url = this.apiURL + "places/" + this.checkURL() + "language_filter=en";
        // return this.http.get(url);
    }


    /**
     *  
     *  @returns 
     */
    getPlaces() {
        // let url = this.apiURL + "places/" + this.checkURL() + "language_filter=en";
        let url = "/api";
        return this.http.get(url);
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
