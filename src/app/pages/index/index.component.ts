import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

    constructor(
        public apiService : ApiService
    ) { }

    // myData : any;

    ngOnInit(): void {
        // this.allData.getAlldata().subscribe( (data:any) => { 
        //     this.myData = data;
        //     // console.log(data) 
        // })
    }
}
