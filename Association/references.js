var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2", {useNewUrlParser: true, useUnifiedTopology: true});


var Post = require("./models/post");
var User = require("./models/user");
// //POST  -title, content
// var postSchema = mongoose.Schema({
// 	title: String,
// 	content: String
// })
// var Post = mongoose.model("Post", postSchema);

// //USER  -email, anme
// var userSchema = new mongoose.Schema({
// 	email: String,
// 	name: String,
// 	posts: [
// 		{
// 			type: mongoose.Schema.Types.ObjectId,
// 			ref: "Post"
// 		}
// 	]
// })
// var User = mongoose.model("User", userSchema);

Post.create({
	title: "How to cook a bingerfffff",
	content: "buy five!"
}, function(err, post){
	User.findOne({
		email: "xuxinran@gmail.com",function(err, foundUser){
			if(err){
				console.log(err);
			}else{
				foundUser.posts.push(post);
				foundUser.save(function(err, data){
					if(err){
						console.log(err);
					}else{
						console.log(data);
					}
				})
			}
		}
	})
})
// User.create({
// 	email: "xuxinran@gmail.com",
// 	name: "xinran"
// });
// User.findOne({
// 	email:"xuxinran@gmail.com"
// }).populate("posts").exec(function(err, user){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(user);
// 	}
// });
