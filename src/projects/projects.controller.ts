import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller()
export class ProjectsController {
    constructor(private userservice: ProjectsService){
        this.userservice;
    }

    @Get('/proyecto')

    getUser():any{
        return this.userservice.getUser();
    }

}
