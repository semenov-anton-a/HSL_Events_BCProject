import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-testcomponent',
    templateUrl: './testcomponent.component.html',
    styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {

   

    ngOnInit(): void {
    }


    getPlaces(){
        let url = "https://open-api.myhelsinki.fi/v2/places/?language_filter=fi";


        fetch( url )
            .then( (response) => response.json() )
            .then( data => console.log( data));



        console.log(" OK ")
    }

    getSwagger() {
        
        let url = "http://open-api.myhelsinki.fi/swagger.json";

        fetch( url )
            .then( (response) => response.json() )
            .then( data => console.log( data));

        console.log("OK");
    }

}
