var mongoose = require("mongoose");

//USER  -email, anme
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post"
		}
	]
})
module.exports = mongoose.model("User", userSchema);
