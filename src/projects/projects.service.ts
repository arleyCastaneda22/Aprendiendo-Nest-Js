import { Injectable } from '@nestjs/common';
import { createUserDto } from './UserDTO/createUser.dto';

@Injectable()
export class ProjectsService {

    private users: any=[
        {
            id:2,
            nombre:"Jhon",
            dinero:1000
        }
    ]

    getUser(){
        return this.users;
    }

    createUser(user:createUserDto){
        this.users.push(user)
        return {
            ...user, 
            id: this.users.length +1
        }
    }
}
