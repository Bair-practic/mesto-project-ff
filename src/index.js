import './pages/index.css'
import { initialCards } from './components/cards.js'
import { createCard, deleteCard, likeCard } from './components/card.js'
import { openModal, closeModal  } from './components/modal.js';

const profileSection = document.querySelector('.profile');
const cardList = document.querySelector('.places__list');

const addCardPopup = document.querySelector('.popup_type_new-card');
const editProfilePopup = document.querySelector('.popup_type_edit');

const addCardButton = profileSection.querySelector('.profile__add-button');
const editProfileButton = profileSection.querySelector('.profile__edit-button');


//инициализация карточек
initialCards.forEach(cardData => {
    const card = createCard(cardData, deleteCard, likeCard);
    cardList.append(card);
});

//добавление карточки попап
addCardButton.addEventListener('click',  function(evt){
    openModal(addCardPopup);
    const formElement = document.forms['new-place'];

    const placeInput = formElement.elements['place-name'];
    const linkInput = formElement.elements['link'];

    formElement.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(evt){
        evt.preventDefault();
        console.log(linkInput.value);
        const cardData = {
            name: placeInput.value,
            link: linkInput.value 
        };
        const newCard = createCard(cardData, deleteCard, likeCard);
        cardList.prepend(newCard);
        closeModal(addCardPopup);
    }

});

//редакт профиля попап
editProfileButton.addEventListener('click',  function(evt){
    openModal(editProfilePopup);

    const formElement = document.forms['edit-profile'];
    const nameInput = formElement.elements['name'];
    const jobInput = formElement.elements['description'];

    const profileName = profileSection.querySelector('.profile__title');
    const profileJob = profileSection.querySelector('.profile__description');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;

    formElement.addEventListener('submit', handleFormSubmit); 
    
    function handleFormSubmit(evt) {
        evt.preventDefault();
        
        profileName.textContent = nameInput.value;
        profileJob.textContent = jobInput.value;
        closeModal(editProfilePopup);        
    }
});

