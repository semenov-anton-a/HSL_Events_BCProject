import { 
    ChangeDetectionStrategy,
    Component, OnInit } from '@angular/core';

import { LangService } from 'src/app/services/lang.service';

@Component({
    selector: 'app-langs',
    templateUrl: './langs.component.html',
    styleUrls: ['./langs.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LangsComponent implements OnInit {
    
    public langRadioData : any;
    
    public clang : any ; 

    constructor(
        private langService: LangService
    ){
        this.langRadioData   = langService.getLanguagesCollection();
        this.clang = langService.getLanguage();
    }

    ngOnInit(): void {}
    onItemChange( langIndex: number) {
        this.clang = this.langService.getLanguageByIndex( langIndex );
        this.langService.setLanguageByIndex( langIndex );
    }

}
