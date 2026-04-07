function make(num1, num2, callback) {
	setTimeout(function() {
		let arr = [1, 2, 3, 4, 5];
		let sum = arr[num1] + arr[num2];
		
		callback(sum);
	}, 3000);
}

make(1, 3, function(res) {
	console.log(res); // 2 + 4 = 6
});