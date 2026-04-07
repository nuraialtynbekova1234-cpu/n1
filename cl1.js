function make(num, callback) {
	setTimeout(function() {
		let arr = [1, 2, 3, 4, 5];
		
		let err;
		let result = arr[num];
		
		if (result === undefined) {
			err = 'elem not exists';
		} else {
			err = null;
		}
		
		callback(result, err);
	}, 3000);
}

make(10, function(res, err) {
	if (!err) {
		console.log(res);
	} else {
		console.log(err);
	}
});