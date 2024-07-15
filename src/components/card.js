import { openModal } from "./modal";

const cardTemplate = document.querySelector('#card-template').content;
const imagePopup = document.querySelector('.popup_type_image');


export function createCard(cardData, deleteHandler){ 
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteBtn = cardElement.querySelector('.card__delete-button');
    const cardImg = cardElement.querySelector('.card__image');
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

    return cardElement;
}

export function deleteCard(event) {
    const listItem = event.target.closest('.card');
    listItem.remove()
}
