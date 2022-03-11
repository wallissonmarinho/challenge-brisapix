import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chave } from 'src/chaves/entities/chave.entity';
import { Repository } from 'typeorm';
import { CreateTransacoeDto } from './dto/create-transacao.dto';
import { Transacao } from './entities/transacao.entity';

@Injectable()
export class TransacoesService {
  constructor(
    @InjectRepository(Transacao)
    private TransacaoRepo: Repository<Transacao>,
    @InjectRepository(Chave)
    private ChaveRepo: Repository<Chave>,
  ) {}

  async cadastrarTransacao(createTransacoeDto: CreateTransacoeDto) {
    const chaveRemetente = await this.ChaveRepo.findOne({
      where: { chave: createTransacoeDto.remetente_chave },
    });

    if (!chaveRemetente) {
      throw new Error('Chave do remetente não encontrada');
    }

    const chaveDestinatario = await this.ChaveRepo.findOne({
      where: { chave: createTransacoeDto.destinatario_chave },
    });

    if (!chaveDestinatario) {
      throw new Error('Chave do destinatario não encontrada');
    }

    console.log('chaveRemetente.usuario_id: ', createTransacoeDto);

    const transacao = this.TransacaoRepo.create({
      ...createTransacoeDto,
      remetente_chave_id: chaveRemetente.id,
      destinatario_chave_id: chaveDestinatario.id,
      remetente_usuario_id: chaveRemetente.usuario_id,
      destinatario_usuario_id: chaveDestinatario.usuario_id,
    });

    return this.TransacaoRepo.save(transacao);
  }

  listarTransacoesPorUsuario(usuario_id: number) {
    return this.TransacaoRepo.find({
      where: [
        { remetente_usuario_id: usuario_id },
        { destinatario_usuario_id: usuario_id },
      ],
    });
  }
}
