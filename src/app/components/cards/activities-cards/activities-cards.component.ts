import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonCars } from '../common-cards';

@Component({
    selector: 'app-activities-cards',
    templateUrl: './activities-cards.component.html',
    styleUrls: ['./activities-cards.component.css']
})
export class ActivitiesCardsComponent extends CommonCars implements OnInit {

    ngOnInit(): void {
        this.langService.getObsData().subscribe((lang: any) => {
            this.currentLanguage = lang;
        })
    }

    /**
     * Call from from tempalate.
     * Save to local storage
     * @param item 
     */
    public setToFavourite(item: any): void { 
        console.log(item)
        this._setToFavourite(item, 'activity'); 
    }

    /**
     * set active for tab by current language
     * @param lang 
     * @returns 
     */
    setActiveClassByLang(lang: any) {
        return (this.currentLanguage.value === lang) ? "active" : "";
    }

    // 
    getEventNameByLang(desc: any, lang: any) { return desc[lang].name; }

    //
    getDescriptionByLang(desc: any, lang: any): string { return desc[lang].description; }

    /**
     *  Masonry
     *  @params reload items 
     */
    private activeClassSetted: boolean = false;
    @Output() masonryReloadLayout = new EventEmitter();
    reloadItems() {
        this.activeClassSetted = true
        this.masonryReloadLayout.emit();
        return this;
    }

    /**
     * Set active class each in a card item
     * @returns 
     */
    layoutCompleteRender(): any {

        if (this.currentLanguage.value != "") { this.activeClassSetted = false; }
        if (this.currentLanguage.value != "" || this.activeClassSetted) return;

        let button = document.querySelectorAll('.masonry-item .card .nav-item:first-child button');
        button.forEach((el) => { el.classList.add('active') });

        let content = document.querySelectorAll('.masonry-item .card .tab-content .tab-pane:first-child');
            content.forEach((el) => { el.classList.add('active') });

        this.reloadItems();

        this.activeClassSetted = false;
        return this;
    }

}


