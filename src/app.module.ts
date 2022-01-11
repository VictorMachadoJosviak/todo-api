import { Module } from '@nestjs/common';
import { ConfigurationModule } from './configuration/configuration.module';
import { DatabaseModule } from './database/database.module';
import { TodoModule } from './todo/todo.module';
import { HealthcheckModule } from './healthcheck/healthcheck.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule, TodoModule, HealthcheckModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
