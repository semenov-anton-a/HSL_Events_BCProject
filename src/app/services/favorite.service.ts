import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {

    private readonly maxSaveItems : number = 10;
    private readonly localStorageKeyName = 'favorites';

    
    public itemsArray: Array<{}> = new Array<{}>();

    constructor() { }


    /**
     * Save item
     * @param cardItem 
     */
    saveItem( cardItem: any, categoryName: string ) {

        if( this.canISaveItem(cardItem.id) )
        {
            cardItem.category = categoryName; 
            this.itemsArray.push( cardItem );
            localStorage.setItem( this.localStorageKeyName , JSON.stringify(this.itemsArray) );
        }
        
        console.log( this.itemsArray )
    }


    getItems(){
        let storedItems : any = localStorage.getItem( this.localStorageKeyName );
        if( storedItems ){
            let itemsArray = JSON.parse( storedItems );
            this.itemsArray = itemsArray;
        }

        return this.itemsArray;
    }



    /** *****************
     * 
     *  @PRIVATE_METHODS
     * 
     ********************/

    /**
     * Check item exist in a local storage
     * @param cardId 
     * @return Boolean
     */
    private canISaveItem( cardId: string  ) : boolean {
        let storedItems : any = localStorage.getItem( this.localStorageKeyName );

        if( storedItems ){            
            let json = JSON.parse( storedItems );
            
            if( json.length == this.maxSaveItems ) { return false; } 

            for (var i = 0; i < json.length; i++)  {
                if( json[i].id == cardId ){  return false;  }
            }
        }
        return true;
    }

    /**
     *  Check items saved items
     */
    // private checkItems() { }



}
