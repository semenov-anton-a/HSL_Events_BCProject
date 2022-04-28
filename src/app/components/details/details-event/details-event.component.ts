import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-details-event',
    templateUrl: './details-event.component.html',
    styleUrls: ['./details-event.component.css']
})
export class DetailsEventComponent implements OnInit {

    @Input() itemData: any;
    
    constructor() { }

    ngOnInit(): void {
    }

}
