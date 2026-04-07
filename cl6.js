let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		let num = Math.floor(Math.random() * 6); // число от 0 до 5
		
		console.log('Сгенерировано число:', num);

		if (num !== 0) {
			resolve(1 / num);
		} else {
			reject('Ошибка: деление на ноль');
		}
	}, 3000);
});

promise.then(function(result) {
	console.log('Результат:', result);
}, function(error) {
	console.log(error);
});