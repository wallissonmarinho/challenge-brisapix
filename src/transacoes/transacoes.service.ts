import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chave } from 'src/chaves/entities/chave.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
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
    @InjectRepository(Usuario)
    private UsuarioRepo: Repository<Usuario>,
    private readonly httpService: HttpService,
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

    const transacao = this.TransacaoRepo.create({
      ...createTransacoeDto,
      remetente_chave_id: chaveRemetente.id,
      destinatario_chave_id: chaveDestinatario.id,
      remetente_usuario_id: chaveRemetente.usuario_id,
      destinatario_usuario_id: chaveDestinatario.usuario_id,
    });

    const remetente = await this.UsuarioRepo.findOne(chaveRemetente.usuario_id);

    const destinatario = await this.UsuarioRepo.findOne(
      chaveDestinatario.usuario_id,
    );

    this.enviarEmailRemetente(
      remetente.email,
      remetente.nome,
      createTransacoeDto.valor,
    );
    this.enviarEmailDestinatario(
      destinatario.email,
      destinatario.nome,
      createTransacoeDto.valor,
    );

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

  async enviarEmailRemetente(email: string, nome: string, valor: number) {
    const params = JSON.stringify({
      sender: {
        name: 'Brisanet Pix',
        email: 'wallissonmarinho@hotmail.com',
      },
      to: [
        {
          email: email,
          name: nome,
        },
      ],
      htmlContent: `    
      <!DOCTYPE html> 
      <html> 
        <body> 
          <h1>Destinatario</h1> 
          <h2>Nome: ${nome}</h2> 
          <p>VALOR: ${valor}</p>
          <p>Data de envio: ${new Date().toLocaleDateString('pt-BR')}</p>
        </body> 
      </html>`,
      subject: 'PIX Enviado',
    });

    await this.enviarEmail(params);
  }

  async enviarEmailDestinatario(email: string, nome: string, valor: number) {
    const params = JSON.stringify({
      sender: {
        name: 'Brisanet Pix',
        email: 'wallissonmarinho@hotmail.com',
      },
      to: [
        {
          email: email,
          name: nome,
        },
      ],
      htmlContent: `    
      <!DOCTYPE html> 
      <html> 
        <body> 
          <h1>Remetente</h1> 
          <h2>Nome: ${nome}</h2> 
          <p>VALOR: ${valor}</p>
          <p>Data de envio: ${new Date().toLocaleDateString('pt-BR')}</p>
        </body> 
      </html>`,
      subject: 'PIX Recebido',
    });

    await this.enviarEmail(params);
  }

  private async enviarEmail(params: string) {
    await this.httpService
      .post(process.env.SENDINBLUE_API_URL, params, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'api-key': process.env.SENDINBLUE_API_KEY,
        },
      })
      .toPromise();
  }
}
