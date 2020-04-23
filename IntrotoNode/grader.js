function average(scores){
	var total = 0;
	scores.forEach(function(score){
		total+= score;
	})
	var avg = total/scores.length;
	return Math.round(avg);
}

var scores = [90,98,88,79,78,88,66];
console.log(average(scores));