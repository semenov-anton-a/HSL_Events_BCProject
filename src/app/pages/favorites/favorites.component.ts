import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

    constructor() { }

    private readonly localStorageKeyName = 'favorites';

    private fArray : any = new Array();


    ngOnInit(): void {

        let act = {"activity" : "actID"};
        let act2 = {"activity" : "actID2"};
        
        
        let evt = {"event" : "evtID"};
        let evt2 = {"event" : "evtID2"};
        


        this.fArray.push( act )
        this.fArray.push( act2 )
        this.fArray.push( evt )
        this.fArray.push( evt2 )

        localStorage.setItem( this.localStorageKeyName , JSON.stringify(this.fArray) );


        console.log("HELLO")



        var storedNames : any = localStorage.getItem( this.localStorageKeyName );
        let json = JSON.parse( storedNames );
        
        console.log( json )
    }

}
