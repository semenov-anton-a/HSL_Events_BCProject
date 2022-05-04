import { Component, OnInit, Output, Input, ChangeDetectionStrategy } from '@angular/core';
import { faTurkishLiraSign } from '@fortawesome/free-solid-svg-icons';
import { LangService } from 'src/app/services/lang.service';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
    styleUrls: ['./places.component.css'],
})
export class PlacesComponent implements OnInit {

    @Output() cardsData: any;

    private readonly limitLoad = 8;

    private readonly _category: string = "places";
    public get category(): string { return this._category; }

    public error: string | null = null;

    public allowLoadMoreData = true;

    public currentTag?: string;

    constructor(
        private apiService: ApiService,
        private langService: LangService,
    ) { }

    tags = new Array<string>();


    // Data Items
    ngOnInit(): void {
        this.langService.getObsData().subscribe( (lang: any) => { this.getData() });
    }


    /**
     * AJAX Get Items
     * @param callback 
     */
    async getData(callback?: Function): Promise<any> {
        await this.apiService
            .setLimitUriParam(this.limitLoad)
            .getAllByCategory(this.category, this.currentTag)
            .subscribe( (json: any) => {

                console.log(json)
                if (json.data.length == 0) { return this.allowLoadMoreData = false }

                this.dataJsonHendler(json.tags);
                
                if (callback) {
                   return callback( json.data );
                }

                return this.cardsData = json.data;
                
            }
        );

    } // Get Data END

    /**
     *  Append DATA
     */
    addItem() {
        this.apiService.loadMoreItems();
        this.getData( (json: any) => {
            
            if (json.length == 0) {
                this.apiService.currentItemShift - this.apiService.itemShift;
                this.allowLoadMoreData = false;
            }
            for (var i = 0; i < json.length; i++) { 
                this.cardsData.push( json[i] )
            }
            // console.log("FOR ",this.cardsData) 
        });
    }



    /**
     * Load Data
     * @param tag 
     */
    loadByTag(tag: string) {
        this.currentTag = tag;
        this.allowLoadMoreData = true;
        this.getData();
    }

    /**
     * 
     * @param json 
     * @returns 
     */
     private dataJsonHendler(json: any) {
        if (!json.error) {
            this._tagsAppendHendler(json);
            return;
        }
        this.error = "Error : not found";
    }
    
    /**
     *  This append Tags
     *  @param tagsData 
     */
    private _tagsAppendHendler(tagsData: any) {
        let tags = new Array();
            tags = Object.values(tagsData);

        if (this.tags.length != 0) {
            let arr = new Array();
            this.tags = arr.concat(this.tags, tags);
        } else {
            this.tags = tags;
        }

        this.tags = this.tags.filter((item, pos) => { return this.tags.indexOf(item) == pos; });
        this.tags = this.tags.sort(function (a: any, b: any) { return a.localeCompare(b); })
    }


}

