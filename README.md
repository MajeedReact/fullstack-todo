# Fullstack todo list

Taskable is a todo list web application where I will be implementing design patterns to solve common problems, it has an API that performs all CRUD operations on a Postgresql database as well as having Angular framework for the frontend.

## Changelog

### for changelog please refer to [Changelog](https://github.com/MajeedReact/fullstack-todo/blob/master/Changelogs.md)

## Getting started
1. Clone this repo
2. cd into API and run `npm install`
3. cd into frontend-taskable and run `npm install`

## Starting project
1. cd into API and run `npm run start` which will start the backend on http://localhost:3000
2. cd into frontend-taskable and run `ng serve --port 4000` which will start the frontend on http://localhost:4000

## <br/>Design patterns that are implemented so far<br/>

### 1. Singleton for the database connection [Located in database.ts](https://github.com/MajeedReact/fullstack-todo/blob/master/API/src/database.ts)
### 2. Command design pattern used on CRUD operations [Located in models folder](https://github.com/MajeedReact/fullstack-todo-list/tree/main/API/src/models)

## <br/>CRUD operations

### Read from the database

### Create/Insert a todo in the database

### Update a todo in the database

### Delete a todo in the database

## <br/>Dependencies
### Backend: 
1. express
2. pg
3. nodemon
4. ts-node
5. typescript
6. db-migrate
7. db-migrate-pg

## <br/>Requirements
### Backend:

1. Nodejs
2. Express
3. Postgresql database

### Frontend:

Angular framework

### Backend testing tool (Optional): 

Postman

## Screenshots (Demo)
### Homepage:
![Home](https://user-images.githubusercontent.com/53359513/144747945-4e995fef-fb5c-4382-a866-1d462240f8ce.jpg)
### <br/> Mobile View:
![Home-Mobile-View](https://user-images.githubusercontent.com/53359513/144747974-9aa3903e-0f09-4d80-8016-4075a9a23c90.jpg)

### <br/> Add Task:
![Add-Tasl](https://user-images.githubusercontent.com/53359513/144747987-ee61333a-5cbb-49ad-944e-0b62db1733c5.jpg)

### <br/> Edit Task: 

![Edit-Task](https://user-images.githubusercontent.com/53359513/144747998-5a7061d4-b348-4545-9e63-eaf160eaa12b.jpg)
