import { Injectable } from '@nestjs/common';
import { createTask } from './DTO/createTask.dto';

@Injectable()
export class TaskModuleService {
 private task=[];


    getTask(){
        return this.task;
    }


    getOneTask(id:number){
        console.log(id)
        return this.task.find(task=>task.id==id)

    }

    createTask(task:createTask){
        console.log(task);
        return this.task.push({...task, id: this.task.length +1})
    }

    updateTask(){
        return "actualizando tareas"
    }

    deleteTask(){
        return "Eliminado tarea"
    }
}
