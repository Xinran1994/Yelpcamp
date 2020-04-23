var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there, welcom to the server");
});
app.get("/speak/:animal", function(req, res){
	
	var animal = req.params.animal.toLowerCase();
	var sound = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof",
		cat: "I hate you human",
		goldfish: "..."
	};
	
	var sound = sound[animal];	
	res.send("the "+animal+" speak '" + sound+"'");
});

app.get("/repeat/:message/:times", function(req, res){
	var message = req.params.message;
	var times  = req.params.times;
	var mm = "";
	for(var i = 0; i < times;i++){
		mm += message +" ";
	}
	res.send(mm);
})

app.get("*", function(req, res){
	res.send("Sorry");
})
app.listen(3000, process.env.IP, function(){
	console.log("Now serving your web");
})