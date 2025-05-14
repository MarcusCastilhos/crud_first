# 🚀 Node.js CRUD API com Express, Prisma, PostgreSQL e Docker

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express.js-4.x-lightgrey?logo=express)](https://expressjs.com)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-blue?logo=prisma)](https://www.prisma.io)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15.x-blue?logo=postgresql)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-blue?logo=docker)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE)

---

## 📦 Descrição

Este projeto é uma **API RESTful** que implementa um CRUD (Create, Read, Update, Delete) para usuários, utilizando:

- **Node.js + Express** no backend
- **Prisma ORM** para comunicação com o banco de dados
- **PostgreSQL** como SGBD relacional
- **Docker** para orquestrar o ambiente de forma simples e isolada

A estrutura segue as boas práticas recomendadas pela comunidade, organizada por camadas (Controller, Service, Model, Routes).

---

## 🗂️ Estrutura do Projeto

```
src/
├── controllers/
├── services/
├── models/
├── routes/
├── index.js
prisma/
├── schema.prisma
.env
docker-compose.yml
```

---

## 🚀 Como Rodar o Projeto

### ✅ Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/)

### ⚙️ Passo a passo

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

2. Instale as dependências:

```bash
npm install
```

3. Suba o banco de dados com Docker:

```bash
docker-compose up -d
```

4. Gere as tabelas com Prisma:

```bash
npx prisma migrate dev --name init
```

5. Inicie o servidor:

```bash
node src/index.js
```

---

## 🌐 Rotas da API

| Método | Rota         | Descrição               |
| ------ | ------------ | ----------------------- |
| GET    | `/users`     | Lista todos os usuários |
| GET    | `/users/:id` | Detalha um usuário      |
| POST   | `/users`     | Cria um novo usuário    |
| PUT    | `/users/:id` | Atualiza um usuário     |
| DELETE | `/users/:id` | Deleta um usuário       |

---

## 🔐 Variáveis de Ambiente

Exemplo do arquivo `.env`:

```env
PORT=3000
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5433
DB_DIALECT=postgresql

DATABASE_URL=postgresql://postgres:postgres@localhost:5433/postgres
```

---

## 🐳 docker-compose.yml

```yaml
services:
  postgres:
    container_name: postgres_container
    image: postgres
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    ports:
      - "5433:5432"
```

---

## 🛠 Tecnologias Utilizadas

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- Docker
- JavaScript
- REST API

---

## 📝 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests. 💡
