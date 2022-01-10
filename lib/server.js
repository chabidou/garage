'use strict';

const express = require('express');

const app = express();
const morgan = require ('morgan');
const expressSwagger = require ('express-swagger-generator')(app);
const { swaggerDefinition } = require('./middleware/swagger');
const api = require('./api');

expressSwagger(swaggerDefinition);

app.use(morgan('combined'));
app.use(express.json());

app.get('/', (req, res) => { return res.send('coucou') });
app.use(api);


module.exports = app;
