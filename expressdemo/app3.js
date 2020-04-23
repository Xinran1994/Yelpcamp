var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.render("home.ejs");
});

//fall in love with rusty
app.get("/fallinlovewith/:thing", function(req, res){
	var thingVar = req.params.thing;
	res.render("love.ejs", {thingVar: "Cloud"});
})

app.listen(2000, process.env.IP, function(){
	console.log("server is listening");
});