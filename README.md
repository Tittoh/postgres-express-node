# Todo API [![Build Status](https://travis-ci.com/Tittoh/postgres-express-node.svg?branch=master)](https://travis-ci.com/Tittoh/postgres-express-node) [![Coverage Status](https://coveralls.io/repos/github/Tittoh/postgres-express-node/badge.svg?branch=master)](https://coveralls.io/github/Tittoh/postgres-express-node?branch=master) [![Test Coverage](https://api.codeclimate.com/v1/badges/56d8004a11a107c9d7e5/test_coverage)](https://codeclimate.com/github/Tittoh/postgres-express-node/test_coverage) [![Maintainability](https://api.codeclimate.com/v1/badges/56d8004a11a107c9d7e5/maintainability)](https://codeclimate.com/github/Tittoh/postgres-express-node/maintainability)

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