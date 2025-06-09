# 🔗 URL Shortener API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-brightgreen)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas%20%7C%20Docker-green)](https://www.mongodb.com/)
[![Swagger](https://img.shields.io/badge/API%20Docs-Swagger-blue)](#documentação-swagger)

Um encurtador de URLs simples e moderno utilizando **Node.js**, **Mongoose**, **MongoDB**, **Docker** e documentação com **Swagger**.

---
````yaml
## 📁 Estrutura de Pastas

backend/
├── dist/ # Arquivos compilados (build)
├── node_modules/
├── src/
│ ├── dto/ # Data Transfer Objects (DTOs)
│ │ └── url.dto.ts
│ ├── models/ # Schemas Mongoose
│ │ └── url.models.ts
│ ├── utils/ # Utilitários e helpers
│ │ └── generic-error.ts
│ ├── url.controller.ts # Controladores (lógica dos endpoints)
│ ├── url.service.ts # Regras de negócio
│ ├── app.module.ts # Módulo principal
│ └── main.ts # Bootstrap da aplicação
├── test/ # Testes automatizados
├── .env # Variáveis de ambiente
├── package.json
├── tsconfig.json
├── docker-compose.yml # Containerização com MongoDB
└── .gitignore
````
---

## 🚀 Tecnologias Utilizadas

- **Node.js** + **TypeScript**
- **Express.js**
- **MongoDB** (local ou Atlas)
- **Mongoose**
- **Swagger** (OpenAPI)
- **Docker + Docker Compose**

---

## ⚙️ Instalação e Execução

### 🔧 Pré-requisitos

- Node.js 18+
- Docker + Docker Compose

### 🐳 Rodando com Docker

```bash
# Subir containers da aplicação e do MongoDB
docker-compose up --build
💻 Rodando localmente (sem Docker)

# Instalar dependências
npm install

# Rodar a aplicação
npm run dev
````
📡 API - Endpoints
➕ Criar URL curta
POST /api/shorten

````json

{
  "originalUrl": "https://exemplo.com",
}
````
Resposta:

````json
{
  "shortUrl": "http://localhost:3000/meulink"
}
🔁 Redirecionar
GET /:slug
````
Exemplo:
http://localhost:3000/meulink redireciona para https://exemplo.com

📚 Documentação Swagger
Após iniciar o projeto, acesse:

📖 http://localhost:3000/docs

