import { Component, Input, OnInit } from '@angular/core';
import { faHouseChimney, faLink, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

    @Input() public eventDetailData: any;
    @Input() public selectedLang: any;
    public faHouseChimney = faHouseChimney;
    public faLink = faLink;
    public faClock = faClock;
    constructor() {

    }

    ngOnInit(): void { }


    /**
     * 
     * @param id 
     * @returns 
     */
    replaseWordFromID(id: string) {
        // console.log(id)
        let reg = new RegExp(/(helmet|kulke):/, "gm");
        return id.replace(reg, '')
    }

}
