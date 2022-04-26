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
    lang  = "?language_filter=",
    tags  = "?tags_search=",
    shift = "&start="
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

    //
    private readonly apiURL: string = '/api';

    //
    public readonly itemShift = 4;
    public currentItemShift : number = 0;

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
    getOnceItemByUrl(qUrl: string) { return this.http.get(this.apiURL + qUrl); }

    /**
     *  Make Shift of load items
     *  @returns void
     */
    loadMoreItems() : void { this.currentItemShift += this.itemShift; }

    private getItemsShiftUrl() : string { 
        if( this.currentItemShift == 0 ){
            return "";
        }

        return (APIParams.shift + this.currentItemShift).toString();
    }

    /**
     *  Get Data from
     *  @param category 
     *  @returns 
     */
    getAllByCategory(category: string, tag?: string) { 
        let url = this.generateApiUrl( category , tag);
        console.log(url);
        return this.http.get( url ); }

    /**
     *  Generate API url
     *  @param category 
     *  @returns 
     */
    // private generateApiUrl( category: string ): string {
    //     console.log( this.apiURL + '/' + category + '/' + APIParams.lang + this.langService.getLanguage().value );
    //     return this.apiURL + '/' + category + '/' + APIParams.lang + this.langService.getLanguage().value
    // }

    private generateApiUrl(category: string, tag ?: string): string {
        let lng: { value: string, name: string } = this.langService.getLanguage();

        let tagParam = this.addTagParam(tag);

        if (lng.value == "") {
            return this.apiURL + '/' + category + '?' + tagParam + this.getItemsShiftUrl() ;
        }
        return this.apiURL + '/' 
            + category + '/' 
            + APIParams.lang + lng.value + (( tagParam )?'&'+tagParam:'') + this.getItemsShiftUrl(); 
    }


    private addTagParam( tag ?: string ) : string {
        let tagParam = '';

        if( tag ){
            tagParam = APIParams.tags + tag;
        }else{
            return '';
        }

        return tagParam.replace('?','');
    }



    

    /**
     * IF API HTTP | HTTPs
     * @returns String
     */
    private checkURL(): string { return this.apiURL.match(/^http|https/g) ? "?" : ""; }

}
