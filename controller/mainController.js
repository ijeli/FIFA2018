var express = require('express');
var router = express.Router();
var db = require("../models/fifa2018DB.js");

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/contentdiv', function(req, res) {
    db.findOne({}).then(function(results) {
        console.log(results);
    });
});

router.get('/teampage', function(req, res) {
    res.render('teampage')
});

router.post("/createprofile", function(req, res) { 
    db.create({
        userName: req.body.userName,
        teamName: req.body.teamName
    }).then(function(dbd){
        res.json(dbd)
        console.log(dbd)
    }).catch(function(err){
        console.log(err);
        res.json(err);
    });
});

module.exports = router;