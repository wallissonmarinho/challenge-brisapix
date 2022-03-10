import { PartialType } from '@nestjs/mapped-types';
import { CreateChaveDto } from './create-chave.dto';

export class UpdateChaveDto extends PartialType(CreateChaveDto) {}
