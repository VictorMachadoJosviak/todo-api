import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo todo' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'cria um todo',
  })
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  @ApiOperation({ summary: 'lista todo mundo' })
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'obtém por id' })
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.todoService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'atualiza o todo' })
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'exclui o todo' })
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.todoService.remove(id);
  }
}
