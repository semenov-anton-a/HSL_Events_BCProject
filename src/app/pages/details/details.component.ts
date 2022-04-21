import { Component, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { LangService } from 'src/app/services/lang.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    private queryApiUrl ? : string;

    public error ? : string;
    public itemCategoryName ? : string; 
    public textShow : boolean = false;
    public selectedLanguage: any;
    public description: any;

    @Output() public itemData : any;

    constructor(
        private router: Router,
        private langService: LangService,
        private apiService: ApiService
    ) { }




    ngOnInit(): void {
        console.log(  this._routerParse() )
        this.langService.getObsData().subscribe( (lang : any) => {
        this.apiService.getOnceItemByUrl( this._routerParse() ).subscribe( (json :any) => {
            console.log(json)
            if( ! json.error ){
                console.log(this.itemData = json);
                this.selectedLanguage = lang.value;
                console.log(this.selectedLanguage);
                return this.itemData = json; 
                // return this.cardsData = json.rows.reverse(); 
                 
            }
            console.log(this.itemData)
            this.error = "Error : not found";
        });
        });
    }



    private _routerParse() : string {
        let routerArr = this.router.url.split("/").slice(1);        
        this.itemCategoryName = routerArr[0];
        let option = this.apiService.getApiExcludeParamsFromURLReqex( routerArr[0] );
        return this.queryApiUrl = ( option )
            ? this.router.url.replace( option, "" )
            : this.router.url;
    }
     showText(){
        this.textShow = true;
    }
}
