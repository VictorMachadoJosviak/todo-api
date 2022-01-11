import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('healthcheck')
@Controller('healthcheck')
export class HealthcheckController {
  @Get()
  index() {
    return {
      ok: true,
    };
  }
}
