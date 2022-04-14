import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

    @Output() cardsData: any;
    
    private readonly category: string = "events";

    public error: string | null = null;

    constructor(
        private apiService:  ApiService,
        private langService: LangService,
    ) { }

    ngOnInit(): void {

        this.langService.getObsData().subscribe( (lang : any) => {
            
            this.apiService.getAllByCategory( this.category ).subscribe((json: any) => {
                if( ! json.error ){
                    console.log(json)
                    return this.cardsData = json.data.reverse(); 
                }
                this.error = "Error : not found";
            });


        });
    }

}
