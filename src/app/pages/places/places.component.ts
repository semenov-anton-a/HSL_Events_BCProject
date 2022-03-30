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

    @Output() cardsData: any;

    constructor(
        private apiService: ApiService,
        private langService: LangService,
    ) { }

    // Data Items
    ngOnInit(): void {

        // this.langService.getObsData().subscribe( data => { 
        //     console.log(  data  )
        //     // this.lng = data;
        // });

        this.apiService.getPlaces().subscribe((places: any) => {
            this.cardsData = places.data.reverse();
        });
    }



    // private lng : any;
    // private sbs(){
        
    //     // console.log( lang );
    //     return this.lng;
    // }

}

