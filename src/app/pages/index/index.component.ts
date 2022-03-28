import { Component, OnInit } from '@angular/core';
import { AlldataService } from 'src/app/services/alldata.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

    data = [];

    constructor( private allData : AlldataService ) { }

    ngOnInit(): void {

        this.allData.getAlldata().subscribe( (res : any) => {} );

    }

}
