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

  async cadastrarChave(createChaveDto: CreateChaveDto) {
    const chave = await this.ChaveRepo.findOne({
      where: { chave: createChaveDto.chave },
    });

    if (chave) {
      throw new Error('Chave já existe');
    }

    const chaves = await this.ChaveRepo.find({
      where: { usuario_id: createChaveDto.usuario_id },
    });

    if (chaves.length == 3) {
      throw new Error('Não é possivel adicionar mais de 3 chaves');
    }

    return this.ChaveRepo.save(this.ChaveRepo.create(createChaveDto));
  }
}
