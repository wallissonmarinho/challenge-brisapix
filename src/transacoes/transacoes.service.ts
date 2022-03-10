import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransacoeDto } from './dto/create-transacao.dto';
import { Transacao } from './entities/transacao.entity';

@Injectable()
export class TransacoesService {
  constructor(
    @InjectRepository(Transacao)
    private TransacaoRepo: Repository<Transacao>,
  ) {}
  create(createTransacoeDto: CreateTransacoeDto) {
    // const transacao = this.TransacaoRepo.create(createTransacoeDto);
    // return this.TransacaoRepo.save(transacao);
    return createTransacoeDto;
  }

  findOne(id: number) {
    return `This action returns a #${id} transacoe`;
  }
}
