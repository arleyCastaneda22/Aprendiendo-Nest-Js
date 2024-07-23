import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query } from '@nestjs/common';
import { ValidationpipePipe } from './validationpipe/validationpipe.pipe';


@Controller('hello')
export class HelloController {


    @Get()
    @HttpCode(200)
    hello(){
        return 'Hla bro'
    }
    
    @Get('/:num')
    getNumber(@Param('num', ParseIntPipe) num:number){
        console.log(typeof(num))
        return num + 10
    }


    @Get('active/:status')
    isStatus(@Param('status', ParseBoolPipe) status:Boolean){
        console.log(typeof(status))
        return status
    }


    @Get('ruta')
    helloUser(@Query() query:{name: string, age:number}){
        return 'Hola ' + query.name + ' edad' + query.age 
    }
}
