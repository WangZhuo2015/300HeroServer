var express = require('express');
var router = express.Router();
var fs = require('fs');
var spider = require('../SpiderPart/Spider')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/equipment', function(req, res) {
    var equipment=JSON.parse(fs.readFileSync('../equipment.json'));
    res.json(equipment);
});

router.get('/equipment', function(req, res) {
    var hero=JSON.parse(fs.readFileSync('../hero.json'));
    res.json(hero);
    spider.catchEquipmentData(function (res) {
        //TODO:
    })
});

module.exports = router;
