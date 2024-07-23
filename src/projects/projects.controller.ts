import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { createUserDto } from './UserDTO/createUser.dto';

@Controller('/user')
export class ProjectsController {
    constructor(private userservice: ProjectsService) {

    }

    @Get()
    getUser(): any {
        return this.userservice.getUser();
    }

    @Post()
    createUser(@Body() user: createUserDto){
        return this.userservice.createUser(user)

    }
}
