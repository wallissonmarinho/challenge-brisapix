import { Module } from '@nestjs/common';
import { ChavesService } from './chaves.service';
import { ChavesController } from './chaves.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chave } from './entities/chave.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chave])],
  controllers: [ChavesController],
  providers: [ChavesService],
})
export class ChavesModule {}
