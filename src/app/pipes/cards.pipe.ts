import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cards'
})
export class CardsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
