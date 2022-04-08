import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { faCoffee, faStar, faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
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
    public readonly maxDescriptionLength:  number = 500;

    faCoffee = faCoffee;
    faStar = faStar;
    faEarthAmerica = faEarthAmerica;

    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent | any ;

    @Input() cardsData: any[] | undefined;



    private currentLanguage = this.langService.getLanguage();
    constructor(private langService: LangService) {
        // console.log( this.currentLanguage )
        // console.log( this.langService.getLanguage() )
    }


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
    /**
     * Object key convert to string && toUpperCase
     * @param value 
     * @returns 
     */
    keyAsString( value : any ){ return value.toUpperCase(); }

    setActiveClassByLang( lang : any ){
        let langStr = lang.toString();
        return ( this.currentLanguage.value === lang ) ? "active": "";
    }

     private i : number = 0;
    ngOnInit(): void {  
        this.langService.getObsData().subscribe( (lang : any) => {
            this.currentLanguage = lang;
        })

    //    setInterval( () => { 
    //         this.masonry.reloadItems();
    //         this.masonry.layout();  
    //     }, 500)
    }

    getEventNameByLang( desc : any, lang : any ){ 
        return desc[lang].name;
    }

    getDescriptionByLang( desc : any, lang : any ) : string{ 
        return desc[lang].description; 
    }
    // getDescriptionByCurrentLang( data: any ){
    //     console.log( data );
    // }

}
