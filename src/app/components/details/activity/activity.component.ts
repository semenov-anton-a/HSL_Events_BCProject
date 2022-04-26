import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryComponent } from 'ngx-masonry';
import { faHouseChimney, faLink, faSackDollar, faClock, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MonthModalComponent } from './month-modal/month-modal.component';
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

    constructor(private modalService: NgbModal) { }

    ngOnInit(): void {

    }
    reloadItems() {
        setTimeout(() => {
            this.masonry.reloadItems();
            this.masonry.layout();
        }, 500)
    }

    openClockModal() {
        this.openModalWithComponent();
    }
    openMonthModal() {
        this.openMonthModalComponent();
    }

    openModalWithComponent() {
        const modalRef = this.modalService.open(ModalContentComponent, {
            scrollable: true,
            // windowClass: 'myCustomModalClass',
            // keyboard: false,
            // backdrop: 'static'
        });
        let detail = this.activityDetailData;
        console.log("####" + this.activityDetailData + '#####');
        modalRef.componentInstance.fromParent = detail;
        modalRef.result.then((result) => {
            console.log(result);
        }, (reason) => {
        });
    }
    openMonthModalComponent() {
        const modalRef = this.modalService.open(MonthModalComponent, {
            scrollable: true,
            // windowClass: 'myCustomModalClass',
            // keyboard: false,
            // backdrop: 'static'
        });
        let detail = this.activityDetailData;
        console.log("####" + this.activityDetailData + '#####');
        modalRef.componentInstance.fromParent1 = detail;
        modalRef.result.then((result) => {
            console.log(result);
        }, (reason) => {
        });
    }

    /**
     * TODO: return description by lang property has { description { fi : ... , en: ....}} 
     * @param description  
     */
    getDescriptionByLang(description: any) {
        // return description.fi
        console.log( "DESC", description);
    }

}
// ¤¤¤¤  opening hours modal component ¤¤¤¤¤
@Component({
    selector: 'model-content',
    template: `
  <table class="table">
  <thead>
    <tr style="background-color: #1F3045;color:white">
      <th scope="col">Day</th>
      <th scope="col">Open</th>
      <th scope="col">Close</th>
      <button type="button" class="" data-dismiss="modal" (click)="closeModal('close')" style="color: white;text-decoration:none; margin-right:-0.85rem"class="btn btn-link" >X</button>
    </tr>
  </thead>
  <tbody style="color
  white">
    <tr>
      <th scope="row">Monday</th>
      <td *ngIf="fromParent.open.monday.from ; else cross">{{fromParent.open.monday.from | slice:0:5}}</td>
      <ng-template #cross><td>X</td>
      </ng-template>
      <td *ngIf="fromParent.open.monday.to ; else cross">{{fromParent.open.monday.to | slice:0:5}}</td>
      <ng-template #cross><td>X</td>
      </ng-template>
    </tr>
     <tr>
      <th scope="row">Tuesday</th>
      <td *ngIf="fromParent.open.tuesday.from ; else cross">{{fromParent.open.tuesday.from | slice:0:5}}</td>
      <ng-template #cross><td>X</td>
      </ng-template>
      <td *ngIf="fromParent.open.tuesday.to ; else cross">{{fromParent.open.tuesday.to | slice:0:5}}</td>
      <ng-template #cross><td>X</td>
      </ng-template>
    </tr>
     <tr>
      <th scope="row">Wednesday</th>
      <td *ngIf="fromParent.open.wednesday.from ; else cross">{{fromParent.open.wednesday.from | slice:0:5}}</td>
      <ng-template #cross><td>X</td>
      </ng-template>
      <td *ngIf="fromParent.open.wednesday.to ; else cross">{{fromParent.open.wednesday.to | slice:0:5}}</td>
      <ng-template #cross><td>X</td>
      </ng-template>
    </tr>
     <tr>
      <th scope="row">Thursday</th>
      <td *ngIf="fromParent.open.thursday.from ; else cross">{{fromParent.open.thursday.from | slice:0:5}}</td>
      <ng-template #cross><td>X</td>
      </ng-template>
      <td *ngIf="fromParent.open.thursday.to ; else cross">{{fromParent.open.thursday.to | slice:0:5}}</td>
      <ng-template #cross><td>X</td>
      </ng-template>
    </tr>
     <tr>
      <th scope="row">Friday</th>
      <td *ngIf="fromParent.open.friday.from ; else cross">{{fromParent.open.friday.from | slice:0:5}}</td>
      <ng-template #cross><td>X</td>
      </ng-template>
      <td *ngIf="fromParent.open.friday.to ; else cross">{{fromParent.open.friday.to | slice:0:5}}</td>
      <ng-template #cross><td>X</td>
      </ng-template>
    </tr>
     <tr>
      <th scope="row">Saturday</th>
      <td *ngIf="fromParent.open.saturday.from ; else cross">{{fromParent.open.saturday.from | slice:0:5}}</td>
      <ng-template #cross><td>X</td>
      </ng-template>
      <td *ngIf="fromParent.open.saturday.to ; else cross">{{fromParent.open.saturday.to | slice:0:5}}</td>
      <ng-template #cross><td>X</td>
      </ng-template>
    </tr>
    <tr>
      <th scope="row">Sunday</th>
      <td *ngIf="fromParent.open.sunday.from ; else cross">{{fromParent.open.sunday.from | slice:0:5}}</td>
      <ng-template #cross><td>X</td>
      </ng-template>
      <td *ngIf="fromParent.open.sunday.to ; else cross">{{fromParent.open.sunday.to | slice:0:5}}</td>
      <ng-template #cross><td>X</td>
      </ng-template>
    </tr>
  </tbody>
</table>
  
  `

})

export class ModalContentComponent implements OnInit {

    @Input() fromParent: any;

    constructor(public activeModal: NgbActiveModal) { }

    ngOnInit(): void {
        console.log(this.fromParent);
    }
    closeModal(sendData: any) {
        this.activeModal.close(sendData);
    }
}


