import { createTask } from './DTO/createTask.dto';
import { TaskModuleService } from './task-module.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('/task')

export class taskController {


    constructor(private taskService: TaskModuleService) {
        this.taskService;
    }
    @Get()
    getAllTask() {
        return this.taskService.getTask();
    }

    @Get('/:id')
    getTask(@Param('id') id:string) {
        console.log(id);
        return this.taskService.getOneTask(parseInt(id));
    }

    @Post()
    createTask(@Body() cuerpo:createTask) {
        return this.taskService.createTask(cuerpo)

    }

    @Put()
    updateTask() {
        return this.taskService.updateTask()
    }

    @Delete()
    deleteTask() {
        return this.taskService.deleteTask();
    }
}
