# Board Infinity task

A node.js project as an backend task for Board Infinity Backend Intern.

## Features

- API endpoints availabe as per user need
- CRUD on Task
- Autoupdate using cron

## Lesson Learned

- CRUD operations with MongoDB database locally and on the Atlas platform (in the cloud)
- Fundamentals of Mongoose (MongoDB JS driver): Data models, CRUD operations, data validation, and middleware
- Using the MVC (Model-View-Controller) architecture

## Tech stacks

- NodeJS - JS runtime environment
- Express - The web framework used
- Mongoose - Object Data Modelling (ODM) library
- MongoDB Atlas - Cloud database service
- Postman - API testing

## Demo

<img src="/screenShots/Screenshot1.png" width="60%"/>

## Setting Up Your Local Environment

If you wish to play around with the code base in your local environment, do the following

```bash
* Clone this repo to your local machine.
* Using the terminal, navigate to the cloned repo.
* Install all the neccessary dependencies, as stipulated in the package.json file.
* If you don't already have one, set up accounts with: MONGODB. Please ensure to have at least basic knowledge of how these services work.
* In your .env file, set environment variables for the following:
    * NODE_ENV=development
    * PORT=3200
    * USER=yourUsername
    * DATABASE=your-mongodb-database-url
    * DATABASE_PASSWORD=your-mongodb-password

* Start the server.
* Your app should be running just fine.
```

Helpful commands

```bash
$ git clone https://github.com/yourGitHubUsername/internship_task_backend
$ cd internship_task_backend
$ npm install
$ npm run start(for development)
```

## Optimizations

- Arranged and grouped all the variables, functions, middleware as per bussiness rule.
- Implemented MVC(Model-View-Controller) architecture
- Proper organized module structure.

## API Features

### POST

http://127.0.0.1:3200/api/v1/add

### GET

http://127.0.0.1:3200/api/v1/list

## Author

[Pranav108](https://github.com/Pranav108/)
