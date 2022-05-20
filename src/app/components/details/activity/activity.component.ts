import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryComponent } from 'ngx-masonry';
import { faHouseChimney, faLink, faSackDollar, faClock, faCalendar, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MonthModalComponent } from './modals/month-modal/month-modal.component';
import { OpeningHoursModalComponent } from './modals/opening-hours-modal/opening-hours-modal.component';
import { MoreInfoModalComponent } from './modals/more-info-modal/more-info-modal.component';
import { LangService } from 'src/app/services/lang.service';
@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

    @Input() public activityDetailData: any;
    @Input() public selectedLang: any;
    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent | any;

    public faSackDollar = faSackDollar;
    public faHouseChimney = faHouseChimney;
    public faLink = faLink;
    public faClock = faClock;
    public faCalendar = faCalendar;
    public faCircleInfo = faCircleInfo;

    constructor(
        private modalService: NgbModal,
        public langService: LangService
    ) { }

    ngOnInit(): void {

    }


    openClockModal() {
        this.openModalWithComponent();
    }
    openMonthModal() {
        this.openMonthModalComponent();
    }
    openContactInfo() {
        this.openMoreInfoModalComponent();
    }


    setDescriptionByLang( data : any ){
        let lng = this.langService.getLanguage();
        
        if( (lng.value) in data ){
            return  data[ lng.value ].description;
        }
        
        return  data[ Object.keys(data)[0] ].description;
    
    }



    openModalWithComponent() {
        const modalRef = this.modalService.open(OpeningHoursModalComponent, {
            scrollable: true,
            // windowClass: 'myCustomModalClass',
            // keyboard: false,
            // backdrop: 'static'
        });
        let detail = this.activityDetailData;
        console.log(this.activityDetailData.open);
        modalRef.componentInstance.fromParent = detail;

    }
    openMonthModalComponent() {
        const modalRef = this.modalService.open(MonthModalComponent, {
            scrollable: true,
            // windowClass: 'myCustomModalClass',
            // keyboard: false,
            // backdrop: 'static'
        });
        let detail = this.activityDetailData;
        console.log(this.activityDetailData.availableMonths);
        modalRef.componentInstance.fromParent1 = detail;
    }
    openMoreInfoModalComponent() {
        const modalRef = this.modalService.open(MoreInfoModalComponent, {
            scrollable: true,
            // windowClass: 'myCustomModalClass',
            // keyboard: false,
            // backdrop: 'static'
        });
        let detail = this.activityDetailData;
        console.log(this.activityDetailData.availableMonths);
        modalRef.componentInstance.fromParent = detail;
    }

}



