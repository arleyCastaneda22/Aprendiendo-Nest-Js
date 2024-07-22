import { Module } from '@nestjs/common';
import { TaskModuleModule } from './task-module/tasks.module';
import { ProjectsModule } from './projects/projects.module';

@Module({


  imports: [TaskModuleModule, ProjectsModule]
})
export class AppModule {}
