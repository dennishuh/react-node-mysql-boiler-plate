# MySQL React Node Express

# Description

This starter template is using create-react-app and is using MySQL, React@18, Node, Express

# Getting Started

Start by cloning the repo

`git clone https://github.com/dennishuh/react-18-node-mysql-starter.git MyApp`

There are two package.json files that will need to be used to install dependencies. One in the root directory and one in the client directory.

# Using NPM

To install dependencies, inside the root and client directory run

`npm install`

Once the dependencies have been installed from both directories, you can start the template from the root directory by running

`npm run dev`

# Configuring dev environment keys

You can add a `.env` file to hold your db information or things like API keys while you develop in the root. This repo is already set to .gitignore `.env`.

# Heroku Deploy Option

There is a heroku-postbuild script included in the template if you choose to deploy to Heroku. [This article](https://daveceddia.com/deploy-react-express-app-heroku/) by Dave Ceddia covers the reasoning pretty well. But basically it tells heroku to install the react-scripts needed to build the React app. By default the react-scripts are not installed in production.
