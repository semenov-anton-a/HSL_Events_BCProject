import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
import { LangService } from 'src/app/services/lang.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { CommonCars } from '../common-cards';
@Component({
    selector: 'app-events-cards',
    templateUrl: './events-cards.component.html',
    styleUrls: ['./events-cards.component.css']
})
export class EventsCardsComponent extends CommonCars implements OnInit {

    
    ngOnInit(): void {}

    /**
         * Save to favorite
         * @param cardItem 
         */
     setToFavourite(cardItem: {}) { this._setToFavourite( cardItem, 'event' ); }


    reloadItems() {
        // let masonry = this.masonry;
        // setTimeout(( masonry : any ) => {
        //     masonry.reloadItems();
        //     masonry.layout();
        // }, 500)
    }
    

        /**
     *  Load mode data
     */
    private _uploadItemClick = false;
    @Output() addItemEmitter = new EventEmitter();
    async addItem() {
        this._uploadItemClick = true;
        await this.addItemEmitter.emit();
        // await this.reloadItems();
    }


    /**
     * Set card Title by name[ language ]
     * @INFO Becowse item.description.intro was NULL. 
     *      Then I take title from item.name[ language ]  
     * @param item 
     * @returns 
     */
    setTitleByLanguage(item: any) { 
        return item.name[ this.langService.getLanguage().value ]; 
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    replaseWordFromID(id: string) {
        // console.log(id)
        let reg = new RegExp(/(helmet|kulke|ham):/, "gm");
        return id.replace(reg, '')
    }

}
