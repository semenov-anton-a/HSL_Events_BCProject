import { Directive, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { NgxMasonryComponent } from "ngx-masonry";
import { FavoriteService } from "src/app/services/favorite.service";
import { LangService } from "src/app/services/lang.service";

import {
    faCoffee,
    faStar,
    faEarthAmerica,
    faPlus,
    faBan,
    faTrash
} from '@fortawesome/free-solid-svg-icons';

@Directive()
export class CommonCars {}



// TODO ::: Translate ALL MODALS