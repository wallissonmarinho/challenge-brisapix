<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Rodar o Projeto

```bash
Necessario ter o docker instalado na maquina 
https://www.docker.com

$ docker-compose up 

Caso erro de permiss??o, execute: chmod +x .docker/entrypoint.sh 
```

## Rotas Insomnia

```bash
# Cadastro de usu??rio
POST http://localhost:3000/usuarios
{
	"nome": "nomeExemplo",
	"telefone": "8399999999",
	"email": "exemplo@gmail.com"
}

# Cadastrar chave PIX
POST http://localhost:3000/chaves
{
	"chave": "usuario1abc1",
	"usuario_id": 1
}

# Realizar Transa????o
POST http://localhost:3000/transacoes
{
	"valor": 11.02,
	"remetente_chave": "usuario1abc1",
	"destinatario_chave": "usuario2abc1"
}

# Obter Transa????o por usu??rio ID
GET http://localhost:3000/transacoes/3
```

## Desafio Back end Brisalabs :computer:

- O desafio consiste no desenvolvimento de uma API REST utilizando as tecnologias listadas abaixo.
- Caso n??o termine desenvolver todo o desafio, envia o que conseguir que n??s avaliaremos com muito prazer.
- Crie um reposit??rio p??blico no GitHub e envie o link para o e-mail `vanericadias@grupobrisanet.com.br` com assunto `Desafio Back end Brisalabs`.

## Tecnologias :rocket:

  - [NestJS](https://nestjs.com/) ou [Express](https://expressjs.com/pt-br/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Typeorm](https://typeorm.io/#/)
  - [Postgres](https://www.postgresql.org/)
  - [Insomnia](https://insomnia.rest/)
  - REST

## Sobre o desafio :pushpin:
- O desafio consiste em desenvolver uma API REST para o sistema de transa????es do BrisaPIX.

- **B??sico**
  - Requisitos
    - O sistema deve ser capaz de estabelecar uma conex??o com um banco de dados Postgres.
    - O sistema deve ser capaz de lidar com requisi????es com formato de dados do tipo `JSON`.
    - O sistema deve ser capaz de cadastrar usu??rios.
    - O sistema deve ser capaz de persistir essas informa????es em um banco de dados relacional.
  - Adicionar arquivo de rotas do Insomnia 
  - Adicionar migrations

- **Intermedi??rio**
  - Requisitos
    - O sistema deve ser capaz de cadastrar chaves PIX para os usu??rios j?? cadastrados.
    - Uma chave n??o poder?? ser cadastrada mais de uma vez.
    - Cada usu??rio poder?? ter no m??ximo 3 chaves.
    - O sistema deve ser capaz de realizar transa????es PIX utilizando chaves cadastradas de usu??rios.
    - Cada transa????o deve ser identificada de forma ??nica por um id.
    - Cada transa????o deve conter a chave do usu??rio que envia e do usu??rio que recebe o PIX, al??m do valor, claro.
    - O sistema deve listar as transa????es feitas por um usu??rio
    - O sistema deve ser capaz de persistir essas informa????es em um banco de dados relacional.
  - Adicionar testes unit??rios 

- **Avan??ado**
  - Requisitos
    - O sistema deve ser capaz de enviar um email notificando o envio e recebimento de um pix.
    - O email de chegada deve ter o valor recebido, o nome de quem enviou e a data.
    - O email de envio deve ter o valor enviado, o nome de quem recebeu e a data.
  - Adicionar tratamento de erros de maneira global

- **Bonus**
  - Adicionar um `docker-compose` e um `Dockerfile`.
  - Adicionar o diagrama do banco de dados.

## Entidades :pencil2:
  - Usu??rios
    - O usu??rio deve possuir nome (nome do usu??rio), telefone (telefone do usu??rio), email e um id.
  - Chaves.
    - A entidade chaves deve possuir um valor (referente a chave a ser salva), id e a rela????o com o usu??rio dono da chave.
  - Transa????es.
    - A transa????o deve possuir um valor (referente ao valor em R$ da transa????o), rela????o com quem envia e quem recebe o PIX (usu??rio que envia e usu??rio que recebe o PIX) e um id.

## Crit??rios de avalia????o :memo:
- Arquitetura
- Clean code
- Clareza
- Aus??ncia de bugs