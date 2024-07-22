import { TaskModuleService } from './task-module.service';
import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('/task')

export class taskController {


    constructor(private taskService: TaskModuleService) {
        this.taskService;
    }
    @Get()
    getAllTask() {
        return this.taskService.getTask();
    }

    @Post()
    createTask(@Body() cuerpo:any) {
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
