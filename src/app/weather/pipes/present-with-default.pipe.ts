import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'presentWithDefault'
})
export class PresentWithDefaultPipe implements PipeTransform {

  transform(value: any, defaultValue: any): any {
    
    return value ? value : defaultValue;
  }

}
