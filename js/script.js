'use strict'

let offerItem1 = document.querySelector('.offer__item1');
let offerItem2 = document.querySelector('.offer__item2');
let offerItem3 = document.querySelector('.offer__item3');

let offerPrice1 = document.querySelector('.offer__item-price1');
let offerPrice2 = document.querySelector('.offer__item-price2');
let offerPrice3 = document.querySelector('.offer__item-price3');

let offerAuthor1 = document.querySelector('.offer__item-author1');
let offerAuthor2 = document.querySelector('.offer__item-author2');
let offerAuthor3 = document.querySelector('.offer__item-author3');

let offerButton1 = document.querySelector('.offer__item-button1');
let offerButton2 = document.querySelector('.offer__item-button2');
let offerButton3 = document.querySelector('.offer__item-button3');

offerItem1.addEventListener('mouseover', () => {
	offerButton1.classList.remove('hidden');
	offerPrice1.classList.add('hidden');
	offerAuthor1.classList.add('hidden');
})

offerItem1.addEventListener('mouseout', () => {
	offerButton1.classList.add('hidden');
	offerPrice1.classList.remove('hidden');
	offerAuthor1.classList.remove('hidden');
})

offerItem2.addEventListener('mouseover', () => {
	offerButton2.classList.remove('hidden');
	offerPrice2.classList.add('hidden');
	offerAuthor2.classList.add('hidden');
})

offerItem2.addEventListener('mouseout', () => {
	offerButton2.classList.add('hidden');
	offerPrice2.classList.remove('hidden');
	offerAuthor2.classList.remove('hidden');
})

offerItem3.addEventListener('mouseover', () => {
	offerButton3.classList.remove('hidden');
	offerPrice3.classList.add('hidden');
	offerAuthor3.classList.add('hidden');
})

offerItem3.addEventListener('mouseout', () => {
	offerButton3.classList.add('hidden');
	offerPrice3.classList.remove('hidden');
	offerAuthor3.classList.remove('hidden');
})

