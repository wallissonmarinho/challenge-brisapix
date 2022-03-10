import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChaveDto } from './dto/create-chave.dto';
import { Chave } from './entities/chave.entity';

@Injectable()
export class ChavesService {
  constructor(
    @InjectRepository(Chave)
    private ChaveRepo: Repository<Chave>,
  ) {}

  create(createChaveDto: CreateChaveDto) {
    const chave = this.ChaveRepo.create(createChaveDto);
    return this.ChaveRepo.save(chave);
  }
}
