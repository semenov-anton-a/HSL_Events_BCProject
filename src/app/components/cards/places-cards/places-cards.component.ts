import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
import { LangService } from 'src/app/services/lang.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { CommonCars } from '../common-cards';

@Component({
    selector: 'app-places-cards',
    templateUrl: './places-cards.component.html',
    styleUrls: ['./places-cards.component.css']
})
export class PlacesCardsComponent extends CommonCars implements OnInit {



    /**
     * Save to favorite
     * @param cardItem 
     */
    setToFavourite(cardItem: {}) { 
        this._setToFavourite( cardItem, 'place' ); 
    }


    ngOnInit(): void { }


    reloadItems() { 
        // setTimeout(() => {
        //     this.masonry.reloadItems();
        //     this.masonry.layout();
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


  

}
