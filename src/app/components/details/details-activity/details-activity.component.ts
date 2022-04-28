import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-details-activity',
    templateUrl: './details-activity.component.html',
    styleUrls: ['./details-activity.component.css']
})
export class DetailsActivityComponent implements OnInit {


    @Input() itemData :any ;

    constructor() { }

    ngOnInit(): void {
    }

}
