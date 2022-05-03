import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import {  NgxMasonryComponent } from 'ngx-masonry';
import {faHouseChimney,faLink} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  @Input() public selectedLang:any;
   public faHouseChimney = faHouseChimney;
   public faLink = faLink;
   @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent | any ;
   @Input() public placeDetailData : any;
   


  constructor() { }

  ngOnInit(): void {
 
  }
      
     
}