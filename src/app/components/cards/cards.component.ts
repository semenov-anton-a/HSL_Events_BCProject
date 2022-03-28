import { Component, Input, OnInit } from '@angular/core';

import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

    faCoffee = faCoffee;
    faStar = faStar;

    @Input() cardsData: any[] | undefined;

    constructor() { }

    ngOnInit(): void {  
    }
}
