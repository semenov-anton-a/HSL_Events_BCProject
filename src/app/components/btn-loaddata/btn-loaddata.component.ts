import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    faCoffee,
    faStar,
    faEarthAmerica,
    faPlus,
    faBan
} from '@fortawesome/free-solid-svg-icons';
import { LangService } from 'src/app/services/lang.service';

@Component({
    selector: 'app-btn-loaddata',
    templateUrl: './btn-loaddata.component.html',
    styleUrls: ['./btn-loaddata.component.css']
})
export class BtnLoaddataComponent implements OnInit {

    faCoffee = faCoffee;
    faStar = faStar;
    faEarthAmerica = faEarthAmerica;
    faPlus = faPlus;
    faBan = faBan;

    @Input() allowLoadMoreData : boolean = true;
    @Output() loadModeItems = new EventEmitter();

    constructor(
        public langService: LangService
    ) { }
    ngOnInit(): void {}

}
