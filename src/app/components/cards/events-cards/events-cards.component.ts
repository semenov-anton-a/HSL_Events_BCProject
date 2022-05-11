import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
import { LangService } from 'src/app/services/lang.service';
import { FavoriteService } from 'src/app/services/favorite.service';
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

    @Input() allowLoadMoreData: boolean = true;

    @Input() showFavoriteButton: boolean = true;
    @Input() showBottomButtons: boolean = true;

    constructor(
        private currentLanguage: LangService,
        private favoriteService: FavoriteService
    ) { }
    
    
    ngOnInit(): void {}

    /**
         * Save to favorite
         * @param cardItem 
         */
     setToFavourite(cardItem: {}) { this.favoriteService.saveItem( cardItem, 'event' ); }



    reloadItems() {
        setTimeout(() => {
            this.masonry.reloadItems();
            this.masonry.layout();
        }, 500)
    }

        /**
     *  Load mode data
     */
    private _uploadItemClick = false;
    @Output() addItemEmitter = new EventEmitter();
    async addItem() {
        this._uploadItemClick = true;
        await this.addItemEmitter.emit();
        await this.reloadItems;

        console.log(" EVENT CARD ")

    }


    /**
     * Set card Title by name[ language ]
     * @INFO Becowse item.description.intro was NULL. 
     *      Then I take title from item.name[ language ]  
     * @param item 
     * @returns 
     */
    setTitleByLanguage(item: any) { 
        return item.name[this.currentLanguage.getLanguage().value]; 
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    replaseWordFromID(id: string) {
        // console.log(id)
        let reg = new RegExp(/(helmet|kulke):/, "gm");
        return id.replace(reg, '')
    }


    /**
     *  Ser address format 
     *  @param data 
     */
    setAddressFormat(data: any) { return data.locality + ", " + data.street_address; }

    

}
