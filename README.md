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

Caso erro de permissão, execute: chmod +x .docker/entrypoint.sh 
```

## Rotas Insomnia

```bash
# Cadastro de usuário
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

# Realizar Transação
POST http://localhost:3000/transacoes
{
	"valor": 11.02,
	"remetente_chave": "usuario1abc1",
	"destinatario_chave": "usuario2abc1"
}

# Obter Transação por usuário ID
GET http://localhost:3000/transacoes/3
```

## Desafio Back end Brisalabs :computer:

- O desafio consiste no desenvolvimento de uma API REST utilizando as tecnologias listadas abaixo.
- Caso não termine desenvolver todo o desafio, envia o que conseguir que nós avaliaremos com muito prazer.
- Crie um repositório público no GitHub e envie o link para o e-mail `vanericadias@grupobrisanet.com.br` com assunto `Desafio Back end Brisalabs`.

## Tecnologias :rocket:

  - [NestJS](https://nestjs.com/) ou [Express](https://expressjs.com/pt-br/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Typeorm](https://typeorm.io/#/)
  - [Postgres](https://www.postgresql.org/)
  - [Insomnia](https://insomnia.rest/)
  - REST

## Sobre o desafio :pushpin:
- O desafio consiste em desenvolver uma API REST para o sistema de transações do BrisaPIX.

- **Básico**
  - Requisitos
    - O sistema deve ser capaz de estabelecar uma conexão com um banco de dados Postgres.
    - O sistema deve ser capaz de lidar com requisições com formato de dados do tipo `JSON`.
    - O sistema deve ser capaz de cadastrar usuários.
    - O sistema deve ser capaz de persistir essas informações em um banco de dados relacional.
  - Adicionar arquivo de rotas do Insomnia 
  - Adicionar migrations

- **Intermediário**
  - Requisitos
    - O sistema deve ser capaz de cadastrar chaves PIX para os usuários já cadastrados.
    - Uma chave não poderá ser cadastrada mais de uma vez.
    - Cada usuário poderá ter no máximo 3 chaves.
    - O sistema deve ser capaz de realizar transações PIX utilizando chaves cadastradas de usuários.
    - Cada transação deve ser identificada de forma única por um id.
    - Cada transação deve conter a chave do usuário que envia e do usuário que recebe o PIX, além do valor, claro.
    - O sistema deve listar as transações feitas por um usuário
    - O sistema deve ser capaz de persistir essas informações em um banco de dados relacional.
  - Adicionar testes unitários 

- **Avançado**
  - Requisitos
    - O sistema deve ser capaz de enviar um email notificando o envio e recebimento de um pix.
    - O email de chegada deve ter o valor recebido, o nome de quem enviou e a data.
    - O email de envio deve ter o valor enviado, o nome de quem recebeu e a data.
  - Adicionar tratamento de erros de maneira global

- **Bonus**
  - Adicionar um `docker-compose` e um `Dockerfile`.
  - Adicionar o diagrama do banco de dados.

## Entidades :pencil2:
  - Usuários
    - O usuário deve possuir nome (nome do usuário), telefone (telefone do usuário), email e um id.
  - Chaves.
    - A entidade chaves deve possuir um valor (referente a chave a ser salva), id e a relação com o usuário dono da chave.
  - Transações.
    - A transação deve possuir um valor (referente ao valor em R$ da transação), relação com quem envia e quem recebe o PIX (usuário que envia e usuário que recebe o PIX) e um id.

## Critérios de avaliação :memo:
- Arquitetura
- Clean code
- Clareza
- Ausência de bugs