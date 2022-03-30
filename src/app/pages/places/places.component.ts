import { Component, OnInit, Output, Input, ChangeDetectionStrategy } from '@angular/core';
import { faTurkishLiraSign } from '@fortawesome/free-solid-svg-icons';
import { LangService } from 'src/app/services/lang.service';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
    styleUrls: ['./places.component.css'],
})
export class PlacesComponent implements OnInit {

    // 
    @Output() cardsData: any;

    // lang = this.langService.getLanguage();
    // @Input() public currentLanguage : any = this.langService.getLanguage();

    constructor(
        private apiService: ApiService,
        private langService: LangService,
    ) { }



    // private _currentLanguage : any = undefined;
    // get currentLanguage () : any {
    //     // return this.langService.getLanguage();
    //     // if( this.lng === undefined ){
    //     //     console.log("LNG is undefined")
    //     //     return false;
    //     // }
    //     // // console.log( this.langService.currentLanguage.value, "COUNT " + this.c++ )
    //     // console.log( this.langService.getLanguage(), "COUNT " + this.c++ )
    //     // return this.langService.getLanguage();
    //     // if( this._currentLanguage === undefined ){
    //     //     return this._currentLanguage = this.langService.getLanguage();
    //     // }
    //     // return this._currentLanguage;
    // }

    // Data Items
    ngOnInit(): void {

        this.langService.getObsData()
            .subscribe( data => { console.log( "LANGUAGE ->  ",data ) } )

        // console.log( this.currentLanguage )
        // this.lang.subscribe( (data: any) => { console.log(data) })
        // console.log();
        // this.langService.currentLanguage$.subscribe((lang:any) => { console.log(lang); }); 

        this.apiService.getPlaces().subscribe((places: any) => {
            console.log("GET DATA")
            this.cardsData = places.data.reverse();
        });
    }

}

