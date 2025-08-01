# 📱 Projeto

O projeto consiste em uma API REST para uma loja de itens medievais, desenvolvida usando a camada MSC (Models, Service e Controllers) e realizando as operações básicas que se pode fazer em um banco de dados: CRUD (Criação, Leitura, Atualização e Exclusão)

* [Documentação](https://smith.ymaatheus.me/api-docs)
* [Deploy](https://smith.ymaatheus.me/)

### 📋 Pré-requisitos

Para conseguir seguir este README e rodar o projeto você pode precisar dos seguintes itens:

- [Git](https://git-scm.com/doc)
- [Node](https://nodejs.org/en/)
- [Npm](https://docs.npmjs.com/getting-started)
- [MySQL](https://www.mysql.com/)

## 🚀 Começando

Para ter acesso aos arquivos do projeto você pode clonar usando o seguinte comando:

```
git clone 
```

### 🔧 Instalação

Agora que já tem a pasta do projeto na sua máquina, dentro dela instale as dependências:

```
npm install
```

Crie o arquivo `.env` e adicione as variaveis de ambiente, siga o exemplo abaixo:

```
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=password

JWT_SECRET=secret
```

Crie as tabelas e popule o banco de dados MySQL:

```
npm run restore
```

Então podemos rodar o projeto:

```
npm start
```

## 🛠️ Construído com

* [Npm](https://docs.npmjs.com/getting-started) - Gerente de dependências
* [Express](http://www.dropwizard.io/1.0.2/docs/) - O framework
* [Typescript](https://www.typescriptlang.org/) - Superset da linguagem de programação [JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
* [Mysql2](https://www.npmjs.com/package/mysql2) - Biblioteca responsável por gerenciar a conexão com o banco de dados MySQL
* [Cors](https://www.npmjs.com/package/cors) - Biblioteca [CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Biblioteca JWT
* [Joi](https://www.npmjs.com/package/joi) - Biblioteca de validação
* [Swagger](https://www.npmjs.com/package/swagger-ui-express) - Ferramenta de documentação
