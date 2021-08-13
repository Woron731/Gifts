'use strict'

let offerItem = document.querySelectorAll('.offer__item');

let offerPrice = document.querySelectorAll('.offer__item-price');

let offerAuthor = document.querySelectorAll('.offer__item-author');

let offerButton = document.querySelectorAll('.offer__item-button');

offerItem.forEach((item, index) => {

	item.addEventListener('mouseover', function () {
		offerPrice[index].classList.add('hidden');
		offerAuthor[index].classList.add('hidden');
		offerButton[index].classList.remove('hidden');
	})

	item.addEventListener('mouseout', function () {
		offerPrice[index].classList.remove('hidden');
		offerAuthor[index].classList.remove('hidden');
		offerButton[index].classList.add('hidden');
	})
})