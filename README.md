# MERN Template
![mern stack](mern.jpg)

## Table of Contents
* Introduction
* Setup for local development
* Project structure
* Making the project your own
* Deployment
* Redux

## Introduction
* This template is intended to provide the necessary architecture for quickly developing applications using the MERN (MongoDb, Express, React, Node) stack. This readme will explain how to clone the repository and set it up for local development, adapt it to your specific needs, and set it up for a production environment.

* I have also included a link to a video guide that is intended for beginners who have dabbled in express and react, but haven't yet built a full stack app with those technologies. You can find the entire playlist here LINK, or you can select specific videos that are included in each subsection below.

## Setup for Local Development
### Make the repo your own
1. clone the template `$ git clone https://github.com/okputadora/MERN-template.git`
1. remove the git history `$ rm -r .git`
1. Initialize your own git repo `git init`
1. Commit the current state of the repository
```
$ git add .
$ git commit -m 'init'
```
1. Add your remote repo `git add remote origin <your-project-on-github>`

### Install the node packages
1. Install the dependencies in the root directory`$ npm install`
1. Install the dependencies in the client directoy `$cd client && npm install`

### Set up a local database
1. Open the .env file in the root directory and replace the MONGO_URI value
(i.e. `'mongodb://localhost/mern-template'`) with your local database

### Start the app
1. In the root directory `$ node app.js` or `$ nodemon`
1. Then cd into the client directory and run `$ npm start`

__That's it! You're good to go!__

## Project Structure
This template was created using express-generator and create-react-app. It contains
two example models (User and Message) to demonstrate the flow of the application.

Before describing this flow in detail I will first give an overview of how the project is organized.

The __root__ directory contains all of the server side code while the __client__
directory contains all of the front end code. For the client to talk to the server
we have set a proxy url in the client's package.json `proxy: http://localhost/3001`
and have set the port that server runs on to 3001 in `'./bin/www'`

### Root
* The configuration of the server takes place in app.js and ./bin/www
* The main functionality of the back end resides in routes/ models/ and controllers/
#### Routes
* There is a single route handler in the routes directory called __api__.
* api handles all requests to the backend and then invokes the appropriate controller
depending on the route called.
* For example: if you made a get request from the front end `axios.get('/user')`
this would be caught on the back end with `Router.get('/:resource')`
* To invoke the appropriate controller we import all of them and use the req.params.resource
to pick the right one.
```
const resource = req.params.resource;
const controller = controllers[resource];
```
* This makes the api route handler highly modular and resuable for other projects,
but you do need to ensure that your requests from the front end match the name of a controller
#### Controllers
* The controllers provide the CRUD operations for each model.
* As you build out your project, logic specific to the models will go here. For example,
maybe a profile controller would provide specific logic for encrypting a password before
saving it in the database.
* All of the controllers are included in an index file so that we can easily require
all of them in the api route handler file.
#### Models
* The models directory contains the mongoose schemas for
### Client

## Customizing the project
