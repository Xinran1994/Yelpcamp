var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_1", {useNewUrlParser: true, useUnifiedTopology: true});

//POST  -title, content
var postSchema = mongoose.Schema({
	title: String,
	content: String
})
var Post = mongoose.model("Post", postSchema);

//USER  -email, anme
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
})
var User = mongoose.model("User", userSchema);


// var newUser = new User({
// 	email: "svaef@brown.edu",
// 	name: "dvav Bvfws"
// })

// newUser.posts.push({
// 	title: "How to bew thknf ",
// 	content: "dmv hae to mkfv"
// })

// newUser.save(function(err, user){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(user);
// 	}
// })

// var newPost = new Post({
// 	title: "Reflection on Apples",
// 	content: "they are delecious"
// })
// newPost.save(function(err, post){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(post);
// 	}
// })

User.findOne({name: "dvav Bvfws"}, function(err, user){
	if(err){
		//console.log(err);
	}else{
		user.posts.push({
			title: "Holypotter",
			content: "great boy!"
		})
		user.save(function(err, user){
			if(err){
				console.log(err);
			}else{
				console.log(user);
			}
		})
	}
})