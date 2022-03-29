import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LangService {

    private LOCAL_STORAGE_KEYNAME : string = 'langindex';
    private DEFAULT_LANGUAGE_INDEX : number = 0;
    
    private langsData : any = [
        { value: 'fi', name: "Fin" }, 
        { value: 'sv', name: "Sv" },
        { value: 'en', name: "Eng" }
    ]

    constructor(){}

    @Output() currentLanguage : any;

    private getDefaultLangIndex() : any { return this.langsData[ this.DEFAULT_LANGUAGE_INDEX ]; }

    getLanguagesCollection() : [] { return this.langsData; }
    
    getLanguageByIndex(index : number) : [] { return this.langsData[index]; }
    
    setLanguageByIndex( index : number ) {
        localStorage.setItem( this.LOCAL_STORAGE_KEYNAME, index.toString() );

        return this.currentLanguage = this.getLanguageByIndex( index );
    }
    
    getLanguage() : any {
        let int = localStorage.getItem( this.LOCAL_STORAGE_KEYNAME );
        
        let lang;
        if(int == null){
            this.setLanguageByIndex( this.DEFAULT_LANGUAGE_INDEX );
            lang = this.getDefaultLangIndex()
        }else{
            lang = this.getLanguageByIndex( parseInt( int ) );
        }

        return this.currentLanguage = lang;
    }
}
