import './pages/index.css'
import { initialCards } from './components/cards.js'
import { createCard, deleteCard, likeCard } from './components/card.js'
import { openModal, closeModal  } from './components/modal.js';

const profileSection = document.querySelector('.profile');
const cardList = document.querySelector('.places__list');

const addCardPopup = document.querySelector('.popup_type_new-card');
const editProfilePopup = document.querySelector('.popup_type_edit');
const imagePopup = document.querySelector('.popup_type_image');


const addCardButton = profileSection.querySelector('.profile__add-button');
const editProfileButton = profileSection.querySelector('.profile__edit-button');

const addCardFormElement = document.forms['new-place'];

const placeInput = addCardFormElement.elements['place-name'];
const linkInput = addCardFormElement.elements['link'];

addCardFormElement.addEventListener('submit', handleAddCardFormSubmit);

const editFormElement = document.forms['edit-profile'];
const nameInput = editFormElement.elements['name'];
const jobInput = editFormElement.elements['description'];
const profileName = profileSection.querySelector('.profile__title');
const profileJob = profileSection.querySelector('.profile__description');


function handleAddCardFormSubmit(evt){
    evt.preventDefault();
    const cardData = {
        name: placeInput.value,
        link: linkInput.value
    };
    const newCard = createCard(cardData, openCardHandler, deleteCard, likeCard);
    cardList.prepend(newCard);
    closeModal(addCardPopup);
};

editFormElement.addEventListener('submit', handleEditFormSubmit); 
    
function handleEditFormSubmit(evt) {
    evt.preventDefault();
    
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closeModal(editProfilePopup);        
}

const imagePopupImg = imagePopup.querySelector('img');
const imagePopupCaption = imagePopup.querySelector('p');

function openCardHandler(evt){
    imagePopupImg.setAttribute('src', evt.target.getAttribute('src'));
    imagePopupImg.setAttribute('alt', evt.target.getAttribute('alt'));
    imagePopupCaption.textContent = evt.target.getAttribute('alt');
    openModal(imagePopup);
}

//инициализация карточек
initialCards.forEach(cardData => {
    const card = createCard(cardData, openCardHandler, deleteCard, likeCard);
    cardList.append(card);
});

//добавление карточки попап
addCardButton.addEventListener('click',  function(evt){
    openModal(addCardPopup);
});

//редакт профиля попап
editProfileButton.addEventListener('click',  function(evt){
    openModal(editProfilePopup);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;  
});

