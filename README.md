# Todo API

Todo API.

# Technologies
- Node Express
- Postgresql Database
- Sequelize

## Commands

`npm install` install the required node modules

`npm run dev` run the app.

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