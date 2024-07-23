import { Module } from '@nestjs/common';
import { TaskModuleModule } from './task-module/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { HelloModule } from './hello/hello.module';

@Module({


  imports: [TaskModuleModule, ProjectsModule, HelloModule]
})
export class AppModule {}
