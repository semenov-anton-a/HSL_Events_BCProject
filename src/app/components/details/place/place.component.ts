import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import {  NgxMasonryComponent } from 'ngx-masonry';
import {faHouseChimney,faLink} from '@fortawesome/free-solid-svg-icons';
import { LangService } from 'src/app/services/lang.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  @Input() public selectedLang:any;
   public faHouseChimney = faHouseChimney;
   public faLink = faLink;
   @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent | any ;
   @Input() public placeDetailData : any;
   private queryApiUrl ? : string;


  constructor(private        langService:LangService,
  private apiService:ApiService,
  private router: Router,) { }

  ngOnInit(): void {
    this.langService.getObsData().subscribe(() => {
      this.apiService.getOnceItemByUrl(this.routerParse()).subscribe((json: any) =>{
        return this.placeDetailData = json;
      });
    });
  }
      
  private routerParse(): string{
    let routerArr = this.router.url.split("/").slice(1);
    let option = this.apiService.getApiExcludeParamsFromURLReqex( routerArr[0] );
    return this.queryApiUrl = ( option )
            ? this.router.url.replace( option, "" )
            : this.router.url;
  }
     
}