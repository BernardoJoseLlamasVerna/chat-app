ChatApp:
--------

First steps:
------------
1.- Initialize npm and install Express
---> npm init
---> npm i express
2.- Setup a new Express server
    * serve up the public directory
    * listen on port 3000 ---> node src/index.js
3.- Create index.html and render "Chat App" to the screen

Setting up scripts in package.json:
-----------------------------------
1.- We create "start" script to start the app using node
In package.json:
"scripts": {
    "start": "node src/index.js",
    "dev": "node src/index.js"
  },
2.- Install nodemon and a development dependency
--->npm i nodemon --save-dev
In package.json:
"devDependencies": {
    "nodemon": "^2.0.2"
  }
3.- Create a "dev" script to start the app using nodemon
---> npm run start
---> npm run dev