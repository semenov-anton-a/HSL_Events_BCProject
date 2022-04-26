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

    private readonly category: string = "places";

    public error: string | null = null;

    constructor(
        private apiService: ApiService,
        private langService: LangService,
    ) { }
    
    tags = new Array<string>();


    // Data Items
    ngOnInit(): void {
        
        this.langService.getObsData().subscribe( (lang : any) => {
            
            this.apiService.getAllByCategory( this.category ).subscribe((json: any) => {
                console.log( json )
                
                let tags = new Array();
                
                console.log( Object.values( json.tags ));
                
                if( ! json.error ){ return this.cardsData = json.data.reverse(); }
                
                this.error = "Error : not found";
            });

        });
    }


}

