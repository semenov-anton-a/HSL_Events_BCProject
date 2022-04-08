import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LangService } from 'src/app/services/lang.service';

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

    @Output() cardsData: any;
    
    private readonly category: string = "activities";

    public error: string | null = null;

    constructor(
        private apiService: ApiService,
        private langService: LangService,
    ) { }

    ngOnInit(): void {

        this.langService.getObsData().subscribe( (lang : any) => {
            
            this.apiService.getAllByCategory( this.category ).subscribe((json: any) => {
                if( ! json.error ){
                    console.log(json)
                    return this.cardsData = json.rows; 
                    // return this.cardsData = json.rows.reverse(); 
                }
                this.error = "Error : not found";
            });


        });
    }

}
