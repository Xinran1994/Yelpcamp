var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "cloud",
		image: "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/04/Final-Fantasy-7-Zack-Cloud.jpg",
		description: "I liked the old look better. Aerith was always quick to joke around and act mischievous, so the catlike smile suited her. That and her strong jawline gave her a very unique look. Her new design is still pretty, but her face looks more generic. Square Enix hasn’t commented on Aerith’s new look, so it’s anyone’s guess on why the changes were made. Video game design is an iterative process, and at some point, someone might have looked at the original Final Fantasy 7 art and just decided that her Remake design was too different from the source."
	},
	{
		name: "Zacks",
		image: "https://i.pinimg.com/600x315/b6/96/f7/b696f71567b679340991648b708ee6b8.jpg",
		description: "I liked the old look better. Aerith was always quick to joke around and act mischievous, so the catlike smile suited her. That and her strong jawline gave her a very unique look. Her new design is still pretty, but her face looks more generic. Square Enix hasn’t commented on Aerith’s new look, so it’s anyone’s guess on why the changes were made. Video game design is an iterative process, and at some point, someone might have looked at the original Final Fantasy 7 art and just decided that her Remake design was too different from the source."
	}, 
	{
		name: "Arieth",
		image: "https://happygamer.com/wp-content/uploads/2019/11/8f25a4cd33d1b02dcb0f81d1660329f1-1.jpg",
		description: "I liked the old look better. Aerith was always quick to joke around and act mischievous, so the catlike smile suited her. That and her strong jawline gave her a very unique look. Her new design is still pretty, but her face looks more generic. Square Enix hasn’t commented on Aerith’s new look, so it’s anyone’s guess on why the changes were made. Video game design is an iterative process, and at some point, someone might have looked at the original Final Fantasy 7 art and just decided that her Remake design was too different from the source."
	}
]

function seedDB(){
	//remove all campgrounds
	Campground.deleteMany({}, function(err){
		if(err){
			console.log(err);
		}else{
			console.log("remove campgrounds!");
			Comment.deleteMany({}, function(err){
				if(err){
					console.log(err);
				}
				console.log("remove comments!");
				// add a few campgrounds
				data.forEach(function(seed){
					Campground.create(seed, function(err, Campground){
						if(err){
							console.log(err);
						}else{
							console.log("add a campground");
							//add a comment 
							Comment.create({
								text: "This is Cloud's friend",
								author: "Barret"
							}, function(err, comment){
								if(err){
									console.log(err);
								}else{
									Campground.comments.push(comment);
									Campground.save();
									console.log("created new comment!");
								}
							})
						}
					})
				})
			})
		}
	})
}

module.exports = seedDB;