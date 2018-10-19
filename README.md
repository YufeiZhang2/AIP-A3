# GOLDEN TIME CINEMA PROJECT

Golden Time Cinema is a web application platform providing services not people who have a passion for classic movies.

## Functionalities

### With this application, ordinary user (with no account) can:

    • View list of "now-showing" and "coming-soon" movies

    • Search for movies by name and genre

    • Book movie ticket with notification message and confirmation ticket sent to their specified emails

### Registered users can:

    • Register and login with their accounts, and logout

    • Edit user profile

    • Book movie ticket with notification message and confirmation ticket sent to their registered or other emails

    • View history of ticket orders in their account and delete tickets they find unnecessary

### Users with admin role can:

    • Add new movies to the database

    • Edit movie status and Delete unnecessary movies

## Build With (The MEAN Stack)

• [MongoDB](https://www.mongodb.com/) - Document database, used by Back-end application to store data as JSON documents

• [Express.js](https://expressjs.com/) - Back-end web application Framework running on top of Node.js

• [Angular](https://angular.io/) - Front-end web application Framework

• [Node.js](https://nodejs.org/en/) - JavaScript runtime environment

## Getting Started

### Pre-Requisites

Make sure you have installed all of the following pre-requisites on your development machine:

• Git - [Download & install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.

• Node.js - [Download & install Node.js](https://nodejs.org/en/download/).

• MongoDB - [Download & install MongoDB](https://www.mongodb.com/download-center?initial=true), and make sure it runs on the default port (27017).

### Installation

• Clone this repository into a specified folder on your local machine

• Run `npm install` in the root folder of your local repository to install dependencies for back-end development

• `cd .\GoldenTimeCinema-angular\` to change directory to front-end directory of Angular

• Run `npm install` to install dependencies for front-end development

• To update these packages of dependencies, run `npm update` in the either directories as specified above

### Running The Application

• Run Mongo daemon `mongod` in one terminal to start the Mongo server

• Run Mongo shell `mongod` in another terminal to access data in MongoDB

• `cd .\GoldenTimeCinema-angular\` to change directory to front-end directory of Angular

• Run `ng build` to build the front-end project in Angular project folder

• Navigate to the project root

• Run `nodemon start` in the project root to start the application

• The application should run on port 3000 with the development environment configuration, so in your browser just go to http://localhost:3000

## Principles of code style

    Code style:

    • Write meaningful variable names;

    • Write meaningful comments;

    • Make consistent indentation and space for the code;

    • Write consistent naming convention, meaning we use pascal case for naming property, methods and class names and
      camel case for variables and methods' parameters;

    • Properly use nested loops and do not wirte long nested loops;

    • Do not repeat the same logic to avoid duplicated code. Follow KISS priciple: keep it simple and stupid;

    • Refactor the code after it works and try to make it clean to realise the same fucntion so that the code is more readable;

    • Do not write long methods, one method for one purpose;

    • Write good unit testing and it covers all the core functions;

    Design:

    • Design a clear structure for the project,

    • Seperate layers at least for business, data and presentation with three or more layers but less than five;

    • Consider the resusability of code;

    • Make good database design with necessary attributes and data type. Eliminate redundant data.

    • Set up proper authentication and athorisation for the security of the project, which inceases its reliability;

    • Consider modularity by dividing modules that serve different purposes to deal with the grow of the project.

## Use guide

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
