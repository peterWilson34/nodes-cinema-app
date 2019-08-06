import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {
  // custom pipe to trim a paragraph to a given number of characters.
  transform(value: any, ...args: any[]): any {
    return value.substr(0,args[0]||100)+'...';
  }

}
