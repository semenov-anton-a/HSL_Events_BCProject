import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-opening-hours-modal',
  templateUrl: './opening-hours-modal.component.html',
  styleUrls: ['./opening-hours-modal.component.css']
})
export class OpeningHoursModalComponent implements OnInit {
  @Input()  fromParent : any;


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.fromParent.open.monday.from)
  }

   closeModal(sendData:any) {
    this.activeModal.close(sendData);
  }
}
