
# Clientes Aplicação

Este é um projeto simples de CRUD (Create, Read, Update, Delete) desenvolvido com Node.js, Express e PostgreSQL. A aplicação permite gerenciar clientes, onde é possível criar, listar, atualizar e deletar registros de clientes. O projeto está configurado para ser hospedado na AWS, utilizando uma instância EC2 para o front-end e back-end, e uma instância RDS para o banco de dados.

## Funcionalidades

- **Criar Cliente:** Adicionar novos clientes ao banco de dados.
- **Listar Clientes:** Recuperar todos os clientes cadastrados.
- **Buscar Cliente por ID:** Recuperar os dados de um cliente específico.
- **Atualizar Cliente:** Modificar os dados de um cliente existente.
- **Deletar Cliente:** Remover um cliente do banco de dados.

## Arquitetura do Projeto

- **Back-end:** Node.js com Express.
- **Banco de Dados:** PostgreSQL.
- **Deploy:** AWS EC2 (para back-end) e AWS RDS (para banco de dados).

## Configuração do Projeto

### Pré-requisitos

- Node.js
- PostgreSQL

### Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/clientes-aplicacao.git
   cd clientes-aplicacao

2. Instale as dependências do projeto:

    ```bash
    npm install

3. Configure as variáveis de ambiente. Crie um arquivo .env na pasta back/ e defina as seguintes variáveis:

    ```
    DB_USER=user
    DB_HOST=host
    DB_NAME=name
    DB_PASSWORD=password
    DB_PORT=port

4. Altere a configuração do banco de dados no arquivo back/config/db.js conforme necessário para o ambiente de produção.

### Execução

Para iniciar o servidor em modo de desenvolvimento:

    npm run dev

Para iniciar o servidor em modo de produção:

    npm start

O servidor estará rodando em http://localhost:3000.
    
## Endpoints da API

- **POST /clientes:** Cria um novo cliente.
- **GET /clientes:** Retorna todos os clientes.
- **GET /clientes/:id:** Retorna um cliente pelo ID.
- **PUT /clientes/:id:** Atualiza os dados de um cliente pelo ID.
- **DELETE /clientes/:id:** Deleta um cliente pelo ID.

## Deploy na AWS

### Configuração da Instância EC2

1. Crie uma instância EC2 e configure o ambiente Node.js.
2. Faça o upload do código do projeto para a instância.
3. Instale as dependências e inicie o servidor.

### Configuração da Instância EC2

1. Crie uma instância RDS com PostgreSQL.
2. Configure a conexão com o banco de dados na instância EC2, ajustando o arquivo .env e db.js com as credenciais do RDS.