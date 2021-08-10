'use strict'

let offerItem = document.querySelectorAll('.offer__item');

let offerPrice = document.querySelectorAll('.offer__item-price');

let arrayofferPrice = Array.from(offerPrice);

let offerAuthor = document.querySelectorAll('.offer__item-author');

let arrayofferAuthor = Array.from(offerAuthor);

let offerButton = document.querySelectorAll('.offer__item-button');

let arrayofferButton = Array.from(offerButton);

offerItem.forEach((item, index) => {

	item.addEventListener('mouseover', function () {
		arrayofferPrice[index].classList.add('hidden');
		arrayofferAuthor[index].classList.add('hidden');
		arrayofferButton[index].classList.remove('hidden');
	})

	item.addEventListener('mouseout', function () {
		arrayofferPrice[index].classList.remove('hidden');
		arrayofferAuthor[index].classList.remove('hidden');
		arrayofferButton[index].classList.add('hidden');
	})
})