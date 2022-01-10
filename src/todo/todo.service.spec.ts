import { Test, TestingModule } from '@nestjs/testing';
import { TodoRepository } from './repositories/todo.repository';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let todoRepository: TodoRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodoService,
        {
          provide: TodoRepository,
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<TodoService>(TodoService);
    todoRepository = module.get<TodoRepository>(TodoRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should todoRepository be defined', () => {
    expect(todoRepository).toBeDefined();
  });
});
