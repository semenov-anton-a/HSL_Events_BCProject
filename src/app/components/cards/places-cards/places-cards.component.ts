import { Component, Input, OnInit } from '@angular/core';

import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-places-cards',
  templateUrl: './places-cards.component.html',
  styleUrls: ['./places-cards.component.css']
})
export class PlacesCardsComponent implements OnInit {

    public readonly maxTitleLength:  number = 50;
    public readonly maxDescriptionLength:  number = 200;

    faCoffee = faCoffee;
    faStar = faStar;

    @Input() cardsData: any[] | undefined;

    constructor() { }

    ngOnInit(): void {  
    }
}
