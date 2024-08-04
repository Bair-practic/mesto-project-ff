import { openModal } from "./modal";

const cardTemplate = document.querySelector('#card-template').content;
const imagePopup = document.querySelector('.popup_type_image');


export function createCard(cardData, deleteHandler, likeHandler){ 
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteBtn = cardElement.querySelector('.card__delete-button');
    const cardImg = cardElement.querySelector('.card__image');
    const likeBtn = cardElement.querySelector('.card__like-button');
    cardElement.querySelector('.card__title').textContent = cardData.name;
    cardImg.src = cardData.link;
    cardImg.alt = cardData.name;
    deleteBtn.addEventListener('click', function(event) {
        deleteHandler(event);
    });
    cardImg.addEventListener('click', function(evt){
        const imagePopupImg = imagePopup.querySelector('img');
        const imagePopupCaption = imagePopup.querySelector('p');
        imagePopupImg.setAttribute('src', cardData.link);
        imagePopupCaption.textContent = cardData.name;
        openModal(imagePopup);
        
    });

    likeBtn.addEventListener('click', function(evt){
        likeHandler(evt);
    });

    return cardElement;
}

export function deleteCard(event) {
    const listItem = event.target.closest('.card');
    listItem.remove()
}

export function likeCard(evt){
    evt.target.classList.toggle('card__like-button_is-active');
}