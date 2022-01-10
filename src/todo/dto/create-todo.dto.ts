import { IsBoolean, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsString()
  description: string;

  @IsBoolean()
  @IsNotEmpty()
  completed: boolean;
}
