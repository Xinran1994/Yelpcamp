var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cat_app', {useNewUrlParser: true,useUnifiedTopology: true})

var catSchema = new mongoose.Schema({
	name :String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the database
 
// var jorny = new Cat({
// 	name: "Jorny",
// 	age: "11",
// 	temperament: "Grouchy"
// })
// jorny.save(function(err, cat){
// 		if(err){
// 			console.log("something went wrong")
// 		}else{
// 			console.log("we just saved a cat to the db: ")
// 			console.log(cat);
// 		}
// })

Cat.create({
	name:"Snow White",
	age: "15",
	temperament:"Bland"
}, function(err, cats){
	if(err){
	console.log(err);
	}
	else{
		console.log(cats);
	}
});
//retrieve all cats from. the DB and console.log each one
Cat.find({}, function(err, cats){
	if(err){
		console.log("err");
		console.log(err);
	}else{
		console.log("All the cats...");
		console.log(cats);
	}
	
})
