import { Injectable, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, Subscription, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LangService } from './lang.service';

export enum APICategories {
    PLACES = 'places',
    EVENTS = 'events',
    ACTIVITIES = 'activities',
}

export enum APIParams {
    lang = "?language_filter=",
    tags = "?tags_filter=",
}

@Injectable({
    providedIn: "root",
})
export class ApiService {
    // Fix CORS error 
    // private apiURL : string = 'https://open-api.myhelsinki.fi/v2/';

    private apiExcludeParamsFromURLReqex: any = {
        // activity : /(\? +APIParams.lang+ ).*/g,
        activity: { reqex: new RegExp("(\/" + APIParams.lang + ").*", "g") },
    }

    private readonly apiURL: string = '/api';



    constructor(
        private http: HttpClient,
        private langService: LangService
    ) { }


    getApiExcludeParamsFromURLReqex(byName: string): any {
        return (this.apiExcludeParamsFromURLReqex[byName] != undefined)
            ? this.apiExcludeParamsFromURLReqex[byName]
            : false
    }    

    /**
     *  Get ITEM
     *  @param qUrl 
     *  @returns 
     */
    getOnceItemByUrl(qUrl: string) {
         return this.http.get(this.generateApiUrl(qUrl)); }

    /**
     *  Get Data from
     *  @param category 
     *  @returns 
     */
    getAllByCategory(category: string) { 
        return this.http.get(this.generateApiUrl(category)); }

    /**
     *  Generate API url
     *  @param category 
     *  @returns 
     */
    // private generateApiUrl( category: string ): string {
    //     console.log( this.apiURL + '/' + category + '/' + APIParams.lang + this.langService.getLanguage().value );
    //     return this.apiURL + '/' + category + '/' + APIParams.lang + this.langService.getLanguage().value
    // }

    private generateApiUrl(category: string): string {
        let lng: { value: string, name: string } = this.langService.getLanguage();

        if (lng.value == "") {
            return this.apiURL + '/' + category;
        }

        return this.apiURL + '/' + category + '/' + APIParams.lang + lng.value
    }

    /**
     * IF API HTTP | HTTPs
     * @returns String
     */
    private checkURL(): string { return this.apiURL.match(/^http|https/g) ? "?" : ""; }

}
