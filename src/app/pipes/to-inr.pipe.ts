import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toINR'
})
export class ToINRPipe implements PipeTransform {

  transform(value: any, ...args: number[]): any {
    const [rates] = args;
    return value * rates;
  }

}
