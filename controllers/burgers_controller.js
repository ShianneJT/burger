var express = require('express');

var router = express.Router();

var burger = require('../models/burger');

router.get('/', function (req, res){
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data,
        };
        res.render('index', hbsObject);
    });
});

router.post('/api/burger', function(req, res) {
    burger.insertOne(['burger_name'], [req.body.burger_name], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burger/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    burger.updateOne({devoured: true}, condition, function(data) {
        res.redirect('/');
    });
});

module.exports = router;
