import { Component, OnInit, Output } from '@angular/core';


import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
    styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

    constructor(private apiService: ApiService) { }

    @Output() cardsData: any;

    ngOnInit(): void {

        this.apiService.getPlaces().subscribe( (places:any) => {
            
            console.log( places.data.reverse() );
            this.cardsData = places.data;
            
        });

    }

}
