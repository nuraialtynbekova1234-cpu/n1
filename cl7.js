function make(index1, index2, callback) {
	setTimeout(function() {
		let arr = [1, 2, 3, 4, 5];
		let result = arr[index1] + arr[index2];

		callback(result);
	}, 3000);
}

make(0, 2, function(res) {
	console.log(res); // 1 + 3 = 4
});