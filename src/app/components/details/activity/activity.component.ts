import { Component,Input, OnInit, ViewChild } from '@angular/core';
import {  NgxMasonryComponent } from 'ngx-masonry';
import {faHouseChimney,faLink,faSackDollar,faClock,faCalendar} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MonthModalComponent } from './modals/month-modal/month-modal.component';
import { OpeningHoursModalComponent } from './modals/opening-hours-modal/opening-hours-modal.component';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  @Input() public activityDetailData: any;
  @Input() public selectedLang:any;
  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent | any ;

  public faSackDollar = faSackDollar;
  public faHouseChimney = faHouseChimney;
  public faLink = faLink;
  public faClock = faClock;
  public faCalendar = faCalendar;

  constructor( private modalService: NgbModal) { }

  ngOnInit(): void {
    
  }
 
  
  openClockModal(){
   this.openModalWithComponent();
  }
  openMonthModal(){
    this.openMonthModalComponent();
  }

  openModalWithComponent() {
    const modalRef = this.modalService.open(OpeningHoursModalComponent,{
      scrollable: true,
        // windowClass: 'myCustomModalClass',
        // keyboard: false,
        // backdrop: 'static'
    });
    let detail = this.activityDetailData;
    console.log( this.activityDetailData.open);
    modalRef.componentInstance.fromParent = detail;
    
  }
  openMonthModalComponent(){
    const modalRef = this.modalService.open(MonthModalComponent,{
      scrollable: true,
        // windowClass: 'myCustomModalClass',
        // keyboard: false,
        // backdrop: 'static'
    });
    let detail = this.activityDetailData;
    console.log(this.activityDetailData.availableMonths);
    modalRef.componentInstance.fromParent1 = detail;
  }

}



