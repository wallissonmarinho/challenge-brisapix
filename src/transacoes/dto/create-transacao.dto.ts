import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTransacoeDto {
  @IsString()
  @IsNotEmpty()
  remetente_chave: string;

  @IsString()
  @IsNotEmpty()
  destinatario_chave: string;

  @IsNumber()
  @IsNotEmpty()
  valor: number;
}
