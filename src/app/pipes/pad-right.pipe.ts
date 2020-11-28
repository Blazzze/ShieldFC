import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padRight'
})
export class PadRightPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    if (value < 10) {
      value = '0' + value;
    }
    return null;
  }

}
