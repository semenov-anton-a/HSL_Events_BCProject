import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
import { LangService } from 'src/app/services/lang.service';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
    selector: 'app-places-cards',
    templateUrl: './places-cards.component.html',
    styleUrls: ['./places-cards.component.css']
})
export class PlacesCardsComponent implements OnInit {

    public readonly maxTitleLength: number = 50;
    public readonly maxDescriptionLength: number = 200;

    faCoffee = faCoffee;
    faStar = faStar;

    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent | any;

    @Input() cardsData: any[] | undefined;

    @Input() allowLoadMoreData: boolean = true;

    @Input() showFavoriteButton: boolean = true;
    @Input() showBottomButtons: boolean = true;
    
    currentLanguage: any;

    constructor(
        private langService: LangService,
        private favoriteService: FavoriteService
    ) { }

    /**
         * Save to favorite
         * @param cardItem 
         */
    setToFavourite(cardItem: {}) { this.favoriteService.saveItem( cardItem, 'place' ); }


    ngOnInit(): void { }


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
    }


    /**
    *  Ser address format 
    *  @param data 
    */
    setAddressFormat(data: any) {
        return data.locality + ", " + data.street_address;
    }

}
