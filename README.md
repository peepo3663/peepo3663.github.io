# CS601 - Term Project - My Awesome Personal Website

This project was created to support CS601 Term Project. This contains both [backend](server) and frontend with [Angular](https://angular.io/) framework. 

## Prerequisites

* This project requires knowledge in
    - [Angular](https://angular.io/)
    - [Typescript](https://www.typescriptlang.org/)
    - [HTML](https://developer.mozilla.org/docs/Learn/HTML/Introduction_to_HTML)
    - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
    - [CSS](https://developer.mozilla.org/docs/Learn/CSS/First_steps)

## How to run this project

* I have created the script to run this project via [npm](https://www.npmjs.com) which required [Angular version 10](https://angular.io/guide/setup-local#install-the-angular-cli) or above
* Start by install all dependencies in both this folder and [server](server) folder
```sh
npm install 
```
* Then call, this will run both frontend and backend on localhost ports of 4200 and 9000 respectively.
```sh
npm run start
```

## Features and Requirement

* Develop/design their work to be a mobile First design, then desktop with media queries and/or responsive design patterns. It located [here](src/app/app.component.css)
* Must use CSS extensively, **This project already contains all CSS in both high level css to component css files.**
* Pass minimum HTML pages.
* Had multiple httpClient calls. I used [HttpClient](https://angular.io/api/common/http/HttpClient) class of Angular framework which is the same standard of Ajax calls.
* I used open-source components library called [Angular Material Bootstrap](https://mdbootstrap.com/docs/angular/), and created website entirely on my own code.

## This project in production
- This project already deployed on [my personal website](https://peepo3663.github.io) and backend also deployed at [Heroku](https://cs601-node-be.herokuapp.com) Web server.
    - Sample [API](https://cs601-node-be.herokuapp.com/infos) Call. 

> Created by Wasupol Tungsakultong
