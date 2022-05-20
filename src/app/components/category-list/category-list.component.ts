import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LangService } from 'src/app/services/lang.service';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

    constructor( 
        private apiService : ApiService,
        public langService: LangService,
    ) { }
    ngOnInit(): void {}
    public resetLoadItemsShift(){ this.apiService.resetStartLimitShifts(); }
}
