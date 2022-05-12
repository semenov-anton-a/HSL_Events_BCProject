import { Directive, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { NgxMasonryComponent } from "ngx-masonry";
import { FavoriteService } from "src/app/services/favorite.service";
import { LangService } from "src/app/services/lang.service";

import {
    faCoffee,
    faStar,
    faEarthAmerica,
    faPlus,
    faBan,
    faTrash
} from '@fortawesome/free-solid-svg-icons';

@Directive()
export class CommonCars {

    public readonly maxTitleLength: number = 50;
    public readonly maxDescriptionLength: number = 200;

    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent | any;
    @Input() cardsData: any[] | undefined;
    @Input() allowLoadMoreData: boolean = true;
    @Input() showFavoriteButton: boolean = true;
    @Input() showBottomButtons: boolean = true;

    faCoffee = faCoffee;
    faStar = faStar;
    faEarthAmerica = faEarthAmerica;
    faPlus = faPlus;
    faBan = faBan;
    faTrash = faTrash;


    public currentLanguage = this.langService.getLanguage();


    constructor(
        public langService: LangService,
        public favoriteService: FavoriteService
    ) { }




    /**
    * Save to favorite
    * @param cardItem 
    */
    protected _setToFavourite(cardItem: {}, category: string) {
        this.favoriteService.saveItem(cardItem, category);
    }



    /**
     * Remove from favorites
     * @param desc 
     * @param lang 
     * @returns 
     */
    removeToFavourite( item: any ){
        this.favoriteService.removeFromFavourite( item.id );
    }


    /**
     * Data format
     * @param data 
     * @returns 
     */
    setAddressFormat(data: any) {
        return data.locality + ", " + data.street_address;
    }


    /**
     *  @HELPERs
     */

    /**
     * Object key convert to string && toUpperCase
     * @param value 
     * @returns 
     */
    keyAsString(value: any) { return value.toUpperCase(); }


    objectKeys(obj: any) { return Object.values(obj.tags); }
    getTags(obj: any) { return Object.values(obj.tags); }


}