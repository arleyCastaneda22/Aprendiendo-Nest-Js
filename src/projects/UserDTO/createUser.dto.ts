import { IsIn, IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator'
export class createUserDto{

    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    @Max(100)
    age: number

    @IsString()
    @IsNotEmpty()
    name: string 
}