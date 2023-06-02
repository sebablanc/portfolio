import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tecnologiesParser'
})
export class TecnologiesParserPipe implements PipeTransform {

  transform(tecnologies: Array<string>): string {
    let stringToReturn = '';
    
    if(tecnologies.length == 1) {
      stringToReturn = tecnologies[0];
    } else if(tecnologies.length > 1){
      stringToReturn = tecnologies.join(', ');

      let lastIndex = stringToReturn.lastIndexOf(', ');
      
      stringToReturn = stringToReturn.substring(0, lastIndex) + ' y ' + stringToReturn.substring(lastIndex+1)
    }
    return stringToReturn;
  }

}
