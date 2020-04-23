var express = require("express"),
    app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	methodOverride = require("method-override"),
	expressSanitizer = require("express-sanitizer")

mongoose.connect("mongodb://localhost:27017/restful_app", {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

var blogSchema = new mongoose.Schema({
	title: String,
	image:String,
	body: String,
	created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);
// Blog.create({
// 	title: "Cloud",
// 	image: "https://i.insider.com/5cd5b6bc021b4c050a609efd?width=1100&format=jpeg&auto=webp",
// 	body: "This is Aries"
// });

//RESTful ROUTES
app.get("/", function(req, res){
	res.redirect("/blogs");
});

app.get("/blogs", function(req, res){
	Blog.find({}, function(err, blogs){
		if(err){
			console.log(err);
		}else{
			res.render("index", {blogs: blogs});
		}	
	});
});
app.get("/blogs/new", function(req, res){
	res.render("new");
})
//SHOW ROUTE
app.get("/blogs/:id", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			res.redirect("/blogs");
		}else{
			res.render("show", {blog:foundBlog});
		}
	})
})
//EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			res.redirect("/blogs");
		}else{
			res.render("edit", {blog: foundBlog});		
		}
	});
})
//UPDATE ROUTE
app.put("/blogs/:id", function(req, res){
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
		if(err){
			res.redirect("/blogs");
		}else{
			res.redirect("/blogs/" + req.params.id);
		}
	})
})
//CRATE ROUTE
app.post("/blogs", function(req, res){
	//create blogs
	console.log(req.body);
	req.body.blog.body = req.sanitize(req.body.blog.body);
	console.log("__________");
	console.log(req.body);
	Blog.create(req.body.blog, function(err, newblog){
		if(err){
			res.render("new");	
		}else{
			res.redirect("/blogs");
		}
	})
})
//DELETE ROUTE
app.delete("/blogs/:id", function(req, res){
	Blog.findByIdAndRemove(req.params.id, function(err, deleteBlog){
		if(err){
			res.redirect("/blogs");
		}else{
			res.redirect("/blogs");
		}
	})
})
app.listen(3000, process.env.IP,function(){
	console.log("server is started");
})