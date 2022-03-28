import { Component, OnInit } from '@angular/core';
import { AlldataService } from 'src/app/services/alldata.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
    
    constructor( private allData : AlldataService ) { }


    ngOnInit(): void {

        // const prom = new Promise( res => {
        //     console.log( this.allData.getAlldata() );
        // } );
        // const res = this.jsonPaces.subscribe( (data: any) => {console.log(data);});
        const res = this.allData.getAlldata();
        
        console.log(res);
        // .subscribe( (data: any) => { console.log(data) });

        // console.log( res.subscribe() );
    }

}
