'use strict';

const inputEur = document.querySelector('#eur'),
	  inputUsd = document.querySelector('#usd'),
	  inputEur2 = document.querySelector('#eur2'),
	  inputRub = document.querySelector('#rub');

	  inputEur.addEventListener('input', () => {
	  	const request = new XMLHttpRequest();

	  	request.open('GET', 'js/current.json');
	  	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	  	request.send();

	  	request.addEventListener('load', () => {
	  		if (request.status === 200) {
	  			const data = JSON.parse(request.response);
	  			inputUsd.value = (+inputEur.value * data.current.usd).toFixed(2);
	  			//toFixed(2) - округление
	  		} else {
	  			inputUsd.value = "Что-то пошло не так. :("
	  		}
	  	});
	  	});

	  	inputEur2.addEventListener('input', () => {
	  	const request = new XMLHttpRequest();

	  	request.open('GET', 'js/current.json');
	  	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	  	request.send();

	  	request.addEventListener('load', () => {
	  		if (request.status === 200) {
	  			const data = JSON.parse(request.response);
	  			inputRub.value = (+inputEur2.value * data.current.rub).toFixed(2);
	  			//toFixed(2) - округление
	  		} else {
	  			inputUsd.value = "Что-то пошло не так. :("
	  		}
	  	});
		});