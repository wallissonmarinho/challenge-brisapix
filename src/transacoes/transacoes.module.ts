import { Module } from '@nestjs/common';
import { TransacoesService } from './transacoes.service';
import { TransacoesController } from './transacoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transacao } from './entities/transacao.entity';
import { Chave } from 'src/chaves/entities/chave.entity';
import { HttpModule } from '@nestjs/axios';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transacao, Chave, Usuario]), HttpModule],
  controllers: [TransacoesController],
  providers: [TransacoesService],
})
export class TransacoesModule {}
