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

    private readonly category: string = "palces";

    constructor(
        private apiService: ApiService,
        private langService: LangService,
    ) { }
    
    // Data Items
    ngOnInit(): void {
        
        this.langService.getObsData().subscribe( (lang : any) => {
            
            this.apiService.getAllPlaces().subscribe((places: any) => {
                this.cardsData = places.data.reverse();
            });

        });
        
        // this.apiService.getAllPlaces().subscribe((places: any) => {
        //     this.cardsData = places.data.reverse();
        // });
    }



    // private lng : any;
    // private sbs(){
        
    //     // console.log( lang );
    //     return this.lng;
    // }

}

