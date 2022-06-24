# Recipe-App

> A fullstack CRUD Recipe App using MySQL(Sequelize), Express, React, Node.js, Tailwind(including Darkmode) and Firebase for authentification and image storage

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Contact](#contact)
- [License](#license)

## General Information

This project was created with the purpose of learning MySQL, Express, React, Node.js, Jest, Firebase auth and Tailwind.

The intention was to create an App where a community can create and find recipes for people with intolerances.

## Technologies Used

- React - version 18.1.0
- Node.js - version 16.15.0
- Express - version 4.17.3
- mysql2 - version 2.3.3
- sequelize - version 6.19.0
- Firebase - version 9.6.8
- Firebase-admin - version 10.1.0
- Tailwind - version 3.0.24
- React-Router-Dom - version 6.3.0
- jest - version 28.1.1
- testing-library/react - version 13.3.0

For more informations check package.JSON in ./client for frontend dependencies and in ./ for backend.

## Features

- Backend for creating, reading, updating and deleting recipes
- User authentification system with verification in backend (Firebase)
- Navigation-bar with user authentification handling, darkmode and links
- Home-landing page with welcome, random recipe, last recipe and random facts about the app
- Recipes page with filter by difficulty, tag and text input displayed in a paginated grid
- Singlerecipe page with several features like editing, deleting and more

## Setup

For running it on your local environment first:

`npm install or yarn install`

To run development server:

`npm start or yarn start`

Open http://localhost:3000 with your browser to see the result.
For a full list of dependencies take a look at package.json.

You have to setup an own Firebase project and create an .env with your Firebase config.
You also have to create an own MySQL DB for this. You can find needed Informations in the server/models/index.js file.

## Usage

You can visit the page without register/login urself.
You can add/edit/remove after you registered and logged in.

## Project Status

Project is: _incomplete_

This is the in progress version of my fullstack Recipe-App.

## Room for Improvement

- Add comment-section
- Add vote-section
- Pagination in backend
- Better search algorithmus
- Better ingredients options with weight etc
- Favourite lists

There are a lot of more options for improvements.

## Contact

## License

Feel free to use this code for your own projects!
