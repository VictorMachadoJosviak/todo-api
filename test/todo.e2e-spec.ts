import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('TodoController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/ (POST) should validate fields', () => {
    return request(app.getHttpServer())
      .post('/todo')
      .send({ x: 1 })
      .expect(400)
      .expect((res) => {
        expect(res.body).toMatchObject({
          statusCode: 400,
          message: [
            'name must be longer than or equal to 3 characters',
            'name should not be empty',
            'name must be a string',
            'description must be a string',
            'completed should not be empty',
            'completed must be a boolean value',
          ],
          error: 'Bad Request',
        });
      });
  });

  it.only('/ GET shold return list od todos', () => {
    return request(app.getHttpServer())
      .get('/todo')
      .expect(HttpStatus.OK)
      .expect((res) => {
        console.log(res);
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
