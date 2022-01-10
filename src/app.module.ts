import { Module } from '@nestjs/common';
import { ConfigurationModule } from './configuration/configuration.module';
import { DatabaseModule } from './database/database.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule, TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
