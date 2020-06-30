<h1 align="center">
<img src="https://i.imgur.com/MIo4ZWs.png" alt="FaleMais" width="700">
</h1>

<h3 align="center"> 🚀 FaleMais: Sistema de cálculo de valor da ligação...</h3>

<blockquote align="center">Aplicação desenvolvida pela empresa Telzir</blockquote>

<p align="center">	
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Davispc10/ecoleta">
	
  <a href="https://www.linkedin.com/in/david-azeredo/">
    <img alt="Made by David Azeredo" src="https://img.shields.io/badge/made%20by-DavidAzeredo-%2304D361">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

## Ferramentas
Foram utilizadas a stack Javascript para o desenvolvimento do projeto:

- ⚛️ **React Js** — Biblioteca JavaScript para construção do frontend da aplicação web:
  - Uso do react hooks;
  - Requisições com o axios;
  - Typescript.
- 💹 **Node Js** — Plataforma que permite utilizar javascript para criar aplicações do lado do servidor(backend):
  - Axios;
  - Framework express;
  - Banco de dados NoSql MongoDB;
  - Yup para validação;
  - Jest para testes;
  - Typescript.

## Sobre:
<p>Normalmente um cliente Telzir pode fazer uma chamada de uma cidade para outra pagando uma tarifa fixa por minuto, com o preço sendo pré-definido em uma lista com os códigos DDDs de origem e destino.</p>

<p>Com o novo produto FaleMais da Telzir o cliente adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto. Os planos são FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).</p>

<p>A Telzir, preocupada com a transparência junto aos seus clientes, está disponibilizando uma página na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o plano FaleMais. O sistema deve calcular dois valores: (1) o valor da ligação com o plano e (2)
sem o plano.</p>

<p>⚙ FrontEnd: <a href="https://github.com/Davispc10/FaleMais/tree/master/web">FaleMais - Web</a></p>
<p>💻 Backend: <a href="https://github.com/Davispc10/FaleMais/tree/master/server">FaleMais - API</a></p>

### Configuração - Backend
Para rodar o projeto, voce precisa do yarn, node e git instalados.
```bash
# Após clonar o projeto na sua máquina e as ferramentas instaladas,
# Vá a pasta server
$ cd falemais/server

# Instale as dependências
$ yarn install

# Você pode executar o seed, um comando para criação dos registros
# de tarifas e planos do sistema no banco de dados. Porém não é necessário 
# se caso os dados já tiverem sido cadastrados. (Obs: Se der algum erro é
# porque já estão cadastrados no banco de dados que está na nuvem)
$ yarn seed

# Para iniciar o servidor basta executar
$ yarn dev
```

### Testes - Backend
Para rodar os testes é só executar:
```bash
yarn test

# Foi realizado testes de integração tentando cobrir o máximo de código
# possível. Foi utilizado o banco mongodb com uma instância na nuvem
# (MongoDB Atlas), então se ocorrer algum erro nos testes pode ser
# algum problema de conexão, porque o banco é lento por ser gratuito.
```

### Configuração - Frontend
Para iniciar o **Frontend** do React utilize os comandos:
```bash
# Vá a pasta web
cd falemais/web

yarn install

yarn start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:3000` com a aplicação funcionando. Certifique-se que o backend já esteja funcionando para a aplicaçao web pegar as informações e poder ser utilizado.

## Licença

Esse projeto é privado para avaliação de um teste para uma vaga de desenvolvimento.
