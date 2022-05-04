import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tagsActivities'
})
export class tagsActivities implements PipeTransform {

    transform(value: string, ...args: unknown[]): unknown {
        let str = value[0].toUpperCase() + value.slice(1); // Set first character to upper
        return '# '+str.replace(new RegExp(/_/, 'g'), ' ');
    }

}
