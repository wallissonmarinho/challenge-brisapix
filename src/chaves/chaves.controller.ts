import { Controller, Post, Body } from '@nestjs/common';
import { ChavesService } from './chaves.service';
import { CreateChaveDto } from './dto/create-chave.dto';

@Controller('chaves')
export class ChavesController {
  constructor(private readonly chavesService: ChavesService) {}

  @Post()
  create(@Body() createChaveDto: CreateChaveDto) {
    return this.chavesService.cadastrarChave(createChaveDto);
  }
}
