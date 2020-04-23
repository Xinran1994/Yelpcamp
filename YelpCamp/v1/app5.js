var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	passport = require("passport"),
	LocalStrategy = require("passport-local"),
	Campground = require("./models/campground"),
	Comment = require("./models/comment"),
	User = require("./models/user"),
	seedDB = require("./seeds")

var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var indexRoutes = require("./routes/index");



//passport configuration
app.use(require("express-session")({
	secret: "Once again Cloud wins!",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next){
	res.locals.currentUser = req. user;
	next();
})

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true,useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();

app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use(commentRoutes);

app.listen(3000, process.env.IP,function(){
	console.log("server is started");
		
})