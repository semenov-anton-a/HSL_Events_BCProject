import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-more-info-modal',
  templateUrl: './more-info-modal.component.html',
  styleUrls: ['./more-info-modal.component.css']
})
export class MoreInfoModalComponent implements OnInit {


  @Input() fromParent: any;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  closeModal(sendData:any) {
    this.activeModal.close(sendData);
  }
}
