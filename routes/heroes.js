var express = require('express');
var router = express.Router();
var fs = require('fs');

let path = require('path');
let reqPath = path.join(__dirname, '../')
const heroes = JSON.parse(fs.readFileSync(reqPath + '/data/heroes.json', 'utf-8'));

/* GET heroes page. */
router.get('/', function(req, res, next) {
  res.send(heroes);
});

module.exports = router;
