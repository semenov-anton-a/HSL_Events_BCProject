import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LangService } from 'src/app/services/lang.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

    constructor(
        public apiService : ApiService,
        public langService: LangService
    ) { }

    // myData : any;

    ngOnInit(): void {
        // this.allData.getAlldata().subscribe( (data:any) => { 
        //     this.myData = data;
        //     // console.log(data) 
        // })
    }
}
