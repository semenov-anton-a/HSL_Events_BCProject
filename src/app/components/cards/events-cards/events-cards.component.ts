import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
import { LangService } from 'src/app/services/lang.service';
@Component({
    selector: 'app-events-cards',
    templateUrl: './events-cards.component.html',
    styleUrls: ['./events-cards.component.css']
})
export class EventsCardsComponent implements OnInit {

    public readonly maxTitleLength: number = 50;
    public readonly maxDescriptionLength: number = 500;

    faCoffee = faCoffee;
    faStar = faStar;

    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent | any;

    @Input() cardsData: any[] | undefined;

    constructor(
        private currentLanguage: LangService
    ) { }




    /**
     * Set card Title by name[ language ]
     * @INFO Becowse item.description.intro was NULL. 
     *      Then I take title from item.name[ language ]  
     * @param item 
     * @returns 
     */
    setTitleByLanguage(item: any) { return item.name[this.currentLanguage.getLanguage().value]; }

    /**
     * 
     * @param id 
     * @returns 
     */
    replaseWordFromID(id: string) { 
        // console.log(id)
        let reg = new RegExp( /(helmet|kulke):/, "gm" );
        return id.replace( reg , '') }

    
    /**
     *  Ser address format 
     *  @param data 
     */
    setAddressFormat( data : any){ return data.locality + ", " + data.street_address; }

    reloadItems() {
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
}
