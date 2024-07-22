import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskModuleService {
 private task=[];


    getTask(){
        return this.task;
    }


    createTask(task:any){
        console.log(task);
        return this.task.push(task)
    }

    updateTask(){
        return "actualizando tareas"
    }

    deleteTask(){
        return "Eliminado tarea"
    }
}
