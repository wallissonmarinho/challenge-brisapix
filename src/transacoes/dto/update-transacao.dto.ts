import { PartialType } from '@nestjs/mapped-types';
import { CreateTransacoeDto } from './create-transacao.dto';

export class UpdateTransacoeDto extends PartialType(CreateTransacoeDto) {}
