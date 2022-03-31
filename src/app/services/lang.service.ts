import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

interface ILangObject{ value: string; name: string; }

@Injectable({
    providedIn: 'root'
})
export class LangService {

    private readonly LOCAL_STORAGE_KEYNAME: string = 'langindex';
    private readonly DEFAULT_LANGUAGE_INDEX: number = 0;

    // typeof LangObj = {value: string, name: string};

    private readonly langsData: ILangObject[] = 
        [{ value: 'fi', name: "Fin" },
        { value: 'en', name: "Eng" }
            // { value: 'sv', name: "Sv" },
        ];

    constructor() { }


    /*******************************
     *  BehaviorSubject
     *  
     */
    private obsData = new BehaviorSubject<ILangObject>( this.getLanguage() );
    private setObsData( data: ILangObject ) {
        this.obsData.next({ value: data.value, name: data.name });
    }
    public getObsData(): Observable<{}> { return this.obsData; }
    /*
     * 
     *******************************/

    // Current Language
    private currentLanguage: ILangObject = { value: "", name: "", };

    private getDefaultLangIndex(): ILangObject { return this.langsData[this.DEFAULT_LANGUAGE_INDEX]; }

    getLanguagesCollection(): ILangObject[] { return this.langsData; }

    getLanguageByIndex(index: number): ILangObject { return this.langsData[index]; }

    setLanguageByIndex(index: number): {} {
        localStorage.setItem(this.LOCAL_STORAGE_KEYNAME, index.toString());

        this.currentLanguage = this.getLanguageByIndex(index);
        this.setObsData(this.currentLanguage);

        return this.currentLanguage
    }

    getLanguage(): ILangObject {
        let int = localStorage.getItem(this.LOCAL_STORAGE_KEYNAME);

        let lang : ILangObject ;

        if (int == null) {
            this.setLanguageByIndex(this.DEFAULT_LANGUAGE_INDEX);
            lang = this.getDefaultLangIndex()
        } else {
            lang = this.getLanguageByIndex(parseInt(int));
        }
        
        return this.currentLanguage = lang;
    }
}
