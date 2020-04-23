var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("<h1>Welcome to the homepadge</h1>");
});

app.listen(3000, process.env.IP, function(){
	console.log("server is listening");
});