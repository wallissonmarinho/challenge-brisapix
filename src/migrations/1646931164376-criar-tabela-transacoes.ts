import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class criarTabelaTransacoes1646931164376 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transacoes',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'valor',
            type: 'double precision',
          },
          {
            name: 'remetente_chave_id',
            type: 'int',
          },
          {
            name: 'destinatario_chave_id',
            type: 'int',
          },
          {
            name: 'remetente_usuario_id',
            type: 'int',
          },
          {
            name: 'destinatario_usuario_id',
            type: 'int',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'transacoes',
      new TableForeignKey({
        columnNames: ['remetente_usuario_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'usuarios',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'transacoes',
      new TableForeignKey({
        columnNames: ['destinatario_usuario_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'usuarios',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transacoes');
  }
}
