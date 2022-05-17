import { Injectable, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, Subscription, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LangService } from './lang.service';

// export enum APICategories {
//     PLACES = 'places',
//     EVENTS = 'events',
//     ACTIVITIES = 'activities',
// }

export enum APIParams {
    lang = "?language_filter=",
    tags = "?tags_search=",
    shift = "&start=",
    limit = "&limit="
}

@Injectable({
    providedIn: "root",
})
export class ApiService {

    


    // Fix CORS error 
    // private apiURL : string = 'https://open-api.myhelsinki.fi/v2/';

    /**
     * @API URL
     */
    /**
     * @PRODUCTION 
     * */ 
    private readonly BussinessCollegeID = "s2101154";

    public  readonly baseURL = "/"+this.BussinessCollegeID+"/";
    private readonly apiURL: string = 'https://public.bc.fi/'+this.BussinessCollegeID+'/api/';

    /**
     * @DEVELOPMENT  
     * */ 
    // public  readonly baseURL = "http://localhost:4200/";
    // private readonly apiURL: string = '/api';
    // private readonly apiURL: string = 'http://hslevents.loc/api/';


    private apiExcludeParamsFromURLReqex: any = {
        activity: { reqex: new RegExp("(\/" + APIParams.lang + ").*", "g") },
    }

    // 
    private readonly globalStartLimitShift = 4;


    // Limit load items
    private readonly limitDefault = 4;
    public limitLoad = 0;

    // Shift of load data
    private _itemShift = 4;
    public get itemShift() { return this._itemShift; }
    public currentItemShift: number = 0;

    /**
     * @CONSTRUCTOR
     * @param http 
     * @param langService 
     */
    constructor(
        private http: HttpClient,
        private langService: LangService
    ) { this.limitLoad = this.limitDefault; }


    /**
     * 
     * @param byName 
     * @returns 
     */
    public getApiExcludeParamsFromURLReqex(byName: string): any {
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
        return this.http.get(this.generateApiUrl(qUrl));

    }

    /**
     *  Get Data from
     *  @param category 
     *  @returns 
     */
    public getAllByCategory(category: string, tag?: string) {
        let url = this.generateApiUrl(category, tag);
        console.log("API.SERVICE::getAllByCategory -->>> ", url);
        return this.http.get(url);
    }

    /**
     *  Generate API url
     *  @param category 
     *  @returns 
     */
    // private generateApiUrl( category: string ): string {
    //     console.log( this.apiURL + '/' + category + '/' + APIParams.lang + this.langService.getLanguage().value );
    //     return this.apiURL + '/' + category + '/' + APIParams.lang + this.langService.getLanguage().value
    // }

    /**
     * 
     * @param value 
     * @returns 
     */
    public setLimitUriParam(value?: number) { return this.setLoadItemsShift(value); }

    /**
     * 
     */
    public resetStartLimitShifts() {
        this.limitLoad = this.limitDefault;
        this.currentItemShift = 0;
    }
    
    /**
         *  Make Shift of load items
         *  @returns void
         */
    public loadMoreItems(): void { this.currentItemShift += this.itemShift; }

    
    /*****************
     * 
     * @PRIVATE_METHODS
     * 
     ******************/

    /**
     * Genrate URL request
     * @param category 
     * @param tag 
     * @returns 
     */
    private generateApiUrl(category: string, tag?: string): string {
        let lng: { value: string, name: string } = this.langService.getLanguage();

        let tagParam = this.addTagParam(tag);


        if( category[0] == '/' ){
            return this.apiURL + this.categoryDelimiter(category);
        }

        if (lng.value == "") {
            return this.apiURL
                // + '/'
                + category
                + '?'
                + tagParam
                + this.getItemsShiftUrl()
                + this.getLimitUriParam();
        }

        return this.apiURL 
            // + '/'
            + category
            + APIParams.lang
            + lng.value
            + ((tagParam) ? '&' + tagParam : '')
            + this.getItemsShiftUrl()
            + this.getLimitUriParam();
    }



    private categoryDelimiter(category: string ){
        if( category[0] == '/' ){
            category = category.substring(1);
        } 
        console.log(category);
        this.resetStartLimitShifts()
        return category
    }

    /**
     * Generate tag param
     * @param tag 
     * @returns 
     */
    private addTagParam(tag?: string): string {
        let tagParam = '';

        if (tag) {
            tagParam = APIParams.tags + tag;
        } else {
            return '';
        }

        return tagParam.replace('?', '');
    }

    /**
     * Genrate start of load items
     * @returns String 
     */
    private getItemsShiftUrl(): string {
        if (this.currentItemShift == 0) { return ""; }
        return (APIParams.shift + this.currentItemShift).toString();
    }
    /**
     * Genrate limit param
     * @return String
     */
    private getLimitUriParam(): string { return (APIParams.limit + this.limitLoad).toString(); }

    /**
     * 
     * @param value 
     * @returns 
     */
    private setLoadItemsShift(value?: number) {
        if (!value) {
            this.limitLoad = this.globalStartLimitShift;
            this._itemShift = this.globalStartLimitShift;
        } else {
            let limitVal = (value) ? value : this.limitDefault;
            this.limitLoad = limitVal;
            this._itemShift = value;
            console.log(limitVal)
        }
        return this;
    }


    /**
    //  * IF API HTTP | HTTPs
    //  * @returns String
    //  */
    // private checkURL(): string { return this.apiURL.match(/^http|https/g) ? "?" : ""; }


}
