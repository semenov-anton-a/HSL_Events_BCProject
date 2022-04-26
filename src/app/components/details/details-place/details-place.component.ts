import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-details-place',
    templateUrl: './details-place.component.html',
    styleUrls: ['./details-place.component.css']
})
export class DetailsPlaceComponent implements OnInit {

    @Input() itemData :any ;

    constructor() { }

    ngOnInit(): void {
    }

}
