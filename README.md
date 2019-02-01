# Todo API [![Build Status](https://travis-ci.com/Tittoh/postgres-express-node.svg?branch=master)](https://travis-ci.com/Tittoh/postgres-express-node)

Todo API.

# Technologies
- Node Express
- Postgresql Database
- Sequelize

## Commands

`npm install` install the required node modules

`sequelize db:migrate` create the necessary tables

`npm run dev` run the app in developer mode where it restarts when a file is saved.

`npm start` Start the app

`npm test` run the tests

# Endpoints


  | URL                                             | Methods       | Description            |
  |-------------------------------------------------|---------------|------------------------|
  | /                                               | GET           | Welcome message        |
  | /api/todos                                      | POST          | Create Todo            |
  | /api/todos                                      | GET           | Get all Todos          |
  | /api/todos/:todoId                              | GET           | Get one Todo           |
  | /api/todos/:todoId                              | PUT           | Update contact         |
  | /api/todos/:todoId                              | DELETE        | Delete contact         |
  | /api/todos/:todoId/items                        | POST          | Create Todo item       |
  | /api/todos/:todoId/items/:todoItemID            | PUT           | Update Todo item       |
  | /api/todos/:todoId/items/:todoItemID            | DELETE        | Delete Todo item       |