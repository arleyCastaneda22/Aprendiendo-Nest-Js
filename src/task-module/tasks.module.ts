import {Module } from '@nestjs/common';
import { taskController } from './task.controller';
import { TaskModuleService } from './task-module.service';


@Module(
    {
        controllers: [taskController],
        providers: [TaskModuleService]
    })
export class TaskModuleModule { }
