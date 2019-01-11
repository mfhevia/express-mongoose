const express = require('express');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');

const app = express();
const router = express.Router();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const models = require('./src/models');
const controllers = require('./src/api/controllers')(router, models)

controllers.register();
app.use('/', router);

// using for response celebrate (joi validation) errors
app.use(errors());

module.exports = app;
