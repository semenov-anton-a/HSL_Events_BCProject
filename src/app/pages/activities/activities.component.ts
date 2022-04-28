import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { LangService } from 'src/app/services/lang.service';

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

    // Limit items load of this category
    private readonly limitLoad = 6;

    @Output() cardsData: any;
    

    allowLoadMoreData = true;

    tags = new Array();
    
    private readonly category: string = "activities";

    public error: string | null = null;

    currentTag ?: string;

    constructor(
        private router: Router,
        private apiService: ApiService,
        private langService: LangService,
    ) {
        let currentTag = this.router.url.split("/").slice(1);
        if( currentTag.length > 1 ){ this.currentTag = currentTag[1] }
    }

    /**
     *  ngOnInit
     */
    ngOnInit(): void { 
        this.langService.getObsData().subscribe( (lang : any) => {
            this.getData(); 
        })
    }


    /**
     * 
     * @param callback 
     */
    async getData( callback ?: Function ): Promise<any> {
        await this.apiService.setLimitUriParam( this.limitLoad )
            .getAllByCategory( this.category, this.currentTag )
            .subscribe( ( json: any ) =>  {
                
                if( callback ){
                    return callback( this.dataJsonHendler(json) );
                    // return callback( json.rows );
                }
                
                return this.cardsData = this.dataJsonHendler(json);
            }
        );
    }
    

    /**
     *  Append DATA
     */    
    addItem(){
        this.apiService.loadMoreItems();        
        this.getData( ( json : any ) => {
            if( json.length == 0 ){
                this.apiService.currentItemShift - this.apiService.itemShift;
                this.allowLoadMoreData = false;
            }

            for( var i = 0; i < json.length; i++){ this.cardsData.push( json[i] ) }
        })
        //     for( let i in json.rows ){
        //         this.cardsData.push( json.rows[i] )
        //     }
        //     // this.cardsData.push( json.rows.values() )
    }


    /**
     *  Set index for tag 
     */
    selectedIndex : number = -1;
    setIndex(index: number) {  this.selectedIndex = index; }
    setTag( tag:string ) : any {
        window.scrollTo( 0, 0 );
        this._reloadComponent()._reloadApiVariables();
        this.getData();
    }
    
    setActive( tag : string ){
        return (this.currentTag == tag)
    }

    /**
     * 
     * @param json 
     * @returns 
     */
    private dataJsonHendler( json : any ) {
        if( ! json.error ){
            this._tagsAppendHendler(json);
            return json.rows; 
        }
        this.error = "Error : not found";
    }


    /**
     *  This append Tags
     *  @param tagsData 
     */
    private _tagsAppendHendler( tagsData : any ){
        let tags = new Array();

        tagsData.rows.forEach( (tag: any) => { tags.push(...tag.tags) })

        if( this.tags.length != 0 ){
            let arr = new Array();
            this.tags = arr.concat( this.tags, tags );
        }else{
            this.tags = tags;
        }

        this.tags = this.tags.filter((item, pos) => { return this.tags.indexOf(item) == pos; });
        this.tags = this.tags.sort( function (a: any, b: any) {  return a.localeCompare(b);  } )
    }



    /**  */
    resetComponentOfTags(){
        this._reloadComponent();
        this._reloadApiVariables();
    }
    private _reloadComponent(){ this.allowLoadMoreData = true; return this; }
    private _reloadApiVariables(){ this.apiService.currentItemShift = 0 }
    /**  */
}
