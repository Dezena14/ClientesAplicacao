
# Sistema de Gerenciamento de Clientes

Este é um projeto simples de **CRUD (Create, Read, Update, Delete)** desenvolvido com Node.js, Express e PostgreSQL. A aplicação permite gerenciar registros de clientes, onde é possível criar, listar, atualizar e deletar registros de clientes. A aplicação foi projetada para ser hospedada na AWS, utilizando uma instância EC2 para o front-end, uma instância EC2 para back-end e uma instância RDS para o banco de dados.

## Funcionalidades

- **Criar Cliente:** Adicionar novos clientes ao banco de dados.
- **Listar Clientes:** Recuperar todos os clientes cadastrados.
- **Buscar Cliente por ID:** Recuperar os dados de um cliente específico.
- **Atualizar Cliente:** Modificar os dados de um cliente existente.
- **Deletar Cliente:** Remover um cliente do banco de dados.

## Tecnologias Utilizadas

- **Frontend:** HTML, CSS, e JavaScript.
- **Back-end:** Node.js com Express.
- **Banco de Dados:** PostgreSQL.
- **Deploy:** AWS EC2 e RDS.

## Arquitetura do Projeto

A aplicação é dividida em duas partes principais: o back-end, responsável pelo processamento dos dados e operações CRUD, e o front-end, que oferece uma interface simples para os usuários interagirem com o sistema.

### 1. Back-end

O back-end foi desenvolvido utilizando Node.js e Express para gerenciar as requisições e realizar operações no banco de dados PostgreSQL. Os principais arquivos do projeto são:

- **app.js:** Configurações iniciais do servidor e rotas.
- **clienteController.js:** Lógica de negócio para a manipulação de clientes.
- **clienteRoutes.js:** Definição das rotas para o CRUD de clientes.
- **db.js:** Configuração da conexão com o banco de dados PostgreSQL.

### 2. Front-end

O front-end consiste em páginas HTML simples, estilizadas com CSS, que se comunicam com o back-end via JavaScript para realizar as operações necessárias. As principais páginas do sistema são:

- **Cadastro de Cliente (``index.html``):** Esta página permite cadastrar um novo cliente, preenchendo os campos obrigatórios como nome, CPF, data de nascimento e e-mail.
- **Listagem de Clientes (``listar.html``):** Exibe uma tabela contendo todos os clientes cadastrados no sistema, com informações como nome, CPF e e-mail.
- **Gerenciamento de Clientes (``gerenciar.html``):** Permite ao usuário buscar clientes por nome ou CPF e inclui opções para editar ou excluir os registros encontrados diretamente na interface.
- **Edição de Cliente (``editar.html``):** Após buscar um cliente existente, essa página permite ao usuário visualizar e modificar os dados do cliente, como nome ou e-mail.

## Configuração do Projeto

### Pré-requisitos

- Node.js
- PostgreSQL

### Instalação

1. Clone este repositório:

    ```bash
    git clone https://github.com/seu-usuario/clientes-aplicacao.git
    cd clientes-aplicacao
    ```

2. Instale as dependências do projeto:

    ```bash
    npm install
    ```

3. Configure o banco de dados PostgreSQL. Altere o arquivo back/config/db.js com as credenciais do seu banco de dados:

    ```javascript
    const pool = new Pool({
    user: 'seu-usuario',
    host: 'seu-host',
    database: 'seu-banco',
    password: 'sua-senha',
    port: 5432,
    });
    ```

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
3. Instale as dependências e inicie o servidor com o comando:
    
    ```bash
    npm start
    ```

### Configuração da Instância RDS

1. Crie uma instância RDS com **PostgreSQL**.
2. Atualize a conexão com o banco de dados no arquivo .env e db.js da instância EC2 para se conectar ao RDS.

## Autores

Este projeto foi desenvolvido com a colaboração dos seguintes autores:

- [Eduardo Dezena](https://github.com/Dezena14)
- [Bárbara Rodrigues](https://github.com/barbarafrc)
- [Felipe Pedrão](https://github.com/felipepedrao)
- [Michel Souza](https://github.com/soumichel)
