import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TransacoesService } from './transacoes.service';
import { CreateTransacoeDto } from './dto/create-transacao.dto';

@Controller('transacoes')
export class TransacoesController {
  constructor(private readonly transacoesService: TransacoesService) {}

  @Post()
  create(@Body() createTransacoeDto: CreateTransacoeDto) {
    return this.transacoesService.cadastrarTransacao(createTransacoeDto);
  }

  @Get(':usuario_id')
  findAll(@Param('usuario_id') usuario_id: string) {
    return this.transacoesService.listarTransacoesPorUsuario(+usuario_id);
  }
}
