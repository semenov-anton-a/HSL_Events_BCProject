import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-places-cards',
  templateUrl: './places-cards.component.html',
  styleUrls: ['./places-cards.component.css']
})
export class PlacesCardsComponent implements OnInit {

    public readonly maxTitleLength:  number = 50;
    public readonly maxDescriptionLength:  number = 200;

    faCoffee = faCoffee;
    faStar = faStar;

    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent | any ;

    @Input() cardsData: any[] | undefined;

    constructor() { }

    reloadItems(){
        // if( this.masonry !== undefined){
        //     this.masonry.reloadItems();
        //     this.masonry.layout();
        //     // return ;
        // }

        setTimeout(() => { 
            this.masonry.reloadItems();
            this.masonry.layout();  
        }, 500)
    }   

    ngOnInit(): void {  
    }


     /**
     *  Ser address format 
     *  @param data 
     */
      setAddressFormat( data : any){ return data.locality + ", " + data.street_address; }

}
