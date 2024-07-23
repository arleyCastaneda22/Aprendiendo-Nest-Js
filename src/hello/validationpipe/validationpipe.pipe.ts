import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationpipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    const {name, age } = value
    const ageNumber = parseInt(age,10)

    if(isNaN(ageNumber)){
       throw new HttpException('age no es number ', HttpStatus.BAD_REQUEST)
    }
    return value;


  }
}
