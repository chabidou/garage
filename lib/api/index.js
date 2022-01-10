const express = require('express');

const { Router } = express;
const router = new Router();

const garage = require('./garage');

router.use('/garages', garage);

module.exports = router;
