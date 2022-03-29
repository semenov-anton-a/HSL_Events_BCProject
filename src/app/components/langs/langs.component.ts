import { ChangeDetectionStrategy,
    Component, OnInit, Output } from '@angular/core';

import { ApiService } from '../../services/api.service';
// import { LangService } from '../../services/lang.service';

@Component({
    selector: 'app-langs',
    templateUrl: './langs.component.html',
    styleUrls: ['./langs.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LangsComponent implements OnInit {

    // public lang: string = 'fi'

    public langRadioData: any = [
        { value: 'fi', name: "Fin" },
        { value: 'sv', name: "Sv" },
        { value: 'en', name: "Eng" }
    ]


    // Current Language then app loaded
    @Output() public currentLanguage: any = this.langRadioData[0];

    constructor() {}

    ngOnInit(): void {
       console.log( this.currentLanguage )

    }

    onItemChange( event: Event ) {
        const target = event.target as HTMLInputElement;
        this.currentLanguage = target.value;
        console.log(" Language Value is : ", target.value );
    }

}
