var express = require('express');
var router = express.Router();
var fs = require('fs');
//var spider = require('../SpiderPart/Spider')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '星尘盒子for300英雄  Powered by Express' });
});

router.get('/300Hero/API/equipment', function(req, res) {
    var equipment=JSON.parse(fs.readFileSync('./equipment.json'));
    res.json(equipment);
});

router.get('/300Hero/API/hero', function(req, res) {
    var hero=JSON.parse(fs.readFileSync('./hero.json'));
    res.json(hero);
});

module.exports = router;
