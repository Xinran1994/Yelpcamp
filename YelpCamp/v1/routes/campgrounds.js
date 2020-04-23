var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");

//CREATE route -- add new campground to database
router.post("/campgrounds", function(req, res){
	//get data from form and add to the campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = ({name:name, image:image, description:desc});
	// create a new newcampground and save to DB
	Campground.create(newCampground, function(err, newCreated){
		if(err){
			console.log(err);
		}else{
			//redirect back to campgrounds page
			res.redirect("/campgrounds");
		}
	})
})

//NEW route- show form to create new campground
router.get("/campgrounds/new",function(req, res){
	res.render("campgrounds/new");
})
//INDEX route
router.get("/campgrounds", function(req, res){
	//get all campgrounds from DB
	Campground.find({},function(err, allCampgrounds){
		if(err){
			console.log(err);
		}else{
			res.render("campgrounds/index", {campgrounds:allCampgrounds, currentUser: req.user});
		}
	})
	// res.render("campgrounds", {campgrounds:campgrounds});
})
//SHOW route - show the info about 
router.get("/campgrounds/:id", function(req, res){
	//find the campground with that id
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCamp){
		if(err){
			console.log(err);
		}else{
			console.log(foundCamp);
			res.render("campgrounds/show", {campground:foundCamp});
		}
	})
})

module.exports = router;