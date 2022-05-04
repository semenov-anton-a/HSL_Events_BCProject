import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import {
    faCoffee,
    faStar,
    faEarthAmerica,
    faPlus,
    faBan
} from '@fortawesome/free-solid-svg-icons';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import { LangService } from 'src/app/services/lang.service';
// import { NgxMasonryComponent } from 'ngx-masonry/lib/ngx-masonry.component';



@Component({
    selector: 'app-activities-cards',
    templateUrl: './activities-cards.component.html',
    styleUrls: ['./activities-cards.component.css']
})
export class ActivitiesCardsComponent implements OnInit {

    public readonly maxTitleLength:  number = 50;
    public readonly maxDescriptionLength:  number = 200;

    faCoffee = faCoffee;
    faStar = faStar;
    faEarthAmerica = faEarthAmerica;
    faPlus = faPlus;
    faBan = faBan;

    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent | any;

    @Input() cardsData: any[] | undefined;

    @Input() allowLoadMoreData : boolean = true;

    private currentLanguage = this.langService.getLanguage();

    constructor(private langService: LangService) { }


    ngOnInit(): void {
        this.langService.getObsData().subscribe((lang: any) => {
            this.currentLanguage = lang;
        })
    }


    /**
     *  Masonry
     *  @params reload items 
     */
    reloadItems() {
        this.activeClassSetted = true
        setTimeout(() => {
            this.masonry.reloadItems();
            this.masonry.layout();

        }, 500)

        return this;
    }

    /**
     * Object key convert to string && toUpperCase
     * @param value 
     * @returns 
     */
    keyAsString(value: any) { return value.toUpperCase(); }

    /**
     * set active for tab by current language
     * @param lang 
     * @returns 
     */
    setActiveClassByLang(lang: any) {
        let langStr = lang.toString();
        return (this.currentLanguage.value === lang) ? "active" : "";
    }


    // 
    getEventNameByLang(desc: any, lang: any) { return desc[lang].name; }

    //
    getDescriptionByLang(desc: any, lang: any): string { return desc[lang].description; }

    /**
     *  Load mode data
     */
    private _uploadItemClick = false;
    @Output() addItemEmitter = new EventEmitter();
    async addItem() {
        this._uploadItemClick = true;
        await this.addItemEmitter.emit();
        this.layoutCompleteRender();
    }


    private activeClassSetted: boolean = false;
    layoutCompleteRender(): any {

        if (this.currentLanguage.value != "") { this.activeClassSetted = false; }
        if (this.currentLanguage.value != "" || this.activeClassSetted) return;
        
        let button = document.querySelectorAll('.masonry-item .card .nav-item:first-child button');
        button.forEach((el) => { el.classList.add('active') })

        let content = document.querySelectorAll('.masonry-item .card .tab-content .tab-pane:first-child');
        content.forEach((el) => { el.classList.add('active') })

        this.reloadItems()
        this.activeClassSetted = false;
        return this;
    }


    setAddressFormat(data: any) { return data.locality + ", " + data.street_address; }


    doOtherStuff(e: any) {
        // console.log("other")
    }

    objectKeys(obj: any) {
        return Object.values(obj.tags);
    }

    getTags(obj: any) {
        return Object.values(obj.tags);
        console.log();
        return ""
    }


    console(obj: any) {
        console.log(obj);
    }


}


