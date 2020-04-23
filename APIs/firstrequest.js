var request1 = require('request');

request1('http://www.google.com', function(error, response , body){
	if(error){
		console.log('somthing went wrong!');
		console.log(error);
	}else{
		if(response.statusCode == 200){
			console.log(body);
		}
	}
});