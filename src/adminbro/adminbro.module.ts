import { Module } from '@nestjs/common';
import { AdminModule } from '@adminjs/nestjs';
import AdminJS from 'adminjs';
import { Database, Resource } from '@adminjs/typeorm';
import { Todo } from '../todo/entities/todo.entity';

AdminJS.registerAdapter({ Database, Resource });

@Module({
  imports: [
    AdminModule.createAdmin({
      adminJsOptions: {
        rootPath: '/admin',
        resources: [Todo],
      },
      auth: {
        authenticate: async (email, password) => {
          if (email === 'test@test.com' && password === '123') {
            return Promise.resolve({ email: 'test' });
          }
          return null;
        },
        cookieName: 'test',
        cookiePassword: 'testPass',
      },
    }),
  ],
})
export class AdminbroModule {}
