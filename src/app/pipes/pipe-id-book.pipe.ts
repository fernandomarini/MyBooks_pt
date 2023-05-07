import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeIdBook'
})
export class PipeIdBookPipe implements PipeTransform {

  transform( value: string ): string {
    return 'Ref-' + value;
  }

}
