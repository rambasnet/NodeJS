# ExpressJS Demo Projects

Express-based Demo Websites and Applications

## Homepage V1

- convert a static site into Express app
- doesn't use pug template framework
- demonstrates how a static website can be served as Express app

### Instruction to run Homepage V1

```bash
cd homepage-v1
npm install
npm audit fix
npm start
```

- point browser to localhost:3000
- ctrl+c - to kill the node server

## Homepage V2

- convert a static site into Express app
- uses pug template framework to minimize html contents
- beginner's guide to pug - [https://www.sitepoint.com/a-beginners-guide-to-pug/](https://www.sitepoint.com/a-beginners-guide-to-pug/)
- serve pug driven static website using node

### Instructions to run Homepage V2

- on a terminal type the following commands

```bash
cd homepage-v2
npm install
npm audit fix
npm start
```

- point browser to localhost:3000
- ctrl+c to kill the node server

## Gradebook V1

- a simple gradebook application
- keeps track of students grades using MongoDB
- needs MongoDB community server: [https://www.mongodb.com/download-center/community](https://www.mongodb.com/download-center/community)
- demonstrates html forms and data validations
- uses mongoose - [https://mongoosejs.com/](https://mongoosejs.com/) to create Model and query MongoDB
- demonstrates server sessions and authentications
- demonstrate a simple AJAX call using jQuery (see profile page)
- automatically creates gradebook database name in the path provided while running mongod
- register for an account before you can login
- use GUI client such as Robo 3T [https://robomongo.org/](https://robomongo.org/) or MongoDB Compass to mange MongoDB

### Instructions to run Gradebook V1

- first run mongodb local server from a terminal using default port 27017

```bash
mkdir data
mongod --dbpath=data
```

- then run the gradebook v1 app from another terminal

```bash
cd gradebook-v1
npm install
npm audit fix
npm start
```

- point browser to localhost:3000
- ctrl+c to kill the node server

## Gradebook V2

- everything V1 has plus more
- password is hashed
- UI is revamped with bootstrap and theme
- uses express-validator [https://express-validator.github.io/](https://express-validator.github.io/) to validate form data
- automatically creates gradebook database name in the path provided while running mongod sever
- register for an account before you can login
- site has public contents and private/authenticated pages with dashboard

### Instructions to run Gradebook V2

- first run mongodb local server from a terminal using default port 27017

```bash
mkdir data
mongod --dbpath=data
```

- then run the gradebook v2 app from another terminal

```bash
cd gradebook-v2
npm install
npm audit fix
npm start
```

- point browser to localhost:3000
- ctrl+c to kill the node server
