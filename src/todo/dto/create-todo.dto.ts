import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  completed: boolean;
}
