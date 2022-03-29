import { Component, OnInit, Output, Input } from '@angular/core';
import { faTurkishLiraSign } from '@fortawesome/free-solid-svg-icons';
import { LangService } from 'src/app/services/lang.service';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
    styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

    // 
    @Output() cardsData: any;
    
    // lang = this.langService.getLanguage();
    @Input() currentLanguage = this.langService.currentLanguage;

    constructor(
        private apiService  : ApiService,
        private langService : LangService,
    ) {}


    // Data Items
    ngOnInit(): void {

        console.log( this.currentLanguage )
        // this.lang.subscribe( (data: any) => { console.log(data) })
        // console.log();
        // this.langService.currentLanguage$.subscribe((lang:any) => { console.log(lang); }); 

        this.apiService.getPlaces().subscribe( (places:any) => { 
            console.log("GET DATA")
            this.cardsData = places.data.reverse();
        });
    }

}

