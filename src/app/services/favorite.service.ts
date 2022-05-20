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

    /**
     * 
     * @returns 
     */
    getItems(){ return this.itemsArray = this.parseLocalStorage(); }



    removeFromFavourite( cardId : string ){
        let inx = this.findItemID( cardId );
        
        if( inx != -1 ){ 
            // delete this.itemsArray[inx];
            this.itemsArray.splice(inx, 1);
            this.reGenerateFavouriteLocalStorage();
        }
    }
    
    /** *****************
     * 
     *  @PRIVATE_METHODS
     * 
     ********************/


    /**
     *  Re configure all items in a local storage
     */
    private reGenerateFavouriteLocalStorage() {
        localStorage.setItem( this.localStorageKeyName , JSON.stringify(this.itemsArray) );
    }


    /**
     * Check item exist in a local storage
     * @param cardId 
     * @return Boolean
     */
    private canISaveItem( cardId: string  ) : boolean {
        let json = this.parseLocalStorage();
        
        if( json ){
            if( json.length == this.maxSaveItems ) { return false; } 

            for (var i = 0; i < json.length; i++)  {
                if( json[i].id == cardId ){  return false;  }
            }
        }

        return true;
    }

    /**
     * Parse localStorage
     * @returns 
     */
    private parseLocalStorage(){
        let storedItems : any = localStorage.getItem( this.localStorageKeyName );
        return ( storedItems ) ? JSON.parse( storedItems ) : null;        
    }

    /**
     * Remove items
     * @param id 
     * @returns 
     */
    private findItemID( id: string ) : number { 
        
        let json = this.parseLocalStorage();
        console.log(json)
        if( json ){
            for (var i = 0; i < json.length; i++)  {
                if( json[i].id == id ){
                    
                    return i;  
                }
            }
        }
        return -1;
    }



    /**
     *  Check items saved items
     */
    // private checkItems() { }



}
