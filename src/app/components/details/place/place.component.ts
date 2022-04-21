import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { LangService } from 'src/app/services/lang.service';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import {faHouseChimney,faLink} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  private queryApiUrl ? : string;
  public error ? : string;
  public itemCategoryName ? : string; 
  public textShow : boolean = false;
  public selectedLanguage: any;
  public description: any;
  public itemData : any;
  public faHouseChimney = faHouseChimney;
  public faLink = faLink;
  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent | any ;
  constructor(
        private router: Router,
        private langService: LangService,
        private apiService: ApiService) { }

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
       reloadItems(){
        // if( this.masonry !== undefined){
        //     this.masonry.reloadItems();
        //     this.masonry.layout();
        //     // return ;
        // }

        setTimeout(() => { 
            this.masonry.reloadItems();
            this.masonry.layout();  
        }, 500)
    } 
}