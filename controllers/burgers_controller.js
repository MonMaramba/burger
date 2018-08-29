var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        //console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    console.log(req.body.burger_name);
    burger.insertOne(req.body.burger_name, function(result){
        res.json({ id: result.insertId});
    })
    
});

router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(){
       res.redirect("/");
    })
})

module.exports = router;