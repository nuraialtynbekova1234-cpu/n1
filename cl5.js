loadImage('img1.png', function(image1, err1) {
	if (!err1) {
		document.body.append(image1);

		loadImage('img2.png', function(image2, err2) {
			if (!err2) {
				document.body.append(image2);

				loadImage('img3.png', function(image3, err3) {
					if (!err3) {
						document.body.append(image3);

						loadImage('img4.png', function(image4, err4) {
							if (!err4) {
								document.body.append(image4);

								loadImage('img5.png', function(image5, err5) {
									if (!err5) {
										document.body.append(image5);

										loadImage('img6.png', function(image6, err6) {
											if (!err6) {
												document.body.append(image6);

												loadImage('img7.png', function(image7, err7) {
													if (!err7) {
														document.body.append(image7);

														loadImage('img8.png', function(image8, err8) {
															if (!err8) {
																document.body.append(image8);

																loadImage('img9.png', function(image9, err9) {
																	if (!err9) {
																		document.body.append(image9);

																		loadImage('img10.png', function(image10, err10) {
																			if (!err10) {
																				document.body.append(image10);
																				console.log('Все 10 картинок загружены');
																			} else {
																				console.log('Ошибка загрузки img10.png: ' + err10);
																			}
																		});

																	} else {
																		console.log('Ошибка загрузки img9.png: ' + err9);
																	}
																});

															} else {
																console.log('Ошибка загрузки img8.png: ' + err8);
															}
														});

													} else {
														console.log('Ошибка загрузки img7.png: ' + err7);
													}
												});

											} else {
												console.log('Ошибка загрузки img6.png: ' + err6);
											}
										});

									} else {
										console.log('Ошибка загрузки img5.png: ' + err5);
									}
								});

							} else {
								console.log('Ошибка загрузки img4.png: ' + err4);
							}
						});

					} else {
						console.log('Ошибка загрузки img3.png: ' + err3);
					}
				});

			} else {
				console.log('Ошибка загрузки img2.png: ' + err2);
			}
		});

	} else {
		console.log('Ошибка загрузки img1.png: ' + err1);
	}
});