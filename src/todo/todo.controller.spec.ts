import { Test, TestingModule } from '@nestjs/testing';
import { Todo } from './entities/todo.entity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

describe('TodoController', () => {
  let controller: TodoController;
  let todoService: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [
        {
          provide: TodoService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<TodoController>(TodoController);
    todoService = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should service be defined', () => {
    expect(todoService).toBeDefined();
  });

  describe('create', () => {
    it('should be a create todo task', async () => {
      const mockTodo = new Todo({
        id: '1',
        completed: false,
        description: 'fake',
        name: 'taks top',
      });
      todoService.create = jest.fn().mockReturnValueOnce(mockTodo);

      const createObject = {
        completed: mockTodo.completed,
        description: mockTodo.description,
        name: mockTodo.name,
      };
      const result = await controller.create(createObject);

      expect(result).toBeInstanceOf(Todo);
      expect(result).toMatchObject(mockTodo);
      expect(todoService.create).toHaveBeenCalledTimes(1);
      expect(todoService.create).toHaveBeenCalledWith(createObject);
    });
  });
});
