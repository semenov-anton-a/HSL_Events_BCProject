import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AlldataService {

    private apiURL: string = './assets/json/';
    // Fix CORS error 
    // private apiURL : string = 'https://open-api.myhelsinki.fi/v2/';





    // private httpOptions = {
    //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };



    public jsonPaces$ : any = null;

    constructor(
        private http: HttpClient
    ) {}


    getAlldata() {
        let url = this.apiURL + "places/" + this.checkURL() + "language_filter=en";
        
        if ( this.jsonPaces$ == null ) 
        {
            const fetchPromise = fetch(url);
            
            fetchPromise.then(response => {
                this.jsonPaces$ = response
                console.log( this.jsonPaces$ );
            });

        }else{

            return this.jsonPaces$;
        }


        // return this.http.get( url );

        // if( this.jsonPaces == null ){
        //     this.jsonPaces = 
        // }

        // return this.jsonPaces;


        // return json;
    }







    /**
     * IF API HTTP | HTTPs
     * @returns String
     */
    private checkURL(): string {
        return this.apiURL.match(/^http|https/g) ? "?" : "";
    }

}
