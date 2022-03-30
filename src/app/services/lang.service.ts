import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LangService {

    private readonly LOCAL_STORAGE_KEYNAME: string = 'langindex';
    private readonly DEFAULT_LANGUAGE_INDEX: number = 0;

    private readonly langsData: { value: string, name: string }[] =
        [{ value: 'fi', name: "Fin" },
        { value: 'en', name: "Eng" }
            // { value: 'sv', name: "Sv" },
        ]; // langData

    constructor() { }


    /*******************************
     *  BehaviorSubject
     *  
     */
    private obsData = new BehaviorSubject<{}>(this.getLanguage());
    private setObsData(data: { value?: string; name?: string; }) {
        this.obsData.next({ value: data.value, name: data.name });
    }
    public getObsData(): Observable<{}> { return this.obsData; }
    /*
     * 
     *******************************/

    // Current Language
    private currentLanguage: {} = {};

    private getDefaultLangIndex(): {} { return this.langsData[this.DEFAULT_LANGUAGE_INDEX]; }

    getLanguagesCollection(): {} { return this.langsData; }

    getLanguageByIndex(index: number): {} { return this.langsData[index]; }

    setLanguageByIndex(index: number): {} {
        localStorage.setItem(this.LOCAL_STORAGE_KEYNAME, index.toString());

        this.currentLanguage = this.getLanguageByIndex(index);
        this.setObsData(this.currentLanguage);

        return this.currentLanguage
    }

    getLanguage(): {} {
        let int = localStorage.getItem(this.LOCAL_STORAGE_KEYNAME);

        let lang;
        if (int == null) {
            this.setLanguageByIndex(this.DEFAULT_LANGUAGE_INDEX);
            lang = this.getDefaultLangIndex()
        } else {
            lang = this.getLanguageByIndex(parseInt(int));
        }
        
        return this.currentLanguage = lang;
    }
}
