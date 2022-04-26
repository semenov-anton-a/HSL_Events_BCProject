import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-month-modal',
  templateUrl: './month-modal.component.html',
  styleUrls: ['./month-modal.component.css']
})
export class MonthModalComponent implements OnInit {

  @Input()  fromParent1 : any;
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  closeModal(sendData:any) {
    this.activeModal.close(sendData);
  }
}
