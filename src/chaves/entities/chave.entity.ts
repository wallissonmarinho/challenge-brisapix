import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'chaves' })
export class Chave {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  chave: string;

  @Column()
  usuario_id: number;
}
