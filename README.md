# MERN Template
![mern stack](mern.png)

## Introduction
* This template is intended to provide the necessary architecture for quickly developing applications using the MERN stack.
* To use this template simply clone this repository and run npm install.

## Detailed overview
### 1. MongoDb
#### A. Connect to your MongoDB
* In app.js in the root directory you'll find the connection point for a mongo server. All you need to do it tell it which Db to connect to.
* To do this, go to your .env file in the root directory and add the url to your database. (e.g. '//localhost/yourDb').   

#### B. Create your models
* Now that you've connected to your MongoDb, let's build a model
#### C. Create your controllers
### 2. Routes
* To access our Models we will utilize the api route in our routes directory
* This file connects to our controllers which in turn connect to our models
#### A. API
### 3. React
### 4. Redux
