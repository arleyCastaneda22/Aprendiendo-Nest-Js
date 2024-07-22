import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {

    private users=[
        {
            id:2,
            nombre:"Jhon",
            dinero:1000
        }
    ]

    getUser(){
        return this.users;
    }
}
