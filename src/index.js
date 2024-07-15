import './pages/index.css'
import { initialCards } from './components/cards.js'
import { createCard, deleteCard } from './components/card.js'
import { openModal, closeModal  } from './components/modal.js';


const cardList = document.querySelector('.places__list');

const addCardButton = document.querySelector('.profile__add-button');
const addCardpopup = document.querySelector('.popup_type_new-card');
const editProfilePopup = document.querySelector('.popup_type_edit');
const editProfileButton = document.querySelector('.profile__edit-button');

initialCards.forEach(cardData => {
    const card = createCard(cardData, deleteCard);
    cardList.append(card);
    console.log(card);
});


addCardButton.addEventListener('click',  function(evt){
    openModal(addCardpopup);
});

editProfileButton.addEventListener('click',  function(evt){
    openModal(editProfilePopup);
});

