import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-tag-list',
    templateUrl: './tag-list.component.html',
    styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {
    
    @Input() tags: any
    @Input() categoryName !: string
    @Output() loadByTag = new EventEmitter<string>();

    constructor(private apiService: ApiService) { }

    ngOnInit(): void { }
    
    /**
     * Emit
     * @param tag 
     */
    setTag(tag: string) { 
        this.loadByTag.emit( tag )
        this.resetComponentOfTags(); 
    }
    
    /**
     * 
     */
    resetComponentOfTags() { this.apiService.resetStartLimitShifts(); }
}
