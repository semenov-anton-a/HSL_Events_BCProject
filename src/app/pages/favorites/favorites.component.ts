import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

    constructor(
        private favoriteService: FavoriteService
    ) { }

    
    public error: string | null = null;


    cardItems: any;


    ngOnInit() : void {
        this.cardItems = this.favoriteService.getItems();
        console.log( this.cardItems );
    }

    
    getItm(itm:any){ return [itm] }




    /******************************************************************** */
    /***
     *  TESTs
     */
    private testSaveItems(){
        // let act = {"activity" : "actID"};
        // let act2 = {"activity" : "actID2"};
        
        // let evt = {"event" : "evtID"};
        // let evt2 = {"event" : "evtID2"};
        
        // this.fArray.push( act )
        // this.fArray.push( act2 )
        // this.fArray.push( evt )
        // this.fArray.push( evt2 )
        // localStorage.setItem( this.localStorageKeyName , JSON.stringify(this.fArray) );
        // console.log("HELLO")
        // var storedNames : any = localStorage.getItem( this.localStorageKeyName );
        // let json = JSON.parse( storedNames );
        // console.log( json )
    }

}
