import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { TodoRepository } from './repositories/todo.repository';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async create({ name, description, completed }: CreateTodoDto): Promise<Todo> {
    const model = this.todoRepository.create({
      name,
      description,
      completed,
    });
    return await this.todoRepository.save(model);
  }

  async findAll() {
    return await this.todoRepository.find();
  }

  async findOne(id: string): Promise<Todo> {
    try {
      return await this.todoRepository.findOneOrFail(id);
    } catch (error) {
      throw new NotFoundException('tarefa não encontrada');
    }
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const todo = await this.findOne(id);
    this.todoRepository.merge(todo, updateTodoDto);
    return await this.todoRepository.save(todo);
  }

  async remove(id: string) {
    const todo = await this.findOne(id);
    await this.todoRepository.delete({ id: todo.id });
  }
}
