'use strict'

const offerItem = document.querySelectorAll('.offer__item');

const offerPrice = document.querySelectorAll('.offer__item-price');

const offerAuthor = document.querySelectorAll('.offer__item-author');

const offerButton = document.querySelectorAll('.offer__item-button');

const btnLike = document.querySelectorAll('.offer__button-like');

const likeCounter = document.getElementById('header-like');

wrapperLike();


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

function wrapperLike() {
	let count = 0;

	for (let i = 0; btnLike.length > i; i++) {
		btnLike[i].addEventListener('click', like);
	}

	function like() {
		this.classList.toggle('active-like');
		if (this.classList.contains('active-like') == true) {
			count++;
		} else {
			count--;
		}
		likeCounter.textContent = count;
	}
}


