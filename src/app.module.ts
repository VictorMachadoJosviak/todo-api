import { Module } from '@nestjs/common';
import { ConfigurationModule } from './configuration/configuration.module';
import { DatabaseModule } from './database/database.module';
import { TodoModule } from './todo/todo.module';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { AppController } from './app/app.controller';
import { AdminbroModule } from './adminbro/adminbro.module';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    AdminbroModule,
    TodoModule,
    HealthcheckModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
