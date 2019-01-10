const express = require('express');
const bodyParser = require('body-parser');
const config = require('getconfig');
const { errors } = require('celebrate');

const app = express();
const router = express.Router();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// initializes the database
const db = require('./db');
db.connect();

const models = require('./models');
const controllers = require('./api/controllers')(router, models)

controllers.register();
app.use('/', router);

// using for response celebrate (joi validation) errors
app.use(errors());

const port = process.env.PORT || config.server.port;
const host = process.env.HOST || config.server.host;
app.listen(port, () => console.log(`Server listening on ${host}:${port}`));
