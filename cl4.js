function loadImage(src, callback) {
	let image = document.createElement('img');

	image.onload = function() {
		callback(image, null);
	};

	image.onerror = function() {
		callback(null, 'не удалось загрузить изображение');
	};

	image.src = src;
}

// Пример использования:
loadImage('image.png', function(image, err) {
	if (!err) {
		document.body.append(image);
	} else {
		console.log('Произошла ошибка: ' + err);
	}
});