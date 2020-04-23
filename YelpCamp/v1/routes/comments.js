var express = require("express");
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var router = express.Router();
// ============
// COMMENTS ROUTES
//==============

router.get("/campgrounds/:id/comments/new", function(req, res){
	//find campground by id
	Campground.findById(req.params.id, function(err, campground){
		if(err){
			console.log(err);
		}else{
			res.render("comments/new", {campground: campground});		
		}
	})
})

router.post("/campgrounds/:id/comments", isLoggedIn, function(req, res){
	//lookup campground using id
	Campground.findById(req.params.id, function(err, campground){
		if(err){
			console.log(err);
			res.redirect("/campgrounds");
		}else{
			//createn new comment 
			Comment.create(req.body.comment, function(err, comment){
				if(err){
					console.log(err);
				}else{
					campground.comments.push(comment);
					campground.save();
					res.redirect("/campgrounds/" + campground._id);
				}
			})
			
		}
	})
	
})

function isLoggedIn(req, res, next){
	if(req. isAuthenticated()){
	   return next();
	   }
	res.redirect("/login");	
}
module.exports =  router;