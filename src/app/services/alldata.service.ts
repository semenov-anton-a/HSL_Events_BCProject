import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

// import { catchError, map, tap } from 'rxjs/operators';
// import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlldataService {

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient
    ) { }


    getAlldata(){

        // console.log( "getAllProducts")

        // let url = "https://open-api.myhelsinki.fi/v2/places/?language_filter=en";
        
        let url = "./assets/json/places.json";

        const json = this.http.get<any[]>( url )
            // .pipe( 
            //     tap( (response) => { console.log(response) } )
            //  );
             
        return json;

        // return this.http.get("");

    }




}
