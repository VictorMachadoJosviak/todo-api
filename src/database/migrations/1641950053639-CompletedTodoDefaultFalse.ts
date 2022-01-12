import { MigrationInterface, QueryRunner } from 'typeorm';

export class CompletedTodoDefaultFalse1641950053639
  implements MigrationInterface
{
  name = 'CompletedTodoDefaultFalse1641950053639';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "todo" ALTER COLUMN "completed" SET DEFAULT false`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "todo" ALTER COLUMN "completed" DROP DEFAULT`,
    );
  }
}
