import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'transacoes' })
export class Transacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  valor: number;

  @Column()
  remetente_chave_id: number;

  @Column()
  destinatario_chave_id: number;

  @Column()
  remetente_usuario_id: number;

  @Column()
  destinatario_usuario_id: number;
}
