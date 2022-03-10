import { Module } from '@nestjs/common';
import { TransacoesService } from './transacoes.service';
import { TransacoesController } from './transacoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transacao } from './entities/transacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transacao])],
  controllers: [TransacoesController],
  providers: [TransacoesService],
})
export class TransacoesModule {}
