var express = require('express');
var router = express.Router();

var { getPoles, addPole } = require('../controllers/poles');

/* GET  a pole by plate number. */

/* GET all poles. */
router.get('/', getPoles);

/* CREAT a pole entry. */
router.post('/', addPole);

module.exports = router;
