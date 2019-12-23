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

Websocket Protocol:
-------------------
1.- Install socket on our project:
---> npm i socket.io

To send a message/or doing something when a new connection is created: send from one user to another/others
--->we use io.on and inside "emit"
io.on('connection', (socket) => { emit ... }

To send a message to every connection except a particular we use broadcast.emit()
socket.broadcast.emit('message', 'A new user has joined!');

Geolocation:
------------
We are going to use MDN (Mozilla Developer Network) Geolocation API to share location between users.

Server: index.js
------
User: chat.js
-----

To avoid bad words on our chat we use bad-words package: npm i bad-words
-------------------------------------------------------

Heroku:
------
Search ber chat app in herokuapp.com page