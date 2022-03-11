import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateChaveDto {
  @IsString()
  @IsNotEmpty()
  chave: string;

  @IsNumber()
  @IsNotEmpty()
  usuario_id: number;
}
