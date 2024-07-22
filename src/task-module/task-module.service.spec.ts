import { Test, TestingModule } from '@nestjs/testing';
import { TaskModuleService } from './task-module.service';

describe('TaskModuleService', () => {
  let service: TaskModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskModuleService],
    }).compile();

    service = module.get<TaskModuleService>(TaskModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
