var express = require("express");
var router = express.Router();
var db = require("../models/fifa2018DB");


router.get("/api/", function(req, res) {
    db.findAll({}).then(function(profiles) {
      res.json(profiles);
    });
});

router.get("/profileAPI", function(req, res){
  db.findAll({}).then(function(data) {
    res.json(data);
  })
})

module.exports = router; 