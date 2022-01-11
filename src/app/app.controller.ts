import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  index() {
    return '<h1>Estou vivoo !!!</h1>';
  }
}
