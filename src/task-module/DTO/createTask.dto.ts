import {IsBoolean,IsString,MinLength} from 'class-validator'

export class createTask {
    @IsString()
    title: string

    @IsBoolean()
    status: boolean
}